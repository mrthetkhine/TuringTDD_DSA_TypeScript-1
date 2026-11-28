export default class Computer {
    constructor() {
    }

    start() {

        this.readBootSector();
        this.loadIntoMemory();
        this.runOs();

    }

    readBootSector()
    {
        console.log("Start BootSector");
    }
    loadIntoMemory()
    {
        console.log("Load IntoMemory");
    }
    runOs()
    {
        console.log("Run Os Memory");
    }
}