import React from "react";
import DataHandler from "./DataHandler";
import ListComponent from "./ListComponent";

const ListItems = ({ data, error, loading }) => {
  
  return (
    <DataHandler loading={loading} error={error} data={data}>
      <ListComponent
        items={data}
        renderItem={(item) => <li key={item.id}>{item.title}</li>}
      />
    </DataHandler>
  );
};

export default ListItems;
