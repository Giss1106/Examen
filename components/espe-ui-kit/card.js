class EspeCard extends HTMLElement {
  connectedCallback() {
    const title = this.getAttribute('title') || 'Título';
    const content = this.getAttribute('content') || 'Contenido';

    this.innerHTML = `
      <div style="
        background:white;
        padding:1rem;
        margin-bottom:1rem;
        border-radius:8px;
        box-shadow:0 2px 4px rgba(0,0,0,0.1);
      ">
        <h2>${title}</h2>
        <p>${content}</p>
      </div>
    `;
  }
}

customElements.define('espe-card', EspeCard);
