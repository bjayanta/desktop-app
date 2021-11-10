// sessionStorage.setItem("key", "value");
// var lastname = sessionStorage.getItem("key");
// sessionStorage.removeItem("key");
// sessionStorage.clear();

export const auth = {
    isAuthenticated: false,

    login(callBack) {
        auth.isAuthenticated = true;
        callBack();
    },

    logout(callBack) {
        auth.isAuthenticated = false;
        callBack();
    }
}