import React from 'react';
import Service from './Service';

const  Projects = () => {
  const data = [
    {
      id: 12345,
      name: "Onkar"
    }
  ];

  return (
    <>
      <h1>Hello</h1>
      {data.map((item) => (
        <div key={item.id}>
          <h1>{item.id}</h1>
          <h1>{item.name}</h1>
        </div>
      ))}
      <Service data={data} />
    </>
  );
}

export default Projects;
                                                                                                                                                                                                                                                                                                                          