vue-ace-editor
====================

## How to use

1. Install

    ```
    npm install --save-dev git+https://github.com/chairuosen/vue-ace-editor.git
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
    
3. Use the component in template

    ```
    <editor :content.sync="html" lang="html" theme="chrome" width="300" height="300" ></editor>
    ```
    
    prop `content`  is required
    
    prop `lang` and `theme` is same as ace-editor's doc
    
    prop `height` and `width` could be one of these:  `200`, `200px`, `50%`