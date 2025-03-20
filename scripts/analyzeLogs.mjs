import fs from 'fs';
import { OpenAI } from 'openai';
import dotenv from 'dotenv';
import * as allure from 'allure-js-commons';

dotenv.config();

// eslint-disable-next-line
const apiKey = process.env.OPENAI_API_KEY;
if (!apiKey) {
  throw new Error('OPENAI_API_KEY is not set in the environment variables');
}

const logs = fs.readFileSync('./executionlogs.txt', 'utf-8');

// 2. Build the prompt
const prompt = `
You are an AI that identifies common error patterns in test logs.
Output a bullet point summary of repeated or likely root causes.

Logs:
${logs}
`;

const openAI = new OpenAI({
  apiKey: apiKey,
});

(async () => {
  try {
    const response = await openAI.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [{ role: 'user', content: prompt }],
    });
    const summary = response.choices[0].message?.content || '';

    // 4. Write summary to a file
    fs.writeFileSync('ai-insights.txt', summary);
    await allure.attachment('Feedback', summary, 'text/plain');
    console.log('AI Insights generated:\n', summary);
  } catch (error) {
    console.error('AI Analysis Failed:', error);
    // eslint-disable-next-line
    process.exit(1);
  }
})();
