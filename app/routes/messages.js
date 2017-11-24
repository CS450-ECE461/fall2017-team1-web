import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return [
      {
        id: 1,
        avatar: 'https://cs.iupui.edu/~jbcampbe/cpg926.png',
        fullName: 'Test Campbell'
      },
      {
        id: 2,
        avatar: 'https://cs.iupui.edu/~jbcampbe/cpg926.png',
        fullName: 'Test Rupsis'
      },
      {
        id: 3,
        avatar: 'https://cs.iupui.edu/~jbcampbe/cpg926.png',
        fullName: 'Test Singh'
      },
      {
        id: 4,
        avatar: 'https://cs.iupui.edu/~jbcampbe/cpg926.png',
        fullName: 'Test Farkas'
      },
      {
        id: 5,
        avatar: 'https://cs.iupui.edu/~jbcampbe/cpg926.png',
        fullName: 'Test Alhazzani'
      },
      {
        id: 6,
        avatar: 'https://cs.iupui.edu/~jbcampbe/cpg926.png',
        fullName: 'Test Haskins'
      }
    ];
  }
});
