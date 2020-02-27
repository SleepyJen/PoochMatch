import React, { useState } from 'react'
import './login-form.css'



const useForm = (initVal) => {
  const [ values,setValue ] = useState(initVal);

  return [ 
    values, 
    ({target}) => {
      let { name,value } = target;
      setValue({ ...values , [name] : value })
    } 
  ];
};

export default function LoginForm () {

  const [ 
    state , setState 
  ] = useState({ 
	  email:'' , password:'' 
  });
​
  return (
    <div>
      <h1>Title</h1>
      <form
        onSubmit={ 
          (event) => { 
            event.preventDefault() 
            console.log('Value:', state)
            // setState({ email:'' , password:'' })
          }
        } 
      >
        <fieldset>
          <legend>INPUT</legend>
          <input
            type="text"
            name="email"
            placeholder="enter email"
            autoComplete="off"
            autoFocus
            value={ state.email }
            onChange={ setState }
          />
          <br/>
          <input
            type="text"
            name="password"
            placeholder="enter password"
            autoComplete="off"
            value={ state.password }
            onChange={ setState }
          />
          <br/>
          <input
            type="submit"
            name="submit"
            value="SUBMIT"
          />
        </fieldset>
      </form>
    </div>
  );

}