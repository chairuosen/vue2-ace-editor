vue2-ace-editor-electron
====================

[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

A packaging of [ace](https://ace.c9.io/)

**Forked from:** https://github.com/chairuosen/vue2-ace-editor - Which works with vue-electron, does not include emmet and uses [standardjs](standardjs.com) coding style.

## How to use

1. Install

    ```
    npm install vue2-ace-editor-electron --save
    ```
    
2. Require it in `components` of Vue options

    ```
    {
        components: {
            editor: require('vue2-ace-editor-electron'),
        },
    }
    ```
 
3. Require the editor's mode/theme module in custom methods
    
    ```
    {
        methods: {
            editorInit: function () {
                require('brace/mode/html')
                require('brace/mode/javascript')
                require('brace/mode/less')
                require('brace/theme/chrome')
            }
        },
    }
    ```
    
4. Use the component in template

    ```
    <editor v-model="content" @init="editorInit" lang="html" theme="chrome" width="500" height="calc(100vh)"></editor>
    ```
    
    prop `v-model`  is required
    
    prop `lang` and `theme` is same as [ace-editor's doc](https://github.com/ajaxorg/ace)
    
    prop `height` and `width` could be one of these:  `200`, `200px`, `50%`, `calc(100vh)`
    
