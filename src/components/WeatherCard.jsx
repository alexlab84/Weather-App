import PropTypes from 'prop-types';

function WeatherCard({ location, temp, condition, icon }) {

  return (
    <div className="weather_card">
      <h2 className='weather_card__location'>{location}</h2>
      <p className='weather_card__temp'>Temperature: {temp}°C</p>
      <p className='weather_card__condition'>Condition: {condition}</p>
      <img src={icon} alt="Weather icon" className="weather_card__icon"/>
    </div>
  );
}

WeatherCard.propTypes = {
    location: PropTypes.string.isRequired,
    temp: PropTypes.number.isRequired,
    condition: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
  };

export default WeatherCard;