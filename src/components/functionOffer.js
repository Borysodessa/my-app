import { featuresParams } from "./features";

export function FeaturesShow({ featuresShow }) {
  if (featuresShow === undefined) {
    return;
  }
  if (featuresShow.length === 0) {
    return;
  }

  const { logo, text, color, background } = featuresParams[featuresShow[0]];
  return (
    <div className="wrap-features">
      <div className="features-text" style={{ color, background }}>
        <img className="features-logo" src={logo} alt=""></img>
        {text}
      </div>
      {featuresShow.length > 1 && (
        <span className="features-quantity">+ {featuresShow.length - 1}</span>
      )}
    </div>
  );
}
