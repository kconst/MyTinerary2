import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../store/actions/userActions";

const iStyle = {
  fontSize: "30px"
};

class Header extends Component {
  constructor() {
    super();
    this.state = {
      isOpen: false
    };
    this.logout = this.logout.bind(this);
  }

  toggleModal = () => {
    if (!this.state.isOpen) {
      document.addEventListener("click", this.toggleModal, false);
    } else {
      document.removeEventListener("click", this.toggleModal, false);
    }
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  logout() {
    if (window.confirm("Do you want to logOut?")) {
      localStorage.removeItem("token");
      this.props.logout();
      window.location = "/";
    }
  }

  render() {
    return (
      <div className="header">
        {this.props.user.isLoggedIn ? (
          <>
            <div className="profile-user-image-container">
              <img
                src={
                  this.props.user.image ||
                  "https://thesocietypages.org/socimages/files/2009/05/vimeo.jpg"
                }
                alt={this.props.user.name}
                className="profile-picture"
              />
            </div>
          </>
        ) : (
          <i style={iStyle} className="material-icons">
            account_circle
          </i>
        )}
        {!this.props.user.isLoggedIn ? (
          <i
            style={iStyle}
            className="material-icons"
            onClick={this.toggleModal}
          >
            menu
          </i>
        ) : (
          <i style={iStyle} className="material-icons" onClick={this.logout}>
            launch
          </i>
        )}

        <Menu show={this.state.isOpen}>
          {/* <Menu show={this.state.isOpen} onClose={this.toggleModal}> */}
          {/* Here's some content for the modal */}
        </Menu>
      </div>
    );
  }
}

class Menu extends Component {
  render() {
    // Render nothing if the "show" prop is false
    if (!this.props.show) {
      return null;
    }

    return (
      <div className="outerWrapper">
        <div className="innerWrapper">
          <NavLink to="/login">
            <p>Log in</p>
          </NavLink>
          <NavLink to="/signup">
            <p>Create Account</p>
          </NavLink>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logout())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
