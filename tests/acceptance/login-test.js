import { test } from 'qunit';
import moduleForAcceptance from 'csci45000-team-1-ui/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | Login', {
  afterEach() {
    server.shutdown();
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

  click('input[type="submit"]');

  andThen(function() {
    assert.equal(find('.mdl-textfield__error:eq(0)').text().trim(), 'Please fill out this field.', 'should show failure message for username field');
    assert.equal(find('.mdl-textfield__error:eq(1)').text().trim(), 'Please fill out this field.', 'should show failure message for password field');
  });
});

test('should give response to user after failed login', function(assert) {
  visit('/login');

  fillIn('.mdl-input:eq(0)', 'Not Valid');
  fillIn('.mdl-input:eq(1)', 'Not Valid');

  click('input[type="submit"]');
  andThen(function() {
    assert.equal(find('.error-message').length, 1, 'should give failure message after bad login information');
  });
});

test('should redirect to index route after successful login', function(assert) {
  visit('/login');

  fillIn('.mdl-input:eq(0)', 'John Smith');
  fillIn('.mdl-input:eq(1)', 'test1234');

  click('input[type="submit"]');
  andThen(function() {
    assert.equal(currentRouteName(), 'index', 'should have been redirected to index route after login');
  });
});
