let a: number = 5;
let b: string = '4';

let c: number = a + Number(b);
let d = true;

let names: string[] = ['sd', 'sdfc'];
let qges: number[] = [5, 7];

let tup: [number, string] = [2, 'asdasd']

let e: any = 3;
e = 'dasd';
e = true;

let anyArr: any[] = ['asdasd', 23, true];

function greet(name: string): string {
    return name + 'Hi'
}

names.map((x: string) => x);

function coord(coord: { lat: number, long?: number }){

}