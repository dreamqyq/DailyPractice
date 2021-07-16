class EatManConstructor {
  constructor(name) {
    this.tasks = [];
    this.name = name;
    this.tasks.push(this.createFn(`Hi This is ${this.name}!`));
    setTimeout(() => {
      this.next();
    }, 0);
  }
  eat(food) {
    this.tasks.push(this.createFn(`Eat ${food}~`));
    return this;
  }
  eatFirst(food) {
    this.tasks.unshift(this.createFn(`Eat ${food}~`));
    return this;
  }
  createFn(string) {
    return () => {
      console.log(string);
      this.next();
    };
  }
  next() {
    const task = this.tasks.shift();
    task?.();
  }
}

function EatMan(name) {
  return new EatManConstructor(name);
}

one.addEventListener('click', () => {
  console.log('示例1');
  EatMan('Hank');
});
two.addEventListener('click', () => {
  console.log('示例2');
  EatMan('Hank').eat('dinner').eat('supper');
});
three.addEventListener('click', () => {
  console.log('示例3');
  EatMan('Hank').eat('dinner').eatFirst('lunch');
});
four.addEventListener('click', () => {
  console.log('示例4');
  EatMan('Hank').eat('dinner').eatFirst('lunch').eatFirst('breakfast');
});
