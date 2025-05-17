import React from "react";
import { Link } from "react-router-dom";

const Home = ({ data, loading, error }) => {
  return (
    <div className="body-container">
      <div className="home-container">
        <h1>Welcome Geeks</h1>
        <p>
          This is a simple application that fetches data from an API and
          displays it as a List items.
        </p>
        <p>
          You can navigate to the "Get Started" page to view the data or sign up
          for an account.
        </p>
        <div className="startBtn">
          <Link to="/views">Get Started</Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
