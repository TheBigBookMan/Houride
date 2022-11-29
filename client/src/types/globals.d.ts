export {};

declare global {
  interface CarSubmissionTypes {
    type: string;
    seats: number;
    events: string[];
    price: number;
    negotiable: boolean;
    carInfo: string;
    images: string[];
  }
}
