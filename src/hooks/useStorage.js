import React, { useState, useEffect } from "react";
import {
  projectStorage,
  projectFirestore,
  timestamp,
} from "../firebase/config";

const useStorage = (file) => {
  const [progress, setProgress] = useState(0); //progress of the upload
  const [error, setError] = useState(null); //errors from the upload
  const [url, setUrl] = useState(null); //the url of imageurl after the image is uploaded

  useEffect(() => {
    //upload that file
    //get  a reference where the file should be sent
    const storageRef = projectStorage.ref(file.name);
    const collectionRef = projectFirestore.collection("images");

    storageRef.put(file).on(
      "state_changed",
      (snap) => {
        let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
        setProgress(percentage);
      },
      (err) => {
        setError(err);
      },
      async () => {
        //will fire when upload is complet
        const url = await storageRef.getDownloadURL();
        const createdAt = timestamp();
        collectionRef.add({ url, createdAt });
        setUrl(url);
      }
    );
  }, [file]);
  //this function will fire everytime file is changed
  return { progress, url, error };
};

export default useStorage;
