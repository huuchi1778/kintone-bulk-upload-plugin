jQuery.noConflict();

(function($, PLUGIN_ID) {
  'use strict';
  kintone.events.on('app.record.index.show', function() {
    var config = kintone.plugin.app.getConfig(PLUGIN_ID);

    var headerMenuSpaceElement = kintone.app.getHeaderMenuSpaceElement();
    if (headerMenuSpaceElement === null) {
      throw new Error('The header menu element is unavailable on this page');
    } else {
      const bulkUploadButton = document.createElement('button');
      bulkUploadButton.innerText = "Button";
      bulkUploadButton.addEventListener('click', () => {
        alert('Hi from button');
      })
      headerMenuSpaceElement.appendChild(bulkUploadButton);
    }

  

  });
})(jQuery, kintone.$PLUGIN_ID);
