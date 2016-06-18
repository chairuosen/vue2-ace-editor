var ace = require('brace');

require(['emmet/emmet'],function (data) {
    window.emmet = data.emmet;
});

module.exports = {
    template:"<div :style=\"{height: height ? height+'px' : '100%',width: width ? width+'px' : '100%'}\"></div>",
    props:{
        content:{
            type:String,
            twoWay:true,
            required:true
        },
        lang:String,
        theme:String,
        height:true,
        width:true
    },
    data: function () {
        return {
            editor:null,
            contentBackup:""
        }
    },
    methods: {},
    components: {},
    watch:{
        content:function (val) {
            if(this.contentBackup !== val)
                this.editor.setValue(val,1);
        }
    },
    ready: function () {
        var vm = this;
        var lang = this.lang||'text';
        var theme = this.theme||'chrome';
        require('brace/mode/'+lang);
        require('brace/theme/'+theme);
        require('brace/ext/emmet');

        var editor = vm.editor = ace.edit(this.$el);
        editor.$blockScrolling = Infinity;
        editor.setOption("enableEmmet", true);

        editor.getSession().setMode('ace/mode/'+lang);
        editor.setTheme('ace/theme/'+theme);

        editor.setValue(this.content,1);

        editor.on('change',function () {
            vm.content = editor.getValue();
            vm.contentBackup = vm.content;
        });

    }
}