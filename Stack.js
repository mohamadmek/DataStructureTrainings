class Stack {
 constructor() {
  this.items = [];
  this.count = 0;
 }

 push(element) {
   this.items[this.count] = element;
   console.log(`${element} was added to this ${this.count}`);
   this.count += 1;
   return this.count - 1
 }

 pop() {
  if(this.count == 0) return undefined;
  let deletedItem = this.items[this.count - 1];
  this.count--;
  console.log(`${deletedItem} was removed`);
  return deletedItem;
 }

 // Check top element in the stack
 peek() {
  console.log(this.items[this.count - 1])
 }

 isEmpty() {
  this.count == 0 ? console.log('Empty') : console.log('Not Empty')
 }

 size() {
  console.log(this.count)
 }

 print() {
  let str = '';
  for(let i = 0; i < this.count; i++) {
   str += this.items[i] + ' ';
  }
  console.log('str', str);
 }

 clear() {
  this.items = [];
  this.count = 0;
  return this.items;
 }
}
const stack = new Stack();

stack.push(100);
stack.push(200);
stack.push(300);

stack.peek();

stack.size();

stack.print();

stack.pop();
stack.pop();
stack.pop();

stack.isEmpty();