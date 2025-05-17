import React from "react";
import DataHandler from "./DataHandler"

const ListItems = ({ data, error, loading }) => {
  console.log({ data });
  return (
    <DataHandler loading={loading} error={error} data={data}>
      <ul className='listCard'>
        {data &&
          data.map((item) => {
            return <li key={item.id} >{item.title}</li>;
          })}
      </ul>
    </DataHandler>
  );
};

export default ListItems;
