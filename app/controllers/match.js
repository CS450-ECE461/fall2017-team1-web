import Controller from '@ember/controller';
import { computed } from '@ember/object';
import $ from 'jquery';

export default Controller.extend({
  choosingFeeling: true,
  loading: false,
  dogs: [],
  currentDogIndex: 0,

  nextDisabled: computed('currentDogIndex', 'dogs.length', function() {
    return this.get('currentDogIndex') == this.get('dogs.length') - 1;
  }),

  prevDisabled: computed('currentDogIndex', function() {
    return this.get('currentDogIndex') == 0;
  }),

  actions: {
    findMatches(matchType) {
      this.set('loading', true);
      this.set('choosingFeeling', false);

      $.ajax({
        url: `http://localhost:5000/user/${this.get('gatekeeper.currentUser.id')}/criteria`,
        type: 'PUT',
        data: { status: matchType }
      }).then(() => {
        this.set('loading', false);
      });
    },

    nextDog() {
      this.incrementProperty('currentDogIndex');
    },

    prevDog() {
      this.incrementProperty('currentDogIndex', -1);
    },

    triggerMatch() {

    }
  }
});
