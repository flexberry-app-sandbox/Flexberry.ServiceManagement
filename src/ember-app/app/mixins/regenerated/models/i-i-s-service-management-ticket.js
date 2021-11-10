import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  ticketDate: DS.attr('date'),
  customer: DS.belongsTo('i-i-s-service-management-customer', { inverse: null, async: false }),
  ticketPosition: DS.hasMany('i-i-s-service-management-ticket-position', { inverse: 'ticket', async: false })
});

export let ValidationRules = {
  ticketDate: {
    descriptionKey: 'models.i-i-s-service-management-ticket.validations.ticketDate.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  customer: {
    descriptionKey: 'models.i-i-s-service-management-ticket.validations.customer.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  ticketPosition: {
    descriptionKey: 'models.i-i-s-service-management-ticket.validations.ticketPosition.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('TicketE', 'i-i-s-service-management-ticket', {
    ticketDate: attr('Ticket date', { index: 0 }),
    ticketPosition: hasMany('i-i-s-service-management-ticket-position', 'Ticket position', {
      amount: attr('Amount', { index: 0 })
    })
  });

  modelClass.defineProjection('TicketL', 'i-i-s-service-management-ticket', {
    ticketDate: attr('Ticket date', { index: 0 })
  });
};
