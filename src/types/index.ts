export type CarClass = "A" | "B" | "C";

export interface Car {
  brand: string;
  model: string;
  class: CarClass;
}

export interface User {
  name: string;
  age: number;
}

export interface Interest {
  userId: number;
  carId: number;
}
