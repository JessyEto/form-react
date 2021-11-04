const Results = ({ name, email, password, setState }) => {
  return (
    <div className="results">
      <div className="sub-results">
        <p>
          Name : <span>{name}</span>
        </p>
        <p>
          Email : <span>{email}</span>
        </p>
        <p>
          Password : <span>{password}</span>
        </p>
      </div>
      <button
        onClick={() => {
          setState('start');
        }}
      >
        Edit your information
      </button>
    </div>
  );
};

export default Results;
