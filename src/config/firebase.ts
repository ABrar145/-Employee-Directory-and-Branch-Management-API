import admin from "firebase-admin";
import path from "path";

// Initialize Firebase with credentials
const serviceAccount = require(path.resolve(__dirname, "../../firebase-adminsdk.json"));

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
});

const firestore = admin.firestore();

export { firestore };
