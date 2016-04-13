var places = "in Cape Town 9, in George 7, in Port Elizabeth 5 and in Johannesburg -1";

var places = places.replace(/ and /,",").replace(/in /g, "").replace(/, /g, ",");

//console.log(places)

places = places.split(",");

//console.log(places);

places = places.map(function(place){
  var parts = place.split(" ");
//  console.log(parts);
  if (parts.length > 2){
     return {
       city : parts[0] + " " + parts[1],
       temperature : Number(parts[2])
     }
   }
  else{
     return {
       city : parts[0],
       temperature : Number(parts[1])
     }
   }
 });

places.forEach(function(obj){
  min = Math.min.apply(null, places.map(function(item) {
    return item.temperature;
  })),
  max = Math.max.apply(null, places.map(function(item) {
    return item.temperature;
  }));

  if(obj.temperature === min){

    console.log(obj, min,"Minimum temperature");
  }
  if(obj.temperature === max){

    console.log(obj, max, "Maximum temperature");
  }
})
// console.log('min', min);
// console.log('max', max)
