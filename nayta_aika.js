// Clock Script 

function timeSource(){
   x=new Date();
   x.setTime(x.getTime());
   return x;
}
function leadingZero(x){
   return (x>9)?x:'0'+x;
}
function displayTime(){
   if(fr==0){
      fr=1;
      document.write('<font size=1 face=Helvetica><b><span id="tP">'+eval(outputTime)+'</span></b></font>');
   }
   document.getElementById('tP').innerHTML=eval(outputTime);
   setTimeout('displayTime()',1000);
}
function fixYear4(x){
   return (x<500)?x+1900:x;
}
var dayNames=new Array('su','ma','ti','ke','to','pe','la');
var monthNames=new Array('tammikuuta','helmikuuta','maaliskuuta','huhtikuuta','toukokuuta','kesäkuuta','heinäkuuta','elokuuta','syyskuuta','lokakuuta','marraskuuta','joulukuuta');
var fr=0;
var outputTime="dayNames[timeSource().getDay()]+' '+timeSource().getDate()+'.'+' '+monthNames[timeSource().getMonth()]+' '+fixYear4(timeSource().getYear())+' '+'. . . . kello on'+' '+leadingZero(timeSource().getHours())+':'+leadingZero(timeSource().getMinutes())+':'+leadingZero(timeSource().getSeconds())+' '";



// Use the following within your HTML to Start/display your clock
// <script language="JavaScript">displayTime();</script>
