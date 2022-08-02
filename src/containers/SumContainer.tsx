import React, { useState, useEffect } from 'react';
import { TextArea, SumResult } from '../components';
import { useAppSelector, useAppDispatch } from '../app/hooks';
import { selectSum, fetchPredictSum, resetRequest } from '../reducers/sum';

export interface SumContainerProps {}

function SumContainer(props: SumContainerProps) {
  const dispatch = useAppDispatch();
  const sum = useAppSelector(selectSum);
  const [query, setQuery] = useState('');

  useEffect(() => {
    if (sum.status === 'done' && query !== sum.query) dispatch(resetRequest());
    if (sum.status === 'idle' && query.length) dispatch(fetchPredictSum(query));
  }, [dispatch, sum.query, sum.status, query]);

  return (
    <div className='main-container'>
      <TextArea setValue={setQuery} placeholder='요약할 내용을 입력하세요.' />
      <SumResult state={sum} query={query} />
    </div>
  );
}

export default SumContainer;
