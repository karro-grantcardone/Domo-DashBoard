// DDX Bricks Wiki - See https://developer.domo.com/docs/ddx-bricks/getting-started-using-ddx-bricks
// for tips on getting started, linking to Domo data and debugging your app
 
//Available globals
var domo = window.domo; // For more on domo.js: https://developer.domo.com/docs/dev-studio-guides/domo-js#domo.get
var datasets = window.datasets;


//couples retreat
//purchaser
var query111 = 'SELECT SUM(tickets_sold) FROM dataset0 WHERE ticket_type_id in (642)';
domo.post('/sql/v1/dataset0', query111, {contentType: 'text/plain'}).then(result111);
 function result111(data){
  console && console.log(data);
  document.getElementById("cr-purchaser-tickets_sold").innerHTML = data['rows'][0][0];
}
var query121 = 'SELECT SUM(tickets_left) FROM dataset0 WHERE ticket_type_id in (642)';
domo.post('/sql/v1/dataset0', query121, {contentType: 'text/plain'}).then(result121);
 function result121(data){
  console && console.log(data);
  document.getElementById("cr-purchaser-tickets_left").innerHTML = data['rows'][0][0];
}
var query131 = 'SELECT SUM(tickets_confirmed) FROM dataset0 WHERE ticket_type_id in (642)';
domo.post('/sql/v1/dataset0', query131, {contentType: 'text/plain'}).then(result131);
 function result131(data){
  console && console.log(data);
  document.getElementById("cr-purchaser-tickets_confirmed").innerHTML = data['rows'][0][0];
}
var query112 = 'SELECT SUM(tickets_sold) FROM dataset0 WHERE ticket_type_id in (643)';
domo.post('/sql/v1/dataset0', query112, {contentType: 'text/plain'}).then(result112);
 function result112(data){
  console && console.log(data);
  document.getElementById("cr-partner-tickets_sold").innerHTML = data['rows'][0][0];
}
var query113 = 'SELECT SUM(tickets_left) FROM dataset0 WHERE ticket_type_id in (643)';
domo.post('/sql/v1/dataset0', query113, {contentType: 'text/plain'}).then(result113);
 function result113(data){
  console && console.log(data);
  document.getElementById("cr-partner-tickets_left").innerHTML = data['rows'][0][0];
}
var query114 = 'SELECT SUM(tickets_confirmed) FROM dataset0 WHERE ticket_type_id in (643)';
domo.post('/sql/v1/dataset0', query114, {contentType: 'text/plain'}).then(result114);
 function result114(data){
  console && console.log(data);
  document.getElementById("cr-partner-tickets_confirmed").innerHTML = data['rows'][0][0];
}

