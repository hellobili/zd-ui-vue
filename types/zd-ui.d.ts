import Vue from 'vue'
import { ZdUIComponent, ZdUIComponentSize, ZdUIHorizontalAlignment } from './component'

export interface InstallationOptions {
  size: string
}

/** The version of zd-ui */
export const version: string

/**
 * Install all zd-ui components into Vue.
 * Please do not invoke this method directly.
 * Call `Vue.use(ZdUI)` to install.
 */
export function install (vue: typeof Vue, options: InstallationOptions): void

/** ElementUI component common definition */
export type Component = ZdUIComponent

/** Component size definition for button, input, etc */
export type ComponentSize = ZdUIComponentSize

/** Horizontal alignment */
export type HorizontalAlignment = ZdUIHorizontalAlignment
