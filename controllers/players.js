import Player from '../model/Player';

const index = (req, res) => {
  // Find all movies and return json response'
  const { query } = req;
  if (query.round) {
    const round = parseInt(query.round, 10);
    Player.find({ round }, null, { sort: { adp: 1 } }, (err, players) => (
      res.json(players)
    ));
  } else if (query.name) {
    Player.find({ fullName: new RegExp(query.name, 'i') })
      .select('fullName portraitId')
      .sort({ ovr_rating: -1 })
      .limit(10)
      .exec((err, players) => {
        res.json(players);
      });
  } else {
    Player.find({}, null, { sort: { adp: 1 } }, (err, players) => (
      res.json(players);
    ));
  }
};

export const getPlayer = (req, res) => {
  Player.findById(req.params.playerId, (err, player) => {
    res.json(player);
  });
};

export const updateAdp = (req, res) => {
  const { adp, drafts, round } = req.body;
  Player.findById(req.params.playerId, (err, player) => {
    player.drafts = drafts;
    player.adp = adp;
    player.round = round;
    player.save();
    res.status(200);
  });
};

export default index;
