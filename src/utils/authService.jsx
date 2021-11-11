// sessionStorage.setItem("key", "value");
// var lastname = sessionStorage.getItem("key");
// sessionStorage.removeItem("key");
// sessionStorage.clear();

export const auth = {
    isAuthenticated: sessionStorage.getItem("isAuthenticated") ?? false,

    login(callBack) {
        sessionStorage.setItem("isAuthenticated", true);
        auth.isAuthenticated = (sessionStorage.getItem("isAuthenticated").toLowerCase() === 'true');

        callBack();
    },

    logout(callBack) {
        sessionStorage.setItem("isAuthenticated", false);
        auth.isAuthenticated = (sessionStorage.getItem("isAuthenticated").toLowerCase() === 'true');

        callBack();
    }
}