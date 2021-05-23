import React, { Component } from 'react';
import { Container, Button } from 'semantic-ui-react'

class MainContainer extends Component {
  render() {
    return (
      <Container>i am MainContainer
        <Button primary>hello</Button>
      </Container>
    );
  }
}

export default MainContainer;