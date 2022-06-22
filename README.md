# Bulk Upload Plugin

## What is this plugin?
This plugin allows users to upload a file into multiple selected attachment fields of multiple records.

## How to use this plugin?
In the plugin's configuration, users can select which attachment fields to upload into. <br>
In addition to that, users can also select which fields to be display in the Select Records dialog (for example: first name, last name, and phone number).<br>
Please see the following documents to learn more about configuring a plugin: 
* https://get.kintone.help/k/en/user/app_settings/plugin.html

## Requirement
```sh
* node.js
* Git
```

## How to build
```sh
$ cd /temp
$ git clone https://github.com/huuchi1778/kintone-bulk-upload-plugin.git
$ cd kintone-bulk-upload-plugin
$ npm i
$ npm run build
```

## Output file
```sh
dist/bulk-upload-plugin.zip
```

## Suported browser & device
* Chrome PC

## How to install the plugin
Please see the following documents for details: 
* https://get.kintone.help/k/en/admin/add_plugin/plugin.html
* https://get.kintone.help/k/en/user/app_settings/plugin.html