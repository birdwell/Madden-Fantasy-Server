import Player from '../model/Player';

const index = (req, res) => {
  // Find all movies and return json response'
  const round = parseInt(req.query.round, 10);
  Player.find({ round }).exec()
    .then(players => (
      res.json(players)
    ))
    .catch(error => console.error(error));
};

export default index;
