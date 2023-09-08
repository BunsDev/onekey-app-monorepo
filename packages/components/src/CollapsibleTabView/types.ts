import type { ReactElement, ReactNode } from 'react';

import type {
  OnPageScrollStateChangeEvent,
  TabProps,
} from '@onekeyhq/app/src/views/NestedTabView/types';

import type { StyleProp, ViewStyle } from 'react-native';

export interface CollapsibleContainerProps {
  stickyTabBar?: boolean;
  disableRefresh?: boolean;
  initialTabName?: string;
  headerView?: ReactNode;
  headerHeight: number;
  onRefresh?: () => void;
  onIndexChange?: (index: number) => void;
  onPageScrollStateChange?: (e: OnPageScrollStateChangeEvent) => void;
  containerStyle?: StyleProp<ViewStyle>;
  scrollEnabled?: boolean;
  canOpenDrawer?: boolean;
  children?: ReactElement<TabProps> | ReactElement<TabProps>[];
}
