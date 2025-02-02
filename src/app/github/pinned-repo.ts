import { PinnedItems } from './pinned-items';

export interface PinnedRepo {
  data: Data;
}

export interface Data {
  user: User;
}

export interface User {
  pinnedItems: PinnedItems;
}
