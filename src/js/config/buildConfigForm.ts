import {fieldsHaveChanged} from '../common';
import {Notification, MultiChoice} from 'kintone-ui-component';
import {FIELDS_CHANGED_WARNING_NOTIFY_TEXT} from '../constant';

function getAttachmentFields(fieldsData: { [x: string]: { code: string; type: string}; }) {
  const fieldCode = [];
  for (const el in fieldsData) {
    if (fieldsData[el].type === 'FILE') {
      fieldCode.push(fieldsData[el].code);
    }
  }
  return fieldCode;
}

function getFieldCodes(fieldsData: { [x: string]: { code: string; type: string}; }) {
  const fieldCode = [];
  for (const el in fieldsData) {
    if (fieldsData[el].type === 'SINGLE_LINE_TEXT'
        || fieldsData[el].type === 'RECORD_NUMBER'
        || fieldsData[el].type === 'CREATOR'
        || fieldsData[el].type === 'CREATED_TIME'
        || fieldsData[el].type === 'MODIFIER'
        || fieldsData[el].type === 'STATUS'
        || fieldsData[el].type === 'UPDATED_TIME') {
      fieldCode.push(fieldsData[el].code);
    }
  }
  return fieldCode;
}

function buildAttachmentFieldCheckbox(fieldsData: { [x: string]: { code: string; type: string; }; }, PLUGIN_ID: string) {
  const attachmentCheckboxRow = document.getElementById('attachment-field-row');
  const savedConfig = kintone.plugin.app.getConfig(PLUGIN_ID);
  const fieldCode = getAttachmentFields(fieldsData);
  const multiChoice = new MultiChoice({id: 'select-attachment-field-multichoice'});
  for (let i = 0; i < fieldCode.length; i++) {
    multiChoice.items.push({label: fieldCode[i], value: fieldCode[i]});
    for (const el in savedConfig) {
      if (savedConfig[el] === fieldCode[i]) {
        multiChoice.value.push(fieldCode[i]);
      }
    }
  }
  attachmentCheckboxRow.appendChild(multiChoice);
}

function buildSelectRecordsCheckbox(fieldsData: { [x: string]: { code: string; type: string; }; }, PLUGIN_ID: string) {
  const fieldCode = getFieldCodes(fieldsData);
  const displayTableCheckboxRow = document.getElementById('config-display-table-row');
  const savedConfig = kintone.plugin.app.getConfig(PLUGIN_ID);
  const multiChoice = new MultiChoice({id: 'select-display-field-multichoice'});
  for (let i = 0; i < fieldCode.length; i++) {
    multiChoice.items.push({label: fieldCode[i], value: fieldCode[i]});
    for (const el in savedConfig) {
      if (savedConfig[el] === fieldCode[i]) {
        multiChoice.value.push(fieldCode[i]);
      }
    }
  }
  displayTableCheckboxRow.appendChild(multiChoice);
}

export default function buildConfigForm(appId: number, PLUGIN_ID: string) {
  const savedConfig = kintone.plugin.app.getConfig(PLUGIN_ID);

  kintone.api(kintone.api.url('/k/v1/app/form/fields', true), 'GET', {'app': appId})
    .then((resp: { properties: any[string]; }) => {
      buildAttachmentFieldCheckbox(resp.properties, PLUGIN_ID);
      buildSelectRecordsCheckbox(resp.properties, PLUGIN_ID);
      if (!fieldsHaveChanged(resp.properties, savedConfig)) {
        const changedErrorNoti = new Notification({text: FIELDS_CHANGED_WARNING_NOTIFY_TEXT, type: 'danger', duration: -1});
        changedErrorNoti.open();
      }
    })
    .catch((error: any) => {
      console.error(error);
    });
}
