import db from './db.mjs';

const getDocuments = async (collectionName, query) => {
    console.log(collectionName);
    const getsRef = db.collection(collectionName);
    let snapshot;
    if(Object.keys(query).length > 0) {
        snapshot = await getsRef
                         .orderBy(query.orderBy, query.order)
                         .startAfter(query.offset)
                         .limit(query.limit)
                         .get();
    } else {
        snapshot = await getsRef.get();
    }
    if (snapshot.empty) {
        console.log('No matching documents.');
        return { mesage: 'not documents found!!'};
      }  
      const result = [];
      snapshot.forEach(doc => {
        console.log(doc.id, '=>', doc.data());
        result.push({
            id: doc.id,
            ...doc.data()
        });
      });

      return result;
} 

export default getDocuments;