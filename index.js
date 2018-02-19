var ace = require('brace')

module.exports = {
  template: `<div style="position: relative" :style="{ height: height ? px(height) : '100%', width: width ? px(width) : '100%'}"></div>`,
  props: {
    value: {
      type: String,
      required: true
    },
    lang: String,
    theme: String,
    height: true,
    width: true
  },
  data: function () {
    return {
      editor: null,
      contentBackup: ''
    }
  },
  methods: {
    px (n) {
      if (/^\d*$/.test(n)) {
        return n + 'px'
      }
      return n
    }
  },
  watch: {
    value: function (val) {
      if (this.contentBackup !== val) {
        this.editor.setValue(val, 1)
      }
    },
    theme: function (newTheme) {
      this.editor.setTheme('ace/theme/' + newTheme)
    },
    lang: function (newLang) {
      this.editor.getSession().setMode('ace/mode/' + newLang)
    }
  },
  mounted: function () {
    var lang = this.lang || 'text'
    var theme = this.theme || 'chrome'

    this.editor = ace.edit(this.$el)

    this.$emit('init', this.editor)

    this.editor.$blockScrolling = Infinity
    this.editor.getSession().setMode('ace/mode/' + lang)
    this.editor.setTheme('ace/theme/' + theme)
    this.editor.setValue(this.value, 1)

    this.editor.on('change', () => {
      var content = this.editor.getValue()
      this.$emit('input', content)
      this.contentBackup = content
    })
  }
}
