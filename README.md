vue2-ace-editor
====================


[![npm](https://img.shields.io/npm/v/vue2-ace-editor.svg)](https://www.npmjs.com/package/vue2-ace-editor)


A packaging of [ace](https://ace.c9.io/)

Demo here: https://github.com/chairuosen/vue-ace-editor-demo/tree/vue2

## IMPORTANT
emmet support for html is removed after 0.0.6. because its code cannot works with strict mode.

if you want to use it. require emmet by your own.
```
npm install emmet@git+https://github.com/cloud9ide/emmet-core.git#41973fcc70392864c7a469cf5dcd875b88b93d4a
```

```js
require(['emmet/emmet'],function (data) { // this is huge. so require it async is better
    window.emmet = data.emmet;
});
```

## How to use

1. Install

    ```
    npm install --save-dev vue2-ace-editor
    ```
    
2. Require it in `components` of Vue options

    ```js
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
    
    ```js
    {
        data,
        methods: {
            editorInit: function () {
                require('brace/ext/language_tools') //language extension prerequsite...
                require('brace/mode/html')                
                require('brace/mode/javascript')    //language
                require('brace/mode/less')
                require('brace/theme/chrome')
                require('brace/snippets/javascript') //snippet
            }
        },
    }
    ```
    
4. Use the component in template

    ```html
    <editor v-model="content" @init="editorInit" lang="html" theme="chrome" width="500" height="100"></editor>
    ```
    
    prop `v-model`  is required
    
    prop `lang` and `theme` is same as [ace-editor's doc](https://github.com/ajaxorg/ace)
    
    prop `height` and `width` could be one of these:  `200`, `200px`, `50%`
    
5. Access the ACE's instance

    `<editor ref='myEditor'>`

    `let editor = this.$refs.myEditor.editor`
    
    or
    
    ```
    editorInit: function (editor) {
    
    }
    ```
    
