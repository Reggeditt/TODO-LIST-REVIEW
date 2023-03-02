class LocalStorage {
  constructor() {
    this.store = {};
  }

  getItem = (key) => {
    console.log(key);
    return this.store.key;
  };

  setItem = (key, value) => {
    this.store.key = JSON.stringify(value);
  };

  clear = () => {
    this.store = {};
  };
}

const localStorage = new LocalStorage();

module.exports = localStorage;