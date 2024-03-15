import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "../styles/styles.css";
import SoccerField from '../assets/SoccerField.jpg';
import PlayerCircle from './PlayerCircle';


const TeamManagement: React.FC = () => {

    const [player, setPlayer] = useState<any[]>([]);
    const [lineup, setLineUp] = useState<any[]>([]);

    //get all the players in a state
    const populatePlayers = async () => {
        console.log("Call populate players");
        const res = await axios.get('/api/players')

        setPlayer(res.data._embedded.players);

        console.log(res.data._embedded);    
    }

    const addToLineUp = (name : string, e: React.MouseEvent<HTMLButtonElement>) => {
        const tempArr = [...lineup]
        const playerInLineUp = {playerCircleName : name}
        tempArr.push(playerInLineUp);
        setLineUp(tempArr);
    }

    const removeFromLineUp = (e: React.MouseEvent<HTMLButtonElement>) => {

    }
    

    useEffect(() => {
        populatePlayers();
    }, []);

    return (
        <>
            <div className='container-fluid team-management-content flex-column'>           

                {/* Want a carousel of players at the bottom of the page
                <div className='container'>
                    <div className='row flex-nowrap overflow-auto'>
                        {
                            player.map((player, index ) => {
                                return <div className="card" style={{height : '500px', width : '200px'}}>
                                    <img src={player.imageUrl} className="card-img-top" alt="playerImage" style={{}}/>
                                    <div className="card-body text-center">
                                        <h5 className="card-title">{player.lastName}</h5>
                                        <h5 className='card-title'>{player.jerseyNumber}</h5>
                                        <button onClick={(e) => addToLineUp(player.name, e)}>Add</button>
                                        <button onClick={(e) => addToLineUp(player.name, e)}>Remove</button>
                                    </div>
                                </div>
                            })
                        }
                    </div>
                </div> */}
                <PlayerCircle/>
            </div>

            <div className='container-fluid'>
                <div className="scrollable-container">
                    <div className="scrollable-content">
                        {
                            player.map((player, index ) => {
                                return <div className='card-col'> 
                                    <div className="card card-style">
                                        <img src={player.imageUrl} className="card-img-top" alt="playerImage" style={{}}/>
                                        <div className="card-body text-center">
                                            <h5 className="card-title">{player.lastName}</h5>
                                            <h5 className='card-title'>{player.jerseyNumber}</h5>
                                            <button onClick={(e) => addToLineUp(player.name, e)}>Add</button>
                                            <button onClick={(e) => addToLineUp(player.name, e)}>Remove</button>
                                        </div>
                                    </div>
                                </div>
                            })
                        }
                    </div>
                </div>
            </div>
        </>
  );
};

export default TeamManagement;