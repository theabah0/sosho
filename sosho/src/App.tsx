// App.tsx
//import './App.css'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import ChatSection from './sections/chat/ChatSection'
import Home from './_root/pages/Home'; // Example: Import your About component
import MyProfile from './sections/MyProfile';

function App() {
 
  return (
    <Router>
      <div>
       
        
        <Routes>
          <Route path="/chat" element={<ChatSection/>} />
          <Route path="/myprofile" element={<MyProfile/>} />
          <Route path="/" element={<Home/> } />
          </Routes>
       
       </div>


    </Router>
  );
}

export default App;

