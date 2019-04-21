const hello = (name = 'n/a') => {
  const result = `Hello ${name}`;
  return result;
};

console.log(hello('User'));
