class EspeNavbar extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <nav style="background-color:#2c3e50; padding:1rem; color:white; display:flex; justify-content:space-between;">
        <span><strong>ESPE</strong> PWA</span>
        <div>
          <a href="#inicio" style="color:white; margin-right:1rem;">Inicio</a>
          <a href="#sobre" style="color:white; margin-right:1rem;">Sobre</a>
          <a href="#oferta" style="color:white; margin-right:1rem;">Carreras</a>
          <a href="#admisión" style="color:white; margin-right:1rem;">Admisión</a>
          <a href="#contacto" style="color:white;">Contacto</a>
        </div>
      </nav>
    `;
  }
}

customElements.define('espe-navbar', EspeNavbar);
