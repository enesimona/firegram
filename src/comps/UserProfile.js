import React, { useState } from "react";
import ImageGrid from "./ImageGrid";
import Modal from "./Modal";
import Profile from "./Profile";
import Title from "./Title";
import UploadForm from "./UploadForm";

const UserProfile = () => {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <div>
      <Title></Title>
      <Profile></Profile>
      <UploadForm></UploadForm>
      <ImageGrid setSelectedImg={setSelectedImg} />
      {selectedImg && (
        <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
      )}
    </div>
  );
};

export default UserProfile;
