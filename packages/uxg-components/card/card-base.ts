import { html, LitElement, property, query, TemplateResult } from 'lit-element';
import { classMap } from 'lit-html/directives/class-map';
import { ripple } from '@material/mwc-ripple/ripple-directive.js';

export class CardBase extends LitElement {
  @query('[name="primary-action"]') protected _primaryActionSlot!: HTMLSlotElement;

  @query('[name="icon-action"]') protected _iconSlot!: HTMLSlotElement;

  @query('[name="button-action"]') protected _buttonSlot!: HTMLSlotElement;

  @property({ type: Boolean }) outlined = false;

  @property({ type: Boolean }) fullBleed = false;

  protected buttonCount = 0;

  protected iconCount = 0;

  protected primaryActionCount = 0;

  protected onButtonSlotChanged() {
    const buttons = this._buttonSlot.assignedNodes();
    this.buttonCount = buttons.length;
    if (this.buttonCount > 0) {
      buttons.forEach(button => {
        const buttonElement = button as HTMLElement;
        buttonElement.classList.add('mdc-card__action');
        buttonElement.classList.add('mdc-card__action--button');
      });
    }
    this.requestUpdate();
  }

  protected onIconSlotChanged() {
    const icons = this._iconSlot.assignedNodes();
    this.iconCount = icons.length;
    if (this.iconCount > 0) {
      icons.forEach(icon => {
        const iconElement = icon as HTMLElement;
        iconElement.classList.add('mdc-card__action');
        iconElement.classList.add('mdc-card__action--icon');
      });
    }
    this.requestUpdate();
  }

  protected onPrimaryActionSlotChanged() {
    this.primaryActionCount = this._primaryActionSlot.assignedNodes().length;
    this.requestUpdate();
  }

  render() {
    const classes = { 'mdc-card--outlined': this.outlined };
    return html` <div class="mdc-card ${classMap(classes)}">
      ${this.renderPrimaryAction()}
      <slot></slot>
      ${this.renderActions()}
    </div>`;
  }

  protected renderPrimaryAction() {
    const primaryActionSlotTemplate = html`<slot
      name="primary-action"
      @slotchange=${this.onPrimaryActionSlotChanged}
    ></slot>`;
    if (this.primaryActionCount > 0) {
      return html`<div
        .ripple=${ripple({
          unbounded: false,
        })}
        class="mdc-card__primary-action"
        tabindex="0"
      >
        ${primaryActionSlotTemplate}
      </div>`;
    }
    return primaryActionSlotTemplate;
  }

  protected renderActions() {
    const buttonSlotTemplate = html`<slot name="button-action" @slotchange=${this.onButtonSlotChanged}></slot>`;
    const iconSlotTemplate = html`<slot name="icon-action" @slotchange=${this.onIconSlotChanged}></slot>`;

    if (this.iconCount > 0 || this.buttonCount > 0) {
      const classes = { 'mdc-card__actions--full-bleed': this.fullBleed };

      return html` <div class="mdc-card__actions ${classMap(classes)}">
        ${this.wrapButtonSlot(buttonSlotTemplate)} ${this.wrapIconSlot(iconSlotTemplate)}
      </div>`;
    }

    return html` ${buttonSlotTemplate} ${iconSlotTemplate} `;
  }

  protected wrapButtonSlot(buttonSlotTemplate: TemplateResult | string) {
    if (this.buttonCount > 0 && !this.fullBleed) {
      return html` <div class="mdc-card__action-buttons">${buttonSlotTemplate}</div>`;
    }
    return buttonSlotTemplate;
  }

  protected wrapIconSlot(iconSlotTemplate: TemplateResult | string) {
    if (this.iconCount > 0) {
      return html` <div class="mdc-card__action-icons">${iconSlotTemplate}</div>`;
    }
    return iconSlotTemplate;
  }
}
