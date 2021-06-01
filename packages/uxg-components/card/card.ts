import { customElement } from 'lit-element';
import { CardBase } from './card-base';

import { style } from './card-css.js';

@customElement('fds-card')
export class Card extends CardBase {
  static styles = style;
}

declare global {
  interface HTMLElementTagNameMap {
    'fds-card': Card;
  }
}
