import React from "react";

const CardProject = ({ imageUrl, date, title, area, team }) => {
  return (
    <div className="card-project">
      <div className="card-project-item">
        <div className="card-project-item-image">
          <img src={imageUrl} className="card-project-item-image-img" alt="" />
        </div>
        <div className="card-project-item-date text-detail">{date}</div>
        <div className="card-project-item-title text-title">{title}</div>
        <div className="card-project-item-area text-detail">{area}</div>
        <div className="card-project-item-team text-normal">
          <span className="card-project-item-team-fix">width/</span>
          <br />
          {team}
        </div>
      </div>
    </div>
  );
};

export default CardProject;
