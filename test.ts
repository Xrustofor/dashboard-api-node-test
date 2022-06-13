type direction = 'left' | 'right';

function moveDog(direction: direction){
    switch(direction){
        case 'left':{
            return -1;
        };
        case 'right': {
            return 1
        };
        default: return 0;
    }
}

const connection = {
    host: 'localhost',
    protocol: 'https' as 'https'
}
 
let a: any = 5;
// let c: number = a as number;
let c = <number>a;
let d = a as number;

function connecti(host: string, protocol: 'http' | 'https'){

}

connecti(connection.host, connection.protocol);  