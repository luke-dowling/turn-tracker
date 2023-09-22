export interface Initiative {
  type: 'Character' | 'Monster';
  name: string;
  initiative: number;
  ac?: number;
  hp?: number;
}
