const igdb = require('igdb-api-node').default;
const client = igdb('58b8c8fce0987f5fc74c4ed3f7c77d0a');

const getGame = function(title) {
    client.games({
        fields: ['id', 'name', 'summary'],
        limit: 5, // Limit to 5 results
        offset: 0, 
        order: 'total_rating:asc',
        search: title
    }).then(response => {
        console.log(response.body);
        return response.body;
        // response.body contains the parsed JSON response to this query
    }).catch(error => {
        throw error;
    })
};
module.exports = {
    getGame
}