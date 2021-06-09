import React from "react";

export default function Table(props) {
  const rows = props.rows ?? [];
  return (
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
        {rows.map((row) => (
          <tr>
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
  );
}
