import Vue from 'vue'

/** ZdUI component common definition */
export declare class ZdUIComponent extends Vue {
  /** Install component into Vue */
  static install (vue: typeof Vue): void
}

/** Component size definition for button, input, etc */
export type ZdUIComponentSize = 'large' | 'medium' | 'small' | 'mini'

/** Horizontal alignment */
export type ZdUIHorizontalAlignment = 'left' | 'center' | 'right'
