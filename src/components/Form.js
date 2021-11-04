const Form = ({
  name,
  email,
  password,
  confirmPwd,
  handleNameChange,
  handleEmailChange,
  handlePasswordChange,
  handleConfirmPasswordChange,
  checkPassword,
}) => {
  // const [name, setName] = useState('');
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  // const [confirmPwd, setConfirmPwd] = useState('');

  // const handleNameChange = (event) => {
  //   setName(event.target.value);
  // };

  // const handleEmailChange = (event) => {
  //   setEmail(event.target.value);
  // };

  // const handlePasswordChange = (event) => {
  //   setPassword(event.target.value);
  // };
  // const handleConfirmPasswordChange = (event) => {
  //   setConfirmPwd(event.target.value);
  // };

  // const checkPassword = (event) => {
  //   event.preventDefault();
  //   if (password !== confirmPwd) {
  //     alert('Vos mots de passe ne sont pas identiques');
  //   }
  // };

  return (
    <form className="form" onSubmit={checkPassword}>
      <div>
        <p>Name</p>
        <input
          type="text"
          placeholder="Jean Dupont"
          value={name}
          onChange={handleNameChange}
        />
      </div>
      <div>
        <p>Email</p>
        <input
          type="email"
          placeholder="jeandupont@exemple.com"
          value={email}
          onChange={handleEmailChange}
        />
      </div>
      <div>
        <p>Password</p>
        <input
          type="password"
          name="password"
          value={password}
          onChange={handlePasswordChange}
        />
      </div>
      <div>
        <p>Confirm your password</p>
        <input
          type="password"
          name="confirm-password"
          value={confirmPwd}
          onChange={handleConfirmPasswordChange}
        />
      </div>
      <input type="submit" value="Register" />
    </form>
  );
};

export default Form;
