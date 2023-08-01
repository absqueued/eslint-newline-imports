const { foo, bar } = require('./foobar');
const { baz, qux } = require('./bazqux');

const abc = 'Abc';

const obj = { a: 'a', b: 'b', c: 'c' };

console.log(foo(), bar(), baz(), qux());
