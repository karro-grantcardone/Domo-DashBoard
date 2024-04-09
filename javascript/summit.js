var domo = window.domo; // For more on domo.js: https://developer.domo.com/docs/dev-studio-guides/domo-js#domo.get
var datasets = window.datasets;

//Step 1. Select your dataset(s) from the button in the bottom left corner
//10x your business interactive 2024
var query0 = 'SELECT COUNT(*) FROM dataset0 WHERE event_id = 608 AND ticket_type_id in (493)';
domo.post('/sql/v1/dataset0', query0, {contentType: 'text/plain'}).then(result0);
 function result0(data){
  console && console.log(data);
  document.getElementById("ybi-baller-tickets_sold").innerHTML = data['rows'][0][0];
}
var query1 = 'SELECT COUNT(*) FROM dataset0 WHERE event_id = 608 AND ticket_type_id in (493)';
domo.post('/sql/v1/dataset0', query1, {contentType: 'text/plain'}).then(result1);
 function result1(data){
  console && console.log(data);
  document.getElementById("ybi-baller-tickets_left").innerHTML = 24 - data['rows'][0][0];
}
var query2 = 'SELECT COUNT(*) FROM dataset1 WHERE event_id = 608 AND ticket_type_id in (493)';
domo.post('/sql/v1/dataset1', query2, {contentType: 'text/plain'}).then(result2);
 function result2(data){
  console && console.log(data);
  document.getElementById("ybi-baller-tickets_confirmed").innerHTML = data['rows'][0][0];
}
var query3 = 'SELECT COUNT(*) FROM dataset0 WHERE event_id = 608 AND ticket_type_id in (758)';
domo.post('/sql/v1/dataset0', query3, {contentType: 'text/plain'}).then(result3);
 function result3(data){
  console && console.log(data);
  document.getElementById("ybi-vip-tickets_sold").innerHTML = data['rows'][0][0];
}
var query4 = 'SELECT COUNT(*) FROM dataset0 WHERE event_id = 608 AND ticket_type_id in (492)';
domo.post('/sql/v1/dataset0', query4, {contentType: 'text/plain'}).then(result4);
 function result4(data){
  console && console.log(data);
  document.getElementById("ybi-exec-tickets_sold").innerHTML = data['rows'][0][0];
}
var query5 = 'SELECT COUNT(*) FROM dataset0 WHERE event_id = 608 AND ticket_type_id';
domo.post('/sql/v1/dataset0', query5, {contentType: 'text/plain'}).then(result5);
 function result5(data){
  console && console.log(data);
  document.getElementById("ybi-tot-tickets_sold").innerHTML = data['rows'][0][0];
}
//10x business summit
//ctti
var query6 = 'SELECT COUNT(*) FROM dataset2 WHERE ticket_type_id in (102)';
domo.post('/sql/v1/dataset2', query6, {contentType: 'text/plain'}).then(result6);
 function result6(data){
  console && console.log(data);
  document.getElementById("ctti-bs-super-tickets_sold").innerHTML = data['rows'][0][0];
}
var query7 = 'SELECT COUNT(*) FROM dataset2 WHERE  ticket_type_id in (101)';
domo.post('/sql/v1/dataset2', query7, {contentType: 'text/plain'}).then(result7);
 function result7(data){
  console && console.log(data);
  document.getElementById("ctti-bs-vip-tickets_sold").innerHTML = data['rows'][0][0];
}
var query8 = 'SELECT COUNT(*) FROM dataset2 WHERE ticket_type_id in (100)';
domo.post('/sql/v1/dataset2', query8, {contentType: 'text/plain'}).then(result8);
 function result8(data){
  console && console.log(data);
  document.getElementById("ctti-bs-exec-tickets_sold").innerHTML = data['rows'][0][0];
}
var query9 = 'SELECT COUNT(*) FROM dataset2 WHERE ticket_type_id in (100,101,102)';
domo.post('/sql/v1/dataset2', query9, {contentType: 'text/plain'}).then(result9);
 function result9(data){
  console && console.log(data);
  document.getElementById("ctti-bs-tickets_sold").innerHTML = data['rows'][0][0];
}
//cardone ventures
var query10 = 'SELECT COUNT(*) FROM dataset2 WHERE ticket_type_id in (202)';
domo.post('/sql/v1/dataset2', query10, {contentType: 'text/plain'}).then(result10);
 function result10(data){
  console && console.log(data);
  document.getElementById("cv-bs-super-tickets_sold").innerHTML = data['rows'][0][0];
}
var query11 = 'SELECT COUNT(*) FROM dataset2 WHERE ticket_type_id in (201)';
domo.post('/sql/v1/dataset2', query11, {contentType: 'text/plain'}).then(result11);
 function result11(data){
  console && console.log(data);
  document.getElementById("cv-bs-vip-tickets_sold").innerHTML = data['rows'][0][0];
}
var query12 = 'SELECT COUNT(*) FROM dataset2 WHERE ticket_type_id in (200)';
domo.post('/sql/v1/dataset2', query12, {contentType: 'text/plain'}).then(result12);
 function result12(data){
  console && console.log(data);
  document.getElementById("cv-bs-exec-tickets_sold").innerHTML = data['rows'][0][0];
}
var query13 = 'SELECT COUNT(*) FROM dataset2 WHERE ticket_type_id in (200,201,202)';
domo.post('/sql/v1/dataset2', query13, {contentType: 'text/plain'}).then(result13);
 function result13(data){
  console && console.log(data);
  document.getElementById("cv-bs-tickets_sold").innerHTML = data['rows'][0][0];
}
var query14 = 'SELECT COUNT(*) FROM dataset2 WHERE ticket_type_id in (102,202)';
domo.post('/sql/v1/dataset2', query14, {contentType: 'text/plain'}).then(result14);
 function result14(data){
  console && console.log(data);
  document.getElementById("tot-bs-super-tickets_sold").innerHTML = data['rows'][0][0];
}
var query15 = 'SELECT COUNT(*) FROM dataset2 WHERE ticket_type_id in (101,201)';
domo.post('/sql/v1/dataset2', query15, {contentType: 'text/plain'}).then(result15);
 function result15(data){
  console && console.log(data);
  document.getElementById("tot-bs-vip-tickets_sold").innerHTML = data['rows'][0][0];
}
var query16 = 'SELECT COUNT(*) FROM dataset2 WHERE ticket_type_id in (100,200)';
domo.post('/sql/v1/dataset2', query16, {contentType: 'text/plain'}).then(result16);
 function result16(data){
  console && console.log(data);
  document.getElementById("tot-bs-exec-tickets_sold").innerHTML = data['rows'][0][0];
}
var query17 = 'SELECT COUNT(*) FROM dataset2';
domo.post('/sql/v1/dataset2', query17, {contentType: 'text/plain'}).then(result17);
 function result17(data){
  console && console.log(data);
  document.getElementById("bs-tickets_sold").innerHTML = data['rows'][0][0];
}
var query18 = 'SELECT COUNT(*) FROM dataset2 WHERE ticket_type_id in (102,202)';
domo.post('/sql/v1/dataset2', query18, {contentType: 'text/plain'}).then(result18);
 function result18(data){
  console && console.log(data);
  document.getElementById("bs-super-tickets_left").innerHTML = 40 - data['rows'][0][0];
}
var query19 = 'SELECT COUNT(*) FROM dataset2 WHERE ticket_type_id in (101,201)';
domo.post('/sql/v1/dataset2', query19, {contentType: 'text/plain'}).then(result19);
 function result19(data){
  console && console.log(data);
  document.getElementById("bs-vip-tickets_left").innerHTML = 200 - data['rows'][0][0];
}
var query20 = 'SELECT COUNT(*) FROM dataset2 WHERE ticket_type_id in (100,200)';
domo.post('/sql/v1/dataset2', query20, {contentType: 'text/plain'}).then(result20);
 function result20(data){
  console && console.log(data);
  document.getElementById("bs-exec-tickets_left").innerHTML = 300 - data['rows'][0][0];
}
var query21 = 'SELECT COUNT(*) FROM dataset2';
domo.post('/sql/v1/dataset2', query21, {contentType: 'text/plain'}).then(result21);
 function result21(data){
  console && console.log(data);
  document.getElementById("bs-tickets_left").innerHTML = 540 - data['rows'][0][0];
}
var query22 = 'SELECT COUNT(*) FROM dataset2 where ticket_type_id in (102,202) and confirmed = 1';
domo.post('/sql/v1/dataset2', query22, {contentType: 'text/plain'}).then(result22);
 function result22(data){
  console && console.log(data);
  document.getElementById("bs-super-tickets_confirmed").innerHTML = data['rows'][0][0];
}
var query23 = 'SELECT COUNT(*) FROM dataset2 where ticket_type_id in (101,201) and confirmed = 1';
domo.post('/sql/v1/dataset2', query23, {contentType: 'text/plain'}).then(result23);
 function result23(data){
  console && console.log(data);
  document.getElementById("bs-vip-tickets_confirmed").innerHTML = data['rows'][0][0];
}
var query24 = 'SELECT COUNT(*) FROM dataset2 where ticket_type_id in (100,200) and confirmed = 1';
domo.post('/sql/v1/dataset2', query24, {contentType: 'text/plain'}).then(result24);
 function result24(data){
  console && console.log(data);
  document.getElementById("bs-exec-tickets_confirmed").innerHTML = data['rows'][0][0];
}
var query25 = 'SELECT COUNT(*) FROM dataset2 where confirmed = 1';
domo.post('/sql/v1/dataset2', query25, {contentType: 'text/plain'}).then(result25);
 function result25(data){
  console && console.log(data);
  document.getElementById("bs-tickets_confirmed").innerHTML = data['rows'][0][0];
}

