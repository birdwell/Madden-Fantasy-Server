import { Router } from 'express';
import index, { getNames, getPlayer } from './controllers/players';

const router = Router();

router.route('/players/:playerId')
  .get(getPlayer);

router.route('/players')
  .get(index);


export default router;
