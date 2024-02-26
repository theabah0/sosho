import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './sections/Header'
import SearchSection from './sections/SearchSection';
import OtherProfiles from './sections/OtherProfiles';
import ChatSection from './sections/chat/ChatSection';
import ProfileSection from './sections/ProfileSection';
import MemeSection from './sections/MemeSection';
import SigninForms from './forms/SigninForm';
import SignupForms from './forms/SignupForm';




function App() {
  const userId="h ";
  return (
    <div className="App">
      <ProfileSection userId={userId}/>

    <Header />
    <SearchSection />
    <OtherProfiles />
    <ChatSection /> 
     
    <MemeSection />
    <SigninForms />
    <SignupForms />
    </div>
  );
}


export default App;
