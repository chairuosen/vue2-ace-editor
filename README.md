vue-ace-editor
====================

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
    
3. Use the component in template

    ```
    <editor :content.sync="html" lang="html" theme="chrome" width="300" height="300" ></editor>
    ```