//July Business Summit
//Super VIP
var query26 = 'SELECT SUM(tickets_sold) FROM dataset1 WHERE ticket_type_id IN (606)';
domo.post('/sql/v1/dataset1', query26, {contentType: 'text/plain'}).then(result26);
 function result26(data){
  console && console.log(data);
  document.getElementById("july-bs-super-tickets_sold").innerHTML = data['rows'][0][0];
}
var query27 = 'SELECT SUM(tickets_left) FROM dataset1 WHERE ticket_type_id IN (606)';
domo.post('/sql/v1/dataset1', query27, {contentType: 'text/plain'}).then(result27);
 function result27(data){
  console && console.log(data);
  document.getElementById("july-bs-super-tickets_left").innerHTML = data['rows'][0][0];
}
var query28 = 'SELECT SUM(tickets_confirmed) FROM dataset1 WHERE ticket_type_id IN (606)';
domo.post('/sql/v1/dataset1', query28, {contentType: 'text/plain'}).then(result28);
 function result28(data){
  console && console.log(data);
  document.getElementById("july-bs-super-tickets_confirmed").innerHTML = data['rows'][0][0];
}
//VIP
var query29 = 'SELECT SUM(tickets_sold) FROM dataset1 WHERE ticket_type_id IN (443)';
domo.post('/sql/v1/dataset1', query29, {contentType: 'text/plain'}).then(result29);
 function result29(data){
  console && console.log(data);
  document.getElementById("july-bs-vip-tickets_sold").innerHTML = data['rows'][0][0];
}
var query30 = 'SELECT SUM(tickets_left) FROM dataset1 WHERE ticket_type_id IN (443)';
domo.post('/sql/v1/dataset1', query30, {contentType: 'text/plain'}).then(result30);
 function result30(data){
  console && console.log(data);
  document.getElementById("july-bs-vip-tickets_left").innerHTML = data['rows'][0][0];
}
var query31 = 'SELECT SUM(tickets_confirmed) FROM dataset1 WHERE ticket_type_id IN (443)';
domo.post('/sql/v1/dataset1', query31, {contentType: 'text/plain'}).then(result31);
 function result31(data){
  console && console.log(data);
  document.getElementById("july-bs-vip-tickets_confirmed").innerHTML = data['rows'][0][0];
}
//Executive
var query32 = 'SELECT SUM(tickets_sold) FROM dataset1 WHERE ticket_type_id IN (442)';
domo.post('/sql/v1/dataset1', query32, {contentType: 'text/plain'}).then(result32);
 function result32(data){
  console && console.log(data);
  document.getElementById("july-bs-exec-tickets_sold").innerHTML = data['rows'][0][0];
}
var query33 = 'SELECT SUM(tickets_left) FROM dataset1 WHERE ticket_type_id IN (442)';
domo.post('/sql/v1/dataset1', query33, {contentType: 'text/plain'}).then(result33);
 function result33(data){
  console && console.log(data);
  document.getElementById("july-bs-exec-tickets_left").innerHTML = data['rows'][0][0];
}
var query34 = 'SELECT SUM(tickets_confirmed) FROM dataset1 WHERE ticket_type_id IN (442)';
domo.post('/sql/v1/dataset1', query34, {contentType: 'text/plain'}).then(result34);
 function result34(data){
  console && console.log(data);
  document.getElementById("july-bs-exec-tickets_confirmed").innerHTML = data['rows'][0][0];
}
//Business Summit Total
var query35 = 'SELECT SUM(tickets_sold) FROM dataset1 WHERE ticket_type_id IN (442,443,606)';
domo.post('/sql/v1/dataset1', query35, {contentType: 'text/plain'}).then(result35);
 function result35(data){
  console && console.log(data);
  document.getElementById("july-bs-tickets_sold").innerHTML = data['rows'][0][0];
}
var query36 = 'SELECT SUM(tickets_left) FROM dataset1 WHERE ticket_type_id IN (442,443,606)';
domo.post('/sql/v1/dataset1', query36, {contentType: 'text/plain'}).then(result36);
 function result36(data){
  console && console.log(data);
  document.getElementById("july-bs-tickets_left").innerHTML = data['rows'][0][0];
}
var query37 = 'SELECT SUM(tickets_confirmed) FROM dataset1 WHERE ticket_type_id IN (442,443,606)';
domo.post('/sql/v1/dataset1', query37, {contentType: 'text/plain'}).then(result37);
 function result37(data){
  console && console.log(data);
  document.getElementById("july-bs-tickets_confirmed").innerHTML = data['rows'][0][0];
}


