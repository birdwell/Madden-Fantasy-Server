import { Router } from 'express';
import index from './controllers/players';

// Initialize the router
const router = Router();

// Handle /movies.json route with index action from movies controller
router.route('/players')
  .get(index);

export default router;
