// @ts-nocheck
import {FILE_UPLOAD_PATH, RECORDS_UPDATE_PATH, ATTACHMENT_FIELDCODE} from './constant';
import {errorNotify} from './ui-components/errorNotify';

export function selectAll() {
  const selectAllCheckbox = document.getElementById('selectAll');
  const checkboxes = document.getElementsByName('selectCheckbox');
  checkboxes.forEach(checkbox => {
    checkbox.checked = selectAllCheckbox.checked;
  });
}

export async function handleUpload(formFile:FormData) {
  const selectedRecordsId = getIdFromForm('selectCheckbox');
  const numRecords = selectedRecordsId.length;
  const fileKeyList = await getFileKeyList(numRecords, formFile);
  const requests = prepareRequest(fileKeyList, selectedRecordsId, ATTACHMENT_FIELDCODE);

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
  const checkBoxes = document.getElementsByName(elName);
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

function prepareRequest(fileKeyList:any[string], selectedRecordsId:any[number], FILEDCODE:string) {
  const request = {
    'app': kintone.app.getId(),
    'records': []
  };

  for (let i = 0; i < fileKeyList.length; i++) {
    const recordObj = {
      'id': selectedRecordsId[i],
      'record': {
        [FILEDCODE]: {
          'value': [
            {
              'fileKey': fileKeyList[i]
            }
          ]
        }
      }
    };
    request.records.push(recordObj);
  }
  return request;
}

function getFileKeyList(numRecords:number, formFile:FormData) {
  return new kintone.Promise((resolve: Promise, reject: Promise)=> {
    const fileKeyList = [];
    const thisFormFile = formFile;
    for (let i = 0; i < numRecords; i++) {
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
        if (fileKeyList.length === numRecords) {
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