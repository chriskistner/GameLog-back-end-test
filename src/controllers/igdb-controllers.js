const model = require('../models/igdb-models');

function getGame (req, res, next) {
    const gameID = req.params.id;
    console.log(model.getGame(gameID));
    model.getGame(gameID).then(function(result) {
        if (!result)
        return next({ status: 404, message: "Game not Found" });
    
      res.status(200).send(result);
    })
};

module.exports = {
    getGame,
}