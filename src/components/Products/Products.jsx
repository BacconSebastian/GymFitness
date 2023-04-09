import "./Products.scss";

const Products = () => {
  return (
    <div id="informacion" className="products">
      <div className="left-side">
        <h2 id="product-title">
          El cambio
          <br />
          <span>
            al alcance de
            <br />
            tus manos
          </span>
        </h2>
        <p>
          Consultá por tu membresía, por el seguimiento personal,
          <br />
          por el acompañamiento nutricional o<br />
          por cualquier duda que tengas.
        </p>
      </div>
      <div className="right-side">
        <div>
          <div className="card">
            <div className="image comida-saludable"></div>
            <p>Asesoría nutricional para sacar tu mejor potencial.</p>
            <button className="second-button">{"Ver info >"}</button>
          </div>
          <div className="card">
            <div className="image descuento"></div>
            <p>Hasta 50% de descuento en locales adheridos.</p>
            <button className="second-button">{"Ver info >"}</button>
          </div>
          <div className="card">
            <div className="image clases-online"></div>
            <p>Clases en vivo, grabadas, rutinas personalizadas y mucho más.</p>
            <button className="second-button">{"Ver info >"}</button>
          </div>
        </div>
        <div className="p-top">
          <div className="card">
            <div className="image clases-online"></div>
            <p>Clases en vivo, grabadas, rutinas personalizadas y mucho más.</p>
            <button className="second-button">{"Ver info >"}</button>
          </div>
          <div className="card">
            <div className="image comida-saludable"></div>
            <p>Asesoría nutricional para sacar tu mejor potencial.</p>
            <button className="second-button">{"Ver info >"}</button>
          </div>
          <div className="card">
            <div className="image descuento"></div>
            <p>Hasta 50% de descuento en locales adheridos.</p>
            <button className="second-button">{"Ver info >"}</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
