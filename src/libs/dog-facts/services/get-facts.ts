import axios from 'axios';
import { baseUrl } from '../config';

export const getDogFactsService = async () => {
  try {
    const dogFact = await axios.get(`${baseUrl}//api/facts??number=1`);
    return dogFact;
  } catch (err) {
    throw new Error(err);
  }
};
