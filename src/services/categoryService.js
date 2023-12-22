import firebaseApp from './firebase.js'

import {getFirestore, addDoc, collection, getDocs} from 'firebase/firestore'
import app from "./firebase.js";

const db = getFirestore(app);

const addCategory = async ({title, description, gasto}) => {
    try {
        const docRef = await addDoc(collection(db, 'categories'), {title, description, gasto})
        return docRef.id
    } catch (e) {
        console.log('Service' + e)
    }
}

const getCategory = async () => {
    try {
        const docRef = await getDocs(collection(db, 'categories'))
        return docRef.docs.map(doc => {
            return {id: doc.id, ...doc.data()}
        });
    } catch (e) {
        console.log('Service' + e)
    }
}


// Account Email: carlos.bramila98@gmail.com
// Account ID: 5f7083ad-d5c0-4695-b252-fb87551c28b5
export default {
    addCategory, getCategory
}

// Get a list of cities from your database
// async function getCities(db) {
//     const citiesCol = collection(db, 'cities');
//     const citySnapshot = await getDocs(citiesCol);
//     const cityList = citySnapshot.docs.map(doc => doc.data());
//     return cityList;
// }

