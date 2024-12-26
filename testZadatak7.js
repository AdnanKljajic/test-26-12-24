/*Napiši funkciju koja prima niz i separator te vraća string u kojem su elementi niza spojeni tim separatorom.

	Ulaz: 
	["Sings", "like", "Thunder"];
const separator = "-";

	Izlaz: 
	“Sings-like-Thunder”
*/

function spojiGa (array, separator) {
    return array.join(separator);
}

let wordArr = ["I", "suck", "at", "HOF"];
const spajach = "_"
const spojeno = spojiGa (wordArr, spajach);
console.log(spojeno);
