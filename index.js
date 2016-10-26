var ace = require('brace');

require(['emmet/emmet'],function (data) {
    window.emmet = data.emmet;
});

module.exports = {
    template:"<div :style=\"{height: height ? px(height) : '100%',width: width ? px(width) : '100%'}\"></div>",
    props:{
        value:{
            type:String,
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
    methods: {
        px:function (n) {
            if( /^\d*$/.test(n) ){
                return n+"px";
            }
            return n;
        }
    },
    watch:{
        value:function (val) {
            if(this.contentBackup !== val)
                this.editor.setValue(val,1);
        }
    },
    mounted: function () {
        var vm = this;
        var lang = this.lang||'text';
        var theme = this.theme||'chrome';

        require('brace/mode/html');
        require('brace/mode/javascript');
        require('brace/mode/less');
        require('brace/theme/chrome');

        require('brace/ext/emmet');

        var editor = vm.editor = ace.edit(this.$el);
        editor.$blockScrolling = Infinity;
        editor.setOption("enableEmmet", true);

        editor.getSession().setMode('ace/mode/'+lang);
        editor.setTheme('ace/theme/'+theme);

        editor.setValue(this.value,1);

        editor.on('change',function () {
            var content = editor.getValue();
            vm.$emit('input',content);
            vm.contentBackup = content;
        });

    }
}
