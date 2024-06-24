// Task 2. Перед вами структура компани, и ниже представлены задания, относящиеся к ней. 
// В заданиях по максимуму использовать методы массивов, создавать функции-помощники, выполняющие дополнительные действия,
// чтобы ваши функции выполняли строго одну работу. ЭТО ОЧЕНЬ ВАЖНО!

const enterprises = [
  {
    id: 1,
    name: "Предприятие 1",
    departments: [
      {
        id: 2,
        name: "Отдел тестирования",
        employees_count: 10,
      },
      {
        id: 3,
        name: "Отдел маркетинга",
        employees_count: 20,
      },
      {
        id: 4,
        name: "Администрация",
        employees_count: 15,
      },
    ]
  },
  {
    id: 5,
    name: "Предприятие 2",
    departments: [
      {
        id: 6,
        name: "Отдел разработки",
        employees_count: 50,
      },
      {
        id: 7,
        name: "Отдел маркетинга",
        employees_count: 20,
      },
      {
        id: 8,
        name: "Отдел охраны труда",
        employees_count: 5,
      },
    ]
  },
  {
    id: 9,
    name: "Предприятие 3",
    departments: [
      {
        id: 10,
        name: "Отдел аналитики",
        employees_count: 0,
      },
    ]
  }
]

// Задания:
// 1. Вывести все предприятия и их отделы. Рядом указать количество сотрудников. Для предприятия посчитать сумму всех сотрудников во всех отделах.

// **Пример:**

// Предприятие 1 (45 сотрудников)
// - Отдел тестирования (10 сотрудников)
// - Отдел маркетинга (20 сотрудников)
// - Администрация (15 человек)
// Предприятие 2 (75 сотрудников)
// - Отдел разработки (50 сотрудников)
// - Отдел маркетинга (20 сотрудников)
// - Отдел охраны труда (5 сотрудников)
// Предприятие 3 (нет сотрудников)
// - Отдел аналитики (нет сотрудников)

function logEmployess (enterprises) {
     for (const obj in enterprises) {
        console.log(`${enterprises[obj].name} (${getAllEmployeesInEnterprise(enterprises[obj].departments)} сотрудников)`);
        enterprises[obj].departments.forEach((department) => {
            console.log(`- ${department.name} (${(department.employees_count) === 0 ? 'нет' : department.employees_count} сотрудников)`);
        });
     };
    };


function getAllEmployeesInEnterprise (departments) {
    countAll = 0;
    for (let dep of departments) {
        countAll += dep.employees_count;
    }
    return (countAll === 0) ? 'нет' : countAll;
};

// logEmployess(enterprises);

// 2. Написать функцию, которая будет принимать 1 аргумент (id отдела или название отдела и возвращать название предприятия, к которому относится).
// Пример:
// getEnterpriseName(4) // Предприятие 1
// getEnterpriseName("Отдел маркетинга") // Предприятие 2
function getEntrepriseName (depIdOrName) {
    const {name} = getEnterprise(depIdOrName);
    return name;        
    };
    
function getEnterprise (depIdOrName) {
    const foundEnterprise = enterprises.find((enterprise) => {
        const foundDepartment = enterprise.departments.find((department) => department.id === depIdOrName || department.name === depIdOrName);
        return foundDepartment
    });
    if (!foundEnterprise) throw new Error('Enterprise not found');   
    return foundEnterprise;
};

// console.log(getEntrepriseName(10));


// 3. Написать функцию, которая будет добавлять предприятие. В качестве аргумента принимает название предприятия

// Пример:
// addEnterprise("Название нового предприятия")

function addEnterprise(name) {
    const enterprise = {
        id: getNewId(),
        name,
        departments: []
      };
    enterprises.push(enterprise);    
};

function getNewId () {
    let newId = 0;
    enterprises.forEach((enterprise) => {
        if (newId < enterprise.id) newId = enterprise.id;
        enterprise.departments.forEach((department) => {
            if (newId < department.id) newId = department.id;
        });
    });
    return newId + 1;
};

