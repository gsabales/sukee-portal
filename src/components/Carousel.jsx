import React from "react";

const Carousel = () => {
  return (
    <div id="carouselExampleIndicators" className="carousel slide my-4" data-ride="carousel">
      <ol className="carousel-indicators">
        <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
      </ol>
      <div className="carousel-inner" role="listbox">
        <div className="carousel-item active">
          <img className="d-block img-fluid" src="https://www.kawalingpinoy.com/wp-content/uploads/2013/10/leche-flan-8.jpg" alt="First slide"/>
        </div>
        <div className="carousel-item">
          <img className="d-block img-fluid" src="https://images.summitmedia-digital.com/yummyph/images/2020/01/09/bungalow-ube-cheese-pandesal-01.jpg" alt="Second slide"/>
        </div>
        <div className="carousel-item">
          <img className="d-block img-fluid" src="https://www.antwecraftedmeats.com/111-big_default/garlic-longganisa.jpg" alt="Third slide"/>
        </div>
      </div>
      <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </div>
  );
};

export default Carousel