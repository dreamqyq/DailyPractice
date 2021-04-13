// JSON 的序列化和反序列化
const deepCopy1 = source => {
  return JSON.parse(JSON.stringify(source));
};

// 递归克隆
const deepCopy2 = source => {
  if (source instanceof Object) {
    let dist;
    if (source instanceof Array) {
      dist = new Array();
    } else if (source instanceof Function) {
      dist = function () {
        return source.apply(this, arguments);
      };
    } else {
      dist = new Object();
    }
    for (let key in source) {
      dist[key] = deepCopy2(source[key]);
    }
    return dist;
  } else {
    return source;
  }
};

// 递归克隆（考虑环）
const deepCopy3 = source => {
  const caches = [];
  const deepCopy3Inner = source => {
    if (source instanceof Object) {
      let cacheDist = findCache(caches, source);
      if (cacheDist) {
        return cacheDist;
      } else {
        let dist;
        if (source instanceof Array) {
          dist = new Array();
        } else if (source instanceof Function) {
          dist = () => {
            return source.apply(this, arguments);
          };
        } else {
          dist = new Object();
        }
        caches.push([source, dist]);
        for (let key in source) {
          dist[key] = deepCopy3Inner(source[key]);
        }
        return dist;
      }
    } else {
      return source;
    }
  };
  return deepCopy3Inner(source);
};

const findCache = (caches, source) => {
  for (let i = 0; i < caches.length; i++) {
    if (caches[i][0] === source) {
      return caches[i][1];
    }
  }
};

// 递归克隆（考虑环）,可以复制 Date，RegExp
const deepCopy4 = source => {
  const caches = [];
  const deepCopy4Inner = source => {
    if (source instanceof Object) {
      let cacheDist = findCache(caches, source);
      if (cacheDist) {
        return cacheDist;
      } else {
        let dist;
        if (source instanceof Array) {
          dist = new Array();
        } else if (source instanceof Function) {
          dist = () => {
            return source.apply(this, arguments);
          };
        } else if (source instanceof RegExp) {
          dist = new RegExp(source.source, source.flags);
        } else if (source instanceof Date) {
          dist = new Date(source);
        } else {
          dist = new Object();
        }
        caches.push([source, dist]);
        for (let key in source) {
          dist[key] = deepCopy4Inner(source[key]);
        }
        return dist;
      }
    } else {
      return source;
    }
  };
  return deepCopy4Inner(source);
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
  const obj3 = { c: 10, d: obj };
  obj3.self = obj3;
  const result31 = deepCopy3(obj3);
  console.log(result31);
  console.log(result31.self === obj3.self);
  const obj41 = { c: 10, d: obj };
  obj41.self = obj41;
  const result41 = deepCopy4(obj41);
  console.log('result41', result41);
  console.log('result41', result41.self === obj41.self);
  const obj42 = new Date();
  const result42 = deepCopy4(obj42);
  console.log('result42', result42 === obj42);
  console.log('result42', result42.getTime() === obj42.getTime());
  const obj43 = /hi+/gi;
  const result43 = deepCopy4(obj43);
  console.log('result43', result43 === obj43);
  console.log('result43', result43.source === obj43.source);
  console.log('result43', result43.flags === obj43.flags);
};

main();
