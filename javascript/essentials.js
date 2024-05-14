var domo = window.domo; // For more on domo.js: https://developer.domo.com/docs/dev-studio-guides/domo-js#domo.get
var datasets = window.datasets;

//HQ day
var query5 = 'SELECT SUM(tickets_sold) FROM dataset0 WHERE ticket_type_id in (857)';
domo.post('/sql/v1/dataset0', query5, {contentType: 'text/plain'}).then(result5);
 function result5(data){
  console && console.log(data);
  document.getElementById("hqday-tickets_sold").innerHTML = data['rows'][0][0];
}
var query6 = 'SELECT SUM(tickets_left) FROM dataset0 WHERE ticket_type_id in (857)';
domo.post('/sql/v1/dataset0', query6, {contentType: 'text/plain'}).then(result6);
 function result6(data){
  console && console.log(data);
  document.getElementById("hqday-tickets_left").innerHTML = data['rows'][0][0];
}
var query7 = 'SELECT SUM(tickets_confirmed) FROM dataset0 WHERE ticket_type_id in (857)';
domo.post('/sql/v1/dataset0', query7, {contentType: 'text/plain'}).then(result7);
 function result7(data){
  console && console.log(data);
  document.getElementById("hqday-tickets_confirmed").innerHTML = data['rows'][0][0];
}
var query8 = 'SELECT SUM(tickets_sold) FROM dataset0 WHERE ticket_type_id in (857)';
domo.post('/sql/v1/dataset0', query8, {contentType: 'text/plain'}).then(result8);
 function result8(data){
  console && console.log(data);
  document.getElementById("sales-virtual-tickets_sold").innerHTML = data['rows'][0][0];
}
//Sales Manager Workshop
var query100 = 'SELECT SUM(tickets_sold) FROM dataset0 WHERE ticket_type_id in (1059)';
domo.post('/sql/v1/dataset0', query100, {contentType: 'text/plain'}).then(result100);
 function result100(data){
  console && console.log(data);
  document.getElementById("table2_item1").innerHTML = data['rows'][0][0];
}
var query110 = 'SELECT SUM(tickets_left) FROM dataset0 WHERE ticket_type_id in (1059)';
domo.post('/sql/v1/dataset0', query110, {contentType: 'text/plain'}).then(result110);
 function result110(data){
  console && console.log(data);
  document.getElementById("table2_item2").innerHTML = data['rows'][0][0];
}
var query200 = 'SELECT SUM(tickets_confirmed) FROM dataset0 WHERE ticket_type_id in (1059)';
domo.post('/sql/v1/dataset0', query200, {contentType: 'text/plain'}).then(result200);
 function result200(data){
  console && console.log(data);
  document.getElementById("table2_item3").innerHTML = data['rows'][0][0];
}
var query300 = 'SELECT SUM(tickets_sold) FROM dataset0 WHERE ticket_type_id in (1073)';
domo.post('/sql/v1/dataset0', query300, {contentType: 'text/plain'}).then(result300);
 function result300(data){
  console && console.log(data);
  document.getElementById("table2_item4").innerHTML = data['rows'][0][0];
}
//marketing essential
var query3a = 'SELECT SUM(tickets_sold) FROM dataset0 WHERE ticket_type_id in (432)';
domo.post('/sql/v1/dataset0', query3a, {contentType: 'text/plain'}).then(result3a);
 function result3a(data){
  console && console.log(data);
  document.getElementById("table3_item1").innerHTML = data['rows'][0][0];
}
var query3b = 'SELECT SUM(tickets_left) FROM dataset0 WHERE ticket_type_id in (432)';
domo.post('/sql/v1/dataset0', query3b, {contentType: 'text/plain'}).then(result3b);
 function result3b(data){
  console && console.log(data);
  document.getElementById("table3_item2").innerHTML = data['rows'][0][0];
}
var query3c = 'SELECT SUM(tickets_confirmed) FROM dataset0 WHERE ticket_type_id in (432)';
domo.post('/sql/v1/dataset0', query3c, {contentType: 'text/plain'}).then(result3c);
 function result3c(data){
  console && console.log(data);
  document.getElementById("table3_item3").innerHTML = data['rows'][0][0];
}
var query3d = 'SELECT SUM(tickets_sold) FROM dataset0 WHERE ticket_type_id in (433)';
domo.post('/sql/v1/dataset0', query3d, {contentType: 'text/plain'}).then(result3d);
 function result3d(data){
  console && console.log(data);
  document.getElementById("table3_item4").innerHTML = data['rows'][0][0];
}
//sales essentials
var query4a = 'SELECT SUM(tickets_sold) FROM dataset0 WHERE ticket_type_id in (422)';
domo.post('/sql/v1/dataset0', query4a, {contentType: 'text/plain'}).then(result4a);
 function result4a(data){
  console && console.log(data);
  document.getElementById("table4_item1").innerHTML = data['rows'][0][0];
}
var query4b = 'SELECT SUM(tickets_left) FROM dataset0 WHERE ticket_type_id in (422)';
domo.post('/sql/v1/dataset0', query4b, {contentType: 'text/plain'}).then(result4b);
 function result4b(data){
  console && console.log(data);
  document.getElementById("table4_item2").innerHTML = data['rows'][0][0];
}
var query4c = 'SELECT SUM(tickets_confirmed) FROM dataset0 WHERE ticket_type_id in (422)';
domo.post('/sql/v1/dataset0', query4c, {contentType: 'text/plain'}).then(result4c);
 function result4c(data){
  console && console.log(data);
  document.getElementById("table4_item3").innerHTML = data['rows'][0][0];
}
var query4d = 'SELECT SUM(tickets_sold) FROM dataset0 WHERE ticket_type_id in (423)';
domo.post('/sql/v1/dataset0', query4d, {contentType: 'text/plain'}).then(result4d);
 function result4d(data){
  console && console.log(data);
  document.getElementById("table4_item4").innerHTML = data['rows'][0][0];
}
//bring your deal
var query5a = 'SELECT SUM(tickets_sold) FROM dataset0 WHERE ticket_type_id in (476)';
domo.post('/sql/v1/dataset0', query5a, {contentType: 'text/plain'}).then(result5a);
 function result5a(data){
  console && console.log(data);
  document.getElementById("table5-item1").innerHTML = data['rows'][0][0];
}
var query5b = 'SELECT SUM(tickets_left) FROM dataset0 WHERE ticket_type_id in (476)';
domo.post('/sql/v1/dataset0', query5b, {contentType: 'text/plain'}).then(result5b);
function result5b(data){
  console && console.log(data);
  document.getElementById("table5-item2").innerHTML = data['rows'][0][0];
}
var query5c = 'SELECT SUM(tickets_confirmed) FROM dataset0 WHERE ticket_type_id in (476)';
domo.post('/sql/v1/dataset0', query5c, {contentType: 'text/plain'}).then(result5c);
function result5c(data){
  console && console.log(data);
  document.getElementById("table5-item3").innerHTML = data['rows'][0][0];
}
var query5d = 'SELECT SUM(tickets_sold) FROM dataset0 WHERE ticket_type_id in (1105)';
domo.post('/sql/v1/dataset0', query5d, {contentType: 'text/plain'}).then(result5d);
 function result5d(data){
  console && console.log(data);
  document.getElementById("table5-item4").innerHTML = data['rows'][0][0];
}

