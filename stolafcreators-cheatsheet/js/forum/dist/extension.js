System.register('stolafcreators/cheatsheet/main', ['flarum/extend', 'flarum/components/TextEditor'], function (_export) {
  //This is the text editor component
  //http://apidocs.flarum.org/0.1.0/js/class/js/forum/src/components/TextEditor.js~TextEditor.html

  'use strict';

  var extend, TextEditor;
  return {
    setters: [function (_flarumExtend) {
      extend = _flarumExtend.extend;
    }, function (_flarumComponentsTextEditor) {
      TextEditor = _flarumComponentsTextEditor['default'];
    }],
    execute: function () {
      app.initializers.add('stolafcreators-cheatsheet', function () {
        extend(TextEditor.prototype, 'controlItems', function (items) {
          //Extend the text editor to add our cheat sheet
          //items.add('cheatsheet_tip', <span>Formatting Tips:</span>);
          items.add('cheatsheet_header', m(
            'span',
            null,
            '# Header'
          ));
          items.add('cheatsheet_italics', m(
            'i',
            null,
            '*italics*'
          ));
          items.add('cheatsheet_bold', m(
            'b',
            null,
            '**bold**'
          ));
          items.add('cheatsheet_link', m(
            'span',
            null,
            '[link](www.google.com)'
          ));
          items.add('cheatsheet_more', m(
            'a',
            { href: 'https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet', className: 'Button Button--link', target: '_blank' },
            'More'
          ));
          console.log(items);
        });
      });
    }
  };
});