import apiClient from './apiClient';

export type PredictSAResponse = { result: number[] };

export const predictSA = (query: string) => {
  return apiClient.post<PredictSAResponse>('/api/predict/sa', { query });
};

export type PredictSumResponse = { result: string[] };

export const predictSum = (query: string) => {
  return apiClient.post<PredictSumResponse>('/api/predict/sum', { query });
};
