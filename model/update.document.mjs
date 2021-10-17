import db from './db.mjs';

const updateDocument = async (collectionName, id, data) => {
    try{
        const updateRef = db.collection(collectionName);
        const result = await updateRef.doc(id).update(data);
        console.log(update);
        return result;
    } catch(e){
        return e;
    }
}

export default updateDocument;