let todoList = [];
let request = prompt('What would you like to do?');

while (request !== 'quit' && request !== 'q') {
  if (request === 'new') {
    request = prompt('Ok, what is the new todo?');
    todoList.push(request);
    console.log(`${request} added to list`);
  } else if (request === 'list') {
    console.log('**********');
    let count = 0;
    for (let i = 0; i < todoList.length; i++) {
      console.log(`${i}: ${todoList[i]}`);
    }
    console.log('**********');
  } else if (request === 'delete') {
    let itemIndex = parseInt(prompt('Enter the index you want to delete!'));
    if (itemIndex >= 0) {
      todoList.splice(itemIndex, 1);
    } else {
      console.log('Unknown index');
    }
  }
  request = prompt('What would you like to do?');
}
console.log('OK QUIT THE APP!');
