import React from "react";

const DataList = ({ uniqueID, list }) => {
  return (
    <datalist id={uniqueID}>
      {list.map((obj) => {
        const { id, name } = obj;
        return <option key={id} value={name} />;
      })}
    </datalist>
  );
};

export default DataList;
