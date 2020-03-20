import React from "react";
import "./collection-preview.style.scss";

const CollectionPreview = ({ id, imageUrl, title, linkUrl }) => {
  return (
    <div className="collection-preview">
      <h2 className="title">{title}</h2>
      <div className="preview"></div>
    </div>
  );
};

export default CollectionPreview;
