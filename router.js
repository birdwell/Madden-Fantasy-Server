import { Router } from 'express';
import index, { updateAdp, getPlayer } from './controllers/players';

const router = Router();

router.route('/players/:playerId')
  .get(getPlayer);

router.route('/players')
  .get(index);
  
router.route('/adp/:playerId')
  .post(updateAdp);

export default router;
