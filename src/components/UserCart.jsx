import React, {Component} from "react";

class UserCart extends Component{
  render() {
    return (
      <div className="container page-content">
        <h1>Cart Component Works!</h1>
        <div className="container cart-container">
          <div className="cart-content">
            <div className="container p-0">
              <div className="row">
                <div className="col-12 mb-4">

                  <div className="cart-item card h-100">
                    <div className="row">
                      <div className="col-3 pr-0">
                        <img className="cart-item-img" src="http://placehold.it/900x350" alt=""/>
                      </div>
                      <div className="col-6 pl-0">
                        <div className="card-body">
                          <h5 className="card-title">Card title</h5>
                          <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                          <p className="card-text">Some quick example text to build on the card title and make up the
                            bulk of the card's content.</p>
                        </div>
                      </div>
                      <div className="col-3 pr-0">
                        <div className="card-body">
                          <h6 className="card-subtitle mb-4 text-muted">Price: </h6>
                          <h6 className="card-subtitle mb-2 text-muted">Quantity: </h6>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
                <div className="col-12 mb-4">

                  <div className="cart-item card h-100">
                    <div className="row">
                      <div className="col-3 pr-0">
                        <img className="cart-item-img" src="http://placehold.it/900x350" alt=""/>
                      </div>
                      <div className="col-6 pl-0">
                        <div className="card-body">
                          <h5 className="card-title">Card title</h5>
                          <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                          <p className="card-text">Some quick example text to build on the card title and make up the
                            bulk of the card's content.</p>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default UserCart