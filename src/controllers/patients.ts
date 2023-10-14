import { RequestHandler } from 'express';
import { generateAccessToken } from '../helpers/generateAccessToken';

export const getPatients: RequestHandler = async (_, res) => {
  const accessToken = await generateAccessToken();
  console.log(accessToken);
  res.json({
    accessToken
  })
} 
