import axios from 'axios';
export const testExampleServices={
    getUsers,
}

function getUsers (){
 return axios.get('https://jsonplaceholder.typicode.com/users').then(response=> response).catch(error=> error)

}