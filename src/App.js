import React from 'react';
import { ChatList, Contacts } from './pages';
import { Header, BottomBar, Container } from 'components';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Container>
			  <Header />
        <Route exact path='/' component={ChatList} />
        <Route exact path='/contacts' component={Contacts} />
			  <BottomBar />
      </Container>
    </Router>
  );
}

export default App;
