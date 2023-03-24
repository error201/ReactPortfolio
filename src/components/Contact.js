import React, { useState } from 'react';


export default function Contact() {
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [textArea, setTextArea] = useState('');

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        if (name==="userName"){
            return setUserName(value);
        } else if (name==="email"){
            return setEmail(value)
        } else if (name==="textArea") {
            return setTextArea(value);
        }
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        setUserName('');
        setEmail('');
        setTextArea('');
    };

    return (
        <div>
            <div className="mb-3">
                <label for="formControlInput1" className="form-label">Name</label>
                <input value={userName} name="userName" onChange={handleInputChange} type="text" className="form-control" id="formControlInput1" placeholder="John Doe" />
            </div>
            <div className="mb-3">
                <label for="formControlInput2" className="form-label">Email address</label>
                <input value={email} name="email" onChange={handleInputChange} type="email" className="form-control" id="formControlInput2" placeholder="name@example.com" />
            </div>
            <div className="mb-3">
                <label for="formControlTextarea1" className="form-label">Message</label>
                <textarea value={textArea} name="textArea" onChange={handleInputChange} className="form-control" id="formControlTextarea1" rows="5"></textarea>
            </div>
            <div>
            <button onClick={handleFormSubmit} type="button" className="btn btn-primary">Submit</button>
            </div>
        </div>
    )
};