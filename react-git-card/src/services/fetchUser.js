import axios from 'axios';


function fetchUser() {
    return axios
        .get(`https://api.github.com/users/wlongmire`)
        .then( res => {
            return(res)
            // console.log(res)
        })
        .catch( error => console.log('it broke', error) )
}

export default fetchUser;