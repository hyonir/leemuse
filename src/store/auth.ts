import { makeAutoObservable } from 'mobx';
import { LocStore } from '../utils/common';

class AuthStore {
    token = LocStore('token', '');
    hasToken = false;

    constructor() {
        makeAutoObservable(this);
    }

    setCurrentToken(data: { access_token: string }) {
        const { access_token } = data;
        if (access_token) {
            LocStore('token', access_token);

            this.token = access_token;
            this.hasToken = true;
        }
    }

    getCurrentToken() {
        if (this.token) {
            return this.token;
        } else {
            return null;
        }
    }

}

const authStore = new AuthStore();

export { authStore }