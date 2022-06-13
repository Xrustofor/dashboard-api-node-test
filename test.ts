type coord = { lat: number, long: number };

interface ICoord {
    lat: number,
    long: number
}

type ID = number | string;

function compute(coord: ID) {

}

interface Animal {
    name: string;
}

interface Dog extends Animal {
    tail?: boolean;
}

const dog: Dog = {
    name: 'sdf'
}