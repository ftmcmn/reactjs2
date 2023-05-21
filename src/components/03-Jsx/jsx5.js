import React from "react";

const Jsx5 = () => {
  const user = ["John", "Doe", "Jane", "Doe"];
  const cities = ["London", "New York", "Paris", "Berlin", "Madrid", "Yozgat"];

  return (
    <div>
      <ul>
        {user.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <select>
        {cities.map((city, index) => (
          <option key={index}>{city}</option>
        ))}
      </select>
    </div>
  );
};

export default Jsx5;
