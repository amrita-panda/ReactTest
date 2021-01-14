
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