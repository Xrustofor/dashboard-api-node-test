class Coord {
    message = "1";
    lat: number;
    long: number;

    protected test() {

    };

    computeDistans(newLat: number, newLong: number){
        return 0;
    };

    constructor(lat: number, long: number){
        this.lat = lat;
        this.long = long;
    }
}

const point = new Coord(0, 1);

class MapLocation extends Coord{
    message = "2";
    _name: string;

    get name() {
        return this._name;
    };

    set name(s: string) {
        this._name = s;
    };

    override computeDistans(newLat: number, newLong: number){
        console.log(this._name);
        return 1;
    };


    constructor(lat: number, long: number, name: string){
        super(lat, long);
    }
}

interface loggerService {
    log: (s: string) => void;
}

class Logger implements loggerService{
    public log(s: string){
        console.log(s);
    }
    private error() {

    }
}

const l = new Logger();


class myClass<T> {
    a: T;
}

const b = new myClass<string>();
b.a

abstract class Base{
    print(s: string){
        console.log(s)
    }
    abstract error (s: string): void;
}

class BaseExtend extends Base{

}

new BaseExtend().error

class Animal {
    name: string;
}
class Dog {
    name: string;
    tail: boolean;
}

const puppy: Animal = new Dog();
puppy.name;