import React, { useState, useEffect } from 'react';
import { TextArea, Result } from '../components';
import { useAppSelector, useAppDispatch } from '../app/hooks';
import { selectHome, fetchPredict, resetRequest } from '../reducers/home';

export interface HomeContainerProps {}

function HomeContainer(props: HomeContainerProps) {
  console.debug('+ HomeContainer');

  const dispatch = useAppDispatch();
  const home = useAppSelector(selectHome);
  const [query, setQuery] = useState('');

  useEffect(() => {
    if (home.status === 'done' && query !== home.query)
      dispatch(resetRequest());
    if (home.status === 'idle' && query.length) dispatch(fetchPredict(query));
  }, [dispatch, home.query, home.status, query]);

  return (
    <div className='main-container'>
      <TextArea setValue={setQuery} />
      <Result state={home} query={query} />
    </div>
  );
}

export default HomeContainer;