//timer 1
var countDownDate1 = new Date("Jun 15, 2024 08:00:00").getTime();

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
    
  document.getElementById("timer_t1").innerHTML = days+' Days Left';
    
  // If the count down is over, write some text 
  if (distance1 < 0) {
    clearInterval(x1);
    document.getElementById("timer_t1").innerHTML = "Event Live";
  }
}, 1000);

//timer 2
var countDownDate2 = new Date("May 15, 2024 08:00:00").getTime();

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
    
  document.getElementById("timer_t2").innerHTML = hours2+' hrs '+minutes2 + ' mins '+seconds2+' sec Left';
    
  // If the count down is over, write some text 
  if (distance2 < 0) {
    clearInterval(x2);
    document.getElementById("timer_t2").innerHTML = "Event Live";
  }
}, 1000);


//timer 3/SALES MGNT
var countDownDate3 = new Date("May 16, 2024 08:00:00").getTime();

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
    
  document.getElementById("timer_t3").innerHTML = days3+' Days Left';
    
  // If the count down is over, write some text 
  if (distance3 < 0) {
    clearInterval(x3);
    document.getElementById("timer_t3").innerHTML = "Event Live";
      }
}, 1000);

//timer 3/Markeing
var countDownDate4 = new Date("Jun 13, 2024 08:00:00").getTime();

// Update the count down every 1 second
var x4 = setInterval(function() {

  // Get today's date and time
  var now4 = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance4 = countDownDate4 - now4;
    
  // Time calculations for days, hours, minutes and seconds
  var days4 = Math.floor(distance4 / (1000 * 60 * 60 * 24));
  var hours4 = Math.floor((distance4 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes4 = Math.floor((distance4 % (1000 * 60 * 60)) / (1000 * 60));
  var seconds4 = Math.floor((distance4 % (1000 * 60)) / 1000);
    
  document.getElementById("timer_t4").innerHTML = days4+' Days Left';
    
  // If the count down is over, write some text 
  if (distance4 < 0) {
    clearInterval(x4);
    document.getElementById("timer_t4").innerHTML = "Event Live";
      }
}, 1000);

var countDownDate5 = new Date("Jun 6, 2024 08:00:00").getTime();

// Update the count down every 1 second
var x5 = setInterval(function() {

  // Get today's date and time
  var now5 = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance5 = countDownDate5 - now5;
    
  // Time calculations for days, hours, minutes and seconds
  var days5 = Math.floor(distance5 / (1000 * 60 * 60 * 24));
  var hours5 = Math.floor((distance5 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes5 = Math.floor((distance5 % (1000 * 60 * 60)) / (1000 * 60));
  var seconds5 = Math.floor((distance5 % (1000 * 60)) / 1000);
    
  document.getElementById("timer_t5").innerHTML = days5+' Days Left';
    
  // If the count down is over, write some text 
  if (distance5 < 0) {
    clearInterval(x5);
    document.getElementById("timer_t5").innerHTML = "Event Live";
      }
}, 1000);