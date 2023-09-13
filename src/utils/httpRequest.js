import axios from "axios";
import { indexedDBLocalPersistence } from "firebase/auth";
import firebase from "firebase/compat/app";

const getFirebaseToken = async () => {
  const currentUser = firebase.auth().currentUser;
  if (currentUser) return currentUser.getIdToken();

  const rememberAccount = window.indexedDB.open("firebaseLocalStorage");
  if (!rememberAccount) return null;

  return new Promise((resolve, reject) => {
    const waitTimeout = setTimeout(() => {
      reject(null);
      console.log("rejec timeout");
    }, 10000);

    const unregisterAuthObserver = firebase
      .auth()
      .onAuthStateChanged(async (user) => {
        if (!user) {
          reject(null);
        }
        const token = await user.getIdToken();
        console.log("[AXIOS] Logged in user token :" + token);
        resolve(token);

        unregisterAuthObserver();
        clearTimeout(waitTimeout);
      });
  });
};

const httpRequest = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
});

export const get = async (path, options = {}) => {
  const response = await httpRequest.get(path, options);

  return response.data;
};

httpRequest.interceptors.request.use(async (config) => {
  // const currentUser = firebase.auth().currentUser;

  // if (currentUser) {
  //   //auto check if expired auto refresh
  //   const token = await currentUser.getIdToken();
  //   config.headers.Authorization = `Bearer ${token}`;
  // }
  //Fix race condition
  const token = await getFirebaseToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default httpRequest;
