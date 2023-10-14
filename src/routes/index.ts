import { Router } from 'express';
import { getPatients, addPatient } from '../controllers/patients';

const router = Router();

router.get('/patients', getPatients);
router.post('/patient', addPatient);

export default router;
