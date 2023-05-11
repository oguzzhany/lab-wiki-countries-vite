import {
  Link,
  NavLink,
  useParams,
  useSearchParams,
  Routes,
  Route,
} from "react-router-dom";

function CountriesList({ countries }) {
  return (
    <div className="row">
      <div className="col-5 divStyle">
        {countries.map((country) => (
          <div className="list-group">
            <Link
              key={country.alpha3Code}
              className="list-group-item list-group-item-action"
              to={`/${country.alpha3Code.toUpperCase()}`}
            >
              <img
                src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}
                alt={country.alpha2Code}
              />
              {country.name.common}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CountriesList;
