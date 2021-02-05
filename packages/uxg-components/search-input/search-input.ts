import { customElement, LitElement, property } from 'lit-element';
import { html } from 'lit-html';
import { style } from './search-input-css';

import '@material/mwc-textfield';
import '@material/mwc-icon';
import '@material/mwc-icon-button';

@customElement('uxg-search-input')
export class SearchInput extends LitElement {
  static styles = style;

  @property() placeholder = 'Search';

  @property({ type: Boolean }) showSearchIcon = true;

  render() {
    return html`<mwc-textfield
        class="uxg-search-input-text-field"
        label=${this.placeholder}
        icon=${this.showSearchIcon ? 'search' : ''}
      ></mwc-textfield>
      <mwc-icon-button class="uxg-search-input-clear-button" icon="clear"></mwc-icon-button>`;
  }
}
