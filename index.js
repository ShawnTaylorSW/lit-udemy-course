import {LitElement, html} from '@polymer/lit-element';
import '@polymer/paper-checkbox/paper-checkbox.js'

class MyElement extends LitElement {

  static get properties() {
    return {
      feeling: String
    }
  }
  _render({feeling}) {
    return html`<h1>Hello World! I am feeling ${feeling}</h1>
      <slot name="slot1"></slot>
      <paper-checkbox><slot></slot></paper-checkbox>
      <slot name="slot2"></slot>`;
  }
}

customElements.define('my-element', MyElement);