// addEnterprise('Добавленное предприятие');
// console.log(JSON.stringify(enterprises));

// 4. Написать функцию, которая будет добавлять отдел в предприятие. В качестве аргумента принимает id предприятия, в которое будет добавлен отдел и название отдела.

// Пример:
// addDepartment(1, "Название нового отдела")

function addDepartment(id, name) {
    const deppartment = generateNewDepartment(name);
    const enterprise = findEnterprise(id);
    enterprise.departments.push(deppartment);  
};

function findEnterprise(id) {
    const enterprise = enterprises.find((enterprise) => enterprise.id === id);
    if(!enterprise) throw new Error("Enterprise not found");
    return enterprise;
};
function generateNewDepartment(name) {
    const newDepartment = {
        id: getNewId(),
        name: name,
        employees_count: 0,
      }
    return newDepartment;
};

// addDepartment(9, "Новый отдел");
// console.log(JSON.stringify(enterprises));

// 5. Написать функцию для редактирования названия предприятия. Принимает в качестве аргумента id предприятия и новое имя предприятия.

// Пример:
// editEnterprise(1, "Новое название предприятия")

function editEnterprise(id, name) {
    const enterprise = findEnterprise(id);
    enterprise.name = name;
};

// editEnterprise(5, "New name");
// console.log(enterprises);

// 6. Написать функцию для редактирования названия отдела. Принимает в качестве аргумента id отдела и новое имя отдела.

// Пример:
// editDepartment(7, "Новое название отдела")

function editDepartment(id, name) {
    const department = findDepartment(id);
    department.name = name;
};

function findDepartment(id) {
    let result;
    for (const enterprise of enterprises) {        
        result = enterprise.departments.find((department) => department.id === id);
        if (result) break;    
    }
    if (!result) throw new Error("No such department");
    return result;
};
        

// editDepartment(2, 'Новый отдел тестирования');
// console.log(JSON.stringify(enterprises));

// 7. Написать функцию для удаления предприятия. В качестве аргумента принимает id предприятия.

// Пример:
// deleteEnterprise(1)

function deleteEnnterpriseById(id) {
    let  isDeleted = false;
    for (const enterprise of enterprises) {
        if (enterprise.id === id) {
            enterprises.splice(enterprises.indexOf(enterprise), 1);
            isDeleted = true;
            break;
        }
    };
    if (!isDeleted) throw new Error(`Enterprise with id = ${id} not found`);
}

// deleteEnnterpriseById(4);
// console.log(enterprises);

// 8. Написать функцию для удаления отдела. В качестве аргумента принимает id отдела. Удалить отдел можно только, если в нем нет сотрудников.

// Пример:
// deleteDepartment(3)

function deleteDepartment(id) {
    const department = findDepartment(id);    
    if (department.employees_count === 0) throw new Error (`Department with id ${id} has no employees`);
    for (const enterprise of enterprises) {
      let index = enterprise.departments.findIndex((el) => department.id === el.id);
      enterprise.departments.splice(index, 1);
    }
};

deleteDepartment(8);
console.log(JSON.stringify(enterprises));

// 9. Написать функцию для переноса сотрудников между отделами одного предприятия. 
// В качестве аргумента принимает два значения: id отдела, из которого будут переноситься сотрудники и id отдела, в который будут переноситься сотрудники).

// Пример:
// moveEmployees(2, 3)

function moveEmployees(depIdFrom, depIdTo) {
    if (depIdFrom === depIdTo) throw new Error ('Department ids should not be the same!')
    const depFrom = findDepartment(depIdFrom);
    const depTo = findDepartment(depIdTo);
    if (depFrom.employees_count === 0) throw new Error (`Department with id ${depIdFrom} has no employees`);
    depTo.employees_count += depFrom.employees_count;
    depFrom.employees_count = 0;
}

moveEmployees(2, 3);
console.log(JSON.stringify(enterprises));