import axios from 'axios'

const postEvent = function() {

}

export const getEvent = async () => {
    axios.get('http://localhost:5000/events/')
    .then( (response) =>  {
        return response.data;
    })
    .catch(error => {
        console.log(error)
    });
};

