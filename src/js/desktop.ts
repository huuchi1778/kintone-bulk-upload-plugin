import {Button} from 'kintone-ui-component';

(function(PLUGIN_ID) {
  kintone.events.on('app.record.index.show', (event) => {
    const headerMenuSpaceElement = kintone.app.getHeaderMenuSpaceElement();
    if (headerMenuSpaceElement === null) {
      throw new Error('The header menu element is unavailable on t/docs/rules/no-undefhis page');
    } else {
      const bulkUploadButton = new Button({text: 'Bulk Upload', type: 'normal'});
      headerMenuSpaceElement.appendChild(bulkUploadButton);
    }

    console.log(kintone.plugin.app.getConfig(PLUGIN_ID));
  });
}
)(kintone.$PLUGIN_ID);