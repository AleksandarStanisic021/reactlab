const Weather = ({ temperature }) => {
  if (temperature > 30) {
    return <div style={{ color: "red" }}>It's hot outside!</div>;
  }
  if (temperature < 10) {
    return <div style={{ color: "blue" }}>It's cold outside!</div>;
  }
  return <div style={{ color: "green" }}>It's a nice day!</div>;
};

export default Weather;
