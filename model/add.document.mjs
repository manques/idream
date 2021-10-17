import db from './db.mjs';

const addDocument = async (collectionName, data) => {
    console.log(collectionName);
    console.log(data);
    try {
        const addRef =  db.collection(collectionName);
        const result = await addRef.add(data);
        console.log(JSON.stringify(result));
        return { id: result.id };
    }catch(e) {
        console.log(e);
        return e;
    }
}

export default addDocument;