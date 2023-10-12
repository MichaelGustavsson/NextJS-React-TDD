"use strict";
// Ett interface definierar ett objekts struktur...
const taken = {
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
const Ford = {
    id: 1,
    registreringNumber: 'ABC123',
    manufacturer: 'Ford',
    model: 'Fusion',
    mileage: 25000,
};
const bike = {
    id: 45,
    manufacturer: 'Monark',
    hasFootBreak: true,
};
const truck = {
    id: 56789,
    manufacturer: 'MACK',
    model: 'SomeModel',
    registreringNumber: 'VBT234',
    tara: 3000,
    mileage: 450000,
};
