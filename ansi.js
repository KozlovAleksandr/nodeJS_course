import ansi from "ansi";

const cursor = ansi(process.stdout);

// You can chain your calls forever:
cursor
  .red()                  // Установить цвет шрифта
  .bg.blue()              // Установить цвет фона
  .write('Hello World!')  // Написать '' в stdout
  .bg.reset()             // Сбросить цвет фона перед написание завершающего \n, 
                          // чтобы избежать сбоев терминала
  .write('\n')            // Финальный \n чтобы завершить всё


cursor.hex("#660000").bold().underline();

// You can use the regular logging functions, text will be green:
console.log("This is blood red, bold text");

// To reset just the foreground color:
cursor.fg.reset()
console.log('This will still be bold')
 
// to go to a location (x,y) on the console
// note: 1-indexed, not 0-indexed:
//cursor.goto(0, 19).write('Five down, ten over')
 
// to clear the current line:
//cursor.horizontalAbsolute(0).eraseLine().write('Starting again')
 
// to go to a different column on the current line:
//cursor.horizontalAbsolute(5).write('column five')
 
// Очистить всё
cursor.reset()
