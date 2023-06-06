const n = parseInt(readline()); // the number of temperatures to analyse
var inputs = readline().split(' ');
result = Infinity
for (let i = 0; i < n; i++) {
    const t = parseInt(inputs[i]);// a temperature expressed as an integer ranging from -273 to 5526

    if (t > 0 && result > t || t > result && t < 0 || t > result*(-1) && t < 0 || result < 0 && result == t*(-1) || t == 0) {
        result = t;
    }
}
if (result == Infinity) {
    result = "0"
}
// Write an answer using console.log()
// To debug: console.error('Debug messages...');

console.log(result);
