import { customElement, LitElement, property } from 'lit-element';

import { style } from './divider-css';

@customElement('fds-divider')
export class Divider extends LitElement {
  static styles = style;

  @property({ reflect: true, type: Boolean })
  vertical = false;

  @property({ reflect: true, type: String })
  inset: 'both' | 'left' | 'right' | undefined = undefined;
}

declare global {
  interface HTMLElementTagNameMap {
    'fds-divider': Divider;
  }
}
