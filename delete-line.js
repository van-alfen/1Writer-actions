
// made by me

range = editor.getSelectedLineRange();
editor.replaceTextInRange(range[0] - 1, range[1], "");

location = editor.getSelectedRange();
editor.setSelectedRange(location[0] + 1);
