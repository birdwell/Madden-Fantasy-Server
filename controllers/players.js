import Player from '../model/Player';

const index = (req, res) => {
  // Find all movies and return json response'
  const round = parseInt(req.query.round, 10);
  Player.find({ round }, null, { sort: { adp: 1 } }, (err, players) => (
    res.json(players)
  ));
};

export default index;
