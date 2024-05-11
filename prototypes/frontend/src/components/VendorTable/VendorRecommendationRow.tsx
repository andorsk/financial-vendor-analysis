export type VendorRecommendationRow = {
  rank: string;
  name: string;
  description: string;
  fit: 0 | 1 | 2 | 3 | 4 | 5;
  features: string;
  cons: string;
};
