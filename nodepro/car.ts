import * as readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

class car{
    make : string;
    model: string;
    year : number;


constructor(make:string,model:string,year:number){
        this.make = make;
        this.model =model;
        this.year = year;
}
        details = (): string => {
        return `I bought a car from ${this.make} and the model is ${this.model}, maufactured in ${this.year}`;
    };
}

 const newCar = ()=>{

    rl.question("Whats your Car name: ",(make)=>{
        rl.question("Whats the model: ",(model)=>{
            rl.question("In which year: ",(year)=>{
                const Car = new car(make,model,parseInt(year)); 
                console.log(Car.details());

            });
        });
    });

 }

 newCar();