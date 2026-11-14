interface Pingable {
  data:number;
  ping(): void;
}
 
class Sonar implements Pingable {
  data:number;
  constructor(data:number) {
    this.data = data;
  }
  ping() {
    console.log("ping!");
  }
}
 