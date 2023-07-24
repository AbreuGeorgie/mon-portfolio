/* import avatar from "../assets/avatar.png";
import Image from "react-bootstrap/esm/Image";
import "./Avatar.scss"

function Avatar() {
  return (
    <Image
      src={avatar}
      roundedCircle
      alt="avatar"
      width={200}
      height={200}
      className="bounce"
    />
  );
}
export default Avatar; */


import React, { useState } from 'react';
import avatar from "../assets/avatar.png";
import Image from "react-bootstrap/esm/Image";
import "./Avatar.scss";

function Avatar() {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    if (!isHovered) {
      setIsHovered(true);
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <Image
      src={avatar}
      roundedCircle
      alt="avatar"
      width={200}
      height={200}
      className={isHovered ? 'bounce' : ''}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    />
  );
}

export default Avatar;