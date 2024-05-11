import { useState } from "react";

type TableProps = {
  maxRows: number;
  rows: any; // TODO: Fix
};

// order by rank
function Table(props: TableProps) {
  const [rows, setRows] = useState();
  const [headers, setHeaders] = useState(["asdf", "1"]);
  return (
    <div className="table">
      <div classname="columns">
        <tr>
          {headers.forEach((item) => (
            <th>{item}</th>
          ))}
        </tr>
      </div>
      <div className="rows">
        {rows.map((item, index) => (
          <div className="row m-10 p-10" key={index}></div>
        ))}
      </div>
    </div>
  );
}
