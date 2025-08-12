class EspeButton extends HTMLElement {
  connectedCallback() {
    const label = this.getAttribute('label') || 'Botón';

    this.innerHTML = `
      <button style="
        padding: 0.5rem 1rem;
        background-color: #2c3e50;
        color: white;
        border: none;
        border-radius: 4px;
        cursor: pointer;
      ">${label}</button>
    `;
  }
}

customElements.define('espe-button', EspeButton);
