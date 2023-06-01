import {api} from './api';
import { errorHandling } from '../ErrorHandling';

export const handleFormSubmit = (username, password) => {
    // event.preventDefault(); 
    
    console.log('Username:', username);
    console.log('Password:', password);
    
    api.post('/login', {
      email: username,
      password: password
    })
      .then(function (response) {
        console.log(response);
        
      })
      .catch(function (error) {        
        const errorMessage = errorHandling(error);
        console.log(errorMessage)
    //    setError(errorMessage);      
      });
  };