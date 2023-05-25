import axios from "axios";
import React, { useEffect, useState } from "react";
import { Spinner, Table } from "react-bootstrap";

const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);

  const loadData = async () => {
    const resp = await axios.get("https://restcountries.eu/rest/v2");
    console.log(resp.data);
    setCountries(resp.data);
  };

  useEffect(() => {
    setTimeout(() => {
      loadData();
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <Table>
      {loading && <Spinner animation="border" variant="primary" />}
      <thead>
        <tr>
          <th>#</th>
          <th>Bayrak</th>
          <th>Ülke</th>
          <th>Nüfus</th>
          <th>Başkent</th>
        </tr>
      </thead>
      <tbody>
        {countries.map((country, index) => (
          <tr index={index}>
            <td>{index + 1}</td>
            <td>{country.flag}</td>
            <td>{country.name}</td>
            <td>{country.population}</td>
            <td>{country.capital}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default Countries;
