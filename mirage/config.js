import { Response } from 'ember-cli-mirage';

export default function() {

  // These comments are here to help you get started. Feel free to delete them.

  /*
    Config (with defaults).

    Note: these only affect routes defined *after* them!
  */

  this.urlPrefix = 'http://localhost:5000/';    // make this `http://localhost:8080`, for example, if your API is on a different server
  // this.namespace = '';    // make this `/api`, for example, if your API is namespaced
  // this.timing = 400;      // delay for each request, automatically set to 0 during testing

  /*
    Shorthand cheatsheet:

    this.get('/posts');
    this.post('/posts');
    this.get('/posts/:id');
    this.put('/posts/:id'); // or this.patch
    this.del('/posts/:id');

    http://www.ember-cli-mirage.com/docs/v0.3.x/shorthands/
  */

  this.post('/gatekeeper/v1/oauth2/token', function(schema, request) {
    let { username, password } = JSON.parse(request.requestBody);

    if (username === 'Test User' && password === 'test1234') {
      return 2993287529351309;
    }

    return new Response(400, {}, {
      errors: {
        code: 'invalid_username', message: 'Invalid username'
      }
    });
  });

  this.post('/gatekeeper/v1/oauth2/logout', function() {
    return new Response(200, {}, {});
  });

  this.get('/gatekeeper/v1/accounts', function(schema) {
    return schema.accounts.find(1);
  });

  this.get('/v1/user/:id', function(schema, request) {
    let { id } = request.params;

    let user = schema.users.find(id);

    return user;
  });
}
