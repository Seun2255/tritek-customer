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
import { timeStamp } from "../../utils/dateFunctions";

const db = getFirestore(app);

const addQuery = async (query) => {
  var data = {};
  const querySnapshot = await getDocs(collection(db, "data"));
  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    data[doc.id] = doc.data().data;
  });
  const queries = data["queries"];
  var time = new Date();
  var formattedQuery = query;
  formattedQuery.created = timeStamp(time);
  queries.push(formattedQuery);
  await setDoc(doc(db, "data", "queries"), { data: queries });
};

const addFeedback = async (reply) => {
  var data = {};
  const querySnapshot = await getDocs(collection(db, "data"));
  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    data[doc.id] = doc.data().data;
  });
  const feedback = data["feedback"];
  feedback.push(reply);
  await setDoc(doc(db, "data", "feedback"), { data: feedback });
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
  return queries["Resolved"];
};

export { addQuery, getResponses, addFeedback };
