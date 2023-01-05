export {};

declare global {
  interface Prototypes {
    children: React.ReactNode;
  }

  interface UserInfo {
    username: string | null;
    email: string;
    password: string;
  }

  interface CarSubmissionTypes {
    type: string;
    seats: number;
    events: string[];
    price: number;
    negotiable: boolean;
    carInfo: string;
    images: string[];
  }

  interface FilterType {
    filterChoice: string;
    setFilterChoice: () => void;
  }

  interface CarList {
    car: string;
    rating: number;
    event: string;
    seats: number;
    user: string;
    price: number;
  }
}
