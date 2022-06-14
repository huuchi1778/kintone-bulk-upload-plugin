// @ts-nocheck
import {Dialog} from 'kintone-ui-component/lib/dialog';
import {Button} from 'kintone-ui-component';
import {CANCEL_BUTTON_TEXT, NEXT_BUTTON_TEXT, BROWSE_FILE_DIALOG_TEXT} from '../constant';

// Create a new instance of Dialog
const newBrowseFilDialog = new Dialog();

// Create content
function createFileInput() {
  const inputEl = document.createElement('input');
  inputEl.type = 'file';
  inputEl.id = 'browse-file-input';
  return inputEl;
}

function createBodyContent() {
  const bodyContent = document.createElement('div');
  bodyContent.appendChild(createFileInput());
  return bodyContent;
}

function createFooterContent() {
  const footerContent = document.createElement('div');
  const cancelBtn = new Button({
    text: CANCEL_BUTTON_TEXT,
    type: 'normal'
  });
  const nextBtn = new Button({
    text: NEXT_BUTTON_TEXT,
    type: 'submit'
  });
  footerContent.appendChild(cancelBtn);
  footerContent.appendChild(nextBtn);
  cancelBtn.addEventListener('click', () => {
    document.dispatchEvent(new Event('kintone-bulk-upload:browse-file-dialog-cancel-click'));
  });
  nextBtn.addEventListener('click', _ => {
    const fileInput = document.getElementById('browse-file-input');
    if (fileInput.value !== '') {
      document.dispatchEvent(new Event('kintone-bulk-upload:browse-file-dialog-next-click'));
    } else {
      fileInput.style.border = '1px solid red';
    }
  });
  return footerContent;
}

export function browseFileDialog() {
  // Create dialog
  newBrowseFilDialog.title = BROWSE_FILE_DIALOG_TEXT;
  newBrowseFilDialog.content = createBodyContent();
  newBrowseFilDialog.footer = createFooterContent();
  document.addEventListener('kintone-bulk-upload:browse-file-dialog-cancel-click', _ => {
    newBrowseFilDialog.close();
  });
  document.addEventListener('kintone-bulk-upload:browse-file-dialog-next-click', _ => {
    newBrowseFilDialog.close();
  });

  // Add event listener
  newBrowseFilDialog.open();
}
