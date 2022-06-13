const a = 'sdads'

let b: 'hi' = 'hi'

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

moveDog('left')

interface IConnection {
    host: string,
    post: number,
}

function connection(connection: IConnection | 'default'){

}

connection("default");
