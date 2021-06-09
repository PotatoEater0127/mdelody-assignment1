import {useState} from 'react'
import Header from "./components/Header.component";
import Search from './components/Search.component'
import Table from './components/Table.component'
import DataContext from './contexts/DataContext'

function App() {
  const [data, setData] = useState([]);

  return (
    <div className="App">
      <DataContext.Provider value={{data, setData}}>
        <Header />
        <Search/>
        <Table />
      </DataContext.Provider>
    </div>
  );
}

export default App;
