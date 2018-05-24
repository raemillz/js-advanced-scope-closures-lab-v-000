function produceDrivingRange(blockRange){
  return function(rideStart, rideEnd) {
    start = parseInt(rideStart);
    end = parseInt(rideEnd);
    rideDistance = Math.abs(end - start);
    range = blockRange - rideDistance;
    if (range < 0) {
      return `${Math.abs(range)} blocks out of range`;
    } else {
      return `within range by ${range}`;
    }
  };
}

function produceTipCalculator(tipPercentage){
  return function(rideCost) {
    return rideCost * tipPercentage;
  }
}
