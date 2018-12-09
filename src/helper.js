export function units(){
  return {
    metric: {
      temprature: 'C',
      distance: 'km/h'
    }
  }
}

export function convertWindSpeed(speed) {
  return speed * 3.6;
}

export function calculateWindDirection(angle) {
  if(angle === 0){
    return 'N';
  }
  if(angle > 0 && angle < 90){
    return 'NE';
  }
  if(angle === 90){
    return 'E';
  }
  if(angle > 90 && angle < 180){
    return 'SE';
  }
  if(angle === 180){
    return 'S';
  }
  if(angle > 180 && angle < 270){
    return 'SW';
  }
  if(angle === 270){
    return 'W';
  }
  if(angle > 270 && angle < 360){
    return 'NW';
  }
}