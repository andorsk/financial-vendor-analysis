// components/Table.js

function Table({ data }) {
  return (
    <table
      className="mb-10"
      style={{ width: "100%", borderCollapse: "collapse" }}
    >
      <thead>
        <tr className="m-10">
          <th className="px-5">Rank</th>
          <th>Recommendation</th>
          <th>Vendor</th>
          <th>Best For</th>
          <th>Features</th>
          <th>Cons</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr className="m-10 pb-10" key={index}>
            <td className="p-3 mx-5">{index}</td>
            <td className="p-3">Good Fit</td>
            <td className="p-3">{item.Vendor}</td>
            <td className="p-3">{item.BestFor}</td>
            <td className="p-3">{item.Features}</td>
            <td className="p-3">{item.Cons}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
