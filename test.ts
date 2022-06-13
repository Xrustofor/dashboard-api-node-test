type direction = 'left' | 'right';

enum Direction {
    Left,
    Right
}


function move(direction: Direction){
    switch(direction){
        case Direction.Left:{
            return -1;
        }
        case Direction.Right:{
            return 1
        }
    }
}

function objMod(obj: {Left: number}){

}

objMod(Direction);

const enum Diraction2{
    Up,
    Down
}

let myDirection = Diraction2.Up;