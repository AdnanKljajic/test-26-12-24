/*
Za niz cijelih brojeva nums i cijeli broj target, trebaš vratiti indekse dva broja tako da njihov zbir bude jednak cilju (target).

Možeš pretpostaviti da svaki ulaz ima tačno jedno rješenje, i ne smiješ koristiti isti element dva puta.

Odgovor može biti vraćen u bilo kojem redoslijedu.

Primjer:

Ulaz: nums = [2,7,11,15], target = 9
Izlaz: [0,1]
Objašnjenje: Pošto nums[0] + nums[1] == 9, vraćamo [0, 1].
*/

let nums = [3, 6, 9, 12];
let target = 21;
function indexSum (){
    const indexArr = [];
    nums.forEach(function(num, i){
        nums.forEach(function(numNext, j){
            if (i<j && num +numNext == target){
              indexArr.push(i,j)
              }
            }
        )
    }
);
    
    console.log(indexArr);
}

indexSum()