export const retrieveWeather = async (city, unit = 'metric') => {
  try{
    const request = await fetch(`http://localhost:3001/weather?q=${city}&units=${unit}`);
    if(request.status === 200){
      const response = await request.json();
      return {
        status: 200,
        body: response
      }
    } else {
      return {
        status: 400,
        body: 'No Information Found.'
      }
    }
  } catch (err) {
    return console.error(err);
  }
}