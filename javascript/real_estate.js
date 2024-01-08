var domo = window.domo; // For more on domo.js: https://developer.domo.com/docs/dev-studio-guides/domo-js#domo.get
var datasets = window.datasets;

//REAL ESTATE INTERACTIVE JAN 2023
//baller
var query20 = 'SELECT COUNT(*) FROM dataset0 WHERE event_id = 665 AND ticket_type_id = 655';
domo.post('/sql/v1/dataset0', query20, {contentType: 'text/plain'}).then(result20);
 function result20(data){
  console && console.log(data);
  document.getElementById("baller-tickets_sold").innerHTML = data['rows'][0][0];
}
var query21 = 'SELECT COUNT(*) FROM dataset0 WHERE event_id = 665 AND ticket_type_id = 655';
domo.post('/sql/v1/dataset0', query21, {contentType: 'text/plain'}).then(result21);
function result21(data){
  console && console.log(data);
  document.getElementById("baller-tickets_left").innerHTML = 16 - data['rows'][0][0];
}
var query22 = 'SELECT COUNT(*) FROM dataset1 WHERE event_id = 665 AND ticket_type_id = 655';
domo.post('/sql/v1/dataset1', query22, {contentType: 'text/plain'}).then(result22);
function result22(data){
  console && console.log(data);
  document.getElementById("baller-tickets_confirmed").innerHTML = data['rows'][0][0];
}
//rei-vip
var query23 = 'SELECT COUNT(*) FROM dataset0 WHERE ticket_type_id in (847)';
domo.post('/sql/v1/dataset0', query23, {contentType: 'text/plain'}).then(result23);
 
function result23(data){
  console && console.log(data);
  document.getElementById("jan-rei-vip-tickets_sold").innerHTML = data['rows'][0][0];
}
//rei-executive
var query24 = 'SELECT COUNT(*) FROM dataset0 WHERE ticket_type_id in (846)';
domo.post('/sql/v1/dataset0', query24, {contentType: 'text/plain'}).then(result24);
 
function result24(data){
  console && console.log(data);
  document.getElementById("jan-rei-exec-tickets_sold").innerHTML = data['rows'][0][0];
}
//rei-totals
var query25 = 'SELECT COUNT(*) FROM dataset0 WHERE ticket_type_id in (846,847)';
domo.post('/sql/v1/dataset0', query25, {contentType: 'text/plain'}).then(result25);
 
function result25(data){
  console && console.log(data);
  document.getElementById("jan-rei-baller-tickets_sold").innerHTML = data['rows'][0][0];
}
//REAL ESTATE INTERACTIVE MARCH
//rei-vip
var query230 = 'SELECT COUNT(*) FROM dataset0 WHERE ticket_type_id in (837)';
domo.post('/sql/v1/dataset0', query230, {contentType: 'text/plain'}).then(result230);
 
function result230(data){
  console && console.log(data);
  document.getElementById("mar-rei-vip-tickets_sold").innerHTML = data['rows'][0][0];
}
//rei-executive
var query240 = 'SELECT COUNT(*) FROM dataset0 WHERE ticket_type_id in (831)';
domo.post('/sql/v1/dataset0', query240, {contentType: 'text/plain'}).then(result240);
 
function result240(data){
  console && console.log(data);
  document.getElementById("mar-rei-exec-tickets_sold").innerHTML = data['rows'][0][0];
}
//rei-totals
var query250 = 'SELECT COUNT(*) FROM dataset0 WHERE ticket_type_id in (837,831)';
domo.post('/sql/v1/dataset0', query250, {contentType: 'text/plain'}).then(result250);
 
function result250(data){
  console && console.log(data);
  document.getElementById("mar-rei-baller-tickets_sold").innerHTML = data['rows'][0][0];
}

