// sessionStorage.setItem("key", "value");
// var lastname = sessionStorage.getItem("key");
// sessionStorage.removeItem("key");
// sessionStorage.clear();

export const auth = {
    isAuthenticated: sessionStorage.getItem("isAuthenticated"),

    login(callBack) {
        sessionStorage.setItem("isAuthenticated", true);
        auth.isAuthenticated = sessionStorage.getItem("isAuthenticated");
        callBack();
    },

    logout(callBack) {
        sessionStorage.setItem("isAuthenticated", false);
        auth.isAuthenticated = sessionStorage.getItem("isAuthenticated");
        callBack();
    }
}