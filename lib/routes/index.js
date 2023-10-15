"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var patients_1 = require("../controllers/patients");
var router = (0, express_1.Router)();
router.get('/patients', patients_1.getPatients);
router.post('/patient', patients_1.addPatient);
exports.default = router;
