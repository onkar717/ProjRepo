import React from 'react';

const Service = ({data}) => {
  // const { data } = props;
  console.log(data);

  return (
    <>
      <h1>Service</h1>
        <div>
          <h1>{data.id}</h1>
          <h1>{data.name}</h1>
        </div>
    </>
  );
}

export default Service;
