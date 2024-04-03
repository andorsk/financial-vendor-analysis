// apiService.test.ts
import axios from "axios";
import { getData, postData } from "./api";

// Mocking axios
jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

// Test data
const testGetData = { message: "Success", data: [1, 2, 3] };
const testPostData = { message: "Data received", data: { id: 1 } };

describe("API Service", () => {
  it("fetches data successfully from /data GET endpoint", async () => {
    mockedAxios.get.mockResolvedValue({ data: testGetData });

    const result = await getData();

    expect(mockedAxios.get).toHaveBeenCalledWith(
      "https://example.com/api/data",
    );
    expect(result).toEqual(testGetData);
  });

  it("sends data successfully to /data POST endpoint", async () => {
    mockedAxios.post.mockResolvedValue({ data: testPostData });
    const payload = { sample: "data" };

    const result = await postData(payload);

    expect(mockedAxios.post).toHaveBeenCalledWith(
      "https://example.com/api/data",
      payload,
    );
    expect(result).toEqual(testPostData);
  });
});
