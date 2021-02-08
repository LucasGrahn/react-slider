import React, { useMemo } from 'react';
import GlobalStyle from './styles/global';
import Slider from './components/Slider/Slider';
import { SliderItem } from './types/Slider';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
`;

const App: React.FC = () => {
  const defaultItems : Array<SliderItem> = useMemo(() => [
    {
      path: 'https://picsum.photos/1280/720',
      label: 'What an amazing image!',
      alt: 'amazing image',
    },
    {
      path: 'https://picsum.photos/1920/1080',
      label: 'I wonder what can be seen here',
      alt: 'wonder',
    },
    {
      path: 'https://picsum.photos/960/544',
      label: 'Sadly the last picture...',
      alt: 'last picture',
    },
  ], []);

  return (
    <React.Fragment>
      <GlobalStyle/>
      <Container>
        <h1>React Carousel Demo</h1>
        <Slider items={defaultItems}/>
      </Container>
    </React.Fragment>
  );
};

export default App;
