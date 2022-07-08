// import apiClient from './apiClient';

export type getPredictResponse = { result: number[] };

export const getPredict = (query: string) => {
  console.debug('[API] getPredict', query);

  // return apiClient.post<getPredictResponse>('/api/predict', { query });

  // A mock function to mimic making an async request for data

  const r = Math.random();
  const result = [r, 1 - r];

  return new Promise<getPredictResponse>((resolve) =>
    setTimeout(() => resolve({ result }), 500),
  );
};
