import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "../styles/styles.css";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faTrash, faEdit} from '@fortawesome/free-solid-svg-icons';

const Schedule: React.FC = () => {

    const [games, setGames] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    // get all games inside of database
    const getGames = async () => {
        console.log("Grabbing games");
        setLoading(true)
        const res = await axios.get('/api/games')

        setGames(res.data._embedded.games);
        setLoading(false)
        console.log(res.data._embedded);    
    }

    // delete a game from list
    const deleteGame = async (e: React.MouseEvent<HTMLButtonElement>, id : string) => {
        e.preventDefault();
                
        //make a call to api 
        const res = await axios.delete('api/games/' + id).then(response => {
            console.log("Deleted post with id: " + id);
        }).catch(error => {
            console.error(error);
        });

        //refresh the page by getting all players again
        getGames();
    }
    
    useEffect(() => {
        getGames();
    }, []);


    return (
        <div className='container-fluid'>
            <h1>Schedule</h1>
            <hr></hr>

            <h3>Next Match</h3> 
            {
                loading ? 
                <h5>Still Loading</h5>
                : 
                <div className='containter text-center'>
                    <div className='row'>
                        <div className='col'>
                            <h5>My Team Vs. {games[0].opponent}</h5>
                            <h6>{games[0].time}<br/>{games[0].date}</h6>
                            <h6>{games[0].location}</h6>
                        </div>
                    </div>
                </div>

            }

            <Link to={'/schedule/addmatch'} style={{ backgroundColor: '#86C232', color : 'white', textDecoration : 'none', padding : '5px', borderRadius : '5%', marginBottom : '15px'}}><FontAwesomeIcon icon={faPlus}/>Add</Link>

            <table className="table table-hover">
                <tbody>
                    {
                        games.map((game, index) => {

                            return(
                            <tr>
                                <td>Game {index + 1}</td>
                                <td>My Team vs. {game.opponent}<br/>Score: {game.score}</td>
                                <td>{game.date}<br/>{game.time}</td>
                                <td>{game.gameId}</td>
                                <td>
                                    <button className='delete-game' onClick={(e) => deleteGame(e, game.gameId)}><FontAwesomeIcon icon={faTrash}></FontAwesomeIcon></button>
                                    <Link to={`editGame/${game.gameId}`} style={{ backgroundColor: '#86C232', color : 'white', padding : '11px', border: 'none', borderRadius : '5%', marginBottom : '15px'}}><FontAwesomeIcon icon={faEdit}/></Link>
                                </td>
                            </tr>)
                        })
                    }
                </tbody>
            </table>

        </div>
    );
};

export default Schedule;