//REAL ESTATE SUMMIT DEC 2023
//ult-vip
var query1 = 'SELECT COUNT(*) FROM dataset0 WHERE event_id = 501 AND ticket_type_id = 259';
domo.post('/sql/v1/dataset0', query1, {contentType: 'text/plain'}).then(result1);
 function result1(data){
  console && console.log(data);
  document.getElementById("ult-tickets_sold").innerHTML = data['rows'][0][0];
}
var query2 = 'SELECT COUNT(*) FROM dataset0 WHERE event_id = 501 AND ticket_type_id = 259';
domo.post('/sql/v1/dataset0', query2, {contentType: 'text/plain'}).then(result2);
function result2(data){
  console && console.log(data);
  document.getElementById("ult-tickets_left").innerHTML = 24 - data['rows'][0][0];
}
var query3 = 'SELECT COUNT(*) FROM dataset1 WHERE ticket_type_id = 259';
domo.post('/sql/v1/dataset1', query3, {contentType: 'text/plain'}).then(result3);
function result3(data){
  console && console.log(data);
  document.getElementById("ult-tickets_confirmed").innerHTML = data['rows'][0][0];
}

//super-vip
var query4 = 'SELECT COUNT(*) FROM dataset0 WHERE ticket_type_id in (827)';
domo.post('/sql/v1/dataset0', query4, {contentType: 'text/plain'}).then(result4);
 
function result4(data){
  console && console.log(data);
  document.getElementById("super-tickets_sold").innerHTML = data['rows'][0][0];
}
var query5 = 'SELECT COUNT(*) FROM dataset0 WHERE ticket_type_id in (827)';
domo.post('/sql/v1/dataset0', query5, {contentType: 'text/plain'}).then(result5);
function result5(data){
  console && console.log(data);
  document.getElementById("super-tickets_left").innerHTML = 24 - data['rows'][0][0];
}
var query6 = 'SELECT COUNT(*) FROM dataset1 WHERE ticket_type_id in (827)';
domo.post('/sql/v1/dataset1', query6, {contentType: 'text/plain'}).then(result6);
function result6(data){
  console && console.log(data);
  document.getElementById("super-tickets_confirmed").innerHTML = data['rows'][0][0];
}
//vip
var query7 = 'SELECT COUNT(*) FROM dataset0 WHERE ticket_type_id in (826)';
domo.post('/sql/v1/dataset0', query7, {contentType: 'text/plain'}).then(result7);
 
function result7(data){
  console && console.log(data);
  document.getElementById("vip-tickets_sold").innerHTML = data['rows'][0][0];
}
var query8 = 'SELECT COUNT(*) FROM dataset0 WHERE ticket_type_id in (826)';
domo.post('/sql/v1/dataset0', query8, {contentType: 'text/plain'}).then(result8);
function result8(data){
  console && console.log(data);
  document.getElementById("vip-tickets_left").innerHTML = 190 - data['rows'][0][0];
}
var query9 = 'SELECT COUNT(*) FROM dataset1 WHERE ticket_type_id in (826)';
domo.post('/sql/v1/dataset1', query9, {contentType: 'text/plain'}).then(result9);
function result9(data){
  console && console.log(data);
  document.getElementById("vip-tickets_confirmed").innerHTML = data['rows'][0][0];
}
//total vips
var query10 = 'SELECT COUNT(*) FROM dataset0 WHERE ticket_type_id in (826,827)';
domo.post('/sql/v1/dataset0', query10, {contentType: 'text/plain'}).then(result10);
 
function result10(data){
  console && console.log(data);
  document.getElementById("tot_vip-tickets_sold").innerHTML = data['rows'][0][0];
}
var query11 = 'SELECT COUNT(*) FROM dataset0 WHERE ticket_type_id in (826,827)';
domo.post('/sql/v1/dataset0', query11, {contentType: 'text/plain'}).then(result11);
function result11(data){
  console && console.log(data);
  document.getElementById("tot_vip-tickets_left").innerHTML = 214 - data['rows'][0][0];
}
var query12 = 'SELECT COUNT(*) FROM dataset0 WHERE ticket_type_id in (826,827)';
domo.post('/sql/v1/dataset1', query12, {contentType: 'text/plain'}).then(result12);
function result12(data){
  console && console.log(data);
  document.getElementById("tot_vip-tickets_confirmed").innerHTML = data['rows'][0][0];
}
//executive
var query13 = 'SELECT COUNT(*) FROM dataset0 WHERE ticket_type_id in (825)';
domo.post('/sql/v1/dataset0', query13, {contentType: 'text/plain'}).then(result13);
 
