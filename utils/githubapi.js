const axios = require('axios');
const githubAPI = {
    async getUser (userResponces) {
        try {
            let response = await axios
            //sample url: https://github
            .get('https://api.github.com/users/${userResponses.username}');
            return response.data;
        } catch(err) {
            console.log(err);
        
        }
    }
};

module.exports = githubAPI;