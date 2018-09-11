class Sorter {
  constructor() {
    this.info = [];
    this.compFunct = (a, b) => a - b;
  }

  add(element) {
    this.info.push(element);
  }

  at(index) {
    return this.info[index];
  }

  get length() {
    return this.info.length;
  }

  toArray() {
    return this.info;
  }

/*   sort(indices) {
    indices.sort((a, b) => {
      return a - b;
    });
    for(let i = 0; i < indices.length; i++) {
      for(let j = i; j < indices.length; j++) {
        let a, b;
        a = this.info[indices[i]];
        b = this.info[indices[j]];
        if(a > b) {
          this.info.splice(indices[i], 1, b);
          this.info.splice(indices[j], 1, a);
        }
      }
    }
  } */

  sort(indices) {
    indices.sort((a, b) => a - b);
    let tempArr = [];

    indices.forEach(element => {
      tempArr.push(this.info[element]);
    });

    tempArr.sort(this.compFunct);

    for(let i = 0; i < tempArr.length; i++) {
      this.info[indices[i]] = tempArr[i];
    }
  }

  setComparator(compareFunction) {
    this.compFunct = compareFunction;
  }
}

module.exports = Sorter;