//1st dash of readme


//2nd dash of readme
const sort = Require('./Sort.js')
function findStates(array){
    let states = [];
    for(let x = 0;x<array.length;x++){
        if(array[x].fips == 0){
            states.push(array[x]);
        }
        else{
            null;
        }
    }
}

//3rd dash of readme
function percentDifference(array, percent){
    let statePercents = [];
    for(let x = 0;x<array.length;x++){
        if(array[x].fips == 0){
          let temp = array[x].obamaPercent - array[x].romneyPercent;
          temp = Math.abs(temp);
          if(temp < percent){
              statePercents.push(array[x].state);
          }
        }
    }
    return statePercents;
}

//4th dash of readme
function totalVotes(array,stateAbbreviation){
    let givenState = [];
    for(let x = 0; x<array.length; x++){
        if(array[x].state = state && array[x].fips !==0){
            givenState.push(array[x]);
        }
        else{
            continue;
        }
    }
    givenState = givenState.sort(function(a,b){
      return a.obamaVote+a.romneyVote - (b.obamaVote+b.romneyVote)//a.obamaVote - b.obamaVote
    });
    return givenState;
}

//5th dash of readme
function statesWon(array, candidate,state){
  let won = [];
  for(let x = 0;x<array.length;x++){
      let number = array.obamaVote - array.romneyVote;
      if(candidate = "Obama" && number > 0){
          won.push([array[x].state,array[x].county,array[x].obamaPercent]);
      }
      else if(candidate = "Romney"&& number < 0){
          won.push([array[x].state,array[x].county,array[x].romneyPercent]);
      }
      else{
          null;
      }
  }
}

//6th dash of readme & FIX ARRAY NUMBER
function percentDifference(array){
  let temp;
  let state;
  for(let x = 1; x<array.length; x++){
      if(array[x].fips !==0){
          temp = Math.abs(array[x].obamaPercent - array[x].romneyPercent);
          state = array[x].state;
          break;
      }
  }
  for(let x = 1;x<array.length;x++){
    if(array[x].fips == 0){
        continue;
    }
    else if(Math.abs(array[x].obamaPercent - array[x].romneyPercent) >= temp){
        temp = Math.abs(array[x].obamaPercent - array[x].romneyPercent);
        state = array[x].state;
    }
    else if(Math.abs(array[x].obamaPercent - array[x].romneyPercent) < temp){
        continue;
    }
  }
  return state;
}

//7th dash of readme
function voteDifference(array){
  let temp;
  let state;
  for(let x = 1; x<array.length; x++){
      if(array[x].fips !==0){
          temp = Math.abs(array[x].obamaVote- array[x].romneyVote);
          state = array[x].state;
          break;
      }
  }
  for(let x = 1;x<array.length;x++){
    if(array[x].fips == 0){
        continue;
    }
    else if(Math.abs(array[x].obamaVote - array[x].romneyVote) >= temp){
        temp = Math.abs(array[x].obamaVote - array[x].romneyVote);
    }
    else if(Math.abs(array[x].obamaVote - array[x].romneyVote) < temp){
        continue;
    }
  }
  return state;
}
