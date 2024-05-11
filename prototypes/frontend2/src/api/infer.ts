import { AccountFeatures, BankingProducts } from "@/models/gen/banking";

const API_URL = process.env.REACT_APP_API_URL || "http://127.0.0.1:5001";

export const requestRanking = async (data: any) => {
  const url = `${API_URL}/infer/ranking`;
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ data }),
  });
  return response.json();
};

export const fetchData = async (): Promise<any> => {
  const url = `${API_URL}/data`;
  const response = await fetch(url);
  const text = await response.text();
  const parsedText = JSON.parse(text);
  return parsedText;
};

export const fetchHealth = async () => {
  const url = `${API_URL}/health`;
  const response = await fetch(url);
  return response.json();
};
