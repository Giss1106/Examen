const secciones = {
  inicio: `
    <div class="seccion-contenido">
    <h2>Bienvenido a la ESPE</h2>
    <p>Explora nuestra oferta académica...</p>
  </div>
  `,
  sobre: `
  <div class="seccion-contenido">
    <h2>Sobre la ESPE</h2>
    <p>La Universidad de las Fuerzas Armadas - ESPE se dedica a la excelencia académica y la innovación tecnológica.</p>
  </div>
  `,
  carreras: `
  <div class="seccion-contenido">
    <h2>Nuestras Carreras</h2>
    <ul>
      <li>Ingeniería en Software</li>
      <li>Ingeniería Electrónica</li>
      <li>Ingeniería Mecánica</li>
      <li>Medicina</li>
    </ul>
 </div>
  `,
  admision: `
  <div class="seccion-contenido">
    <h2>Proceso de Admisión</h2>
    <p>Infórmate sobre los requisitos, fechas y pasos para postular a la ESPE.</p>
  </div>
  `,
  contacto: `
  <div class="seccion-contenido">
    <h2>Contacto</h2>
    <p>Correo: info@espe.edu.ec</p>
    <p>Teléfono: (02) 3989-400</p>
</div>
`
};

function cambiarSeccion(seccion) {
  const contenido = document.getElementById("contenido");
  contenido.innerHTML = secciones[seccion] || "<p>Sección no disponible.</p>";
}
