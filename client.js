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
function statesWon(array,candidate,state){
    let won = [];
    for(let x=0; x<array.length; x++){
        let number = array.obamaVote - array.romneyVote;
        if(candidate = "Obama" && number > 0){
            won.push([array[x].state,array[x].county, array[x].obamaPercent]);
        }
        else if(candidate = "Romney" && number < 0){
            won.push([array[x].state,array[x].county, array[x].romneyPercent]);
        }
        else{
            null;
        }
    }
}
