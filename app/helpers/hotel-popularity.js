import Ember from 'ember';

export function hotelPopularity(params/*, hash*/) {
var hotel =params[0];
//checks the number of ratings a restaurant has

if(hotel.get('ratings').get('length')>=2){
  //return glyphicon next to a restaurant if it has more than 2 reviews 
  return Ember.String.htmlSafe('<span class="glyphicon glyphicon-heart"></span>');
}
}

export default Ember.Helper.helper(hotelPopularity);
