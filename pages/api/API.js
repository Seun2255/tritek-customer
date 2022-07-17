import app from "../../firebase/firebaseApp";
import {
  getFirestore,
  collection,
  addDoc,
  getDoc,
  getDocs,
  setDoc,
  doc,
} from "firebase/firestore";
import { async } from "@firebase/util";
import querySorter from "../../utils/querySorter";

const db = getFirestore(app);

const addQuery = async (query) => {
  var data = {};
  const querySnapshot = await getDocs(collection(db, "data"));
  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    data[doc.id] = doc.data().data;
  });
  const queries = data["queries"];
  queries.push(query);
  await setDoc(doc(db, "data", "queries"), { data: queries });
};

const getResponses = async () => {
  var data = {};
  const querySnapshot = await getDocs(collection(db, "data"));
  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    data[doc.id] = doc.data().data;
  });
  var queries = data["queries"];
  queries = querySorter(queries);
  console.log(queries["Resolved"]);
  return queries["Resolved"];
};

export { addQuery, getResponses };
