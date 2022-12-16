import type { ComponentClass, FunctionalComponent, VNode } from 'preact'
import type React from 'preact/compat'

import type { SCREEN_NAMES } from '../navigation/screen-names'

export type TScreenProps = {
  title: string
  name: SCREEN_NAMES
  backScreen?: SCREEN_NAMES
  component: FunctionalComponent | ComponentClass
}

export type TNavigatorContext = {
  currentScreen?: SCREEN_NAMES
  navigate: React.StateUpdater<SCREEN_NAMES>
}

export type TNavigatorChildren = VNode<TScreenProps> | VNode<TScreenProps>[]

export interface INavigatorProps {
  initialScreen: SCREEN_NAMES
  children: TNavigatorChildren
}
