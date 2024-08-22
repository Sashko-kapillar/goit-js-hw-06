/*  Задача 3. Конструктор рядків  */

class StringBuilder {
  #value;

  constructor(value) {
    this.#value = value;
  }
  getValue() {
    return this.#value;
  }

  padStart(str) {
    console.log(str);
  }

  padEnd(str) {
    console.log(str);
  }

  padBoth(str) {
    console.log(str);
  }
}

const builder = new StringBuilder(".");
console.log(builder.getValue()); // "."
builder.padStart("^");
console.log(builder.getValue()); // "^."
builder.padEnd("^");
console.log(builder.getValue()); // "^.^"
builder.padBoth("=");
console.log(builder.getValue()); // "=^.^="
