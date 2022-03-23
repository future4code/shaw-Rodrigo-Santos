import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

class App extends React.Component {
  render() {
    return (
      <MainContainer>
        <Post
          nomeUsuario={'paulinha'}
          fotoUsuario={'https://picsum.photos/50/50'}
          fotoPost={'https://picsum.photos/200/150'}
        />

        <Post
          nomeUsuario={'Pods1989'}
          fotoUsuario={'https://picsum.photos/id/1062/5092/3395'}
          fotoPost={'https://picsum.photos/id/1025/4951/3301'}
        />

        <Post
          nomeUsuario={'DaniCapai'}
          fotoUsuario={'https://picsum.photos/id/177/2515/1830'}
          fotoPost={'https://picsum.photos/id/160/3200/2119'}
        />
      </MainContainer>
    );
  }
}

export default App;
