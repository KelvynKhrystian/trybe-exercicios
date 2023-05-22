class Tv {

  brand: string;
  size: number;
  resolution: number;
  connections: string[];
  connectedTo?: string;

  constructor (b: string, s: number, r: number, c: string[]){
    this.brand = b;
    this.size = s;
    this.resolution = r;
    this.connections = c;

  }

  turnOn() {
    console.log(this.brand, this.size, this.resolution, this.connections);
  }

}

const k1 = new Tv('kel',10,20,['oi','hi']);
k1.turnOn();