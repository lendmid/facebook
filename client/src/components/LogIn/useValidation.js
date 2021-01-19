import {useEffect, useState} from 'react';


function validate(values) {
  let clientErrors = {};

  if (!values.email) {
    clientErrors.email = 'Enter email';
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    clientErrors.email = 'Email incorrect';
  }
  if (!values.password) {
    clientErrors.password = 'Enter password';
  } else if (values.password.length < 6) {
    clientErrors.password = 'Minimum password length 6 characters';
  }

  return clientErrors;
}

const useValidation = (callback) => {
  const [values, setValues] = useState({email: '', password: ''});
  const [clientErrors, setClientErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = e => {
    const {name, value} = e.target;
    setValues({...values, [name]: value});
  };

  const handleSubmit = e => {
    e.preventDefault();
    setClientErrors(validate(values));
    setIsSubmitting(true);
  };

  useEffect(() => {
    if (Object.keys(clientErrors).length === 0 && isSubmitting) {
      callback(values.email, values.password)
      setIsSubmitting(false);
    }
  }, [clientErrors, isSubmitting, callback, values.email, values.password]);

  return {handleChange, handleSubmit, values, clientErrors};
};

export default useValidation;
