export function isSundayUntestable()
{
    let date = new Date();//Make ownDependency
    return date.getDay()== 0;
}
//testable
export function isSunday(date: Date)
{
    return date.getDay()== 0;
}
//Heavy Duty Constructor
class SomeClass
{
    //Heavy Duty Constructor
    constructor() {
        this.method1();
        this.method2();
    }
    method1()
    {

    }
    method2()
    {

    }
}
//Depend on Concrete Classes
class Engine
{

}
class Car
{
    //Depend on Concrete Classes
    //engine = new Engine();
    engine: Engine;

    constructor(engine:Engine) {
        this.engine = engine;
    }
}
//Conditional Slalom
function someThing(num:number)
{
    if(num>0)
    {
        if(num >1)
        {
            if(num %4==0)
            {

            }
        }
    }
}
//Depend on Large Context Objects
let context:any = {

}
function someFun(context:any)
{
    if(context.something)
    {
        if(context.data)
        {

        }
    }
    else
    {

    }
}

//Use Primitives Wherever Possible

function anotherIsSunday(str:string)//date in string format
{
    //Convert string to date

}
//Couple functional code directly to the external systems it depends on
function sendSMS(str:string)
{
    //call SMS API directly
    /*
        fetch('smsAPI',{
        })
    * */
}
class SMSSender
{
    send(str:string):void
    {
        //api
    }
}
function sendSMS2(message:string,sender:SMSSender)
{

}