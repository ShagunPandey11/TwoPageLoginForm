import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Confirmation = () => {
    const location = useLocation();
    const Navigate= useNavigate();
    const { name, address, dob, phone, email } = location.state;
    const [heading, setHeading]=useState("Details Successfully uploaded !");

    const [localState, setLocalState] = useState({
        name,
        address,
        dob,
        phone,
        email,
    });

    const clearInputs = () => {
        setLocalState({
            name: '',
            address: '',
            dob: '',
            phone: '',
            email: '',
            heading: "cleared data"
        });
        setHeading('Data cleared.')
    };

    return (
        <>
            <div>
                <div className='confirmation'>
                    <h1>{heading}</h1>
                    <p>Name: {localState.name}</p>
                    <p>Address: {localState.address}</p>
                    <p>DOB: {localState.dob}</p>
                    <p>Phone: {localState.phone}</p>
                    <p>Email: {localState.email}</p>
                    <button type="button" onClick={clearInputs}>Clear</button>
                </div>

            </div>
        </>
    );
};

export default Confirmation;