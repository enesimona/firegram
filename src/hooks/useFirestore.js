import React, { useState, useEffect } from "react";
import { projectFirestore } from "../firebase/config";
import useStorage from "./useStorage";
import { firestore } from "firebase";

const useFirestore = (collection) => {
  const [docs, setDocs] = useState([]);

  useEffect(() => {
    const unsub = projectFirestore
      .collection(collection)
      .orderBy("createdAt", "desc")
      .onSnapshot((snap) => {
        // callback function will fire when a change is made in collection
        let documents = [];
        snap.forEach((doc) => {
          documents.push({ ...doc.data(), id: doc.id });
        });
        setDocs(documents);
      });

    return () => unsub(); //unsubscribe from the collection when we no more using it
  }, [collection]);

  return { docs };
};

export default useFirestore;
