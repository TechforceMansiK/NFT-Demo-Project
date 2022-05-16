import React, { useEffect, useState } from "react";
import getDummyData from "../services/DummyApi";

function DummyApi() {
  const [dummyData, setDummyData] = useState();
  useEffect(() => {
    getDummyData("dummy-api").then((response) => {
      if (response && response.data) {
        setDummyData(response.data);
      }
    });
  }, []);
  return (
    <>
      {dummyData ? (
        <>
          <ul>
            <h1>Technology</h1>
            <li>Blockchain - {dummyData.technology.blockchain}</li>
            <li>FrontEnd - {dummyData.technology.frontend}</li>
            <li>Backend - {dummyData.technology.backend}</li>
          </ul>
          <ul>
            <h1>Version</h1>
            <li>React - {dummyData.version.react}</li>
            <li>Java - {dummyData.version.java}</li>
          </ul>
        </>
      ) : (
        <h1> Not Data Found </h1>
      )}
    </>
  );
}

export default DummyApi;
