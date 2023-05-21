import React from "react";
import Stat from "./stat";
import "./profile-card.scss";

const ProfieCard = ({ avatar, name, location, shot, followers, following }) => {
  const image = require(`../../assests/img/${avatar}`);
  const styles = { backgroundImage: `url(${image})` };
  return (
    <div className="profile-card">
      <div className="header" style={styles}></div>
      <div className="content">
        <div className="avatar" style={styles}></div>
        <h2>{name}</h2>
        <h4>{location}</h4>

        <div className="stats">
          <Stat name="Shots" value={shot} />
          <Stat name="Followers" value={followers} />
          <Stat name="Following" value={following} />
        </div>
      </div>
    </div>
  );
};

export default ProfieCard;
