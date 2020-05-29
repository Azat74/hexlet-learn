import EventEmitter from 'events';

class Tree extends EventEmitter {
  constructor(key, parent) {
    super();
    this.parent = parent;
    this.key = key;
    this.children = new Map();
  }

  getKey() {
    return this.key;
  }

  getParent() {
    return this.parent;
  }

  // BEGIN (write your solution here)
  addChild(name) {
    const item = new Tree(name, this)
    this.children.set(name, item)
    this.emit('add', item)
  }

  removeChild(name) {
    if (this.children.has(name)) {
      this.emit('remove', this.children.get(name))
      this.children.delete(name)
    } else {
      throw new Error(`Name '${name}' does not exists`);
    }
  }
  // END
}

export default Tree;
