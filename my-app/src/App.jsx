import React, { useState, useEffect } from 'react';

import Logo from "./logo.png"
const App = () => {

  const URL = "https://disease.sh/v3/covid-19/all"

  const [data, setData] = useState([]);


  useEffect(() => {
    fetch(URL)
      .then((data) => data.json())
      .then(res => setData(res))
      .catch((err) => console.log(err))
  }, [])

  console.log(data);


  // const data=new Date();

  return (
    <div className="flex justify-center card">
      <img src={Logo} className="logo" />

      {data.active}

      <p>Mavjud mamlakatlar:{data.affectedCountries} ta</p>
      <p>Holatlar: {data.cases} ta</p>
      <p>Hozirdagacha :{data.population}</p>
      <p>O'limlar jami:{data.deaths}</p>
      <p>Sog'ayib ketganlar :{data.recovered}</p>
      <p>Bugungi holatlar:{data.todayCases}</p>
      <p>Bugungi o'limlar:{data.todayDeaths}</p>
      <p>Bugun sog'ayganlar {data.todayRecovered}</p>

{/* <h4>{}</h4> */}
    </div>

  );
};

export default App;

