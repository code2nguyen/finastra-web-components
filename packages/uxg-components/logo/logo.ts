import { customElement, LitElement } from 'lit-element';

import { style } from './logo-css';

@customElement('fds-logo')
export class Logo extends LitElement {
  static styles = style;
}

declare global {
  interface HTMLElementTagNameMap {
    'fds-logo': Logo;
  }
}
