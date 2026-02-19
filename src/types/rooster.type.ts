export interface Shift {
  id: string;
  title: string;
  start: string;
  end: string;
  user: string;
  location: string
}

export interface IRoom {
  name: string;
  shifts: Shift[]
}