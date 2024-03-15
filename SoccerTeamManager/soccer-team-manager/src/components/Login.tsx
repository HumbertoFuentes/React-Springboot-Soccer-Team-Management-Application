import React from 'react';
import NewsCard from './NewsCard';


const Login: React.FC = () => {

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

export default Login;