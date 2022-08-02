import React, { useState, useEffect } from 'react';
import { TextArea, SumResult } from '../components';
import { useAppSelector, useAppDispatch } from '../app/hooks';
import { selectState, fetchPredict, resetRequest } from '../reducers/sum';

export interface SumContainerProps {}

function SumContainer(props: SumContainerProps) {
  const dispatch = useAppDispatch();
  const state = useAppSelector(selectState);
  const [query, setQuery] = useState('');

  useEffect(() => {
    if (state.status === 'done' && query !== state.query) dispatch(resetRequest());
    if (state.status === 'idle' && query.length) dispatch(fetchPredict(query));
  }, [dispatch, state.query, state.status, query]);

  return (
    <div className='main-container'>
      <TextArea setValue={setQuery} placeholder='요약할 내용을 입력하세요.' />
      <SumResult state={state} query={query} />
    </div>
  );
}

export default SumContainer;
