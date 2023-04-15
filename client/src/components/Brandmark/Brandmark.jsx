import GymIcon from "../../assets/shared/gym-logo.png";

import "./Brandmark.scss";

const Brandmark = () => {
  return (
    <a href="#head-navbar" className="brandmark">
      <img className="icon" src={GymIcon} alt="CallStackIT Icon" />
      GYM FITNESS
    </a>
  );
};

export default Brandmark;
