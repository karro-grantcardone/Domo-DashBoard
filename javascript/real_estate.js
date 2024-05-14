var domo = window.domo; // For more on domo.js: https://developer.domo.com/docs/dev-studio-guides/domo-js#domo.get
var datasets = window.datasets;

//BRING YOUR DEAL
var query1a = 'SELECT SUM(tickets_sold) FROM dataset0 WHERE ticket_type_id in (476)';
domo.post('/sql/v1/dataset0', query1a, {contentType: 'text/plain'}).then(result1a);
 function result1a(data){
  console && console.log(data);
  document.getElementById("table1-item1").innerHTML = data['rows'][0][0];
}
var query1b = 'SELECT SUM(tickets_left) FROM dataset0 WHERE ticket_type_id in (476)';
domo.post('/sql/v1/dataset0', query1b, {contentType: 'text/plain'}).then(result1b);
function result1b(data){
  console && console.log(data);
  document.getElementById("table1-item2").innerHTML = data['rows'][0][0];
}
var query1c = 'SELECT SUM(tickets_confirmed) FROM dataset0 WHERE ticket_type_id in (476)';
domo.post('/sql/v1/dataset0', query1c, {contentType: 'text/plain'}).then(result1c);
function result1c(data){
  console && console.log(data);
  document.getElementById("table1-item3").innerHTML = data['rows'][0][0];
}
var query1d = 'SELECT SUM(tickets_sold) FROM dataset0 WHERE ticket_type_id in (1105)';
domo.post('/sql/v1/dataset0', query1d, {contentType: 'text/plain'}).then(result1d);
 function result1d(data){
  console && console.log(data);
  document.getElementById("table1-item4").innerHTML = data['rows'][0][0];
}

//REAL ESTATE INTERACTIVE
//rei-vip
var query2a = 'SELECT SUM(tickets_sold) FROM dataset0 WHERE ticket_type_id in (840)';
domo.post('/sql/v1/dataset0', query2a, {contentType: 'text/plain'}).then(result2a);
 
function result2a(data){
  console && console.log(data);
  document.getElementById("table2-item4").innerHTML = data['rows'][0][0];
}
//rei-executive
var query2b = 'SELECT SUM(tickets_sold) FROM dataset0 WHERE ticket_type_id in (833)';
domo.post('/sql/v1/dataset0', query2b, {contentType: 'text/plain'}).then(result2b);
 
function result2b(data){
  console && console.log(data);
  document.getElementById("table2-item5").innerHTML = data['rows'][0][0];
}
//rei-totals
var query2c = 'SELECT SUM(tickets_sold) FROM dataset0 WHERE ticket_type_id in (833,840)';
domo.post('/sql/v1/dataset0', query2c, {contentType: 'text/plain'}).then(result2c);
 
function result2c(data){
  console && console.log(data);
  document.getElementById("table2-item6").innerHTML = data['rows'][0][0];
}

//REAL ESTATE SUMMIT
//ult-vip
var query3a = 'SELECT SUM(tickets_sold) FROM dataset0 WHERE ticket_type_id in (453)';
domo.post('/sql/v1/dataset0', query3a, {contentType: 'text/plain'}).then(result3a);
 function result3a(data){
  console && console.log(data);
  document.getElementById("table3-item1").innerHTML = data['rows'][0][0];
}
var query3b = 'SELECT SUM(tickets_left) FROM dataset0 WHERE ticket_type_id in (453)';
domo.post('/sql/v1/dataset0', query3b, {contentType: 'text/plain'}).then(result3b);
 function result3b(data){
  console && console.log(data);
  document.getElementById("table3-item2").innerHTML = data['rows'][0][0];
 }
var query3c = 'SELECT SUM(tickets_confirmed) FROM dataset0 WHERE ticket_type_id in (453)';
domo.post('/sql/v1/dataset0', query3c, {contentType: 'text/plain'}).then(result3c);
function result3c(data){
  console && console.log(data);
  document.getElementById("table3-item3").innerHTML = data['rows'][0][0];
}
//super-vip
var query3d = 'SELECT SUM(tickets_sold) FROM dataset0 WHERE ticket_type_id in (650)';
domo.post('/sql/v1/dataset0', query3d, {contentType: 'text/plain'}).then(result3d);
 
