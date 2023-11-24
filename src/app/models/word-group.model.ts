import { Word } from './word.model';

export interface WordGroup {
  id: number;
  name: string;
  descriptions: Description[];
  words: Word[];
}

interface Description {
  description_text: string;
  language: {
    language_name: string;
  };
}
