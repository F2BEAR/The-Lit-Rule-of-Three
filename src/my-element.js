import { html, css, LitElement } from 'lit';

export class MyElement extends LitElement {
  static get properties() {
    return {
      a: { type: Number },
      b: { type: Number },
      c: { type: Number },
      x: { type: Number },
    };
  }

  constructor() {
    super();
    this.a = 0;
    this.b = 0;
    this.c = 0;
    this.x = 0;
  }

  calculate() {
    this.x = (parseFloat(this.b) * parseFloat(this.c)) / parseFloat(this.a);
  }

  render() {
    return html`
      <slot></slot>
      <div class="container">
        <div class="card">
          <div>
            <label for"a">A: </label>
            <input name="a" value=${this.a} 
            @change=${(e) => {
              this.a = e.target.value;
            }} type="text" />
          </div>
          <div>
            <label for"b">B: </label>
            <input name="b" value=${this.b} 
            @change=${(e) => {
              this.b = e.target.value;
            }} type="text" />
          </div>
          <div>
            <label for"c">C: </label>
            <input name="c" value=${this.c} 
            @change=${(e) => {
              this.c = e.target.value;
            }} type="text" />
          </div>
          <button @click=${this._onClick} part="button">
            Calculate
          </button>
        </div>
        <h1>Total: ${this.x}</h1>
      </div>
      <div class="explanation">
        <p>
          The rule of  three is a method  to  solve  proportions. 
        </p>
        <p>
          If you have three numbers: a, b, c, such that, ( a / b = c / x), you can calculate the unknown value (x).
        </p> 
        <p>
          Just do x = (b * c) / a
        </p>
      </div>
    `;
  }

  _onClick() {
    this.calculate();
  }

  static get styles() {
    return css`
      :host {
        max-width: 1280px;
        margin: 0 auto;
        padding: 2rem;
        text-align: center;
      }

      .container {
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 2.5em;
      }
      
      .card {
        padding: 2em;
        border-right: 1px solid #a21caf;
      }

      a {
        font-weight: 500;
        color: #646cff;
        text-decoration: inherit;
      }
      a:hover {
        color: #535bf2;
      }

      h1 {
        font-size: 2.2em;
        line-height: 1.1;
        padding: 2em
      }

      .explanation {
        text-align: justify;
        max-width: 32em;
        padding: 2em
      }

      button {
        border-radius: 8px;
        border: 1px solid transparent;
        padding: 0.6em 1.2em;
        font-size: 1em;
        font-weight: 500;
        font-family: inherit;
        background-color: #1a1a1a;
        cursor: pointer;
        transition: border-color 0.25s;
      }
      button:hover {
        border-color: #646cff;
      }
      button:focus,
      button:focus-visible {
        outline: 4px auto -webkit-focus-ring-color;
      }

      div { 
        margin: 0.5em
      }

      input {
        border: none;
        padding: 0.6em;
        border-radius: 0.5em;
      }
      @media (prefers-color-scheme: light) {
        a:hover {
          color: #747bff;
        }
        button {
          background-color: #f9f9f9;
        }
      }
    `;
  }
}

window.customElements.define('my-element', MyElement);
