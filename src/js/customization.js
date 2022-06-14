/* eslint-disable no-undef */
import {Button} from 'kintone-ui-component';
const headerMenuSpaceElement = kintone.app.getHeaderMenuSpaceElement();
if (headerMenuSpaceElement === null) {
  throw new Error('The header menu element is unavailable on t/docs/rules/no-undefhis page');
} else {
  // const bulkUploadButton = document.createElement('button');
  // bulkUploadButton.innerText = "Bulk Upload";
  // bulkUploadButton.className = 'kintoneplugin-button-normal';
  // bulkUploadButton.addEventListener('click', () => {
  //   alert('Hi from button');
  // })
  const bulkUploadButton = new Button({text: 'testing', type: 'normal'});
  headerMenuSpaceElement.appendChild(bulkUploadButton);
}