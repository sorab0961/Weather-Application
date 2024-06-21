import {
  faCloudSun,
  faSun,
  faTemperatureHigh,
  faWind,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./result.css";
import { faCloud } from "@fortawesome/free-solid-svg-icons/faCloud";

function Result(props) {
  return (


    <div className="result-body container">
      {props.weather !== "" ?(
        
      <div className="right-side">
        <div className="row">
          <div className="col-md-4">
            <FontAwesomeIcon icon={faTemperatureHigh} />
            <span>High :{props.weather.main.temp_max}</span>
          </div>
          <div className="col-md-4">
            <FontAwesomeIcon icon={faWind} />
            <span>Wind:{props.weather.wind.speed}</span>

          </div>
          <div className="col-md-4">
            <FontAwesomeIcon icon={faSun} />
            <span>humidity:{props.weather.main.humidity}</span>

          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <FontAwesomeIcon icon={faTemperatureHigh} />
            <span>low:{props.weather.main.temp_min}</span>

          </div>
          <div className="col-md-4">
            <FontAwesomeIcon icon={faCloud} />
            <span>Clouds:{props.weather.clouds.all}</span>


          </div>
          <div className="col-md-4">
            <FontAwesomeIcon icon={faCloudSun} />
            <span>pressure:{props.weather.main.pressure}</span>
          </div>
        </div>
      </div>):
      <h1>No Data Found</h1>}
    </div>
  );
}
export default Result;
