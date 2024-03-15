import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const EditPlayerForm: React.FC = () => {

    //id of the player we have using params
    const { id } = useParams();

    //states
    const [player, setPlayer] = useState<any>();
    const [file, setFile] = useState<File | undefined>();

    //we should also get the specific player
    const getPlayer = async () => {

        //make a call to get the specific player at the index
        const res = await axios.get(`/api/players/${id}`);

        //set player for edit player form
        setPlayer(res.data);

        //set player form data
        setFormData({...formData, 
            firstName : res.data.firstName, lastName: res.data.lastName,
            dateOfBirth: res.data.dob,
            nationality: res.data.nationality,
            position: res.data.position,
            jerseyNumber: res.data.jerseyNumber,
            weight: res.data.weight,
            height: res.data.height, 
            preferredFoot: res.data.preferredFoot, 
            salary: res.data.salary,
            imageUrl : res.data.imageUrl, 
        })

        //set image data from cloudinary
    }

    useEffect(() => {
        getPlayer();
    }, []);

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        dateOfBirth: '2000-10-10',
        nationality: '',
        position: '',
        jerseyNumber: '',
        weight: 0,
        height: 0, 
        preferredFoot: '', 
        salary: 0,
        imageUrl : '',
    });
 
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
          ...prevState,
          [name]: value,
        }));
    };

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const target = e.target as HTMLInputElement & {
            files : FileList;
        }
        setFile(target.files[0]);
    }
    
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        
        if(typeof file == 'undefined') return;

        const formDataPic = new FormData();
        formDataPic.append('file', file);
        formDataPic.append('upload_preset', 'mdttpm8n');
        formDataPic.append('api_key', '54015d2d90e18f4ef8e1a614cf2bb3'); //make sure to change this to env var!!!

        const result = await axios.post('https://api.cloudinary.com/v1_1/playerimages/image/upload', formDataPic).then((response => {
            console.log(response.data);
            console.log(response.data.url);
            formData.imageUrl = response.data.url;
        }))


        //create data to post
        const playerDataPost = {
            firstName : formData.firstName,
            lastName : formData.lastName,
            dateOfBirth : formData.dateOfBirth,
            nationality : formData.nationality,
            position : formData.position,
            jerseyNumber : formData.jerseyNumber,
            weight : formData.weight,
            height : formData.height,
            preferredFoot : formData.preferredFoot,
            salary : formData.salary,
            imageUrl : formData.imageUrl,
        }

        //call backend api to post a player to database
        axios.put(`/api/players/${id}`, playerDataPost).then((response => {console.log(response.status)}));
    };

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                <h2 className="mb-4">Edit Player</h2>
                
                {/* Form */}
                <form onSubmit={handleSubmit}>

                    {/* First Name */}
                    <div className="form-group">
                        <label htmlFor="firstName">First Name</label>
                        <input
                            type="text"
                            className="form-control"
                            id="firstName"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                        />
                    </div>

                    {/* Last Name */}
                    <div className="form-group">
                        <label htmlFor="lastName">Last Name</label>
                        <input
                            type="text"
                            className="form-control"
                            id="lastName"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                        />
                    </div>

                    {/* Date Of Birth */}
                    <div className="form-group">
                        <label htmlFor="dateOfBirth">Date Of Birth</label>
                        <input
                            type="date"
                            className="form-control"
                            id="dateOfBirth"
                            name="dateOfBirth"
                            value={formData.dateOfBirth}
                            onChange={handleChange}
                        />
                    </div>

                    {/* Nationality */}
                    {/* Add all the Countries! I think there is a plugin for this! */}
                    <div className="form-group">
                        <label htmlFor="nationality">Nationality</label>
                        <select
                            className="form-control"
                            id="nationality"
                            name="nationality"
                            value={formData.nationality}
                            onChange={handleChange}>
                            <option value="">Select nationality</option>
                            <option value="Afghan">Afghan</option>
                            <option value="Albanian">Albanian</option>
                            {/* Add more options as needed */}
                        </select>
                    </div>

                    {/* Position */}
                    <div className="form-group">
                        <label htmlFor="dateOfBirth">Position</label>
                        <input
                            type="text"
                            className="form-control"
                            id="position"
                            name="position"
                            value={formData.position}
                            onChange={handleChange}
                        />
                    </div>

                    {/* Jersey Number */}
                    <div className="form-group">
                        <label htmlFor="jerseyNumber">Jersey Number</label>
                        <input
                            type="number"
                            className="form-control"
                            id="jerseyNumber"
                            name="jerseyNumber"
                            value={formData.jerseyNumber}
                            onChange={handleChange}
                        />
                    </div>

                    {/* Height */}
                    {/* NEED TO REWORK THIS! */}
                    <div className="form-group">
                        <label htmlFor="height">Height (in.)</label>
                        <input
                            type="number"
                            className="form-control"
                            id="height"
                            name="height"
                            value={formData.height}
                            onChange={handleChange}
                        />
                    </div>

                    {/* Weight */}
                    <div className="form-group">
                        <label htmlFor="weight">Weight (lbs.)</label>
                        <input
                            type="number"
                            className="form-control"
                            id="weight"
                            name="weight"
                            value={formData.weight}
                            onChange={handleChange}
                        />
                    </div>

                    {/* preferred foot */}
                    <div className="form-group">
                        <label htmlFor="preferredFoot">Preferred Foot</label>
                        <select
                            className="form-control"
                            id="preferredFoot"
                            name="preferredFoot"
                            value={formData.preferredFoot}
                            onChange={handleChange}>
                            <option value="" disabled={true}>Select preferred foot</option>
                            <option value="Afghan">Left</option>
                            <option value="Albanian">Right</option>
                        </select>
                    </div>

                    {/* Salary */}
                    <div className="form-group">
                        <label htmlFor="salary">Salary (USD)</label>
                        <input
                            type="number"
                            className="form-control"
                            id="salary"
                            name="salary"
                            value={formData.salary}
                            onChange={handleChange}
                        />
                    </div>

                    <div className='form-group'>
                        <label htmlFor='image'>Image</label>
                        <input type='file' name='image' onChange={handleImageChange}/>
                    </div>

                    

                    {/* Submit Button */}
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
                </div>
            </div>
        </div>
    );
};

export default EditPlayerForm;