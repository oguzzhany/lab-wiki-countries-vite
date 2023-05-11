import "./App.css";
import { useState } from "react";
import countriesJson from "./countries.json";
import CountriesList from "./components/CountriesList";
import CountryDetails from "./components/CountryDetails";
import Navbar from "./components/Navbar";
import {
  Link,
  NavLink,
  useParams,
  useSearchParams,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  const [countries, setCountries] = useState(countriesJson);
  return (
    <div className="App">
      <>
        <Navbar />
        <CountriesList countries={countries} />
        <Routes>
          {/* <Route path="/" element={<CountriesList countries={countries} />} /> */}
          <Route
            path="/:countryId"
            element={<CountryDetails countries={countries} />}
          />
        </Routes>
      </>
    </div>
  );
}

export default App;
