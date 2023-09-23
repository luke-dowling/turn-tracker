export interface Initiative {
  type: 'Character' | 'Monster';
  name: string;
  initiative: number;
  current: boolean;
  ac?: number;
  hp?: number;
}
