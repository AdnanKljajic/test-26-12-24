/*
Napiši funkciju koja pronalazi razliku između najveće i najmanje vrijednosti u nizu.


	Ulaz:
[7, 3, 10, 15, 2] 

	Izlaz: 
	13 //(15 - 2)

*/

let numArr = [7, 69, 420, 1337];
function razlikaBiggusSmallus(arr){
    const min = Math.min(...arr);
    const max = Math.max(...arr);
    return max - min;
}

const razlika = razlikaBiggusSmallus(numArr);
console.log(razlika)
