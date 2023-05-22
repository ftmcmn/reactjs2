import React, { useState } from "react";
import { Form, Table } from "react-bootstrap";
import data from "./country.json";

const CountryFilter = () => {
  const [country, setCountry] = useState(data);

  const [search, setSearch] = useState("");

  React.useEffect(() => {
    const arr = data.filter((item) =>
      item.name.toLowerCase().includes(search.toLowerCase())
    );
    setCountry(arr);
  }, [search]);

  return (
    <div className="p-5">
      <Form.Control
        type="text"
        placeholder="Search"
        className="mb-3"
        onChange={(e) => setSearch(e.target.value)}
      />

      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>Country Name</th>
            <th>Country Code</th>
          </tr>
        </thead>
        <tbody>
          {country.map((item, index) => (
            <tr key={item.code}>
              <td>{index + 1}</td>
              <td>{item.name}</td>
              <td>{item.code}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default CountryFilter;
