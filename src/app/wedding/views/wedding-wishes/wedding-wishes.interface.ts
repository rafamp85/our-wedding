import { Timestamp } from '@angular/fire/firestore';

export type ColumnKeys<T> = Array<keyof T>;

export interface WeddingWishes {
  id: number;
  name: string;
  message: string;
  created?: Timestamp;
  phone?: number;
}

