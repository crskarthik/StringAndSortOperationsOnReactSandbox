import React from "react";

function CountryPrint() {
  var list = {
    countries: [
      {
        population: 3000000,
        name: "India"
      },
      {
        population: 3800000,
        name: "China"
      },
      {
        population: 8900000,
        name: "USA"
      },
      {
        population: 2100000,
        name: "RUS"
      }
    ]
  };
  list.countries.sort((a, b) => {
    if (a.population === b.population) return 0;
    return b.population > a.population ? 1 : -1;
  });
  var temp = list.countries.map((x, i) => <p>{x.name}</p>);
  return <div>{temp}</div>;
}
export default CountryPrint;
