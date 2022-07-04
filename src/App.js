import React, { useState, useEffect } from "react";
import Tab from "./Tab";

const url = "https://course-api.com/react-tabs-project";

function App() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [index, setIndex] = useState(0);

  //    Data Fetching

  const getUsers = async () => {
    setIsLoading(true);
    const response = await fetch(url);
    const user = await response.json();
    setUsers(user);
    setIsLoading(false);
  };

  useEffect(() => {
    getUsers();
  }, []);

  //  Component Return

  if (isLoading || users.length < 1) {
    return <h1>Loading...</h1>;
  }
  return (
    <>
      <section className="section">
        <div className="title">
          <h2>Experience</h2>
          <div className="underline"></div>
        </div>
        <div className="jobs-center">
          <div className="btn-container">
            <button
              className={`job-btn ${index === 0 && "active-btn"}`}
              onClick={() => setIndex(0)}
            >
              Tommy
            </button>
            <button
              className={`job-btn ${index === 1 && "active-btn"}`}
              onClick={() => setIndex(1)}
            >
              BigDrop
            </button>
            <button
              className={`job-btn ${index === 2 && "active-btn"}`}
              onClick={() => setIndex(2)}
            >
              Coker
            </button>
          </div>
          <article className="job-info">
            <Tab users={users} isLoading={isLoading} index={index} />
          </article>
        </div>
        <button className="btn" type="button">
          more info
        </button>
      </section>
    </>
  );
}

export default App;
