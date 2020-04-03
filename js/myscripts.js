//alert ("Something interesting about your birthday");


//AkanNames

var dayOfWeek =["Saturday", "Sunday", "Monday", "Tuseday", "Wednesday", "Thursday", "Friday"];
daysOfWeek.length; //

var femaleNames =["Ama", "Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua"]

var maleNames =["Kwame", "Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi"];
maleNames.length; //

var month = $("#month").val();

var date = parseInt("#date").val();
/*function getAkanNames () {
   const day= parseInt(document.getElementbyId("date").value);
   const month= parseInt(document.getElementById("month").value);
   const year= parseInt(document.getElementById("year").value);

};   */

//females only
/*function generate(dayOfWeek){
    var newName = "";

    if(dayOfWeek == 'Saturday') femaleNames = 'Ama';
    if(dayOfWeek == 'Sunday') femaleNames = 'Akosua';
    if(dayOfWeek == 'Monday') femaleNames = 'Adwoa';
    if(dayOfWeek == 'Tuesday') femaleNames = 'Abenaa';
    if(dayOfWeek == 'Wednesday') femaleNames = 'Akua;'
    if(dayOfWeek == 'Thursday') femaleNames = 'Yaa';
    if(dayOfWeek == 'Friday') femaleNames = 'Afua';
};*/

dayOfWeek (d) = {
    ((CC/4)-2*CC-1)+((5*YY/4))+((26*(MM+1)/10))+DD)%7
}

