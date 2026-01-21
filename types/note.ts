export interface Note {
  id: string;
  title: string;
  content: string;
  tag: string;
  createdAt: string;
}

export interface NoteData {
  id: string;
  title: string;
  content: string;
  tag: string;
  createdAt?: string;
}
