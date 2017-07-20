import Ember from 'ember';

export default Ember.Component.extend({
  showUpdateForm:false,
  actions:{
    showUpdateFormButton(){
      this.set('showUpdateForm',true);
    },
    update(hotel){
      var params={
        name: this.get('name'),
        location: this.get('location'),
        image: this.get('image'),
        description: this.get('description')
      };
      this.set('showUpdateForm',false);
      this.sendAction('update',hotel,params);
    }
  }
});
