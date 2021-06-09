import Header from "./components/Header.component";
import Search from './components/Search.component'
import Table from './components/Table.component'
import DataContext from './contexts/DataContext'

function App() {
  return (
    <div className="App">
      <DataContext.Provider value={{}}>
        <Header />
        <Search/>
        <Table />
      </DataContext.Provider>
    </div>
  );
}

export default App;
