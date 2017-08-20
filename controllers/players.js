import Player from '../model/Player';

const index = (req, res) => {
  // Find all movies and return json response'
  const round = parseInt(req.query.round, 10);
  Player.find({ round }, null, { sort: { adp: 1 } }, (err, players) => (
    res.json(players)
  ));
};

export const getNames = (req, res) => {
  Player.find({}, 'fullName firstName lastName portraitId', (err, playerNames) => (
    res.json(playerNames)
  ));
};

export const getPlayer = (req, res) => {
  Player.findById(req.params.playerId, (err, player) => {
    res.json(player);
  });
};

export default index;
