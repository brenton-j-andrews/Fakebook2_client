import "./dropdown.css";

const Dropdown = () => {
  return (
    <div className="dropdown-menu">
      <div className="dropdown-select-div">
        <span className="selectDivText"> Select Your Option </span>
        <i className="test"></i>
      </div>

      <ul className="options">
        <li className="option">
          <span className="optionText"> Delete Post </span>
        </li>
      </ul>
    </div>
  );
};

export default Dropdown;