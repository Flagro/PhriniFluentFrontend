import { Word } from './word.model';

export interface WordGroup {
  id: number;
  name: string;
  words: Word[];
}
