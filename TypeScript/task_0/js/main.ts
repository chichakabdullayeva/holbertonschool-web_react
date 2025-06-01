interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: 'Aylin',
  lastName: 'Mammadova',
  age: 21,
  location: 'Baku',
};

const student2: Student = {
  firstName: 'Nihat',
  lastName: 'Aliyev',
  age: 22,
  location: 'Ganja',
};

const studentsList: Student[] = [student1, student2];

// Create a table
const table = document.createElement('table');
const tbody = document.createElement('tbody');

// Create table rows for each student
studentsList.forEach((student) => {
  const row = document.createElement('tr');

  const nameCell = document.createElement('td');
  nameCell.textContent = student.firstName;

  const locationCell = document.createElement('td');
  locationCell.textContent = student.location;

  row.appendChild(nameCell);
  row.appendChild(locationCell);
  tbody.appendChild(row);
});

table.appendChild(tbody);
document.body.appendChild(table);

