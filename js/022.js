// JSON 的序列化和反序列化
const deepCopy1 = source => {
  return JSON.parse(JSON.stringify(source));
};

// 递归克隆
const deepCopy2 = source => {
  if (source instanceof Object) {
    if (source instanceof Array) {
      const dist = new Array();
      for (let key in source) {
        dist[key] = deepCopy2(source[key]);
      }
      return dist;
    } else if (source instanceof Function) {
      const dist = function () {
        return source.apply(this, arguments);
      };
      for (let key in source) {
        dist[key] = deepCopy2(source[key]);
      }
      return dist;
    } else {
      const dist = new Object();
      for (let key in source) {
        dist[key] = deepCopy2(source[key]);
      }
      return dist;
    }
  } else {
    return source;
  }
};

const main = () => {
  const obj = { a: 1, b: { x: 10 } };
  const fun = (x, y) => x + y;
  fun.x = obj;
  const result1 = deepCopy1(obj);
  const result21 = deepCopy2(obj);
  console.log(obj === result21);
  console.log(result21);
  const result22 = deepCopy2(fun);
  console.log(fun === result22);
  console.dir(result22);
  console.log(result22(1, 2));
};

main();
