import React from 'react';

const Table = ({ data }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>id</th>
          <th>nombre</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td>{item.id}</td>
            <td>{item.nombre}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;