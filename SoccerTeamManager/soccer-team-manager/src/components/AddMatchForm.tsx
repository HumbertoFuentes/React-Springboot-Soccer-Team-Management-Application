import React, { useState }from "react";
import axios from "axios";

const AddMatchForm: React.FC = () => {

    const [formData, setFormData] = useState({
        score: '',
        opponent: '',
        time: '00:00:00',
        date: '2000-07-20',
        location: '',
        result: '',
        notes: '',
    });

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
        const playerDataPost = {
            score : formData.score,
            opponent : formData.opponent,
            time : formData.time,
            date : formData.date,
            location : formData.location,
            result : formData.result,
            notes : formData.notes,
        }

        //call backend api to post a player to database
        axios.post('/api/games', playerDataPost).then((response => {console.log(response.status)}));
    };

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                <h2 className="mb-4">Add Game</h2>
                
                <form onSubmit={handleSubmit}>

                    <div className="form-group">
                        <label htmlFor="score">Score</label>
                        <input
                            type="text"
                            className="form-control"
                            id="score"
                            name="score"
                            value={formData.score}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="opponent">Opponent</label>
                        <input
                            type="text"
                            className="form-control"
                            id="opponent"
                            name="opponent"
                            value={formData.opponent}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="time">Time</label>
                        <input
                            type="time"
                            className="form-control"
                            id="time"
                            name="time"
                            value={formData.time}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="date">Date</label>
                        <input
                            type="date"
                            className="form-control"
                            id="date"
                            name="date"
                            value={formData.date}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="dateOfBirth">location</label>
                        <input
                            type="text"
                            className="form-control"
                            id="location"
                            name="location"
                            value={formData.location}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="result">Result</label>
                        <select 
                            className="form-control"
                            id="result"
                            name="result"
                            value={formData.result}
                            onChange={handleChange}>
                            <option value="Win">Win</option>
                            <option value="Draw">Draw</option>
                            <option value="Loss">Loss</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <label htmlFor="notes">Match notes</label>
                        <textarea
                            className="form-control"
                            id="notes"
                            name="notes"
                            value={formData.notes} // ...force the input's value to match the state variable...
                            onChange={handleChange} // ... and update the state variable on any edits!
                        />
                    </div>
                    
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
                </div>
            </div>
        </div>
    );
};

export default AddMatchForm;