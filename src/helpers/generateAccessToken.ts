import axios from 'axios';
import FormData from 'form-data';
import dotenv from 'dotenv';

dotenv.config();

const aadTenant = process.env.AAD_TENANT as string;
const aadTenantId = process.env.AAD_TENANT_ID as string;

const clientId = process.env.CLIENT_ID as string;
const clientSecret = process.env.CLIENT_SECRET as string;
const fhirEndpoint = process.env.FIHR_ENDPOINT as string;

export const generateAccessToken = async () => {
  const data = new FormData();
  data.append("client_id", clientId);
  data.append("client_secret", clientSecret);
  data.append("grant_type", "client_credentials");
  data.append("resource", fhirEndpoint);
  const url = aadTenant + aadTenantId + "/oauth2/token";
  const response = await axios.post(url, data);

  return response.data.access_token;
} 

