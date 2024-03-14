import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const PersonalInformationForm = () => {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [dob, setDob] = useState('');
  const history = useNavigate();
  const [nameError, setNameError] = useState('');
  const [addressError, setAddressError] = useState('');
  const [dobError, setDobError] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    if (validateInputs(name, address, dob)) {
      history('/numbers-and-email', { state: { name, address, dob } });
    }
  };

  const validateInputs = (name, address, dob) => {
    let Nerror = '', aError = '', dError = '';

    if (name.trim() === "" || name.length <= 3) {
      Nerror = 'Invalid Name';
    }
    const dobInput = new Date(dob);
    if (isNaN(dobInput)) {
      dError = 'Invalid DOB format.';
    }
    if (address.trim() === '' || address.length <= 5) {
      aError = 'Invalid address.';
    }
    setNameError(Nerror);
    setAddressError(aError);
    setDobError(dError);
    return (!Nerror && !dError && !aError);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
       <h1>Login</h1>
        <label>
          Name:
          <input type="text" value={name} onChange={(event) => setName(event.target.value)} />
        </label>
        {nameError && <p style={{ color: 'red' }}>{nameError}</p>}
        <label>
          Address:
          <input type="text" value={address} onChange={(event) => setAddress(event.target.value)} />
        </label>
        {addressError && <p style={{ color: 'red' }}>{addressError}</p>}
        <label>
          DOB:
          <input type="date" value={dob} onChange={(event) => setDob(event.target.value)} />
        </label>
        {dobError && <p style={{ color: 'red' }}>{dobError}</p>}
        <button type="submit">Next</button>
      </form>
    </div>
  );
};

export default PersonalInformationForm;

