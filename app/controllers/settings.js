import Controller from '@ember/controller';

export default Controller.extend({
  ageRange: {
    min: 18,
    max: 100
  },

  ageStart: [30, 40],

  distanceRange: {
    min: 5,
    max: 50
  },

  startDistance: 25,

  actions: {
    signOut() {
      this.get('gatekeeper').signOut().then(() => {
        this.replaceRoute('login');
      }).catch(() => {
        this.get('gatekeeper').forceSignOut();
        this.replaceRoute('login');
      });
    },

    sliderChanged(value) {
      console.log(value);
    }
  }
});
