import admin from "firebase-admin";
import path from 'path';

const serviceAccount = path.join('./service-account-key.json');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

export default admin.firestore();