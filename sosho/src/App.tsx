import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navigation from './Navigation';
import ChatSection from './sections/chat/Chatsection'
import ProfileSection from './sections/Profilesection'; // Example: Import your About component

function App() {
  return (
    <Router>
      <div>
        <Navigation />
        <Switch>
          <Route path="/chat" component={Chatsection} />
          <Route path="/" component={ProfileSection} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;