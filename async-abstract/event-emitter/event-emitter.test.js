import Tree from './event-emitter'

describe('Tree', () => {
  let tree;
  beforeEach(() => {
    tree = new Tree('start');
    tree.addChild('example');
  });

  it('#addChild', (done) => {
    tree.on('add', (node) => {
      expect(node.getKey()).toBe('test');
      expect(node.getParent().getKey()).toBe('start');
      done();
    });
    tree.addChild('test');
  });

  it('#removeChild', (done) => {
    tree.on('remove', (node) => {
      expect(node.getKey()).toBe('example');
      expect(node.getParent().getKey()).toBe('start');
      done();
    });
    tree.removeChild('example');
  });

  it('#removeChildWhenNotExists', () => {
    expect(() => tree.removeChild('not exists')).toThrow();
  });

  it('#childrenState', () => {
    tree.addChild('test');
    tree.removeChild('example');

    expect(tree.children.has('test')).toBe(true);
    expect(tree.children.has('example')).toBe(false);
  });
});
