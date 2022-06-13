interface HasLength {
    length: number
}

function log<T extends HasLength, K>(obj: T,  arr: K[]): K[]{
   console.log(obj.length);
   return arr;
}

log<string, number>('asdas', [1]);

interface IUser {
    name: string;
    age?: number;
    bi1d: <T>(sum: T) => boolean
}

function bid<T>(sum: T): boolean {
    return true;
}