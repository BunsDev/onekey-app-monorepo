import { nanoid } from 'nanoid';

import simpleDb from '@onekeyhq/engine/src/dbs/simple/simpleDb';
import {
  atom,
  createJotaiContext,
} from '@onekeyhq/kit/src/store/jotai/createJotaiContext';

import { webviewRefs } from '../explorerUtils';

export interface WebTab {
  id: string;
  url: string;
  title?: string;
  favicon?: string;
  thumbnail?: string;
  isCurrent: boolean;
  isBookmarked?: boolean;
  canGoBack?: boolean;
  canGoForward?: boolean;
  loading?: boolean;
  refReady?: boolean;
  timestamp?: number;
}

export const homeTab: WebTab = {
  id: 'home',
  // current url in webview
  url: 'about:blank',
  title: 'OneKey',
  isCurrent: true,
  canGoBack: false,
  loading: false,
};

export const homeResettingFlags: Record<string, number> = {};
// eslint-disable-next-line @typescript-eslint/naming-convention
let _currentTabId = '';

export const getCurrentTabId = () =>
  // TODO: Fix this
  // if (!_currentTabId) {
  //   _currentTabId = webTabsObs.peek().find((t) => t.isCurrent)?.id || '';
  // }
  _currentTabId;

export function tabsToMap(tabs: WebTab[]) {
  const map: Record<string, WebTab> = {};
  for (const tab of tabs) {
    map[tab.id] = tab;
  }
  return map;
}

export const atomWebTabs = atom<WebTab[]>([]);
export const atomWebTabsMap = atom<Record<string, WebTab>>({
  [homeTab.id]: homeTab,
});
export const setWebTabsWriteAtom = atom(null, (_, set, newTabs: WebTab[]) => {
  console.log('===>newTabs: ', newTabs);
  set(atomWebTabs, () => newTabs);
  set(atomWebTabsMap, () => tabsToMap(newTabs));
  simpleDb.discoverWebTabs.setRawData({
    tabs: newTabs,
  });
});
export const addWebTabAtomWithWriteOnly = atom(
  null,
  (get, set, payload: Partial<WebTab>) => {
    const tabs = get(atomWebTabs);
    // TODO: Add limit for native

    if (!payload.id || payload.id === homeTab.id) {
      payload.id = nanoid();
    }

    if (payload.isCurrent) {
      for (const tab of tabs) {
        tab.isCurrent = false;
      }
      _currentTabId = payload.id;
    }
    payload.timestamp = Date.now();
    set(setWebTabsWriteAtom, [...tabs, payload as WebTab]);
  },
);
export const addBlankWebTabAtomWithWriteOnly = atom(null, (_, set) => {
  set(addWebTabAtomWithWriteOnly, { ...homeTab });
});
export const setWebTabDataAtomWithWriteOnly = atom(
  null,
  (get, set, payload: Partial<WebTab>) => {
    const tabs = get(atomWebTabs);
    const tabIndex = tabs.findIndex((t) => t.id === payload.id);
    if (tabIndex > -1) {
      const tabToModify = tabs[tabIndex];
      Object.keys(payload).forEach((k) => {
        const key = k as keyof WebTab;
        const value = payload[key];
        if (value !== undefined && value !== tabToModify[key]) {
          if (key === 'title' && !value) {
            return;
          }
          // @ts-expect-error
          tabToModify[key] = value;
          if (key === 'url') {
            tabToModify.timestamp = Date.now();
            if (value === homeTab.url && payload.id) {
              homeResettingFlags[payload.id] = tabToModify.timestamp;
            }
            if (!payload.favicon) {
              try {
                tabToModify.favicon = `${
                  new URL(tabToModify.url ?? '').origin
                }/favicon.ico`;
              } catch {
                // ignore
              }
            }
          }
        }
      });
      tabs[tabIndex] = tabToModify;
      set(setWebTabsWriteAtom, tabs);
    }
  },
);
export const closeWebTabAtomWithWriteOnly = atom(
  null,
  (get, set, tabId: string) => {
    delete webviewRefs[tabId];
    const tabs = get(atomWebTabs);
    const targetIndex = tabs.findIndex((t) => t.id === tabId);
    if (targetIndex !== -1) {
      if (tabs[targetIndex].isCurrent) {
        const prev = tabs[targetIndex - 1];
        if (prev) {
          prev.isCurrent = true;
          _currentTabId = prev.id;
        }
      }
      tabs.splice(targetIndex, 1);
      set(setWebTabsWriteAtom, [...tabs]);
    }
  },
);
export const closeAllWebTabsAtomWithWriteOnly = atom(null, (_, set) => {
  for (const id of Object.getOwnPropertyNames(webviewRefs)) {
    delete webviewRefs[id];
  }
  set(atomWebTabs, [{ ...homeTab }]);
  _currentTabId = homeTab.id;
});
export const setCurrentWebTabAtomWithWriteOnly = atom(
  null,
  (get, set, tabId: string) => {
    const currentTabId = getCurrentTabId();
    if (currentTabId !== tabId) {
      // pauseDappInteraction(currentTabId);
      const tabs = get(atomWebTabs);
      let previousTabUpdated = false;
      let nextTabUpdated = false;

      for (let i = 0; i < tabs.length; i += 1) {
        const tab = tabs[i];
        if (tab.isCurrent) {
          tabs[i] = {
            ...tab,
            isCurrent: false,
          };
          previousTabUpdated = true;
        } else if (tab.id === tabId) {
          tabs[i] = {
            ...tab,
            isCurrent: true,
          };
          nextTabUpdated = true;
        }
        if (previousTabUpdated && nextTabUpdated) {
          break;
        }
      }
      set(setWebTabsWriteAtom, tabs);
      // resumeDappInteraction(tabId);
      _currentTabId = tabId;
    }
  },
);

export const incomingUrlAtom = atom('');

const { withProvider: withProviderWebTabs, useContextAtom: useAtomWebTabs } =
  createJotaiContext();

export { withProviderWebTabs, useAtomWebTabs };
