import Ember from 'ember';

export function hotelPopularity(params/*, hash*/) {
var hotel =params[0];
if(hotel.get('ratings').get('length')>=2){
  return Ember.String.htmlSafe('<span class="glyphicon glyphicon-heart"></span>');
}
}

export default Ember.Helper.helper(hotelPopularity);
