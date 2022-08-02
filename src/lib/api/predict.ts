import apiClient from './apiClient';

export type getPredictSAResponse = { result: number[] };

export const getPredictSA = (query: string) => {
  return apiClient.post<getPredictSAResponse>('/api/predict/sa', { query });
};

export type getPredictSumResponse = { result: string[] };

export const getPredictSum = (query: string) => {
  return apiClient.post<getPredictSumResponse>('/api/predict/sum', { query });
};
