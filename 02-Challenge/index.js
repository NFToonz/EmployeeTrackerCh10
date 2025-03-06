import inquirer from "inquirer";

const mainMenu = [
    {
        type: 'list',
        message: 'How May I help You today?',
        name: 'title',
        choices: ['view all departments', 'view all roles', 
        'view all employees', 'add a department', 'add a role', 
        'add an employee','update an employee role'],
    },]
   
    inquirer.prompt(mainMenu).then((answers) => {
        // Use the same property name: title
        const { title } = answers;
        console.log('You selected:', title);
      
        if (title === 'add a department') {
          inquirer.prompt([
            {
              type: 'input',
              name: 'departmentName',
              message: 'Enter the name of the new department:',
            }
          ]).then((deptAnswers) => {
            console.log('Department added:', deptAnswers.departmentName);
          });
        } else if (title === 'add a role') {
          inquirer.prompt([
            {
              type: 'input',
              name: 'roleName',
              message: 'Enter the name of the new role:',
            },
            {
              type: 'input',
              name: 'salary',
              message: 'Enter the salary for the new role:',
            },
            {
              type: 'input',
              name: 'departmentId',
              message: 'Enter the department ID for the new role:',
            }
          ]).then((roleAnswers) => {
            console.log('Role added:', roleAnswers);
          });
        } else if (title === 'add an employee') {
          inquirer.prompt([
            {
              type: 'input',
              name: 'firstName',
              message: "Enter the employee's first name:",
            },
            {
              type: 'input',
              name: 'lastName',
              message: "Enter the employee's last name:",
            },
            {
              type: 'input',
              name: 'roleId',
              message: "Enter the role ID for the new employee:",
            },
            {
              type: 'input',
              name: 'managerId',
              message: "Enter the manager ID (leave blank if none):",
            }
          ]).then((empAnswers) => {
            console.log('Employee added:', empAnswers);
          });
        } else {
          // For other operations, add your logic here.
          console.log('Performing the selected operation:', title);
        }
      });

      
    
    
    
    
    
    // inquirer.prompt(mainMenu).then((answers) => {
    //     console.log('User responses:', answers);
    //   });
      
//     {
//         type: 'input',
//         message: 'describe your project?',
//         name: 'Description',
//     },
//     {
//         type: 'input',
//         message: 'What is your position',
//         name: 'Installation',
//     },
//     {
//         type: 'input',
//         message: 'what is the use of the project/application?',
//         name: 'Usage',
//     },
//     {
//         type: 'input',
//         message: 'What are he contribution guidelines of the project?',
//         name: 'Contributing',
//     },
//     {
//         type: 'input',
//         message: 'how will we test this project?',
//         name: 'Tests',
//     },
//     {
//         type: 'list',
//         message: 'What is the preferred licensed of the application?',
//         name: 'License',
//         choices: ['MIT','BSD','APACHE','NONE']
//     },
//     {
//         type: 'input',
//         message: 'What is your GitHub username?',
//         name: 'Github',
//     },
//     {
//         type: 'input',
//         message: 'What is your Email Address?',
//         name: 'Email',
//     },


// ];