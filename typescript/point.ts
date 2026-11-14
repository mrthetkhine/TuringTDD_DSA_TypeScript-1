class Point2D{
    x:number ;
    y:number;
    
    constructor(x:number,y:number){
        this.x = x;
        this.y = y;
        console.log('Point2D x ',this.x,' y ',this.y );
    }
    show()
    {
        console.log(`x ${this.x} y ${this.y}`);
    }
    move(dx:number,dy:number){
        this.x += dx;
        this.y += dy;
    }
}
class Point3D extends Point2D{
    z:number;
    constructor(x:number,y:number,z:number){
        super(x,y);
        this.z = z;
    }
    show()
    {
        console.log(`x ${this.x} y ${this.y} z ${this.z}`);
    }
    move3D(dx:number,dy:number,dz:number){
        super.move(dx,dy);
        this.z += dz;
    }
}
let point = new Point2D(10,20);
//point.x = 100;
point.y = 200;
console.log('Point ',point);

let point2 = new Point3D(1,2,3);
console.log('Point2 ',point2);
point2.show();

point2.move3D(10,20,30);
console.log('Point2 ',point2);