
var sel = editor.getSelectedText();
ui.input('Find', sel, 'Find what', function(find) {
    if (find) {
        var text = editor.getText();
        if (text.toLowerCase().indexOf(find.toLowerCase()) >= 0) {
            ui.input('Replace', null, 'Replace with', function(replace) {
                if (replace) {
                    var pattern = find.replace(/([\/\,\!\\\^\$\{\}\[\]\(\)\.\*\+\?\|\<\>\-\&])/g,'\\$&');
                    var newText = text.replace(new RegExp(pattern, 'gi'), replace);
                    editor.setText(newText);
                    ui.hudSuccess();
                }
            });
        }
        else
            ui.hudError('Not found');
    }
});