function result3d(data){
  console && console.log(data);
  document.getElementById("table3-item4").innerHTML = data['rows'][0][0];
}
var query3e = 'SELECT SUM(tickets_left) FROM dataset0 WHERE ticket_type_id in (650)';
domo.post('/sql/v1/dataset0', query3e, {contentType: 'text/plain'}).then(result3e);
 
function result3e(data){
  console && console.log(data);
  document.getElementById("table3-item5").innerHTML = data['rows'][0][0];
}

var query3g = 'SELECT SUM(tickets_confirmed) FROM dataset0 WHERE ticket_type_id in (650)';
domo.post('/sql/v1/dataset0', query3g, {contentType: 'text/plain'}).then(result3g);
function result3g(data){
  console && console.log(data);
  document.getElementById("table3-item6").innerHTML = data['rows'][0][0];
}
//vip
var query3h = 'SELECT SUM(tickets_sold) FROM dataset0 WHERE ticket_type_id in (452)';
domo.post('/sql/v1/dataset0', query3h, {contentType: 'text/plain'}).then(result3h);
 
function result3h(data){
  console && console.log(data);
  document.getElementById("table3-item7").innerHTML = data['rows'][0][0];
}
var query3i = 'SELECT SUM(tickets_left) FROM dataset0 WHERE ticket_type_id in (452)';
domo.post('/sql/v1/dataset0', query3i, {contentType: 'text/plain'}).then(result3i);
 
function result3i(data){
  console && console.log(data);
  document.getElementById("table3-item8").innerHTML = data['rows'][0][0];
}
var query3j = 'SELECT SUM(tickets_confirmed) FROM dataset0 WHERE ticket_type_id in (452)';
domo.post('/sql/v1/dataset0', query3j, {contentType: 'text/plain'}).then(result3j);
function result3j(data){
  console && console.log(data);
  document.getElementById("table3-item9").innerHTML = data['rows'][0][0];
}
//total vips
var query3k = 'SELECT SUM(tickets_sold) FROM dataset0 WHERE ticket_type_id in (650,453,452)';
domo.post('/sql/v1/dataset0', query3k, {contentType: 'text/plain'}).then(result3k);
function result3k(data){
  console && console.log(data);
  document.getElementById("table3-item10").innerHTML = data['rows'][0][0];
}

var query3l = 'SELECT SUM(tickets_left) FROM dataset0 WHERE ticket_type_id in (650,453,452)';
domo.post('/sql/v1/dataset0', query3l, {contentType: 'text/plain'}).then(result3l);
 
function result3l(data){
  console && console.log(data);
  document.getElementById("table3-item11").innerHTML = data['rows'][0][0];
}
var query3m = 'SELECT SUM(tickets_confirmed) FROM dataset0 WHERE ticket_type_id in (650,453,452)';
domo.post('/sql/v1/dataset0', query3m, {contentType: 'text/plain'}).then(result3m);
function result3m(data){
  console && console.log(data);
  document.getElementById("table3-item12").innerHTML = data['rows'][0][0];
}
//executive
var query3n = 'SELECT SUM(tickets_sold) FROM dataset0 WHERE ticket_type_id in (451)';
domo.post('/sql/v1/dataset0', query3n, {contentType: 'text/plain'}).then(result3n);
function result3n(data){
  console && console.log(data);
  document.getElementById("table3-item13").innerHTML = data['rows'][0][0];
}

var query3o = 'SELECT SUM(tickets_left) FROM dataset0 WHERE ticket_type_id in (451)';
domo.post('/sql/v1/dataset0', query3o, {contentType: 'text/plain'}).then(result3o);
 
function result3o(data){
  console && console.log(data);
  document.getElementById("table3-item14").innerHTML = data['rows'][0][0];
}
var query3p = 'SELECT SUM(tickets_confirmed) FROM dataset0 WHERE ticket_type_id in (451)';
domo.post('/sql/v1/dataset0', query3p, {contentType: 'text/plain'}).then(result3p);
 
