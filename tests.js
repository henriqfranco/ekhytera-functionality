class Game{
    constructor(CPU, GPU, RAM){
        this.GPU = GPU;
        this.CPU = CPU;
        this.RAM = RAM;
    }
}

const fortnite = new Game('GeForce', 'Intel Core', 8)

console.log(fortnite)