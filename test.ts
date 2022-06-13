let a = 'Привет'
if(typeof a == 'string'){

}

let b: typeof a;



type Coord = {
    lat: number;
    long: number;
}

type P = keyof Coord;

let f: P = 'long'