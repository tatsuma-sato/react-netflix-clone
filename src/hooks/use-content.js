import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../lib/firebase.prod";

const useContent = (target) => {
  const [content, setContent] = useState([]);

  useEffect(() => {
    const getAllContents = async () => {
      try {
        const querySnap = await getDocs(collection(db, target));

        let contents = [];

        querySnap.forEach((doc) => {
          return contents.push({
            ...doc.data(),
            id: doc.id,
          });
        });

        setContent(contents);
      } catch (error) {
        console.log(error);
      }
    };

    getAllContents();
  }, []);

  return { [target]: content };
};

export default useContent;
