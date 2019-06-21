// IMPORT LIBRARY PACKAGES NEEDED BY YOUR PROGRAM
// SOME FUNCTIONALITY WITHIN A PACKAGE MAY BE RESTRICTED
// DEFINE ANY FUNCTION NEEDED
// FUNCTION SIGNATURE BEGINS, THIS FUNCTION IS REQUIRED


function cellCompete(states, days)
{
    let oldstates = states
    for(let j=0; j<days; j++){
        let newStates = [];
        for(let i=0; i<oldstates.length;i++){
            if(i === 0){
                if(oldstates[1] === 0){
                    newStates[0] = 0
                }
                else{
                   newStates[0] = 1
                }
            }
            else if(i==7){
                if(oldstates[6] === 0){
                newStates[7] = 0
                }else{
                    newStates[7] = 1
                }
            }
            else if(oldstates[i-1] !== oldstates[i+1]){
                newStates[i] = 1
            }
            else if(oldstates[i-1] === oldstates[i+1]){
                 newStates[i] = 0
            }
            
        }
        oldstates = newStates;
    }
    return oldstates; 
}

