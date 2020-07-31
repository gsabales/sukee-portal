import React, {Component} from "react";
import ItemService from "../services/ItemService";

class ItemWindow extends Component{

  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
    this.refreshItemList = this.refreshItemList.bind(this);
  }

  componentDidMount() {
    this.refreshItemList();
  }

  refreshItemList() {
    ItemService.getAllItems()
      .then(response => this.setState({items: response.data}));
  }

  render() {
    console.log(this.state.items);
    return (
      <div className="row">
        {
          this.state.items.map(
            item =>
              <div className="col-lg-4 col-md-6 mb-4" key={item.id}>
                <div className="card h-100">
                  <a href="#"><img className="card-img-top item-display-img" src={item.image} alt=""/></a>
                  <div className="card-body">
                    <h4 className="card-title">
                      <a href="#">{item.name}</a>
                    </h4>
                    <h5>₱{item.price}</h5>
                    <p className="card-text">{item.description}</p>
                  </div>
                  <div className="card-footer">
                    <small className="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small>
                  </div>
                </div>
              </div>
          )
        }
      </div>
    );
  }
}

export default ItemWindow