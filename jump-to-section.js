
var content,
    lines,
    headings,
    lengths,
    ranges,
    linesLength,
    i;

content = editor.getText();
lines = content.split('\n');
linesLength = lines.length;
lengths = 0;
headings = Array();
ranges = Array();

for(i = 0; i < linesLength; i++) {
    if(lines[i].match(/^#+\s?.*/)) {
        headings.push(lines[i]);
        ranges.push(lengths);
    }
    lengths += lines[i].length + 1; // +1 because the line breaks count;
}

if (headings.length > 0) {
    ui.list('Jump to Section', headings, false, function(a,b) {
        if (b === undefined) {
            ui.hudError("Don't jump then");
        } else {
            editor.setSelectedRange(ranges[b])
        }
    });
} else {
    ui.hudError("There's no heading");
}
