import Controller from '@ember/controller';
import { all } from 'rsvp';
import $ from 'jquery';

export default Controller.extend({
  choosingFeeling: true,
  loading: false,
  showProfile: false,
  dogs: [],
  currentDogIndex: 0,

  actions: {
    findMatches(matchType) {
      this.set('loading', true);
      this.set('choosingFeeling', false);

      $.ajax({
        url: `http://localhost:5000/v1/user/${this.get('gatekeeper.currentUser.id')}/status`,
        type: 'PUT',
        data: { status: matchType }
      }).then(() => {
        $.ajax({
          url: `http://localhost:5000/v1/user/${this.get('gatekeeper.currentUser.id')}/criteria`,
          type: 'GET'
        }).then((response) => {
          let { potentialMatchesQueue } = response;

          let promises = potentialMatchesQueue.map((potentialMatch) => this.get('store').findRecord('user', potentialMatch._id));

          all(promises).then((resolvedPromises) => {
            resolvedPromises.forEach((user) => {
              user.get('dog').forEach((dog) => {
                dog.owner = user;
                this.get('dogs').push(dog);
              });
            });

            this.set('loading', false);
          });
        });
      });
    },

    acceptMatch() {
      $.ajax({
        url: `http://localhost:5000/v1/user/${this.get('gatekeeper.currentUser.id')}/match`,
        type: 'POST',
        data: {
          id: this.get('dogs')[this.get('currentDogIndex')].owner.id,
          liked: true
        }
      }).then(() => {
        this.incrementProperty('currentDogIndex');
      });
    },

    declineMatch() {
      $.ajax({
        url: `http://localhost:5000/v1/user/${this.get('gatekeeper.currentUser.id')}/match`,
        type: 'POST',
        data: {
          id: this.get('dogs')[this.get('currentDogIndex')].owner.id,
          liked: false
        }
      }).then(() => {
        this.incrementProperty('currentDogIndex');
      });
    },

    toggleProfile() {
      this.toggleProperty('showProfile');
    }
  }
});
