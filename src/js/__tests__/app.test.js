import demo from '../app';

test('test', () => {
  const result = demo('variable');
  const expected = 'variable';
  expect(result).toBe(expected);
});