//GCF Celebrity Cruise
//owers
var query3a = 'SELECT SUM(tickets_sold) FROM dataset1 WHERE ticket_type_id in (100)';
domo.post('/sql/v1/dataset1', query3a, {contentType: 'text/plain'}).then(result3a);
 function result3a(data){
  console && console.log(data);
  document.getElementById("table3-item1").innerHTML = data['rows'][0][0];
}
var query3b = 'SELECT SUM(tickets_left) FROM dataset1 WHERE ticket_type_id in (100)';
domo.post('/sql/v1/dataset1', query3b, {contentType: 'text/plain'}).then(result3b);
 function result3b(data){
  console && console.log(data);
  document.getElementById("table3-item2").innerHTML = data['rows'][0][0];
}
var query3c = 'SELECT SUM(tickets_confirmed) FROM dataset1 WHERE ticket_type_id in (100)';
domo.post('/sql/v1/dataset1', query3c, {contentType: 'text/plain'}).then(result3c);
 function result3c(data){
  console && console.log(data);
  document.getElementById("table3-item3").innerHTML = data['rows'][0][0];
}
//concierge
var query3d = 'SELECT SUM(tickets_sold) FROM dataset1 WHERE ticket_type_id in (101)';
domo.post('/sql/v1/dataset1', query3d, {contentType: 'text/plain'}).then(result3d);
 function result3d(data){
  console && console.log(data);
  document.getElementById("table3-item4").innerHTML = data['rows'][0][0];
}
var query3e = 'SELECT SUM(tickets_left) FROM dataset1 WHERE ticket_type_id in (101)';
domo.post('/sql/v1/dataset1', query3e, {contentType: 'text/plain'}).then(result3e);
 function result3e(data){
  console && console.log(data);
  document.getElementById("table3-item5").innerHTML = data['rows'][0][0];
}
var query3f = 'SELECT SUM(tickets_confirmed) FROM dataset1 WHERE ticket_type_id in (101)';
domo.post('/sql/v1/dataset1', query3f, {contentType: 'text/plain'}).then(result3f);
 function result3f(data){
  console && console.log(data);
  document.getElementById("table3-item6").innerHTML = data['rows'][0][0];
}
//ilma
var query3g = 'SELECT SUM(tickets_sold) FROM dataset1 WHERE ticket_type_id in (102)';
domo.post('/sql/v1/dataset1', query3g, {contentType: 'text/plain'}).then(result3g);
 function result3g(data){
  console && console.log(data);
  document.getElementById("table3-item7").innerHTML = data['rows'][0][0];
}
var query3h = 'SELECT SUM(tickets_left) FROM dataset1 WHERE ticket_type_id in (102)';
domo.post('/sql/v1/dataset1', query3h, {contentType: 'text/plain'}).then(result3h);
 function result3h(data){
  console && console.log(data);
  document.getElementById("table3-item8").innerHTML = data['rows'][0][0];
}
var query3i = 'SELECT SUM(tickets_confirmed) FROM dataset1 WHERE ticket_type_id in (102)';
domo.post('/sql/v1/dataset1', query3i, {contentType: 'text/plain'}).then(result3i);
 function result3i(data){
  console && console.log(data);
  document.getElementById("table3-item9").innerHTML = data['rows'][0][0];
}
// view
var query3j = 'SELECT SUM(tickets_sold) FROM dataset1 WHERE ticket_type_id in (103)';
domo.post('/sql/v1/dataset1', query3j, {contentType: 'text/plain'}).then(result3j);
 function result3j(data){
  console && console.log(data);
  document.getElementById("table3-item10").innerHTML = data['rows'][0][0];
}
var query3k = 'SELECT SUM(tickets_left) FROM dataset1 WHERE ticket_type_id in (103)';
domo.post('/sql/v1/dataset1', query3k, {contentType: 'text/plain'}).then(result3k);
 function result3k(data){
  console && console.log(data);
  document.getElementById("table3-item11").innerHTML = data['rows'][0][0];
}
var query3l = 'SELECT SUM(tickets_confirmed) FROM dataset1 WHERE ticket_type_id in (103)';
domo.post('/sql/v1/dataset1', query3l, {contentType: 'text/plain'}).then(result3l);
 function result3l(data){
  console && console.log(data);
  document.getElementById("table3-item12").innerHTML = data['rows'][0][0];
}
//grand
var query3m = 'SELECT SUM(tickets_sold) FROM dataset1 WHERE ticket_type_id in (104)';
domo.post('/sql/v1/dataset1', query3m, {contentType: 'text/plain'}).then(result3m);
 function result3m(data){
  console && console.log(data);
  document.getElementById("table3-item13").innerHTML = data['rows'][0][0];
}
var query3n = 'SELECT SUM(tickets_left) FROM dataset1 WHERE ticket_type_id in (104)';
domo.post('/sql/v1/dataset1', query3n, {contentType: 'text/plain'}).then(result3n);
 function result3n(data){
  console && console.log(data);
  document.getElementById("table3-item14").innerHTML = data['rows'][0][0];
}
var query3o = 'SELECT SUM(tickets_confirmed) FROM dataset1 WHERE ticket_type_id in (104)';
domo.post('/sql/v1/dataset1', query3o, {contentType: 'text/plain'}).then(result3o);
 function result3o(data){
  console && console.log(data);
  document.getElementById("table3-item15").innerHTML = data['rows'][0][0];
}
//signature
var query3p = 'SELECT SUM(tickets_sold) FROM dataset1 WHERE ticket_type_id in (105)';
domo.post('/sql/v1/dataset1', query3p, {contentType: 'text/plain'}).then(result3p);
 function result3p(data){
  console && console.log(data);
  document.getElementById("table3-item16").innerHTML = data['rows'][0][0];
}
var query3q = 'SELECT SUM(tickets_left) FROM dataset1 WHERE ticket_type_id in (105)';
domo.post('/sql/v1/dataset1', query3q, {contentType: 'text/plain'}).then(result3q);
 function result3q(data){
  console && console.log(data);
  document.getElementById("table3-item17").innerHTML = data['rows'][0][0];
}
var query3r = 'SELECT SUM(tickets_confirmed) FROM dataset1 WHERE ticket_type_id in (105)';
domo.post('/sql/v1/dataset1', query3r, {contentType: 'text/plain'}).then(result3r);
 function result3r(data){
  console && console.log(data);
  document.getElementById("table3-item18").innerHTML = data['rows'][0][0];
}
//total
var query3s = 'SELECT SUM(tickets_sold) FROM dataset1 WHERE ticket_type_id in (100,101,102,103,104,105)';
domo.post('/sql/v1/dataset1', query3s, {contentType: 'text/plain'}).then(result3s);
 function result3s(data){
  console && console.log(data);
  document.getElementById("table3-item19").innerHTML = data['rows'][0][0];
}
var query3t = 'SELECT SUM(tickets_left) FROM dataset1 WHERE ticket_type_id in (100,101,102,103,104,105)';
domo.post('/sql/v1/dataset1', query3t, {contentType: 'text/plain'}).then(result3t);
 function result3t(data){
  console && console.log(data);
  document.getElementById("table3-item20").innerHTML = data['rows'][0][0];
}
var query3u = 'SELECT SUM(tickets_confirmed) FROM dataset1 WHERE ticket_type_id in (100,101,102,103,104,105)';
domo.post('/sql/v1/dataset1', query3u, {contentType: 'text/plain'}).then(result3u);
 function result3u(data){
  console && console.log(data);
  document.getElementById("table3-item21").innerHTML = data['rows'][0][0];
}

//timer 1
var countDownDate1 = new Date("April 19, 2024 08:00:00").getTime();

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
var countDownDate2 = new Date("May 4, 2024 08:00:00").getTime();

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

//timer 3
var countDownDate3 = new Date("Dec 6, 2024 08:00:00").getTime();

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
    
  document.getElementById("timer3").innerHTML = days3+' Days Left';
    
  // If the count down is over, write some text 
  if (distance3 < 0) {
    clearInterval(x3);
    document.getElementById("timer3").innerHTML = "Event Live";
  }
}, 1000);