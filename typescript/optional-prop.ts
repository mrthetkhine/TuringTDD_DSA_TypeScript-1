interface Person {
    readonly name: string;
    age?: number;
    gender?: string;
   
}
let person:Person = {
    name: "Jhon",
    gender: "Male"
}
//person.name = "Update";
console.log('person ',person.gender?.toLowerCase());

interface Home {
  readonly resident: { name: string; age: number };
}
let home:Home = {
    resident: {
        name: "Jhon",
        age: 34
    }
}
/*
home.resident = {
    name: "Jhon",
    age: 34
}
*/
home.resident.name = "Wick";
console.log('home ',home);