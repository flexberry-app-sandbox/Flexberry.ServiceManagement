import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-service-management-feedback', 'Unit | Model | i-i-s-service-management-feedback', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-service-management-customer-request',
    'model:i-i-s-service-management-customer',
    'model:i-i-s-service-management-event',
    'model:i-i-s-service-management-feedback',
    'model:i-i-s-service-management-service-provider',
    'model:i-i-s-service-management-ticket-position',
    'model:i-i-s-service-management-ticket',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
