import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return [
      {
        id: 2,
        avatar: 'https://cs.iupui.edu/~jbcampbe/person.svg',
        fullName: 'Test Rupsis'
      },
      {
        id: 3,
        avatar: 'https://cs.iupui.edu/~jbcampbe/person.svg',
        fullName: 'Test Singh'
      },
      {
        id: 4,
        avatar: 'https://cs.iupui.edu/~jbcampbe/person.svg',
        fullName: 'Test Farkas'
      },
      {
        id: 5,
        avatar: 'https://cs.iupui.edu/~jbcampbe/person.svg',
        fullName: 'Test Alhazzani'
      },
      {
        id: 6,
        avatar: 'https://cs.iupui.edu/~jbcampbe/person.svg',
        fullName: 'Test Haskins'
      }
    ];
  }
});
