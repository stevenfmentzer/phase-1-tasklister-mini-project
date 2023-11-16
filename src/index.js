document.addEventListener("DOMContentLoaded", () => {

  //INITIALIZE REFERENTIAL CONSTANTS

  const taskForm = document.getElementById('create-task-form');
  const tasks = document.getElementById('tasks');

  //INITIALIZE GLOBAL FUNCTION/VARIABLES

  //Delete existing list items
  const deleteListItem = function(taskDelete){taskDelete.remove();}

  //Text color for new 'listItem's
  let textColor = 'black';

  //TEXT PRECEEDING 'DROPDOWN MENU' -See Next
  const label = document.createElement('label');
  label.textContent = 'Priority Level:'
  taskForm.appendChild(label);

  //CREATE 'DROPDOWN MENU'
  const dropDownList = document.createElement('select');
  taskForm.appendChild(dropDownList);
  
  //OPTIONS FOR 'DROPDOWN MENU'
  const options = [
    { value: 'black', text: 'Doesn\'t Matter'},
    { value: 'red', text: 'Low',},
    { value: '#ffa500', text: 'Medium' },
    { value: 'green', text: 'High'},
  ];

  //CREATES ELEMENTS FOR EACH 'OPTION' IN 'DROPDOWN MENU'
  options.forEach(optionData => {
    const option = document.createElement('option');
    option.value = optionData.value;
    option.textContent = optionData.text;
    dropDownList.appendChild(option);
  })

  //EVENT LISTENER
  //Change next 'listItem' text color - From 'CHANGE'
  dropDownList.addEventListener('change', (event)=>{textColor = dropDownList.value})


  //REFORMATTING THE VISUAL PAGE 
  const list = document.querySelectorAll('input');
  const creatNewTaskbutton = list[1];
  const parent = creatNewTaskbutton.parentNode
  parent.insertBefore(label, creatNewTaskbutton);
  parent.insertBefore(dropDownList, creatNewTaskbutton)


  //SUBMIT EVENT TO ADD BULLET POINTS 
  taskForm.addEventListener('submit', (event)=>{
    event.preventDefault()
    const newTaskInput = document.getElementById('new-task-description').value

    //EVENT LISTENER
    //New list item - From 'INPUT'
    const listItem = document.createElement('li');
    listItem.textContent = newTaskInput;
    listItem.style.color = textColor;
    //Append the item to the list 
    tasks.appendChild(listItem)

    //CREATES BUTTON 
    const deleteButton = document.createElement('button');
    listItem.appendChild(deleteButton);
    deleteButton.textContent = 'X';

    taskForm.reset();

    //EVENT LISTENER
    //Delet List Item - From 'CLICK'
    deleteButton.addEventListener('click', (event)=>{
      deleteListItem(event.target.parentNode);
    })
  })
})
