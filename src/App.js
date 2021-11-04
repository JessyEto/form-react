import './App.css';
import Form from './components/Form';
import Footer from './components/Footer';
import Results from './components/Results';
import { useState } from 'react';

function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPwd, setConfirmPwd] = useState('');
  const [state, setState] = useState('start');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  const handleConfirmPasswordChange = (event) => {
    setConfirmPwd(event.target.value);
  };

  const checkPassword = (event) => {
    event.preventDefault();
    if (password !== confirmPwd) {
      alert('Vos mots de passe ne sont pas identiques');
    } else {
      setState('complete');
    }
  };

  return (
    <div className="container">
      {state === 'start' ? (
        <div className="sub-container">
          <h1>Create account</h1>
          <Form
            name={name}
            email={email}
            password={password}
            confirmPwd={confirmPwd}
            handleNameChange={handleNameChange}
            handleEmailChange={handleEmailChange}
            handlePasswordChange={handlePasswordChange}
            handleConfirmPasswordChange={handleConfirmPasswordChange}
            checkPassword={checkPassword}
          />
        </div>
      ) : (
        <div className="sub-container">
          <h1>Results</h1>
          <Results
            name={name}
            email={email}
            password={password}
            setState={setState}
          />
        </div>
      )}
      <Footer />
    </div>
  );
}

export default App;
