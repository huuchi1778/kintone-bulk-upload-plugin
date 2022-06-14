import {bulkUploadBtn} from './ui-components/bulkUploadBtn';

(function(PLUGIN_ID) {
  kintone.events.on('app.record.index.show', (event) => {
    const headerMenuSpaceElement = kintone.app.getHeaderMenuSpaceElement();
    if (headerMenuSpaceElement === null) {
      throw new Error('The header menu element is unavailable on t/docs/rules/no-undefhis page');
    } else {
      headerMenuSpaceElement.appendChild(bulkUploadBtn);
    }
  });
}
)(kintone.$PLUGIN_ID);