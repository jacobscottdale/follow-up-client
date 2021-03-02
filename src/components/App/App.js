import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import LoginPage from 'routes/LoginPage/LoginPage';
import RegistrationPage from 'routes/RegistrationPage/RegistrationPage';
import TokenService from 'services/token-service';
import LandingPage from 'routes/LandingPage/LandingPage';
import AddContact from 'routes/AddContact/AddContact';
import EditContact from 'routes/EditContact/EditContact';
import CallSheet from 'routes/CallSheet/CallSheet';
import UserContext from 'UserContext';

class App extends Component {
  state = {
    user: TokenService.userOnToken() || {},
  };

  storeUserShows = userShows => {
    this.setState({
      userShows: userShows,
    });
  };

  setUser = user => {
    this.setState({
      user: user
    });
  };

  redirectToLogin = () => {
    const { history } = this.props;
    if (history)
      history.push('login');
  };

  componentDidMount() {
    
  }

  render() {
    const contextValue = {
      user: this.state.user,
      redirectToLogin: this.redirectToLogin,
      setUser: this.setUser,
    };
    return (
      <main className='App'>
        <Switch>
          <UserContext.Provider value={contextValue}>

            <Route
              exact path={'/'}
              component={LandingPage}
            />

            <Route
              exact path={'/register'}
              component={RegistrationPage}
            />

            <Route
              path={'/login'}
              component={LoginPage}
            />

            <Route
              path={'/add-contact'}
              component={AddContact}
            />

            <Route
              path={'/edit-contact'}
              component={EditContact}
            />

            <Route
              path={'/call-sheet'}
              component={CallSheet}
            />

          </UserContext.Provider>
        </Switch>
      </main>
    );
  }
}

export default withRouter(App);
