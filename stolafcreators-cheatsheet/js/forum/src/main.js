import { extend } from 'flarum/extend';
import TextEditor from 'flarum/components/TextEditor';//This is the text editor component 
//http://apidocs.flarum.org/0.1.0/js/class/js/forum/src/components/TextEditor.js~TextEditor.html

app.initializers.add('stolafcreators-cheatsheet', function() {
  extend(TextEditor.prototype, 'controlItems', function(items){
  		//Extend the text editor to add our cheat sheet
  		//items.add('cheatsheet_tip', <span>Formatting Tips:</span>);
  		items.add('cheatsheet_header', <span># Header</span>);
  		items.add('cheatsheet_italics', <i>*italics*</i>);
  		items.add('cheatsheet_bold', <b>**bold**</b>);
  		items.add('cheatsheet_link', <span>[link](www.google.com)</span>);
  		items.add('cheatsheet_more', <a href="https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet" className="Button Button--link" target="_blank">More</a>);
       	console.log(items)
    });
});