// process.stdout.write('hello from spinner1.js... \rheyyy\n');


const array = ['|','/','-','\\','|','/'];
let delay = 0;

for(const symbol of array){
  setTimeout(() => {
    process.stdout.write(`\r${symbol}  `)
  },delay += 250)
}

