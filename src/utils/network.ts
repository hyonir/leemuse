import axios, { AxiosResponse } from 'axios';
import {API_NO_AUTH_URL, CLIENT_SECRET, CLIENT_ID} from '../configs/configs';
import qs from 'qs';
window.Buffer = window.Buffer || require('buffer').Buffer;

const Axios = () => {
    return axios.create({
            baseURL: API_NO_AUTH_URL,
            headers: {
                'Authorization': 'Basic ' + (new Buffer(CLIENT_ID + ':' + CLIENT_SECRET).toString('base64')),
                'Content-type': 'application/x-www-form-urlencoded'
            },
            timeout: 5000,
            withCredentials: true,
        }
    );
};

const getPromise = async (fnc: Promise<any>) => {
    return new Promise((resolve, reject) =>
        fnc.then((resp) => {
                if (resp) {
                    const dataObj = resp && resp.data;
                    switch (resp.status) {
                        case 200:
                            resolve({resultCode: resp.status, ...dataObj});
                            break;
                        case '-500':
                            reject({resultCode: resp.status, ...dataObj})
                            break;
                        case 510:
                            resolve({resultCode: resp.status, ...dataObj});
                            break;
                        default:
                            reject({resultCode: resp.status, ...dataObj})
                    }
                }
            })
            .catch((e) => {
                reject(e);
            })
    );
};

export default function network()  {
    const noAuthRequest = Axios();

    const interceptorActions = (response: any) => {
        return response;
    };

    const interceptorErrorActions = (error: { response: { status: number; }; }) => {
        try {
            if (error.response.status === 307) {
                window.location.href = '기본 이동주소';
                return false;
            }
            return Promise.reject(error);
        } catch (e) {
            return Promise.reject(error);
        }
    };

    noAuthRequest.interceptors.response.use(interceptorActions, interceptorErrorActions);

    return {
        spotify() {
            return {
                getToken: () => getPromise(noAuthRequest.post('/api/token', qs.stringify({'grant_type': 'client_credentials'})))
            }
        }
    }
}