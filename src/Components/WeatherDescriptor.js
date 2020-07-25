import React from "react";
import { logoUrl } from "../Shared/UrlContents.js";
function weatherDescriptor(props) {
  let w_type = `${props.weatherMain} , ${props.weatherDescription}`;
  let temperature = `${props.temperature}`;
  temperature = parseInt(temperature) - 273.15;
  temperature = temperature.toPrecision(2);
  let d = new Date();
  if (props.isLoading) {
    return (
      <div className="spinner">
        <i class="fa fa-circle-o-notch fa-spin fa-3x fa-fw"></i>
      </div>
    );
  } else if (props.errmess) {
    return <div className="errmessage">{props.errmess}</div>;
  } else {
    return (
      <React.Fragment>
        <div className="w_description">
          <div className="w_type">
            <span>{w_type}</span>
          </div>
          <div className="content">
            <div className="w_icon">
              <img src={`${logoUrl}${props.icon}@2x.png`} />
            </div>
            <div className="w_temp">
              <span>
                {temperature}
                <i class="fa fa-circle-thin" aria-hidden="true"></i> C
              </span>
            </div>
          </div>
          <div className="location">
            <span>
              {props.placeName} , {props.country}
            </span>
          </div>
          <div className="cur_time">{d.toLocaleString()}</div>
        </div>
      </React.Fragment>
    );
  }
}
export default weatherDescriptor;
