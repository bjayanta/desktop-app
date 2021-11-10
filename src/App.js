import React, { useContext } from "react";

import { BrowserRouter } from "react-router-dom"

import Navigation from './pages/partials/Navigation'
import RouterArea from './pages/partials/RouterArea'

import AuthContext from './contexts/authContext'

function App(props) {
  const {isAuthenticated, login, logout} = useContext(AuthContext);

  return (
    <div>
      <BrowserRouter>
        <AuthContext.Provider value={ {isAuthenticated, login, logout} }>
          <Navigation />
          <RouterArea />
          </AuthContext.Provider>
      </BrowserRouter>
    </div>
  );

}

export default App;
