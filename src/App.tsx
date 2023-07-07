
import './App.css'
import Navbar from './components/Navbar'
import Profile from './components/Profile'
import { Routes, Route } from 'react-router-dom';
import Feed from './pages/Feed';
import Header from './components/Header';

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path="/feed" element={<Feed />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
      <Navbar />
    </>
  )
}

export default App
