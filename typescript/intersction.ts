type Color = {
    color:string;
}
type Circle ={
    radius:number;
}
type ColorCircled = Color & Circle;
let cc:ColorCircled = {
    color: "red",
    radius: 10
}