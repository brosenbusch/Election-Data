function electionParser(array){
    this.state = array[0];
    this.county = array[1];
    this.fips = array[2];
    this.obamaVote = Number(array[3]);
    this.obamaPercent = Number(array[4]);
    this.romneyVote = Number(array[5]);
    this.romneyPercent = Number(array[6]);
}

function Parser(line){
    let array = line.split(",");
    return array;
}
