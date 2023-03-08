import React from 'react';
import profileImg from './ProfilePhoto.png'; 

function ProfilePhoto() {
  return (
    <div>
      <img src={profileImg} alt="ProfilePhoto" width='300' height='300' />
    </div>
  );
}

export default ProfilePhoto;
