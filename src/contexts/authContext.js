import React from 'react'

const authContext = React.createContext({
    isAuthenticated: sessionStorage.getItem("isAuthenticated"),
    login(callBack) {
        sessionStorage.setItem("isAuthenticated", true);
        this.isAuthenticated = sessionStorage.getItem("isAuthenticated");
        callBack();
    },
    logout(callBack) {
        sessionStorage.setItem("isAuthenticated", false);
        this.isAuthenticated = sessionStorage.getItem("isAuthenticated");
        callBack();
    }
});

export default authContext;