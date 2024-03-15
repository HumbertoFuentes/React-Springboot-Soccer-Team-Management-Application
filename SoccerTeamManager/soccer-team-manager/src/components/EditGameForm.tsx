import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const EditGameForm: React.FC = () => {

    //id of the player we have using params
    const { gameid } = useParams();
    const navigate = useNavigate();

    //states
    const [game, setGame] = useState<any>();
    const [isLoading, setIsLoading] = useState(true)
    const [formData, setFormData] = useState({
        score: '',
        opponent: '',
        time: '11:00:00',
        date: '2000-10-10',
        location: 'TBD',
        result: 'TBD',
        notes: '',
    });

    //we should also get the specific game
    const getGame = async () => {
        
        //test print
        console.log("Getting initial games from the edit game form");
        console.log(gameid)

        //set loading to wait for data
        setIsLoading(true)

        //make a call to get the specific player at the index
        const res = await axios.get(`/api/games/${gameid}`);

        //set player for edit player form
        setGame(res.data);

        //change loading state
        setIsLoading(false)

        //set player form data
        setFormData({...formData, 
            score : res.data.score, 
            opponent: res.data.opponent,
            time: res.data.time,
            date: res.data.date,
            location: res.data.location,
            result: res.data.result,
            notes: res.data.notes,
        })
    }

    useEffect(() => {
        getGame();
    }, []);
 
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
          ...prevState,
          [name]: value,
        }));
    };
    
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        //create data to post
        const gameDataPost = {
            score : formData.score,
            opponent : formData.opponent,
            time : formData.time,
            date : formData.date,
            location : formData.location,
            result : formData.result,
            notes : formData.notes,
            gameId : gameid
        }

        //call backend api to post a player to database
        axios.put(`/api/games/${gameid}`, gameDataPost).then((response => {console.log(response.status)}));

        //we want to navigate user back to the game list page
        let path = '/schedule';
        navigate(path);
        
    };

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                <h2 className="mb-4">Edit Game</h2>
                
                {/* Form */}
                <form onSubmit={handleSubmit}>

                    {/* Score Field */}
                    <div className="form-group">
                        <label htmlFor="firstName">Score</label>
                        <input
                            type="text"
                            className="form-control"
                            id="score"
                            name="score"
                            value={formData.score}
                            onChange={handleChange}
                        />
                    </div>

                    {/* Opponent Field */}
                    <div className="form-group">
                        <label htmlFor="lastName">Opponent</label>
                        <input
                            type="text"
                            className="form-control"
                            id="opponent"
                            name="opponent"
                            value={formData.opponent}
                            onChange={handleChange}
                        />
                    </div>

                    {/* Date of Time Field */}
                    <div className="form-group">
                        <label htmlFor="dateOfBirth">Time</label>
                        <input
                            type="time"
                            className="form-control"
                            id="time"
                            name="time"
                            value={formData.time}
                            onChange={handleChange}
                        />
                    </div>

                    {/* Date of Match Field */}
                    <div className="form-group">
                        <label htmlFor="dateOfBirth">Date</label>
                        <input
                            type="date"
                            className="form-control"
                            id="date"
                            name="date"
                            value={formData.date}
                            onChange={handleChange}
                        />
                    </div>


                    {/* Location Field */}
                    <div className="form-group">
                        <label htmlFor="dateOfBirth">Location</label>
                        <input
                            type="text"
                            className="form-control"
                            id="location"
                            name="location"
                            value={formData.location}
                            onChange={handleChange}
                        />
                    </div>

                    {/* Result Field */}
                    <div className="form-group">
                        <label htmlFor="result">Result</label>
                        <select
                            className="form-control"
                            id="result"
                            name="result"
                            value={formData.result}
                            onChange={handleChange}>
                            {/* <option value="" disabled={true}>Select match result</option> */}
                            <option value="Tbd">TBD</option>
                            <option value="Win">Win</option>
                            <option value="Draw">Draw</option>
                            <option value="Draw">Loss</option>
                        </select>
                    </div>

                    {/* Notes Field */}
                    <div className="form-group">
                        <label htmlFor="notes">Notes</label>
                        <textarea
                            className="form-control"
                            id="notes"
                            name="notes"
                            value={formData.notes} // ...force the input's value to match the state variable...
                            onChange={handleChange} // ... and update the state variable on any edits!
                        />
                    </div>

                    {/* Submit Button */}
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
                </div>
            </div>
        </div>
    );
};

export default EditGameForm;