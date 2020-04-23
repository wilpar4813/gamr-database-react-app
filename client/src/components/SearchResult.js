import React from 'react';
import {Col, Card, Media } from 'reactstrap';

const SearchResult = (props) => {

  return props.results.map(
    (result) => (
      <Col className='mb-3' sm='12'>
        <Media className='border-bottom'>
          <Media left href={`/games/${result.id}`}>
            <Media object data-src={result.cover.url} alt={`${result.name} cover image`} />
          </Media>
          <Media body>
            <Media heading>
              {result.name}
            </Media>
          {result.summary}
          </Media>
        </Media>
    </Col>
    )
  )
}

export default SearchResult;