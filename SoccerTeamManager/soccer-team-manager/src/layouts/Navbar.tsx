import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

const Navbar: React.FC = () => {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-dark">
        
        <Link className="navbar-brand text-white" to="/">TeamTactix</Link>
        
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto mb-1">
            <li className="nav-item">
                <Link className="nav-link text-white" to="/teammanagement">Team Management</Link>    
            </li>
            <li className="nav-item active">
                <Link className="nav-link text-white" to="/squad">Squad</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link text-white" to="/schedule">Schedule</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link text-white" to="/news">News</Link>    
            </li>
            <li className="nav-item">
                <Link className="nav-link text-white" to="/news"><FontAwesomeIcon icon={faUser} size="1x" /></Link>    
            </li>
          </ul>
        </div>
      </nav>
    );
  };

export default Navbar;
  