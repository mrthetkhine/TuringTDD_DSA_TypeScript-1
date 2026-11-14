class ThreeD {
  constructor(
    public readonly x: number,
    protected y: number,
    private z: number
  ) {
    // No body necessary
  }
}
let threeD = new ThreeD(1, 2, 3);
console.log('threeD ',threeD);