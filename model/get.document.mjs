import db from './db.mjs';

const getDocument = async (collectionName, id) => {
    console.log(collectionName);
    console.log(id);
    const getRef = db.collection(collectionName).doc(id);
    const doc = await getRef.get();
    if(!doc.exists) {
        console.log('No such document!');
        return { message: 'No such document!'};
    } else {
        console.log('Document data:', doc.data());
        return {
            id,
            ...doc.data()
        }
    }
} 

export default getDocument;