//timer 1
var countDownDate1 = new Date("Apr 26, 2024 08:00:00").getTime();

// Update the count down every 1 second
var x1 = setInterval(function() {

  // Get today's date and time
  var now1 = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance1 = countDownDate1 - now1;
    
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance1 / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance1 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance1 % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance1 % (1000 * 60)) / 1000);
    
  document.getElementById("timer1").innerHTML = days+' Days Left';
    
  // If the count down is over, write some text 
  if (distance1 < 0) {
    clearInterval(x1);
    document.getElementById("timer1").innerHTML = "Event Live";
  }
}, 1000);

//timer 2
var countDownDate2 = new Date("July 12, 2024 08:00:00").getTime();

// Update the count down every 1 second
var x2 = setInterval(function() {

  // Get today's date and time
  var now2 = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance2 = countDownDate2 - now2;
    
  // Time calculations for days, hours, minutes and seconds
  var days2 = Math.floor(distance2 / (1000 * 60 * 60 * 24));
  var hours2 = Math.floor((distance2 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes2 = Math.floor((distance2 % (1000 * 60 * 60)) / (1000 * 60));
  var seconds2 = Math.floor((distance2 % (1000 * 60)) / 1000);
    
  document.getElementById("timer2").innerHTML = days2+' Days Left';
    
  // If the count down is over, write some text 
  if (distance2 < 0) {
    clearInterval(x2);
    document.getElementById("timer2").innerHTML = "Event Live";
  }
}, 1000);