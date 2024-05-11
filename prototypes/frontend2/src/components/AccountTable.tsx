import { fetchData, requestRanking } from "../api/infer";
import { BankingProducts } from "@/models/gen/banking";
import PreferenceSelector from "./PreferenceSelector";
import React, { useState, useEffect } from "react";

type Products = {
  headers: string[];
  data: any;
  alias: any;
  index: string[];
  weight: string[];
};

type ColumnScoreMap = {
  [columnName: string]: number;
};

const AccountTable = () => {
  const [data, setData] = useState<Products | null>(null);
  const [selectedPreferences, setSelectedPreferences] = useState({});
  const [scores, setScores] = useState<ColumnScoreMap | null>(null);
  const [sortedData, setSortedData] = useState<Products | null>(null);
  const [sortedIndices, setSortedIndices] = useState<string[]>([]);

  useEffect(() => {
    console.log("fetching data");
    fetchData()
      .then((d) => {
        console.log("got d", d);
        console.log("fetched data");
        setData(d);
      })
      .catch((e) => {
        console.error("failed", e);
      });
  }, []);

  const handlePreferenceChange = (item: any, preference: any) => {
    setSelectedPreferences((prevPreferences) => ({
      ...prevPreferences,
      [item]: preference,
    }));
  };

  useEffect(() => {
    try {
      requestRanking(selectedPreferences)
        .then((d) => {
          // check length
          if (d.length <= 0) {
            console.error("no scores");
            return;
          }
          let columnScoreMap: ColumnScoreMap = {};
          console.log("runing d", d);
          console.log(d);
          d.forEach((v: any, index: number) => {
            columnScoreMap[v[0]] = parseFloat(v[1].toFixed(2));
          });
          console.log(columnScoreMap);
          setScores(columnScoreMap);
        })
        .catch((e) => {
          console.error(e);
        });
    } catch (e) {
      console.error(e);
    }
  }, [selectedPreferences]);

  useEffect(() => {
    if (data && scores) {
      const sortedIndices = [...data.headers].sort(
        (a, b) => scores[b] - scores[a],
      );
      console.log("sorted indices are", sortedIndices);
      setSortedIndices(sortedIndices);
    }
  }, [data, scores]);

  return (
    <div className="mx-auto overflow-scroll ">
      Please Select Your Preference Ranking on Each Column
      <table className="table-auto bg-white border text-black border-gray-300 shadow-sm rounded-lg">
        <thead className="bg-gray-200">
          <tr>
            <th className="px-4 py-2">Ranking</th>
            <th className="px-4 py-2">Account</th>
            <th className="px-4 py-2">Your Computed Alignment Score</th>
            {data?.index.map((item, i) => (
              <th key={item} className="px-4 py-2 text-center">
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: i > 2 ? "center" : "flex-start",
                  }}
                >
                  <div style={{ alignSelf: "flex-start" }}>
                    {data?.alias[item]}
                  </div>
                  {i > 2 && (
                    <div className="text-sm text-gray-500 ml-2">
                      <PreferenceSelector
                        onChange={(preference) =>
                          handlePreferenceChange(item, preference)
                        }
                      />
                    </div>
                  )}
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data?.headers.map((header, i) => (
            <tr key={header} className="border-b border-gray-300">
              <td className="text-xl font-bold"> {i} </td>
              <td className="px-4 py-2 font-medium">{header}</td>
              <td className="text-xl font-bold">
                {scores && <div>{scores[header]}</div>}{" "}
              </td>
              {data?.data.map((item: any, j: number) => (
                <td key={j} className="px-4 py-2">
                  {data?.data[j][i]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AccountTable;