function result13(data){
  console && console.log(data);
  document.getElementById("exec-tickets_sold").innerHTML = data['rows'][0][0];
}
var query14 = 'SELECT COUNT(*) FROM dataset0 WHERE ticket_type_id in (825)';
domo.post('/sql/v1/dataset0', query14, {contentType: 'text/plain'}).then(result14);
function result14(data){
  console && console.log(data);
  document.getElementById("exec-tickets_left").innerHTML = 705 - data['rows'][0][0];
}
var query15 = 'SELECT COUNT(*) FROM dataset0 WHERE ticket_type_id in (825)';
domo.post('/sql/v1/dataset1', query15, {contentType: 'text/plain'}).then(result15);
function result15(data){
  console && console.log(data);
  document.getElementById("exec-tickets_confirmed").innerHTML = data['rows'][0][0];
}
//total tickets
var query16 = 'SELECT COUNT(*) FROM dataset0 WHERE ticket_type_id in (825,826,827)';
domo.post('/sql/v1/dataset0', query16, {contentType: 'text/plain'}).then(result16);
 
function result16(data){
  console && console.log(data);
  document.getElementById("tot-tickets_sold").innerHTML = data['rows'][0][0];
}
var query17 = 'SELECT COUNT(*) FROM dataset0  WHERE ticket_type_id in (825,826,827)';
domo.post('/sql/v1/dataset0', query17, {contentType: 'text/plain'}).then(result17);
function result17(data){
  console && console.log(data);
  document.getElementById("tot-tickets_left").innerHTML = 919 - data['rows'][0][0];
}
var query18 = 'SELECT COUNT(*) FROM dataset0 WHERE ticket_type_id in (825,826,827)';
domo.post('/sql/v1/dataset1', query18, {contentType: 'text/plain'}).then(result18);
function result18(data){
  console && console.log(data);
  document.getElementById("tot-tickets_confirmed").innerHTML = data['rows'][0][0];
}
//virtual
var query19 = 'SELECT COUNT(*) FROM dataset0 WHERE ticket_type_id in (828)';
domo.post('/sql/v1/dataset0', query19, {contentType: 'text/plain'}).then(result19);
 
function result19(data){
  console && console.log(data);
  document.getElementById("virtual-tickets_sold").innerHTML = data['rows'][0][0];
}

//timer 1
var countDownDate1 = new Date("Jan 20, 2024 08:00:00").getTime();

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
    
  document.getElementById("timer_t1").innerHTML = days+' Days Until Event';
    
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x1);
    document.getElementById("timer_t1").innerHTML = "Event Live";
  }
}, 1000);

//timer 2
var countDownDate2 = new Date("Mar 2, 2024 08:00:00").getTime();

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
    
  document.getElementById("timer_t2").innerHTML = days2+' Days Until Event';
    
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("timer_t2").innerHTML = "Event Live";
  }
}, 1000);

//timer 3
var countDownDate3 = new Date("Mar 16, 2024 08:00:00").getTime();

// Update the count down every 1 second
var x3 = setInterval(function() {

  // Get today's date and time
  var now3 = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance3 = countDownDate3 - now3;
    
  // Time calculations for days, hours, minutes and seconds
  var days3 = Math.floor(distance3 / (1000 * 60 * 60 * 24));
  var hours3 = Math.floor((distance3 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes3 = Math.floor((distance3 % (1000 * 60 * 60)) / (1000 * 60));
  var seconds3 = Math.floor((distance3 % (1000 * 60)) / 1000);
    
  document.getElementById("timer_t3").innerHTML = days3+' Days Until Event';
    
  // If the count down is over, write some text 
  if (distance3 < 0) {
    clearInterval(x3);
    document.getElementById("timer_t3").innerHTML = "Event Live";
  }
}, 1000);
