import { test } from 'qunit';
import moduleForAcceptance from 'csci45000-team-1-ui/tests/helpers/module-for-acceptance';

let gatekeeper;

moduleForAcceptance('Acceptance | Login', {
  beforeEach() {
    gatekeeper = this.application.__container__.lookup('service:gatekeeper');
  },

  afterEach() {
    server.shutdown();
    gatekeeper.forceSignOut();
  }
});

test('redirect to login page on first visit', function(assert) {
  visit('/');

  andThen(function() {
    assert.equal(currentURL(), '/login', 'should have automatically redirect to login');
  });
});

test('should not allow submission of empty username and password', function(assert) {
  visit('/login');

  andThen(function() {
    assert.equal(currentURL(), '/login', 'should have automatically redirect to login. password must have been cached');
    assert.ok(find('button')[0].disabled);
  });
});

test('should redirect to index route after successful login', function(assert) {
  visit('/login');

  andThen(function() {
    assert.equal(currentURL(), '/login', 'should have automatically redirect to login. password must have been cached');
  });

  fillIn('#username', 'Test User');
  fillIn('#password', 'test1234');

  click('button');
  andThen(function() {
    assert.equal(currentRouteName(), 'index', 'should have been redirected to index route after login');
  });
});
