import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Navbar from './layouts/Navbar';
import Footer from './layouts/Footer';
import Dashboard from './components/Dashboard';
import Squad from './components/Squad';
import AddPlayerForm from './components/AddPlayerForm';
import TeamManagement from './components/TeamManagement';
import Schedule from './components/Schedule';
import EditPlayerForm from './components/EditPlayerForm';
import AddMatchForm from './components/AddMatchForm';
import EditGameForm from './components/EditGameForm';

const App: React.FC = () => {

  return (
    <Router>
      <div className="d-flex flex-column w-100" style={{ minHeight: '100vh' }}>
        <Navbar />
        <div className="flex-grow-1">
          <div className="container-fluid">
            <Routes>
              <Route path="/" element={<Dashboard/>} />
              <Route path="/squad" element={<Squad/>} />
              <Route path="/addPlayer" element={<AddPlayerForm/>} />
              <Route path="/teammanagement" element={<TeamManagement/>} />
              <Route path="/schedule" element={<Schedule/>} />
              <Route path="/schedule/addmatch" element={<AddMatchForm/>}/>
              <Route path="/schedule/:gameid" element={<AddMatchForm/>}/>
              <Route path="/schedule/editGame/:gameid" element={<EditGameForm/>}/>
              <Route path='squad/editPlayer/:id' element={<EditPlayerForm/>} />
              <Route path='/login' element={<Login/>} />
            </Routes>
          </div>
        </div>
        <Footer />
      </div>
       
    </Router>
  );
};

export default App;