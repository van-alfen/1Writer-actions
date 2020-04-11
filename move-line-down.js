
// source: ???

range = editor.getSelectedLineRange();
line = editor.getTextInRange(range[0], range[1]);
text = editor.getText();

if (range[1] < text.length) {
	editor.replaceTextInRange(range[0], range[1] + 1, "");
	range = editor.getSelectedLineRange();
	editor.replaceTextInRange(range[1], 0, "\n" + line);
	editor.setSelectedRange(range[1] + 1);
}
