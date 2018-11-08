
const json = window.localStorage.getItem('user');

let user = null;

if(json) {
    user = JSON.parse(json);
}

const userApi = {
    get() {
        return user;
    },

    signIn(newUser) {
        user = newUser;
        window.localStorage.setItem('user', JSON.stringify(user));
    },

    signOut() {
        user = null;
        window.localStorage.removeItem('user');
    }
};

export default userApi;