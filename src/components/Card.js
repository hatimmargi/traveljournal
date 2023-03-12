import React from "react";

export default function Card(props) {
  return (
    <div className="card">
      <div className="left--side">
        <img className="card--img" src={props.imageUrl} alt=""/>
      </div>
      <div className="right--side">
        <span className="card--info">
          <img src="./svg/location.svg" alt="" />
          {props.location}
          <a className="card--link" href={props.googleMapsUrl}>
            View on Google Maps
          </a>
        </span>
        <h2 className="card--title">{props.title}</h2>
        <span className="card--date">{props.startDate} - {props.endDate}</span>
        <p className="card--description"> {props.description}
        </p>
      </div>
    </div>
  );
}
