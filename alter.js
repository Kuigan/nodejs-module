// Importieren des Chalk-Moduls
import chalk from 'chalk';

// Definition und Export der Funktion summe
export function summe(x, y) {
  const z = x + y;
  // Verwendung von Chalk, um die Konsolenausgabe bunt zu machen
  console.log(chalk.blue(`Die Summe von Zahlen `) + chalk.red.bold(`${x} `) + chalk.blue(`und `) + chalk.red.bold(`${y}`) + chalk.blue(`ist `) + chalk.red.bold(`${z} `) + chalk.blue(`.`));
}