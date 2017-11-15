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
  });

  click('input[type="submit"]');

  andThen(function() {
    assert.equal(find('.mdl-textfield__error:eq(0)').text().trim(), 'Please fill out this field.', 'should show failure message for username field');
    assert.equal(find('.mdl-textfield__error:eq(1)').text().trim(), 'Please fill out this field.', 'should show failure message for password field');
  });
});

test('should give response to user after failed login', function(assert) {
  visit('/login');

  andThen(function() {
    assert.equal(currentURL(), '/login', 'should have automatically redirect to login. password must have been cached');
  });

  fillIn('.mdl-input:eq(0)', 'Not Valid');
  fillIn('.mdl-input:eq(1)', 'Not Valid');

  click('input[type="submit"]');
  andThen(function() {
    assert.equal(find('.mdl-textfield__error:eq(0)').text().trim(), 'Invalid username', 'should give failure message after bad login information');
  });
});

test('should redirect to index route after successful login', function(assert) {
  visit('/login');

  andThen(function() {
    assert.equal(currentURL(), '/login', 'should have automatically redirect to login. password must have been cached');
  });

  fillIn('.mdl-input:eq(0)', 'Test User');
  fillIn('.mdl-input:eq(1)', 'test1234');

  click('input[type="submit"]');
  andThen(function() {
    assert.equal(currentRouteName(), 'index', 'should have been redirected to index route after login');
  });
});
