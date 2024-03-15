import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faTrash, faEdit} from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import testimage from '../assets/testimage.jpg';
import '../styles/styles.css';

const SquadTable: React.FC = () => {

    const [playerData, setPlayerData] = useState<any[]>([]);

    const deletePlayer = async (e: React.MouseEvent<HTMLButtonElement>, id : string) => {
        e.preventDefault();
        
        //slice the url for the api call
        var str = id.slice(21);
        console.log("New Url after slice: " + str);
        
        //make a call to api 
        const res = await axios.delete(str).then(response => {
            console.log("Deleted post with id: " + str);
        }).catch(error => {
            console.error(error);
        });

        //refresh the page by getting all players again
        getPlayers();
    }

    const getPlayers = async () => {
        console.log("calling api .. ");
        const res = await axios.get('/api/players')

        setPlayerData(res.data._embedded.players);

        console.log(res.data._embedded);    
    }                                          

    useEffect(() => {
        getPlayers();
    }, []);
      
    


  return (
    <div className='container squad-table'>
        <div className='container'>
            <div className='row'>
                <div className='btn-group'>
                    <a href='/addPlayer' style={{ backgroundColor: '#86C232', color : 'white', textDecoration : 'none', padding : '5px', borderRadius : '5%', marginBottom : '15px'}}>Add player <FontAwesomeIcon icon={faPlus} size='1x'/></a>
                </div>
            </div>
        </div>
        <table className="table table-hover">
            <thead>
                <tr>
                <th>#</th>
                <th>Image</th>
                <th>Name</th>
                <th>Jersey #</th>
                <th>DOB</th>
                <th>Test ID</th>
                <th>Status</th>
                <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    playerData.map((user, index) => {

                        var date = new Date(user.dateOfBirth);
                        var year = date.getUTCFullYear();
                        var month = date.getUTCMonth();
                        var day = date.getUTCDay();      
                        
                        var playerId = (user._links.player.href).slice(34);

                        return <tr key={index}>
                            <td>{index + 1}</td>
                            <td><img src={user.imageUrl != null ? user.imageUrl : testimage} className='img-fluid' style={{height : 50, width : 50, borderRadius : 50, }}/></td>
                            <td>{user.firstName + " " + user.lastName}</td>
                            <td>{user.jerseyNumber}</td>
                            <td>{month + "-" + day + "-" + year}</td>
                            <td>{user._links.player.href}</td>
                            <td>{playerId}</td>
                            <td className='button-cell'>
                                <div className="btn-group">
                                    <button className='deletePlayer' onClick={(e) => deletePlayer(e, user._links.player.href)}><FontAwesomeIcon icon={faTrash}></FontAwesomeIcon></button>
                                    <Link to={`editPlayer/${playerId}`} style={{ backgroundColor: '#86C232', color : 'white', padding : '11px', border: 'none', borderRadius : '5%', marginBottom : '15px'}}><FontAwesomeIcon icon={faEdit}/></Link>
                                </div>
                            </td>
                        </tr>
                    }) 
                }
            </tbody>
        </table>
    </div>
  );
};

export default SquadTable;