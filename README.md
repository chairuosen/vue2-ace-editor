vue-ace-editor
====================
A packaging of [ace](https://ace.c9.io/)

## How to use

1. Install

    ```
    npm install --save-dev vue-ace-editor
    ```
    
2. Require it in `components` of Vue options

    ```
    {
        data,
        methods,
        ...
        components: {
            editor:require('vue-ace-editor'),
        },
    }
    ```
 
3. Require the editor's mode/theme module in father's events `vue-ace-editor:init`

    Because if require the modules inside the component dynamically. The size of bundle.js will be very huge.
    
    ```
    {
        data,
        methods,
        components,
        events:{
            'vue-ace-editor:init':function () {
                require('vue-ace-editor/node_modules/brace/mode/html');
                require('vue-ace-editor/node_modules/brace/mode/javascript');
                require('vue-ace-editor/node_modules/brace/mode/less');
                require('vue-ace-editor/node_modules/brace/theme/chrome');
            }
        },
    }
    ```
    
4. Use the component in template

    ```
    <editor :content.sync="html" lang="html" theme="chrome" width="300" height="300" ></editor>
    ```
    
    prop `content`  is required
    
    prop `lang` and `theme` is same as [ace-editor's doc](https://github.com/ajaxorg/ace)
    
    prop `height` and `width` could be one of these:  `200`, `200px`, `50%`
