import Ember from 'ember';

export default Ember.Component.extend({
  addNewPost: false,
  actions: {
    postFormShow() {
      this.set('title', '');
      this.set('body', '');
      this.set('addNewPost', true);
    },

    savePost() {
      var params = {
        title: this.get('title'),
        body: this.get('body')
      };
      this.set('addNewPost', false);
      this.sendAction('savePost', params);
    }
  }
});
