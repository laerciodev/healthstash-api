"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addPatient = exports.getPatients = void 0;
const axios_1 = __importDefault(require("axios"));
const generateAccessToken_1 = require("../helpers/generateAccessToken");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const fhirEndpoint = process.env.FIHR_ENDPOINT;
const getPatients = (_, res) => __awaiter(void 0, void 0, void 0, function* () {
    const accessToken = yield (0, generateAccessToken_1.generateAccessToken)();
    const url = fhirEndpoint + 'Patient';
    const headers = {
        Authorization: `Bearer ${accessToken}`,
        'Content-type': 'application/json'
    };
    const { data } = yield axios_1.default.get(url, { headers });
    res.json({
        patients: data.entry
    });
});
exports.getPatients = getPatients;
const addPatient = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const accessToken = yield (0, generateAccessToken_1.generateAccessToken)();
    const url = fhirEndpoint + 'Patient';
    const headers = {
        Authorization: `Bearer ${accessToken}`,
        'Content-type': 'application/json'
    };
    const { data } = yield axios_1.default.post(url, req.body, { headers });
    res
        .status(201)
        .json({
        message: 'Paciente adicionado com sucesso!',
        patientId: data.id
    });
});
exports.addPatient = addPatient;
