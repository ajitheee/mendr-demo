import OpenAI from 'openai';
import { buildPrompt } from './prompt.js';

// The client is created here, in this file, which is what makes the call below
// a first-party call site for Mendr: it can prove which model this code asks
// for, not just that the name appears somewhere.
const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY ?? 'unset' });

/** Ask the assistant a question. Still pinned to a model OpenAI is retiring. */
export async function ask(question: string): Promise<string> {
  const response = await client.chat.completions.create({
    model: 'gpt-4-0613',
    messages: [{ role: 'user', content: buildPrompt(question) }],
  });
  return response.choices[0]?.message?.content ?? '';
}
