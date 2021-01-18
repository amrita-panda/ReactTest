import axios from 'axios';
export function saveReview(review){
    return{
        type:'SAVE_REVIEW',
        payload:review,
    }
}
export function correctGuess(success){
    return{
        type:'CORRECT_GUESS',
        payload:success,
    }
}

export const getSecretWord=()=>{
   return axios.get('http://localhost:3030 ').then(response=>{
       console.log(response)
   }).catch(error=>{
       console.log(error);
   })
}