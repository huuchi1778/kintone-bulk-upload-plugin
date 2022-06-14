import {Notification} from 'kintone-ui-component';
import {SUCCESS_NOTIFY_TEXT} from '../constant';
const newSuccessNotify = new Notification({
  text: SUCCESS_NOTIFY_TEXT,
  type: 'success',
  className: '',
  duration: 1500
});

export function successNotify() {
  newSuccessNotify.open();
}

