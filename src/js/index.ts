import {bulkUploadBtn} from './ui-components/bulkUploadBtn';
import {browseFileDialog} from './ui-components/browseFileDialog';
import {selectRecordsDialog} from './ui-components/selectRecordsDialog';
import {getFile, handleUpload} from './common';
import {successNotify} from './ui-components/successNotify';
import {loadingSpinner} from './ui-components/loadingSpinner';

kintone.events.on('app.record.index.show', event => {
  // Get header space
  const headerSpace = kintone.app.getHeaderMenuSpaceElement();
  headerSpace.appendChild(bulkUploadBtn);

  // Attach event listener
  bulkUploadBtn.addEventListener('click', () => {
    browseFileDialog();
  });

  document.addEventListener('kintone-bulk-upload:browse-file-dialog-next-click', async _ => {
    selectRecordsDialog(event.records);
  });

  document.addEventListener('kintone-bulk-upload:select-records-dialog-upload-click', _ => {
    handleUpload(getFile());
  });
  document.addEventListener('kintone-bulk-upload:bulk-upload-success', _ => {
    successNotify();
    setTimeout(() => {
      location.reload();
    }, 1500);
  });

  loadingSpinner();

  return event;

});
