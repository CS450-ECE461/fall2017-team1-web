import { Response } from 'ember-cli-mirage';

export default function() {
  this.urlPrefix = 'http://localhost:5000/';

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

  this.get('/gatekeeper/v1/accounts/me', function(schema) {
    return schema.accounts.find(1);
  });

  this.get('/v1/user/:id', function(schema, request) {
    let { id } = request.params;

    let user = schema.users.find(id);

    return user;
  });

  this.get('/v1/dogs/:id', function(schema, request) {
    let { id } = request.params;

    let dog = schema.dogs.find(id);

    return dog;
  });
}
