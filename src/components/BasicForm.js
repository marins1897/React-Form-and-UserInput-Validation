import useInput from "../hooks/use-input";


const BasicForm = (props) => {
  const {
    value : enteredName, 
    isValid: enteredNameIsValid,
    hasError : nameInputHasError, 
    valueChangeHandler : nameChangedHandler, 
    inputBlurHandler : nameBlurHandler,
    reset : resetNameInput
  } = useInput( value => value.trim() !== '');


  const {
    value : enteredLastName, 
    isValid: enteredLastNameIsValid,
    hasError : lastNameInputHasError, 
    valueChangeHandler : lastNameChangedHandler, 
    inputBlurHandler : lastNameBlurHandler,
    reset : resetLastNameInput
  } = useInput( value => value.trim() !== '');
  
  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmailInput
  } = useInput( value => value.includes('@'));
  
  
           let formIsValid = false;
  
           if (enteredNameIsValid && enteredLastNameIsValid && enteredEmailIsValid) {
             formIsValid = true;
           } ;
  
  
     const formSubmissionHandler = event => {
       event.preventDefault();
  
  
       if(!enteredNameIsValid ||  enteredLastNameIsValid || !enteredEmailIsValid) {
          return;
       };
  
       console.log(enteredName);
       console.log(enteredLastName);
       console.log(enteredEmail);
  
       resetNameInput();
       resetLastNameInput();
       resetEmailInput();
   };
   
    const nameInputClasses = nameInputHasError ? 
    'form-control invalid' 
    : 'form-control';

    const lastNameInputClasses = lastNameInputHasError ?
    'form-control invalid' 
    : 'form-control';
  
    const emailInputClasses = emailInputHasError ?
    'form-control invalid'
    : 'form-control';




  return (
    <form onSubmit={formSubmissionHandler}>

      <div className='control-group'>
        <div className={nameInputClasses}>
          <label htmlFor='name'>First Name</label>
          <input
           type='text'
           id='name'
           onChange={ nameChangedHandler }
         onBlur= {nameBlurHandler}
         value = {enteredName} />

        {nameInputHasError && <p className= "error-text">Name must not be empty.</p>}
        </div>

        <div className={lastNameInputClasses}>
          <label htmlFor='name'>Last Name</label>
          <input
           type='text'
           id='lastName'
           onChange={ lastNameChangedHandler }
           onBlur= {lastNameBlurHandler}
           value = {enteredLastName}/>

        {lastNameInputHasError && <p className= "error-text"> Last name must not be empty.</p>}
        </div>
      

      <div className={emailInputClasses}>
        <label htmlFor='name'>E-Mail Address</label>
        <input 
        type='email'
         id='email'
         onChange={ emailChangeHandler }
         onBlur= {emailBlurHandler}
         value = {enteredEmail} />
 
      {emailInputHasError && <p className= "error-text">Email must not be empty and must include @ .</p>}
      </div>

      <div className='form-actions'>
        <button  disabled = { !formIsValid } >Submit</button>
      </div>
      </div>
    </form>
  );
};

export default BasicForm;
