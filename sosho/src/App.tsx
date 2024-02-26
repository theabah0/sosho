// App.tsx
//import './App.css'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Navigation from './Navigation';
import ChatSection from './sections/chat/ChatSection'
import Home from './_root/pages/Home'; // Example: Import your About component

function App() {
 
  return (
    <Router>
      <div>
       
        
        <Routes>
          <Route path="/chat" element={<ChatSection/>} />
          <Route path="/" element={<Home/> } />
          </Routes>
       <Navigation />
       </div>
    </Router>
  );
}

export default App;

