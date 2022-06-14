import {Notification} from 'kintone-ui-component';
import {ERROR_NOTIFY_TEXT} from '../constant';
const newErrorNotify = new Notification({
  type: 'danger',
  className: '',
  duration: -1
});

export function errorNotify(error_message:string) {
  newErrorNotify.text = `${ERROR_NOTIFY_TEXT} ${error_message}`;
  newErrorNotify.open();
}

