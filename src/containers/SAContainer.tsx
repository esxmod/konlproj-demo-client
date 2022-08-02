import React, { useState, useEffect } from 'react';
import { TextArea, SAResult } from '../components';
import { useAppSelector, useAppDispatch } from '../app/hooks';
import { selectSA, fetchPredictSA, resetRequest } from '../reducers/sa';

export interface SAContainerProps {}

function SAContainer(props: SAContainerProps) {
  const dispatch = useAppDispatch();
  const sa = useAppSelector(selectSA);
  const [query, setQuery] = useState('');

  useEffect(() => {
    if (sa.status === 'done' && query !== sa.query) dispatch(resetRequest());
    if (sa.status === 'idle' && query.length) dispatch(fetchPredictSA(query));
  }, [dispatch, sa.query, sa.status, query]);

  return (
    <div className='main-container'>
      <TextArea setValue={setQuery} />
      <SAResult state={sa} query={query} />
    </div>
  );
}

export default SAContainer;
