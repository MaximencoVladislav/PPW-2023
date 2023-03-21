class Worker {
    constructor(name, surname, hourRate, hours) {
    this.name = name;
    this.surname = surname;
    this.hourRate = hourRate;
    this.hours = hours;
    }
    
    getSalary() {
    return this.hourRate * this.hours;
    }
    }

var worker1 = new Worker('Maria', 'Popescu', 8, 160);
var worker2 = new Worker('George', 'Ionescu', 12, 192);

console.log(worker1.name);
console.log(worker1.surname);
console.log(worker1.hourRate);
console.log(worker1.hours);
console.log(worker1.getSalary());

console.log(worker2.name);
console.log(worker2.surname);
console.log(worker2.hourRate);
console.log(worker2.hours);
console.log(worker2.getSalary());

if (worker1.getSalary() > worker2.getSalary()) {
    console.log(`${worker1.name} ${worker1.surname} are salariul mai mare cu ${worker1.getSalary() - worker2.getSalary()} lei.`);
  } 
  else if (worker2.getSalary() > worker1.getSalary()) {
    console.log(`${worker2.name} ${worker2.surname} are salariul mai mare cu ${worker2.getSalary() - worker1.getSalary()} lei.`);
  } 
  else {
    console.log("Lucrătorii au același salariu.");
  }  

    class Workers {
        constructor(name, surname, hourRate, hours) {
          this._name = name;
          this._surname = surname;
          this._hourRate = hourRate;
          this._hours = hours;
          this._tax = 0;
        }
      
        getName() {
          return this._name;
        }
      
        getSurname() {
          return this._surname;
        }
      
        getHourRate() {
          return this._hourRate;
        }
      
        getHours() {
          return this._hours;
        }
      
        getSalary() {
          return this._hourRate * this._hours;
        }
      
        increaseHourRate(rate) {
          this._hourRate += rate;
        }
      
        setTax(tax) {
          this._tax = tax;
        }
      
        getSalaryNetto() {
          return this.getSalary() * (1 - this._tax / 100);
        }
      }

      const workers = [
        new Worker("Ion", "Creangă", 10, 176),
        new Worker("Mihai", "Eminescu", 15, 200),
        new Worker("George", "Enescu", 20, 160),
      ];
      
      workers.forEach(worker => {
        console.log(worker.name,worker.surname,worker.hourRate,worker.hours)
        });