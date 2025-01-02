function curry(fn, ...a) {
    return a.length >= fn.length ? fn(...a) : (...b) => curry(fn, ...a, ...b)
}

const add = (a, b, c) => a + b + c

const curryAdd = curry(add)

console.log(curryAdd(1)(2)(3))