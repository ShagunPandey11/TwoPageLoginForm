import { useState } from 'react';
import { useLocation } from 'react-router-dom';

const Confirmation = () => {
    const location = useLocation();
    const { name, address, dob, phone, email } = location.state;

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
        });
    };

    return (
        <><div className='confirmation'>
            <h1>Details successfull uploaded!</h1>
            <p>Name: {localState.name}</p>
            <p>Address: {localState.address}</p>
            <p>DOB: {localState.dob}</p>
            <p>Phone: {localState.phone}</p>
            <p>Email: {localState.email}</p>
            <button type="button" onClick={clearInputs}>
                Clear
            </button>
        </div>
        </>
    );
};

export default Confirmation;