import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.events-and-requests.caption'),
          title: i18n.t('forms.application.sitemap.events-and-requests.title'),
          children: [{
            link: 'i-i-s-service-management-feedback-l',
            caption: i18n.t('forms.application.sitemap.events-and-requests.i-i-s-service-management-feedback-l.caption'),
            title: i18n.t('forms.application.sitemap.events-and-requests.i-i-s-service-management-feedback-l.title'),
            icon: 'tasks',
            children: null
          }, {
            link: 'i-i-s-service-management-customer-request-l',
            caption: i18n.t('forms.application.sitemap.events-and-requests.i-i-s-service-management-customer-request-l.caption'),
            title: i18n.t('forms.application.sitemap.events-and-requests.i-i-s-service-management-customer-request-l.title'),
            icon: 'tasks',
            children: null
          }, {
            link: 'i-i-s-service-management-ticket-l',
            caption: i18n.t('forms.application.sitemap.events-and-requests.i-i-s-service-management-ticket-l.caption'),
            title: i18n.t('forms.application.sitemap.events-and-requests.i-i-s-service-management-ticket-l.title'),
            children: null
          }, {
            link: 'i-i-s-service-management-event-l',
            caption: i18n.t('forms.application.sitemap.events-and-requests.i-i-s-service-management-event-l.caption'),
            title: i18n.t('forms.application.sitemap.events-and-requests.i-i-s-service-management-event-l.title'),
            icon: 'chart bar',
            children: null
          }]
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.profile.caption'),
          title: i18n.t('forms.application.sitemap.profile.title'),
          children: [{
            link: 'i-i-s-service-management-customer-l',
            caption: i18n.t('forms.application.sitemap.profile.i-i-s-service-management-customer-l.caption'),
            title: i18n.t('forms.application.sitemap.profile.i-i-s-service-management-customer-l.title'),
            icon: 'file',
            children: null
          }]
        }
      ]
    };
  }),
})