import {Button, Notification} from 'kintone-ui-component';
import {fieldsHaveChanged} from '../common';
import {EMPTY_CONFIG_WARNING_NOTIFY_TEXT, FIELDS_CHANGED_WARNING_NOTIFY_TEXT} from '../constant';

export default function errorHandling(appId: number, config: object, button: Button) {
  kintone.api(kintone.api.url('/k/v1/app/form/fields', true), 'GET', {'app': appId})
    .then((resp: { properties: any; }) => {
      if (!fieldsHaveChanged(resp.properties, config)) {
        const changedErrorNoti = new Notification({text: FIELDS_CHANGED_WARNING_NOTIFY_TEXT, type: 'danger', duration: -1});
        changedErrorNoti.open();
        button.disabled = true;
      }
    })
    .catch((error: any) => {
      console.error(error);
    });

  if (Object.keys(config).length === 0) {
    const emptyConfigErrorNoti = new Notification({text: EMPTY_CONFIG_WARNING_NOTIFY_TEXT, type: 'danger', duration: -1});
    emptyConfigErrorNoti.open();
    button.disabled = true;
  }
}