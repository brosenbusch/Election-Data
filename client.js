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
        let temp = array[x].obamaPercent - array[x].romneyPercent;
        temp = Math.abs(temp);
        if(temp <= percent){
          
        }
    }
}
