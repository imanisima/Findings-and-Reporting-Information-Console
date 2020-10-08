import axios from 'axios'

const postEvent = function() {

}

export async function getSystems() {
    try{
        let res = await axios.get('http://localhost:5000/systems/')
            .then(res => {
                console.log(res.data)
                return res.data
    })
    } catch(err) {
        console.log(err.res)
        return []
    };
}

/*export const getEvent = async () => {
    await axios.get('http://localhost:5000/events/')
    .then( (response) =>  {
        const data = response.data;
        return data
    })
    .catch(error => {
        console.log(error)
    });
};
*/
