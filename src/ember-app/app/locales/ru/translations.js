import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

import IISService_ManagementCustomerLForm from './forms/i-i-s-service-management-customer-l';
import IISService_ManagementCustomerRequestLForm from './forms/i-i-s-service-management-customer-request-l';
import IISService_ManagementEventLForm from './forms/i-i-s-service-management-event-l';
import IISService_ManagementFeedbackLForm from './forms/i-i-s-service-management-feedback-l';
import IISService_ManagementServiceProviderLForm from './forms/i-i-s-service-management-service-provider-l';
import IISService_ManagementTicketLForm from './forms/i-i-s-service-management-ticket-l';
import IISService_ManagementCustomerEForm from './forms/i-i-s-service-management-customer-e';
import IISService_ManagementCustomerRequestEForm from './forms/i-i-s-service-management-customer-request-e';
import IISService_ManagementEventEForm from './forms/i-i-s-service-management-event-e';
import IISService_ManagementFeedbackEForm from './forms/i-i-s-service-management-feedback-e';
import IISService_ManagementServiceProviderEForm from './forms/i-i-s-service-management-service-provider-e';
import IISService_ManagementTicketEForm from './forms/i-i-s-service-management-ticket-e';
import IISService_ManagementCustomerRequestModel from './models/i-i-s-service-management-customer-request';
import IISService_ManagementCustomerModel from './models/i-i-s-service-management-customer';
import IISService_ManagementEventModel from './models/i-i-s-service-management-event';
import IISService_ManagementFeedbackModel from './models/i-i-s-service-management-feedback';
import IISService_ManagementServiceProviderModel from './models/i-i-s-service-management-service-provider';
import IISService_ManagementTicketPositionModel from './models/i-i-s-service-management-ticket-position';
import IISService_ManagementTicketModel from './models/i-i-s-service-management-ticket';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-service-management-customer-request': IISService_ManagementCustomerRequestModel,
    'i-i-s-service-management-customer': IISService_ManagementCustomerModel,
    'i-i-s-service-management-event': IISService_ManagementEventModel,
    'i-i-s-service-management-feedback': IISService_ManagementFeedbackModel,
    'i-i-s-service-management-service-provider': IISService_ManagementServiceProviderModel,
    'i-i-s-service-management-ticket-position': IISService_ManagementTicketPositionModel,
    'i-i-s-service-management-ticket': IISService_ManagementTicketModel
  },

  'application-name': 'Service_ management',

  forms: {
    loading: {
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'Service_ management',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Service_ management',
          title: 'Service_ management'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
          title: ''
        },
        'events-and-requests': {
          caption: 'Events and Requests',
          title: 'Events and Requests',
          'i-i-s-service-management-feedback-l': {
            caption: 'Feedback',
            title: ''
          },
          'i-i-s-service-management-customer-request-l': {
            caption: 'Customer request',
            title: ''
          },
          'i-i-s-service-management-ticket-l': {
            caption: 'Ticket',
            title: ''
          },
          'i-i-s-service-management-event-l': {
            caption: 'Event',
            title: ''
          }
        },
        profile: {
          caption: 'Profile',
          title: 'Profile',
          'i-i-s-service-management-customer-l': {
            caption: 'Customer Profile',
            title: 'Customer'
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
    },
    'i-i-s-service-management-customer-l': IISService_ManagementCustomerLForm,
    'i-i-s-service-management-customer-request-l': IISService_ManagementCustomerRequestLForm,
    'i-i-s-service-management-event-l': IISService_ManagementEventLForm,
    'i-i-s-service-management-feedback-l': IISService_ManagementFeedbackLForm,
    'i-i-s-service-management-service-provider-l': IISService_ManagementServiceProviderLForm,
    'i-i-s-service-management-ticket-l': IISService_ManagementTicketLForm,
    'i-i-s-service-management-customer-e': IISService_ManagementCustomerEForm,
    'i-i-s-service-management-customer-request-e': IISService_ManagementCustomerRequestEForm,
    'i-i-s-service-management-event-e': IISService_ManagementEventEForm,
    'i-i-s-service-management-feedback-e': IISService_ManagementFeedbackEForm,
    'i-i-s-service-management-service-provider-e': IISService_ManagementServiceProviderEForm,
    'i-i-s-service-management-ticket-e': IISService_ManagementTicketEForm
  },

});

export default translations;
