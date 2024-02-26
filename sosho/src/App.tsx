// App.tsx
//import './App.css'
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Navigation from './Navigation';
import ChatSection from './sections/chat/ChatSection'
import ProfileSection from './sections/ProfileSection'; // Example: Import your About component

function App() {
 
  return (
    <Router>
      <div>
        <Navigation />
        
          <Route path="/chat" element={<ChatSection/>} />
          <Route path="/" element={<ProfileSection  /> } />
        
      </div>
    </Router>
  );
}

export default App;

