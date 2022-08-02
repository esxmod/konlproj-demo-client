import apiClient from './apiClient';

export type getPredictSAResponse = { result: number[] };

export const getPredictSA = (query: string) => {
  return apiClient.post<getPredictSAResponse>('/api/predict/sa', { query });
};
