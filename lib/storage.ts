import { storage } from "./firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { nanoid } from "nanoid";

export const uploadFile = async (file: any, folder: any) => {
    try {
      const filename = nanoid();
      const storageRef = ref(
        storage,
        `${folder}/${filename}.${file.name.split(".").pop()}`
      );
      const res = await uploadBytes(storageRef, file);
      console.log("the full path",res.metadata.fullPath )
      return res.metadata.fullPath;
    } catch (error) {
      throw error;
    }
  };
  
  export const getFile = async (path: any) => {
    try {
      const fileRef = ref(storage, path);
      return getDownloadURL(fileRef);
    } catch (error) {
      throw error;
    }
  };