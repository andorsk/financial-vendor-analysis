// apiService.ts
import axios from "axios";

// Set the API base URL
const API_BASE_URL = process.env.API_BASE_URL || "https://localhost:3000";

// Interface for the data you might send in a POST request
interface PostData {
  [key: string]: any; // Replace 'any' with more specific type as needed
}

// Interface for the data you might expect to receive in a response
interface ResponseData {
  [key: string]: any; // Replace 'any' with more specific type as needed
}

// Function to make a GET request to the /data endpoint
export const getData = async (): Promise<ResponseData> => {
  try {
    const response = await axios.get(`${API_BASE_URL}/data`);
    return response.data;
  } catch (error) {
    throw new Error(`Failed to fetch data: ${error}`);
  }
};

// Function to make a POST request to the /data endpoint
export const postData = async (data: PostData): Promise<ResponseData> => {
  try {
    const response = await axios.post(`${API_BASE_URL}/data`, data);
    return response.data;
  } catch (error) {
    throw new Error(`Failed to post data: ${error}`);
  }
};
