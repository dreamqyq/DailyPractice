{
  class EventHub {
    private cache: { [key: string]: Array<() => void> } = {};
    on(eventName: string, fn: (...args: Array<any>) => void) {
      this.cache[eventName] = this.cache[eventName] || [];
      this.cache[eventName].push(fn);
    }
    emit(eventName: string, ...args: Array<unknown>) {
      if (!this.cache[eventName]) return;
      this.cache[eventName].forEach(fn => {
        fn.apply(this, args);
      });
    }
    off(eventName: string, fn: () => void) {
      const index = this.cache[eventName].indexOf(fn);
      if (index === -1) return;
      this.cache[eventName].splice(index, 1);
    }
  }

  const test = () => {
    const eventHub = new EventHub();
    let flag = false;
    const fn1 = (x: number, y: number) => {
      console.log('fn1', x + y);
    };
    const fn2 = () => {
      flag = true;
    };

    const handle = () => {
      eventHub.on('test1', fn1);
      eventHub.on('test2', fn2);
    };
    handle();
    eventHub.emit('test1', 1, 2);
    eventHub.off('test2', fn2);
    eventHub.emit('test2');
    console.log(flag);
  };
  test();
}
