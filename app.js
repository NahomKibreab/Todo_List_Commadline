let todoList = [];
let request = prompt('What would you like to do?');
if (request !== 'quit') {
  while (true) {
    if (request === 'new') {
      while (true) {
        request = prompt('Enter new list:');
        if (request === 'quit') break;
        todoList.push(request);
        console.log(`${request} added to list`);
      }
    } else if (request === 'list') {
      console.log('**********');
      let count = 0;
      for (let todo of todoList) {
        console.log(`${count}: ${todo}`);
        count++;
      }
      console.log('**********');
    } else if (request === 'delete') {
      let itemIndex = parseInt(prompt('Enter the index you want to delete!'));
      if (itemIndex >= 0) {
        todoList.splice(itemIndex, 1);
      }
    }
    request = prompt('What would you like to do?');
    if (request === 'quit') break;
  }
}
