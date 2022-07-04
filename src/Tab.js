import React from "react";
import { FaAngleDoubleRight } from "react-icons/fa";

const Tab = ({ users, isLoading, index }) => {
  if (isLoading || users.length < 1) {
    return <div></div>;
  } else {
    const { title, company, dates, duties, id } = users[index];
    return (
      <>
        <h3>{title}</h3>
        <h4>{company}</h4>
        <p className="job-date">{dates}</p>
        <div className="job-desc">
          <FaAngleDoubleRight className="job-icon" />
          <p>{duties[0]}</p>
        </div>
        <div className="job-desc">
          <FaAngleDoubleRight className="job-icon" />
          <p>{duties[1]}</p>
        </div>
        <div className="job-desc">
          <FaAngleDoubleRight className="job-icon" />
          <p>{duties[2]}</p>
        </div>
      </>
    );
  }
};
export default Tab;
