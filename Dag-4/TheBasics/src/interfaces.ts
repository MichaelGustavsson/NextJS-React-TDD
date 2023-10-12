// Ett interface definierar ett objekts struktur...

enum movieCategoryEnum{
  ACTION,
  DRAMA,
  COMEDY,
  HORROR,
  ADVENTURE,
  THRILLER
}

interface Movie {
  readonly id: number;
  title: string;
  director: string;
  releaseYear: number;
  length?: number;
  categories: movieCategoryEnum[];
  displayInfo(): string;
}

const taken: Movie = {
  id: 23,
  title: 'Taken',
  director: 'Pierre Morel',
  releaseYear: 2008,
  // length: 94,
  displayInfo() {
    return 'Taken';
  },
};

// taken.id = 24;
taken.length = 94;

// Reopening an interface
interface Movie {
  language?: string;
}

// Extending(utöka) ett interface...
interface Vehicle {
  readonly id: number;
  manufacturer: string;
}

interface Car extends Vehicle {
  registreringNumber: string;
  model: string;
  mileage: number;
}

interface Bike extends Vehicle {
  hasFootBreak: boolean;
}

const Ford: Car = {
  id: 1,
  registreringNumber: 'ABC123',
  manufacturer: 'Ford',
  model: 'Fusion',
  mileage: 25000,
};

const bike: Bike = {
  id: 45,
  manufacturer: 'Monark',
  hasFootBreak: true,
};

// Utöka med flera interface
interface Truck extends Vehicle, Car {
  tara: number;
}

const truck: Truck = {
  id: 56789,
  manufacturer: 'MACK',
  model: 'SomeModel',
  registreringNumber: 'VBT234',
  tara: 3000,
  mileage: 450000,
};
