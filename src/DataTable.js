import React from "react";

const DataTable = ({ item }) => {
  return (
    <table class="table table-striped table-hover">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Gender</th>
          <th scope="col">Name</th>
          <th scope="col">Email</th>
          <th scope="col">Location</th>
        </tr>
      </thead>
      <tbody>
        {item.map((item, index) => (
          <tr key={index}>
            <th scope="row">{index + 1}</th>
            <td>{item.gender}</td>
            <td>{item.name.first + " " + item.name.last}</td>
            <td>{item.email}</td>
            <td>{item.location.country}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DataTable;
