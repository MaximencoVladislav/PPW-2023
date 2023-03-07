const employees = [
  { name: "John", hours: [6, 10, 7, 8, 6, 8] },
  { name: "Jane", hours: [9, 8, 6, 8, 7, 10] },
  { name: "Bob", hours: [7, 6, 8, 7, 8, 6] },
  { name: "Alice", hours: [8, 7, 0, 6, 8, 7] },
  { name: "Jack", hours: [10, 8, 7, 9, 6, 8] }
];

function calculeazaMedieOreLucrate(employees) {
  for (let i = 0; i < employees.length; i++) {
    const employee = employees[i];
    const totalHours = employee.hours.reduce((acc, cur) => acc + cur, 0);
    const averageHours = totalHours / employee.hours.length;
    console.log(`${employee.name}: ${averageHours} ore`);
  }
}

function afiseazaAngajatiCuMedieSub48(employees) {
  for (let i = 0; i < employees.length; i++) {
    const employee = employees[i];
    const totalHours = employee.hours.reduce((acc, cur) => acc + cur, 0);
    const averageHours = totalHours / employee.hours.length;
    if (averageHours < 48) {
      console.log(`${employee.name} are numărul mediu de ore lucrate sub 48.`);
    }
  }
}

function afiseazaAngajatiCuOreZero(employees) {
  for (let i = 0; i < employees.length; i++) {
    const employee = employees[i];
    const hasZeroHours = employee.hours.some((hour) => hour === 0);
    if (hasZeroHours) {
      console.log(`${employee.name} are ore lucrate egale cu 0.`);
    }
  }
}

calculeazaMedieOreLucrate(employees);

afiseazaAngajatiCuMedieSub48(employees);

afiseazaAngajatiCuOreZero(employees);