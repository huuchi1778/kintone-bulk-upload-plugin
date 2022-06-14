// @ts-nocheck
import {Dialog} from 'kintone-ui-component/lib/dialog';
import {Button} from 'kintone-ui-component';
import {selectAll} from '../common';
// import {htmlEncode} from '../ultility';
import {CANCEL_BUTTON_TEXT, UPLOAD_BUTTON_TEXT, SELECT_RECORDS_DIALOG_TEXT} from '../constant';


// Create a new instance of Dialog
const newSelectRecordsDialog = new Dialog();

// Create content
function createBodyContent(records, config) {
  const recordTable = document.createElement('table');

  const tableHeadRow = document.createElement('tr');
  const selectAllCell = document.createElement('th');
  const select_all_checkbox = document.createElement('input');
  select_all_checkbox.type = 'checkbox';
  select_all_checkbox.id = 'selectAll';
  selectAllCell.appendChild(select_all_checkbox);
  tableHeadRow.appendChild(selectAllCell);
  for (const key in config) {
    if (key.includes('display_field_')) {
      const headCell = document.createElement('th');
      headCell.innerText = config[key];
      tableHeadRow.appendChild(headCell);
    }
  }
  recordTable.appendChild(tableHeadRow);

  records.forEach(record => {
    const tableRow = document.createElement('tr');
    const record_id_cell = document.createElement('td');
    const record_id_input = document.createElement('input');
    record_id_input.type = 'checkbox';
    record_id_input.name = 'selectCheckbox';
    record_id_input.value = record.$id.value;
    record_id_cell.appendChild(record_id_input);
    tableRow.appendChild(record_id_cell);
    for (const key in config) {
      if (key.includes('display_field_')) {
        const rowCell = document.createElement('td');
        rowCell.innerText = record[config[key]].value;
        tableRow.appendChild(rowCell);
      }
    }
    recordTable.appendChild(tableRow);
  });

  const bodyStyle = `
    <style>
      table, th, td {
        border: 1px solid gray;
        border-collapse: collapse;
        padding:10px;
      }
      #user-table-div{
        max-height: 400px;
        max-width: 650px;
        overflow-y: scroll;
      }
    </style>
  `;
  const bodyContent = `
    ${bodyStyle}
    <div id='user-table-div'>
      ${recordTable.outerHTML}
    </div>`;
  return bodyContent;
}

function createFooterContent() {
  const footerContent = document.createElement('div');
  footerContent.style.display = 'flex';
  footerContent.style.justifyContent = 'center';
  const cancelBtn = new Button({
    text: CANCEL_BUTTON_TEXT,
    type: 'normal',
    className: 'selectDialog-button'
  });
  const uploadBtn = new Button({
    text: UPLOAD_BUTTON_TEXT,
    type: 'submit',
    className: 'selectDialog-button'
  });
  footerContent.appendChild(cancelBtn);
  footerContent.appendChild(uploadBtn);
  cancelBtn.addEventListener('click', () => {
    const cancelBtnClickEvent = new Event('kintone-bulk-upload:select-records-dialog-cancel-click');
    document.dispatchEvent(cancelBtnClickEvent);
  });
  uploadBtn.addEventListener('click', _ => {
    const uploadBtnClickEvent = new Event('kintone-bulk-upload:select-records-dialog-upload-click');
    document.dispatchEvent(uploadBtnClickEvent);
  });
  return footerContent;
}

export function selectRecordsDialog(records:object, config: object) {
  // Create dialog
  newSelectRecordsDialog.title = SELECT_RECORDS_DIALOG_TEXT;
  newSelectRecordsDialog.content = createBodyContent(records, config);
  newSelectRecordsDialog.footer = createFooterContent();
  document.addEventListener('kintone-bulk-upload:select-records-dialog-cancel-click', _ => {
    newSelectRecordsDialog.close();
  });
  document.addEventListener('kintone-bulk-upload:select-records-dialog-upload-click', _ => {
    newSelectRecordsDialog.close();
  });
  newSelectRecordsDialog.open();
  document.getElementById('selectAll').addEventListener('click', selectAll);
}

