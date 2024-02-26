import './App.css';
import Header from './sections/Header'
import SearchSection from './sections/SearchSection';
import ChatSection from './sections/chat/ChatSection';
import ProfileSection from './sections/ProfileSection';
import SigninForms from './forms/SigninForm';
import SignupForms from './forms/SignupForm';



 
function App() {
  const userId="h ";
  return (
    <div className="App">
      <ProfileSection userId={userId}/>

    <Header />
    <SearchSection />
    
    <ChatSection /> 
     
    
   
    </div>
  );

}


export default App;
