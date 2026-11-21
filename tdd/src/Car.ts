import Engine from "./Engine";
export default class Car
{
    engine:Engine;
    constructor(engine:Engine) {
        this.engine = engine;
    }
    start()
    {
        console.log('Car Started');
        console.log('Engine ',this.engine);
        console.log('Engine return ',this.engine.start());
    }
}
