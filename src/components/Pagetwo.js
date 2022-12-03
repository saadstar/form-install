import React,{useEffect, useState} from 'react';
import { Link } from "react-router-dom";
export const Pagetwo = () => {
  const initalvalues = { key: "", data: "", id: "", email: "", username: "", password: "" ,};
  const [formvalues, setFormvalues] = useState(initalvalues);
  const [formerrors, setFormerrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);



  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormvalues({...formvalues,[name]:value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormerrors(validate(formvalues));
    setIsSubmit(true);
  };

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.username) {
      errors.username = "Username is required";
    }
    if (!values.email) {
      errors.email = "Username is required";
    }else if(!regex.test(values.email)){
      errors.email="This is not a valid email format"
    }
    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 4) {
      errors.password = "Password must be more than 4 characters";
    } else if (values.password.length > 10) {
      errors.password = "Password cant exceed more than 10 characters";
    }
    return errors;
  }

  useEffect(()=>{
console.log(formerrors);
    if (Object.keys(formerrors).length === 0 && isSubmit) {
      console.log(formvalues);
}
  },[formerrors])



  return (
    <div className="containeer">
      <div className="flex-ssb mr">
        <button>
          <Link to="/">Home</Link>
        </button>
        <h2>Installation</h2>
      </div>
      {Object.keys(formerrors).length === 0 && isSubmit ? (
        <div className="submit">
          <h3>Submitted Succefully</h3>
        </div>
      ) : (
        // <pre>{JSON.stringify(formvalues, undefined, 2)}</pre>
        <p>.</p>
      )}

      <form className="containar white" onSubmit={handleSubmit}>
        <div className="float">
          <label>Database Name:</label>
          <input name="data" value={formvalues.data} onChange={handleChange} />
        </div>
        <div className="float">
          <label>Root Email:</label>
          <input
            name="email"
            type="email"
            value={formvalues.email}
            onChange={handleChange}
          />
        </div>
        <p>{formerrors.email}</p>
        <div className="float">
          <label>Root Username:</label>
          <input
            name="username"
            type="text"
            value={formvalues.username}
            onChange={handleChange}
          />
        </div>
        <p>{formerrors.username}</p>
        <div className="float">
          <label>Root Password:</label>
          <input
            type="password"
            name="password"
            value={formvalues.password}
            onChange={handleChange}
          />
        </div>
        <p>{formerrors.password}</p>
        <div className=" end">
          <button>Submit</button>
        </div>
      </form>
    </div>
  );
}