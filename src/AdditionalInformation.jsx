import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const AdditionalInformation = () => {
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const location = useLocation();
    const history = useNavigate();
    const { name, address, dob } = location.state;
    const [phoneError, setPhoneError] = useState('');
    const [emailError, setEmailError] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        if (validateInputs(phone, email)) {
            history('/success', { state: { name, address, dob, phone, email } });
        }
    };

    const validateInputs = (phone, email) => {
        let Perror = '';
        let Eerror = '';
        const Phoneregex = /^[6-9]\d{9}$/;
        if (!Phoneregex.test(phone)) {
            Perror = 'Invalid Phone Number';
        }

        const Emailregex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;;
        if (!Emailregex.test(email)) {
            Eerror = 'Invalid email';
        }
        setPhoneError(Perror);
        setEmailError(Eerror);
        return (!Eerror && !Perror)
    };

    const prev = () => {
        history('/');
    }

    return (
        <><div className='additional-information'>
            <form onSubmit={handleSubmit}>
                <label>
                    Number:
                    <input type="number" value={phone} onChange={(event) => setPhone(event.target.value)} />
                </label>
                {phoneError && <p style={{ color: 'red' }}>{phoneError}</p>}
                <label>
                    Email:
                    <input type="text" value={email} onChange={(event) => setEmail(event.target.value)} />
                </label>
                {emailError && <p style={{ color: 'red' }}>{emailError}</p>}
                    <section className='btns'>
                    <button type='button' onChange={prev}>Previous</button>
                    <button type="submit">Next</button>
                    </section>
            </form>
        </div>
        </>
    );
}

export default AdditionalInformation;