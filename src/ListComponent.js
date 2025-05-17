import React from "react";

const ListComponent = ({ items, renderItem, loading=false }) => {
  if (loading) {
    return (
      <div className="cardGrid">
        {Array.from({length: 6}).map((_,index) => (
          <div className=
          "card placeholder" key={index}>
            <div className="placeholder-title" />
            <div classsName="placeholder-line" />
            <div className="placeholder-line short" />
          </div>
        )
      
      )}
      </div>
    );
  }
  if(!items || items.length === 0){
    return <p>No items food. </p>
  }
  return (
    <div className="cardGrid">{items.map(renderItem)}
    </div>
  );
};

export default ListComponent;