function result3p(data){
  console && console.log(data);
  document.getElementById("table3-item15").innerHTML = data['rows'][0][0];
}
//total tickets
var query3q = 'SELECT SUM(tickets_sold) FROM dataset0 WHERE ticket_type_id in (451,452,453,650)';
domo.post('/sql/v1/dataset0', query3q, {contentType: 'text/plain'}).then(result3q);
function result3q(data){
  console && console.log(data);
  document.getElementById("table3-item16").innerHTML = data['rows'][0][0];
}
var query3r = 'SELECT SUM(tickets_left) FROM dataset0 WHERE ticket_type_id in (451,452,453,650)';
domo.post('/sql/v1/dataset0', query3r, {contentType: 'text/plain'}).then(result3r);
function result3r(data){
  console && console.log(data);
  document.getElementById("table3-item17").innerHTML = data['rows'][0][0];
}

var query3s = 'SELECT SUM(tickets_confirmed) FROM dataset0 WHERE ticket_type_id in (451,452,453,650)';
domo.post('/sql/v1/dataset0', query3s, {contentType: 'text/plain'}).then(result3s);
 
function result3s(data){
  console && console.log(data);
  document.getElementById("table3-item18").innerHTML = data['rows'][0][0];
}
var query3t = 'SELECT SUM(tickets_sold) FROM dataset0  WHERE ticket_type_id in (454)';
domo.post('/sql/v1/dataset0', query3t, {contentType: 'text/plain'}).then(result3t);
function result3t(data){
  console && console.log(data);
  document.getElementById("table3-item19").innerHTML = data['rows'][0][0];
}
//real estate unselected bundle
var query5a = 'SELECT SUM(bundle_tickets) FROM dataset2 WHERE bundle_id in (101,104)';
domo.post('/sql/v1/dataset2', query5a, {contentType: 'text/plain'}).then(result5a);
 function result5a(data){
  console && console.log(data);
  document.getElementById("table4-item1").innerHTML = data['rows'][0][0];
}
var query5b = 'SELECT SUM(bundle_tickets) FROM dataset2 WHERE bundle_id in (10,68)';
domo.post('/sql/v1/dataset2', query5b, {contentType: 'text/plain'}).then(result5b);
 function result5b(data){
  console && console.log(data);
  document.getElementById("table4-item2").innerHTML = data['rows'][0][0];
}
var query5c = 'SELECT SUM(bundle_tickets) FROM dataset2 WHERE bundle_id in (8,67,102)';
domo.post('/sql/v1/dataset2', query5c, {contentType: 'text/plain'}).then(result5c);
 function result5c(data){
  console && console.log(data);
  document.getElementById("table4-item3").innerHTML = data['rows'][0][0];
}
var query5d = 'SELECT SUM(bundle_tickets) FROM dataset2 WHERE bundle_id in (8,67,102,101,104,10,68)';
domo.post('/sql/v1/dataset2', query5d, {contentType: 'text/plain'}).then(result5d);
 function result5d(data){
  console && console.log(data);
  document.getElementById("table4-item4").innerHTML = data['rows'][0][0];
}

//BYD 
//timer 1
var countDownDate1 = new Date("Jun 06, 2024 08:00:00").getTime();

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
    
  document.getElementById("timer_t1").innerHTML = days +' Days Left';
    
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x1);
    document.getElementById("timer_t1").innerHTML = "Event Live";
  }
}, 1000);

//REI June
//timer 2
var countDownDate2 = new Date("JUN 15, 2024 08:00:00").getTime();

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
    
  document.getElementById("timer_t2").innerHTML = days2 +' Days Left';
    
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("timer_t2").innerHTML = "Event Live";
  }
}, 1000);

//RES July
//timer 3
var countDownDate3 = new Date("JUL 15, 2024 08:00:00").getTime();

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
    
  document.getElementById("timer_t3").innerHTML = days3  + ' Days Left'
  // If the count down is over, write some text 
  if (distance3 < 0) {
    clearInterval(x3);
    document.getElementById("timer_t3").innerHTML = "Event Live";
  }
}, 1000);
