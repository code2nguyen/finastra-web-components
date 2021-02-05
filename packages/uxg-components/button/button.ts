import { customElement, LitElement } from 'lit-element';
import { html } from 'lit-html';
import { style } from './button-css.js';

@customElement('uxg-button')
export class Button extends LitElement {
  static styles = style;

  render() {
    return html`<p>This is fake button vinh 123</p>`;
  }
}
