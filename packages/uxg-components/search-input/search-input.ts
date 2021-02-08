import { customElement, property } from 'lit-element';
import { html, TemplateResult } from 'lit-html';
import { style } from './search-input-css';

import '@material/mwc-textfield';
import '@material/mwc-icon';
import '@material/mwc-icon-button';
import { TextFieldBase } from '@material/mwc-textfield/mwc-textfield-base';
declare global {
  interface HTMLElementTagNameMap {
    'uxg-search-input': SearchInput;
  }
}

@customElement('uxg-search-input')
export class SearchInput extends TextFieldBase {
  static styles = style;

  @property({ type: String }) icon = 'search';
  // @property({ type: String }) iconTrailing = 'clear';

  @property({ type: Boolean }) showSearchIcon = true;

  render() {
    return super.render();
  }

  /** @soyTemplate */
  protected renderTrailingIcon(): TemplateResult | string {
    return this.value
      ? html`<mwc-icon-button
          @click=${this.clear}
          class="mdc-text-field__affix--suffix uxg-search-input-clear-button"
          icon="clear"
        ></mwc-icon-button>`
      : '';
  }

  private clear() {
    this.value = '';
  }
}
