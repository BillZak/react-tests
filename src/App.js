import React, { useEffect, useState } from "react";
import DataTable from "./DataTable";

const App = () => {
  const [item, setItem] = useState([]);
  const [loading, setLoading] = useState(false);
  const [q, setQ] = useState("");

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=20")
      .then((response) => response.json())
      .then((response) => setItem(response.results))
      .then((response) => setLoading(true));
  }, []);

  function search(rows) {
    return rows.filter(
      (row) => row.location.country.toLowerCase().indexOf(q) > -1
    );
  }

  if (!loading) {
    return <div>Loading ...</div>;
  } else {
    return (
      <div>
        <div
          style={{ marginBottom: 30, marginTop: 30 }}
          class="input-group flex-nowrap"
        >
          <span class="input-group-text" id="addon-wrapping">
            Search Here
          </span>
          <input
            type="text"
            value={q}
            onChange={(e) => setQ(e.target.value)}
            class="form-control"
            aria-describedby="addon-wrapping"
          />
        </div>

        <DataTable item={search(item)} />
      </div>
    );
  }
};

export default App;
