import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './sections/Header'
import SearchSection from './sections/SearchSection';
import OtherProfiles from './sections/OtherProfiles';
import ChatSection from './sections/ChatSection';
import ProfileSection from './sections/ProfileSection';
import MemeSection from './sections/MemeSection';
import SigninForms from './forms/SigninForm';
import SignupForms from './forms/SignupForm';




function App() {
  return (
    <div className="App">
    <Header />
    <SearchSection />
    <OtherProfiles />
    <ChatSection /> 
    <ProfileSection />
    <MemeSection />
    <SigninForms />
    <SignupForms />
    </div>
  );
}


export default App;
