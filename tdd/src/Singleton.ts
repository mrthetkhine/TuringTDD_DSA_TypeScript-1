export class Singleton
{
    private static instance:Singleton ;

    private constructor() {
    }
    public static getInstance()
    {
        if(!Singleton.instance)
        {
            Singleton.instance = new Singleton();
        }
        return Singleton.instance;
    }
}
let obj = Singleton.getInstance();
let obj2 = Singleton.getInstance();
console.log(obj==obj2);