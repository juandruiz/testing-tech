let sortedArray = arr.sort((a,b)=>a-b)
let leastElement = sortedArray.shift()
let leastElementDivisors = []
//check divisors of the least Element
for(let i=1; i<=leastElement;i++){
    if(leastElement % i === 0){
        leastElementDivisors.push(i)
    }
}
leastElementDivisors.sort((a,b)=>b-a)
//console.log(leastElementDivisors)
//check all the divisors against given Array
//beginning from the greatest to the least 
let counter = 0;
console.log((arr))
for(let j=0;j<leastElementDivisors.length;j++){
    counter = 0;
    for(let i=0; i<sortedArray.length;i++){
        console.log("juan is testing:")
        console.log("leastElementDivisors[j] = " + leastElementDivisors[j])
         console.log("sortedArray[i] = " + sortedArray[i])
         var modulus = sortedArray[j]%leastElementDivisors[i] 
         console.log(typeof sortedArray[j])
         console.log(typeof leastElementDivisors[i] )
         console.log(`modulus result is ${modulus}`)
        if(sortedArray[j]%leastElementDivisors[i] === 0){
            counter++
        }
    }
    console.log(`counter is ${counter}`)
    console.log(`num is ${num}`)
   if(counter === num-1){ return leastElementDivisors[i]}
}