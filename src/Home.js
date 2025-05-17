import React from "react";
import { Link } from "react-router-dom";
import DataHandler from "./DataHandler";
import ListComponent from "./ListComponent";

const Home = ({ data, loading, error }) => {
  const previewItems = data?.slice(0, 5);
  return (
    <div className="body-container">
      <div className="home-container">
        <h1>Welcome Geeks</h1>
        <p>
          This is a simple application that fetches data from an API and
          displays it as a List items.
        </p>
        <p>
          You can click on the <span className="startBtn">
          <Link to="/views">Get Started</Link>
        </span> to view the data or sign up
          for an account.
        </p>

        <DataHandler loading={loading} error={error} data={data}>
          {previewItems?.length > 0 && (
            <>
              <h3>Latest Posts Preview:</h3>
              <ListComponent
                items={previewItems}
                renderItem={(item) => (
                  <div className="card" key={item.id}>
                    <h4 className="card-title">{item.title}</h4>
                    <p className="card-author">By {item.user.name}</p>
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Read more →
                    </a>
                  </div>
                )}
              />
            </>
          )}
        </DataHandler>

        
      </div>
    </div>
  );
};

export default Home;
