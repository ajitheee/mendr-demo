/** Collapse whitespace so the same question always produces the same prompt. */
export function buildPrompt(question: string): string {
  return question.trim().replace(/\s+/g, ' ');
}
