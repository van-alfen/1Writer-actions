
range = editor.getSelectedLineRange();
line = editor.getTextInRange(range[0], range[1]);

if (range[0] > 0) {
	editor.replaceTextInRange(range[0] - 1, range[1], "");
	
	range = editor.getSelectedLineRange();
	editor.replaceTextInRange(range[0], 0, line + "\n");
	editor.setSelectedRange(range[0], range[0]);
}
