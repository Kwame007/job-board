import app from "./config";
import { getFirestore } from "firebase/firestore";

// firestore database init
const db = getFirestore(app);

export default db;
