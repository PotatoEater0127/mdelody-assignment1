import { useState } from "react";
import Header from "./components/Header.component";
import Search from "./components/Search.component";
import Table from "./components/Table.component";
import DataContext from "./contexts/DataContext";

function App() {
  const [data, setData] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [page, setPage] = useState(0);

  return (
    <div className="App">
      <DataContext.Provider
        value={{
          context: { data, searchValue, page },
          setContext: { setData, setSearchValue, setPage },
        }}
      >
        <Header />
        <Search />
        <Table />
      </DataContext.Provider>
    </div>
  );
}

export default App;
