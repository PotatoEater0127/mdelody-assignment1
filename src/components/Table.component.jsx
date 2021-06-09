import React, { useContext } from "react";
import DataContext from "../contexts/DataContext";

export default function Table(props) {
  const {
    context: { data },
  } = useContext(DataContext);


  
  const content = (
    <div>
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
          {data.map((row) => (
            <tr key={row.id}>
              <td>{row.id}</td>
              <td>{row.author}</td>
              <td>{row.comments}</td>
              <td>{row.title}</td>
              <td>{row.url}</td>
              <td>
                <button>delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        <button>Load More</button>
      </div>
    </div>
  );

  return data.length ? content : null;
}
