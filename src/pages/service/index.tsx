import React from 'react';
import { useData } from '../../api/index';
import { useLocation } from 'react-router-dom';




function ExampleComponent() {
  const { isLoading, isError, data, error } = useData();
  const location = useLocation();
  if (isLoading) {
    return <div>Loading...</div>;
  }

  // if (isError) {
  //   return <div>Error: {error.message}</div>;
  // }

  return (
    <div>
      <h1>Data:</h1>
      <h2>Current Pathname: {location.pathname}</h2>
      <pre>{data.map((item:any) => JSON.stringify(item))}</pre>
    </div>
  );
}

export default ExampleComponent;
