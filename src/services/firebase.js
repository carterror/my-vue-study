import {initializeApp} from 'firebase/app';
import {getFirestore, collection, getDocs} from 'firebase/firestore/lite';
import {APIKEY, APPID, AUTHDOMAIN, MESSAGINGSENDERID, PROJECTID, STORAGEBUCKET} from "../shared/utils/constants.js";

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
    apiKey: APIKEY,
    authDomain: AUTHDOMAIN,
    projectId: PROJECTID,
    storageBucket: STORAGEBUCKET,
    messagingSenderId: MESSAGINGSENDERID,
    appId: APPID
};

const app = initializeApp(firebaseConfig);

export default app