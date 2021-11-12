export const auth = {
    isAuthenticated: (sessionStorage.getItem("authToken") != null) ? true : false,

    login(callBack) {
        sessionStorage.setItem("authToken", "abcdefghijklmnopqusruvwxyz");
        auth.isAuthenticated = (sessionStorage.getItem("authToken") != null) ? true : false;

        callBack();
    },

    logout(callBack) {
        // sessionStorage.setItem("authToken", false);
        sessionStorage.removeItem("authToken");
        sessionStorage.clear();

        auth.isAuthenticated = (sessionStorage.getItem("authToken") != null) ? true : false;

        callBack();
    }
}