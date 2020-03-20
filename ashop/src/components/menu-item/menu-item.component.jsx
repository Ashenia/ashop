import React from "react";

import "./menu-item.style.scss";

const MenuItem = ({ title, size, imageUrl, linkUrl }) => {
  return (
    <div className={`${size} menu-item`}>
      <div className="content">
        <div
          className="backgroud-image"
          style={{ backgroundImage: `url(${imageUrl})` }}
        ></div>
        <div className="title">{title.toUpperCase()}</div>
        <div className="subtitle">SHOP NOW</div>
      </div>
    </div>
  );
};

export default MenuItem;
