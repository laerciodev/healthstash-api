import axios from 'axios';
import { RequestHandler } from 'express';
import { generateAccessToken } from '../helpers/generateAccessToken';
import dotenv from 'dotenv';

dotenv.config();

const fhirEndpoint = process.env.FIHR_ENDPOINT as string;

export const getPatients:RequestHandler = async (_, res) => {
  const accessToken = await generateAccessToken();
  const url = fhirEndpoint + 'Patient';

  const headers = {
    Authorization: `Bearer ${accessToken}`,
    'Content-type': 'application/json'
  }

  const { data } = await axios.get(url, { headers });

  res.json({
    patients: data.entry 
  })
} 

export const addPatient:RequestHandler = async (req, res) => {
  const accessToken = await generateAccessToken();
  const url = fhirEndpoint + 'Patient';

  const headers = {
    Authorization: `Bearer ${accessToken}`,
    'Content-type': 'application/json'
  }

  const { data } = await axios.post(url, req.body, { headers });

  res
    .status(201)
    .json({
      message: 'Paciente adicionado com sucesso!',
      patientId: data.id
    })
}