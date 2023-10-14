import { Router } from 'express';
import { getPatients } from '../controllers/patients';

const router = Router();

router.get('/patients', getPatients);

export default router;
