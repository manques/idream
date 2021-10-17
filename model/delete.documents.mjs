import db from './db.mjs'

const deleteDocuments = async (collectionName, id) => {
    try {
        const deleteRef = db.collection(collectionName);
        const result = await deleteRef.doc(id).delete();
        console.log(result);
        return result;
    } catch(e) {
        return e;
    }
}

export default deleteDocuments;