import {Spinner} from 'kintone-ui-component';
import {SPINNER_TEXT} from '../constant';

const newLoadingSpinner = new Spinner({
  text: SPINNER_TEXT
});

export function loadingSpinner() {
  document.addEventListener('kintone-bulk-upload:select-records-dialog-upload-click', _ => {
    newLoadingSpinner.open();
  });
  document.addEventListener('kintone-bulk-upload:bulk-upload-success', _ => {
    newLoadingSpinner.close();
  });
  document.addEventListener('kintone-bulk-upload:bulk-upload-error', _ => {
    newLoadingSpinner.close();
  });
}