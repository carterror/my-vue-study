// Account Email: carlos.bramila98@gmail.com
// Account ID: 5f7083ad-d5c0-4695-b252-fb87551c28b5

import {getFirestore, addDoc, collection, getDocs, doc} from 'firebase/firestore'
import app from "./firebase.js";

const db = getFirestore(app);

const addTransaction = async ({amount, description, gasto, category}) => {
    try {
        const docCategoryRef = doc(db, 'categories', category)
        const docRef = await addDoc(collection(db, 'transactions'), {
            amount,
            description,
            gasto,
            category: docCategoryRef,
            date: new Date()
        })
        return docRef.id
    } catch (e) {
        console.log('Service' + e)
    }
}

const getTransaction = async () => {
    try {
        const docRef = await getDocs(collection(db, 'transactions'))
        return docRef.docs.map(doc => {
            return {id: doc.id, ...doc.data()}
        });
    } catch (e) {
        console.log('Service' + e)
    }
}

export {
    addTransaction, getTransaction
}
