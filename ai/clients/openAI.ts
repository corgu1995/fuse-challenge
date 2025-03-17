
import { OpenAI } from "openai";
import dotenv from 'dotenv';

dotenv.config();


const apiKey = process.env.OPENAI_API_KEY;
if (!apiKey) {
  throw new Error('OPENAI_API_KEY is not set in the environment variables');
}

export const openAI = new OpenAI({
    apiKey: apiKey,
  });