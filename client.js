const sort = Require('./sort.js');

//second bullet point
function findStates(array){
    let states = [];
    for(let x = 0; x<array.length; x++){
        if(array[x].fips == 0){
            states.push(array[x]);
        }
        else{
            null;
        }
    }
}

//third bullet point
function percentDifference(array,percent){
    let statePercents = [];
    for(let x = 0; x<array.length; x++){
        if(array[x].fips == 0){
            let temp = array[x].obamaPercent - array[x].romneyPercent;
            temp = Math.abs(temp);
            if(temp <= percent){
                statePercents.push(array[x].state);
            }
        }
    }
    return statePercents;
}

//fourth bullet point
function totalVotes(array,state){
    sort.insertionSort(list,property);
}

//fifth bullet point
function statesWon(array,candidate){
    let won = [];
    let number = array.obamaVote - array.romneyVote;
    
}
