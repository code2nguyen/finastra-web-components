import { customElement, property } from 'lit-element';
import { html, TemplateResult } from 'lit-html';
import { TextFieldBase } from '@material/mwc-textfield/mwc-textfield-base';
import { classMap } from 'lit-html/directives/class-map';

import '@material/mwc-icon-button';

import { style } from './search-input-css';

/**
 * The `Search Input` component
 */
@customElement('fds-search-input')
export class SearchInput extends TextFieldBase {
  static styles = style;

  @property({ type: String }) icon = 'search';

  render() {
    return super.render();
  }

  protected renderTrailingIcon(): TemplateResult | string {
    const clearButtonclasses = {
      'fds-search-input-clear-button--show': !!this.value,
      'fds-search-input-clear-button--hide': !this.value,
    };
    return html`<mwc-icon-button
      @click=${this.clear}
      class="mdc-text-field__affix--suffix fds-search-input-clear-button ${classMap(clearButtonclasses)}"
      icon="clear"
    ></mwc-icon-button>`;
  }

  private clear() {
    this.value = '';
    this.focus();
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'fds-search-input': SearchInput;
  }
}
