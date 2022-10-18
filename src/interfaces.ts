export interface Records {
  [id: string]: string;
}

export interface Page {
  records: string[];
  total?: number;
}

export interface DeduperChanges {
  created: PollRecord[];
  updated: PollRecord[];
  all: PollRecord[];
}

export interface PollRecord {
  id: string | number;
  [key: string]: any;
}
