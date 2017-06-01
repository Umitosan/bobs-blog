import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    delete(post) {
      if (confirm('Delete this Post?')) {
        this.sendAction('destroyPost', post);
      }
    }
  }
});
