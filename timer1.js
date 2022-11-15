const inputArgs = process.argv.slice(2).map(num => Number(num));

inputArgs.forEach((time) => {
  setTimeout(() => {
    process.stdout.write('\x07');
  }, time * 1000);
});