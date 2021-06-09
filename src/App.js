
function App() {
  return (
    <div className="App">
      <h1>Hacker News Rest API</h1>
      <div>
        <input type="text" name="" id="" />
      </div>
      <div>
        <input type="submit" value="Search" />
      </div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Author</th>
            <th>Comments</th>
            <th>Title</th>
            <th>URL</th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>16582136</td>
            <td>Cogito</td>
            <td>436</td>
            <td>Stephen Hawking has died</td>
            <td>http://www.bbc.com/news/uk-43396008</td>
            <td>
              <button>delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default App;
