const employees = [
    {
        "employeeID": 1,
        "name": "John",
        "departmentID": 3,
        "computerID": 1
    },
    {
        "employeeID": 2,
        "name": "Drew",
        "departmentID": 1,
        "computerID": 2
    },
    {
        "employeeID": 3,
        "name": "Carl",
        "departmentID": 2,
        "computerID": 3
    },
    {
        "employeeID": 4,
        "name": "James",
        "departmentID": 3,
        "computerID": 4
    },
    {
        "employeeID": 5,
        "name": "Caleb",
        "departmentID": 1,
        "computerID": 5
    }
]

const departments = [
    {
        "departmentID": 1,
        "departmentName": "Sales"
    },
    {
        "departmentID": 2,
        "departmentName": "Management"
    },
    {
        "departmentID": 3,
        "departmentName": "Marketing"
    }
]

const computers = [
    {
        "computerID": 1,
        "computerNum": "CP1"
    },
    {
        "computerID": 2,
        "computerNum": "CP2"
    },
    {
        "computerID": 3,
        "computerNum": "CP3"
    },
    {
        "computerID": 4,
        "computerNum": "CP5"
    },
    {
        "computerID": 5,
        "computerNum": "CP5"
    }
]

const employeeEl = document.querySelector(".employee__name");
const departmentEl = document.querySelector(".employee__department");
const computersEl = document.querySelector(".employee__computer");

employees.forEach(name => {

    for (const value of Object.values(name)) {
      employeeEl.innerHTML += `<div>${value}</div>`
    }
})








