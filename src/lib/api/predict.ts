import apiClient from './apiClient';

export type getPredictResponse = { result: number[] };

export const getPredict = (query: string) => {
  return apiClient.post<getPredictResponse>('/api/predict', { query });
};
