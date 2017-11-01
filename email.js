// Change "var addr2 & var addr4" to your email address.
// The text "Email Me" can be changed to what ever text you want.
// You can substitute an image for the text by changing the following line:
// document.write ( ' <IMG SRC="email.gif" ALT="EMAIL LINK" border="0"></A> ' )
// for the: document.write ( ' Email Me</A> ' ) line.

function email_me(){
  document.write( ' <A HREF=" ' + addr1 + addr2 + addr3 + addr4 + ' "> ' )
  document.write ( ' <IMG SRC="email.gif" ALT="sähköposti" border="0"></A> ' )
}

var addr1 = "mailto:"
var addr2 = "marko.j.raty"
var addr3 = "@"
var addr4 = "gmail.com"
//document.write( ' <A HREF=" ' + addr1 + addr2 + addr3 + addr4 + ' "> ' )
//document.write ( ' Email Me</A> ' )
