vue2-ace-editor
====================
A packaging of [ace](https://ace.c9.io/)

Demo here: https://github.com/chairuosen/vue-ace-editor-demo/tree/vue2

## How to use

1. Install

    ```
    npm install --save-dev vue2-ace-editor
    ```
    
2. Require it in `components` of Vue options

    ```
    {
        data,
        methods,
        ...
        components: {
            editor: require('vue2-ace-editor'),
        },
    }
    ```
 
3. Require the editor's mode/theme module in custom methods
    
    ```
    {
        data,
        methods: {
            editorInit: function () {
                require('vue-ace-editor/node_modules/brace/mode/html')
                require('vue-ace-editor/node_modules/brace/mode/javascript')
                require('vue-ace-editor/node_modules/brace/mode/less')
                require('vue-ace-editor/node_modules/brace/theme/chrome')
            }
        },
    }
    ```
    
4. Use the component in template

    ```
    <editor v-model="content" @init="editorInit" lang="html" theme="chrome" width="500" height="100"></editor>
    ```
    
    prop `v-model`  is required
    
    prop `lang` and `theme` is same as [ace-editor's doc](https://github.com/ajaxorg/ace)
    
    prop `height` and `width` could be one of these:  `200`, `200px`, `50%`
    
