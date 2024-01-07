import React from 'react'
import Main from '@/components/Main';
import Row from '@/components/Row';
import requests from './api/requests';

const MainHome = () => {
  return (
    <>
      <Main />
      <Row rowID="1" title='Upcoming' fetchURL={requests.requestUpcoming} />
      <Row rowID="2" title='Top Rated' fetchURL={requests.requestTopRated} />
      <Row rowID="3" title='Trending Movies' fetchURL={requests.requestTrending} />
      <Row rowID="4" title='Trending Shows' fetchURL={requests.requestTrendingTv} />
      <Row rowID="5" title='Popular' fetchURL={requests.requestPopular} />
    </>
  )
}
export default MainHome