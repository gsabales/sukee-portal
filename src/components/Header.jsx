import React, {Component} from "react";
import UserService from "../services/UserService";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Homepage from "./Homepage";
import UserCart from "./UserCart";

// Use Link from react-router-dom for nav-bar routing. NOTE: Link must be only used inside Router.
const Navbar = ({firstName}) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-success fixed-top">
      <div className="container">
        <Link to="/" className="navbar-brand">
          <h2>Sukee</h2>
        </Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive"
                aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav ml-auto">
            <Link to="/" className="nav-item nav-link active">
              Home
            </Link>
            <Link to="/cart" className="nav-item nav-link active">
              My Cart
            </Link>
            <li className="nav-item nav-link active" style={{marginLeft: 50}}>
              Hello {firstName}!
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

class Header extends Component{

  constructor(props) {
    super(props);
    this.state = {
      user: null,
      name: '',
    };
    this.getUser = this.getUser.bind(this);
  }

  componentDidMount() {
    // Get user 1 for prototyping purposes
    this.getUser(1);
  }

  getUser(id) {
    let fullName = '';

    UserService.getUserById(id)
      .then(response => {
        fullName = `${response.data.firstName}`;
        this.setState({name: fullName});
      });
  }

  render() {
    return (
      <Router>
        <Navbar firstName={this.state.name}/>
        <Switch>
          <Route exact path="/" component={Homepage}/>
          <Route path="/cart" component={UserCart}/>
        </Switch>
      </Router>
    );
  }
}

export default Header