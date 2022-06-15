// @ts-nocheck
import {FILE_UPLOAD_PATH, RECORDS_UPDATE_PATH} from './constant';
import {errorNotify} from './ui-components/errorNotify';

export function selectAll() {
  const selectAllCheckbox = document.getElementById('selectAll') as HTMLInputElement;
  const checkboxes = document.getElementsByName('selectCheckbox') as any;
  checkboxes.forEach(checkbox => {
    checkbox.checked = selectAllCheckbox.checked;
  });

}

export async function handleUpload(formFile:FormData, config: object) {
  const selectedRecordsId = getIdFromForm('selectCheckbox');
  const attachmentFieldCodes = [];
  for (const key in config) {
    if (key.includes('attachment_field_')) {
      attachmentFieldCodes.push(config[key]);
    }
  }
  const numFileKeys = selectedRecordsId.length * attachmentFieldCodes.length;
  const fileKeyList = await getFileKeyList(numFileKeys, formFile);
  const requests = prepareRequest(fileKeyList, selectedRecordsId, attachmentFieldCodes);
  console.log(requests);
  kintone.api(kintone.api.url(RECORDS_UPDATE_PATH, true), 'PUT', requests)
    .then(_ => {
      document.dispatchEvent(new Event('kintone-bulk-upload:bulk-upload-success'));
    })
    .catch(error => {
      document.dispatchEvent(new Event('kintone-bulk-upload:bulk-upload-error'));
      errorNotify(error.message);
    });
}

function getIdFromForm(elName: string) {
  const checkBoxes = document.getElementsByName(elName) as any;
  const selectedRecordsIdStr = [];
  Array.from(checkBoxes).forEach(checkbox => {
    if (checkbox.checked) {
      selectedRecordsIdStr.push(checkbox.value);
    }
  });
  // Convert array elements to number
  const selectedRecordsId = selectedRecordsIdStr.map(el => {
    return parseInt(el, 10);
  });
  return selectedRecordsId;
}

function prepareRequest(fileKeyList:any[string], selectedRecordsId:any[number], attachmentFieldCodes:any[string]) {
  const request = {
    'app': kintone.app.getId(),
    'records': []
  };

  let key = 0;
  for (let i = 0; i < selectedRecordsId.length; i++) {
    const recordObj = {
      'id': selectedRecordsId[i],
      'record': {}
    };
    for (let t = 0; t < attachmentFieldCodes.length; t++) {
      recordObj.record[[attachmentFieldCodes[t]]] = {'value': [{'fileKey': fileKeyList[key]}]};
      key++;
    }
    request.records.push(recordObj);
  }
  return request;
}

function getFileKeyList(numFileKeys:number, formFile:FormData) {
  return new kintone.Promise((resolve: Promise, reject: Promise)=> {
    const fileKeyList = [];
    const thisFormFile = formFile;
    for (let i = 0; i < numFileKeys; i++) {
      thisFormFile.append('__REQUEST_TOKEN__', kintone.getRequestToken());
      const xhr = new XMLHttpRequest();
      xhr.open('POST', kintone.api.url(FILE_UPLOAD_PATH, false)); // make XHR synchronous to cut down on complex logic
      xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
      xhr.responseType = 'json';
      xhr.onload = function() {
        if (xhr.status > 300) {
          document.dispatchEvent(new Event('kintone-bulk-upload:bulk-upload-error'));
          errorNotify(xhr.status);
          reject();
        } else {
          fileKeyList.push(xhr.response.fileKey);
        }
        if (fileKeyList.length === numFileKeys) {
          resolve(fileKeyList); // ensure num of fileKey is always the same as num of records
        }
      };
      xhr.send(thisFormFile);
    }
  });
}

export function getFile() {
  const inputFile = document.getElementById('browse-file-input');
  const formFile = new FormData();
  formFile.append('file', inputFile.files[0]);
  return formFile;
}