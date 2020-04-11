// Insert day yyyy-mm-dd
var now = new Date();
var dd = now.getDate();
var mm = now.getMonth()+1;
var yyyy = now.getYear()+1900;

if(dd<10) {
    dd='0'+dd
} 

if(mm<10) {
    mm='0'+mm
} 

var today = +yyyy+'-'+mm+'-'+dd+'\n';
editor.replaceSelection( today );
