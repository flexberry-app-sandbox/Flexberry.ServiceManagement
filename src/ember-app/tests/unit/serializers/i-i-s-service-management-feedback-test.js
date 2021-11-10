import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-service-management-feedback', 'Unit | Serializer | i-i-s-service-management-feedback', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-service-management-feedback',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'transform:i-i-s-service-management-t-event-type',

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
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
