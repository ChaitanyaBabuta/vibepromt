import { UIPrompt } from '../types';
import { PROMPTS_BATCH_1 } from './promptsBatch1';
import { PROMPTS_BATCH_2 } from './promptsBatch2';
import { PROMPTS_BATCH_3 } from './promptsBatch3';
import { PROMPTS_BATCH_4 } from './promptsBatch4';
import { PROMPTS_BATCH_5 } from './promptsBatch5';
import { PROMPTS_BATCH_6 } from './promptsBatch6';
import { PROMPTS_BATCH_7 } from './promptsBatch7';

export const INITIAL_PROMPTS: UIPrompt[] = [
  ...PROMPTS_BATCH_1,
  ...PROMPTS_BATCH_2,
  ...PROMPTS_BATCH_3,
  ...PROMPTS_BATCH_4,
  ...PROMPTS_BATCH_5,
  ...PROMPTS_BATCH_6,
  ...PROMPTS_BATCH_7,
];
