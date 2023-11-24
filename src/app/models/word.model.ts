export interface Word {
    id: number;
    text: string;
    descriptions: Description[];
}

interface Description {
    description_text: string;
    language: {
      language_name: string;
    };
}
