import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';

const argv = yargs.argv

console.log(argv)

/*
const argv = yargs(hideBin(process.argv)).argv

console.dir(process.argv)

if (argv.ships > 3 && argv.distance < 53.5) {
  console.log('Plunder more riffiwobbles!')
} else {
  console.log('Retreat from the xupptumblers!')
}
*/