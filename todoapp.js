let input = prompt("What would you like to do ?...");
const todos = ['Collect Chicken Eggs', 'Clean Litter Box'];
while (input !== 'quit' && input !== 'q') {
    if (input === 'list') {
        console.log('*******************');
        for (let i = 0; i < todos.length; i++) {
            console.log(`${i} : ${todos[i]}`);
        }
        console.log('*******************');
    } else if (input === 'new') {
        const newTodo = prompt("What would you like to add to the todo?..");
        todos.push(newTodo);
        console.log(`${newTodo} is added to the todo list...`);
    } else if (input === 'delete') {
        const index = parseInt(prompt("enter the index you want to delete in the todo.."));
        if (!Number.isNaN(index)) {
            const deleted = todos.splice(index, 1);
            console.log(`OK deleted ${deleted[0]}`);
        } else {
            console.log('Unknown Index');
        }
    }
    input = prompt("What would you like to do ?...");
}
console.log("OK, YOU QUIT THE APP!!!..");