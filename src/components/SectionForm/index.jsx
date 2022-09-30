import React,{useState} from 'react';
import "./SectionForm.css";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

import { useForm, ValidationError } from '@formspree/react';


const validate = (str) => {
  let error = '';
  if (!str) error = "*email is required";
  else if (
    // eslint-disable-next-line 
    !/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(
      str
    )
  )
    error = "*email must be valid : example@site.com";
  return error;
};

export  function Form() {
  const [email,setEmail]=useState('');
  const [error, setError] = useState('');
  const [state, handleSubmit] = useForm("mjvzrvzy");

  const handleChange = (e) => {
    e.preventDefault();
    setEmail(e.target.value);
    setError(validate(e.target.value));
  };

  const submitData=(e)=>{
   e.preventDefault();
   if(!email.trim()){
   alert("Complete the field");
   setEmail('')
   }else if( error){
  alert("Error al ingresar los datos");
   setEmail('')
   }else{
    handleSubmit(state)
    setEmail('');
   }
  }
  return (
    <form onSubmit={(e)=>submitData(e)}>
        <span>NEWSLETTER</span>
        <h3>SUSCRÍBETE</h3>
        <h5>Y enterate de todas las novedades</h5>
        <input id="email" type="email" name="email" placeholder='Ingresa tu email' value={email} onChange={(e) => handleChange(e)}/>
        <ValidationError 
                        prefix="Email" 
                        field="email"
                        errors={state.errors}
        />
        <button type='submit' disabled={error}><FontAwesomeIcon  icon={faArrowRight} size="lg"/></button>
        {error&&(<p className='error'>{error}</p>)}
        {state.succeeded && (
          <p>
            Gracias por suscribirte!!
          </p>
        )}
     </form>
   
  )
}

export default function SectionForm() {
  return (
    <section id='form'>
    <Form />
    </section>
  );
}
