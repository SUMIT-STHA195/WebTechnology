let vehicles=['Car','Bike','Scooter','Train','Truck','Bus'];
vehicles[0]="Bicycle"; // assign value to an index
vehicles.push('Aeroplane');//assign value to first index
vehicles.unshift('helicopter');
vehicles.length;//length of array

vehicles.forEach(vehicle=>{console.log(vehicle)});

vehiclesCapital=vehicles.map(vehicle=>{return vehicle.toUpperCase()});
console.log(vehiclesCapital);
// splice
let vehicles3=vehicles.splice(2,2);//changes vehicles
console.log(vehicles3);
console.log(vehicles);
console.log(vehicles.slice(0,5));//not changes vehicles
console.log(vehicles.slice(-1,5));
console.log(vehicles.slice(5,-1));
console.log(vehicles.slice(5,-5));