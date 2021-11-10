import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  ranking: DS.attr('number'),
  feedbackText: DS.attr('string'),
  event: DS.belongsTo('i-i-s-service-management-event', { inverse: null, async: false }),
  customer: DS.belongsTo('i-i-s-service-management-customer', { inverse: null, async: false })
});

export let ValidationRules = {
  ranking: {
    descriptionKey: 'models.i-i-s-service-management-feedback.validations.ranking.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  feedbackText: {
    descriptionKey: 'models.i-i-s-service-management-feedback.validations.feedbackText.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  event: {
    descriptionKey: 'models.i-i-s-service-management-feedback.validations.event.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  customer: {
    descriptionKey: 'models.i-i-s-service-management-feedback.validations.customer.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('FeedbackE', 'i-i-s-service-management-feedback', {
    ranking: attr('Ranking', { index: 0 }),
    feedbackText: attr('Feedback text', { index: 1 })
  });

  modelClass.defineProjection('FeedbackL', 'i-i-s-service-management-feedback', {
    ranking: attr('Ranking', { index: 0 }),
    feedbackText: attr('Feedback text', { index: 1 })
  });
};
