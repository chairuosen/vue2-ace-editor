var ace = require('brace');

require(['emmet/emmet'],function (data) {
    window.emmet = data.emmet;
});

var init = false;

module.exports = {
    template:"<div :style=\"{height: height ? px(height) : '100%',width: width ? px(width) : '100%'}\"></div>",
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
    methods: {
        px:function (n) {
            if( /^\d*$/.test(n) ){
                return n+"px";
            }
            return n;
        }
    },
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
        if(!init){
            vm.$dispatch('vue-ace-editor:init');
            init = true;
        }

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