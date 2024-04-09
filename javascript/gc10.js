var domo = window.domo; // For more on domo.js: https://developer.domo.com/docs/dev-studio-guides/domo-js#domo.get
var datasets = window.datasets;

//GC8
//diamond-fr
var query1 = 'SELECT SUM(tickets_sold) FROM dataset0 WHERE ticket_type_id IN (597)';
domo.post('/sql/v1/dataset0', query1, {contentType: 'text/plain'}).then(result1);
 function result1(data){
  console && console.log(data);
  document.getElementById("gc8-diamond-fr-tickets_sold").innerHTML = data['rows'][0][0];
}
var query2 = 'SELECT SUM(tickets_left) FROM dataset0 WHERE ticket_type_id IN (597)';
domo.post('/sql/v1/dataset0', query2, {contentType: 'text/plain'}).then(result2);
 function result2(data){
  console && console.log(data);
  document.getElementById("gc8-diamond-fr-tickets_left").innerHTML = +data['rows'][0][0];
}
var query3 = 'SELECT SUM(tickets_confirmed) FROM dataset0 WHERE ticket_type_id IN (597)';
domo.post('/sql/v1/dataset0', query3, {contentType: 'text/plain'}).then(result3);
 function result3(data){
  console && console.log(data);
  document.getElementById("gc8-diamond-fr-tickets_confirmed").innerHTML = data['rows'][0][0];
}
var query3a = 'SELECT SUM(seats) FROM dataset0 WHERE ticket_type_id IN (597)';
domo.post('/sql/v1/dataset0', query3a, {contentType: 'text/plain'}).then(result3a);
 function result3a(data){
  console && console.log(data);
  document.getElementById("gc8-diamond-fr-seat").innerHTML = data['rows'][0][0];
}

//diamond
var query4 = 'SELECT SUM(tickets_sold) FROM dataset0 WHERE ticket_type_id IN (596)';
domo.post('/sql/v1/dataset0', query4, {contentType: 'text/plain'}).then(result4);
 function result4(data){
  console && console.log(data);
  document.getElementById("gc8-diamond-tickets_sold").innerHTML = data['rows'][0][0];
}
var query5 = 'SELECT SUM(tickets_left) FROM dataset0 WHERE ticket_type_id IN (596)';
domo.post('/sql/v1/dataset0', query5, {contentType: 'text/plain'}).then(result5);
 function result5(data){
  console && console.log(data);
  document.getElementById("gc8-diamond-tickets_left").innerHTML = data['rows'][0][0];
}
var query6 = 'SELECT SUM(tickets_confirmed) FROM dataset0 WHERE ticket_type_id IN (596)';
domo.post('/sql/v1/dataset0', query6, {contentType: 'text/plain'}).then(result6);
 function result6(data){
  console && console.log(data);
  document.getElementById("gc8-diamond-tickets_confirmed").innerHTML = data['rows'][0][0];
}
var query6a = 'SELECT seats FROM dataset0 WHERE ticket_type_id IN (596)';
domo.post('/sql/v1/dataset0', query6a, {contentType: 'text/plain'}).then(result6a);
 function result6a(data){
  console && console.log(data);
  document.getElementById("gc8-diamond-seat").innerHTML = +data['rows'][0][0];
}
//premier
var query7 = 'SELECT SUM(tickets_sold) FROM dataset0 WHERE ticket_type_id IN (553)';
domo.post('/sql/v1/dataset0', query7, {contentType: 'text/plain'}).then(result7);
 function result7(data){
  console && console.log(data);
  document.getElementById("gc8-premier-tickets_sold").innerHTML = data['rows'][0][0];
}
var query8 = 'SELECT SUM(tickets_left) FROM dataset0 WHERE ticket_type_id IN (553)';
domo.post('/sql/v1/dataset0', query8, {contentType: 'text/plain'}).then(result8);
 function result8(data){
  console && console.log(data);
  document.getElementById("gc8-premier-tickets_left").innerHTML = data['rows'][0][0];
}
var query9 = 'SELECT SUM(tickets_confirmed) FROM dataset0 WHERE ticket_type_id IN (553)';
domo.post('/sql/v1/dataset0', query9, {contentType: 'text/plain'}).then(result9);
 function result9(data){
  console && console.log(data);
  document.getElementById("gc8-premier-tickets_confirmed").innerHTML = data['rows'][0][0];
}
var query9a = 'SELECT seats FROM dataset0 WHERE ticket_type_id IN (553)';
domo.post('/sql/v1/dataset0', query9a, {contentType: 'text/plain'}).then(result9a);
 function result9a(data){
  console && console.log(data);
  document.getElementById("gc8-premier-seat").innerHTML = data['rows'][0][0];
}
//vip
var query10 = 'SELECT SUM(tickets_sold) FROM dataset0 WHERE ticket_type_id IN (595)';
domo.post('/sql/v1/dataset0', query10, {contentType: 'text/plain'}).then(result10);
 function result10(data){
  console && console.log(data);
  document.getElementById("gc8-vip-tickets_sold").innerHTML = +data['rows'][0][0];
}
var query11 = 'SELECT SUM(tickets_left) FROM dataset0 WHERE ticket_type_id IN (595)';
domo.post('/sql/v1/dataset0', query11, {contentType: 'text/plain'}).then(result11);
 function result11(data){
  console && console.log(data);
  document.getElementById("gc8-vip-tickets_left").innerHTML = +data['rows'][0][0];
}
var query12 = 'SELECT SUM(tickets_confirmed) FROM dataset0 WHERE ticket_type_id IN (595)';
domo.post('/sql/v1/dataset0', query12, {contentType: 'text/plain'}).then(result12);
 function result12(data){
  console && console.log(data);
  document.getElementById("gc8-vip-tickets_confirmed").innerHTML = data['rows'][0][0];
}
var query12a = 'SELECT seats FROM dataset0 WHERE ticket_type_id IN (595)';
domo.post('/sql/v1/dataset0', query12a, {contentType: 'text/plain'}).then(result12a);
 function result12a(data){
  console && console.log(data);
  document.getElementById("gc8-vip-seat").innerHTML = data['rows'][0][0];
}
//executive
var query13 = 'SELECT SUM(tickets_sold) FROM dataset0 WHERE ticket_type_id IN (594)';
domo.post('/sql/v1/dataset0', query13, {contentType: 'text/plain'}).then(result13);
 function result13(data){
  console && console.log(data);
  document.getElementById("gc8-exec-tickets_sold").innerHTML = data['rows'][0][0];
}
var query14 = 'SELECT SUM(tickets_left) FROM dataset0 WHERE ticket_type_id IN (594)';
domo.post('/sql/v1/dataset0', query14, {contentType: 'text/plain'}).then(result14);
 function result14(data){
  console && console.log(data);
  document.getElementById("gc8-exec-tickets_left").innerHTML = data['rows'][0][0];
}
var query15 = 'SELECT SUM(tickets_confirmed) FROM dataset0 WHERE ticket_type_id IN (594)';
domo.post('/sql/v1/dataset0', query15, {contentType: 'text/plain'}).then(result15);
 function result15(data){
  console && console.log(data);
  document.getElementById("gc8-exec-tickets_confirmed").innerHTML = data['rows'][0][0];
}
//gc8-virtual
var query16 = 'SELECT SUM(tickets_sold) FROM dataset0 WHERE ticket_type_id IN (984)';
domo.post('/sql/v1/dataset0', query16, {contentType: 'text/plain'}).then(result16);
 function result16(data){
  console && console.log(data);
  document.getElementById("gc8-virtual-tickets_sold").innerHTML = +data['rows'][0][0];
}
//gc8-vip-virtual
var query16a = 'SELECT SUM(tickets_sold) FROM dataset0 WHERE ticket_type_id IN (985)';
domo.post('/sql/v1/dataset0', query16a, {contentType: 'text/plain'}).then(result16a);
 function result16a(data){
  console && console.log(data);
  document.getElementById("gc8-vip-virtual-tickets_sold").innerHTML = data['rows'][0][0];
}
//gc8 total sold
var query17 = 'SELECT SUM(tickets_sold) FROM dataset0 WHERE ticket_type_id IN (597,596,553,595,594)';
domo.post('/sql/v1/dataset0', query17, {contentType: 'text/plain'}).then(result17);
 function result17(data){
  console && console.log(data);
  document.getElementById("gc8-total_sold").innerHTML = +data['rows'][0][0] - 136;
}
//gc8 total left
var query18 = 'SELECT SUM(tickets_left) FROM dataset0 WHERE ticket_type_id IN (597,596,553,595,594)';
domo.post('/sql/v1/dataset0', query18, {contentType: 'text/plain'}).then(result18);
 function result18(data){
  console && console.log(data);
  document.getElementById("gc8-total_left").innerHTML = +data['rows'][0][0];
}
//gc8 total confirmed
var query19 = 'SELECT SUM(tickets_confirmed) FROM dataset0 WHERE ticket_type_id IN (597,596,553,595,594)';
domo.post('/sql/v1/dataset0', query19, {contentType: 'text/plain'}).then(result19);
 function result19(data){
  console && console.log(data);
  document.getElementById("gc8-total_confirmed").innerHTML = data['rows'][0][0];
}
//gc total seat selection
var query19gc = 'SELECT SUM(seats) FROM dataset0 WHERE ticket_type_id IN (597,596,553,595,594)';
domo.post('/sql/v1/dataset0', query19gc, {contentType: 'text/plain'}).then(result19gc);
 function result19gc(data){
  console && console.log(data);
  document.getElementById("gc8-total_seat_selection").innerHTML = data['rows'][0][0];
 }
//ticket_type_name
var query20 = 'SELECT ticket_type_name FROM dataset0 WHERE ticket_type_id IN (369)';
domo.post('/sql/v1/dataset0', query20, {contentType: 'text/plain'}).then(result20);
 function result20(data){
  console && console.log(data);
  document.getElementById("dia-fr-capacity").innerHTML = data['rows'][0][0];
}
var query21 = 'SELECT ticket_type_name FROM dataset0 WHERE ticket_type_id IN (368)';
domo.post('/sql/v1/dataset0', query21, {contentType: 'text/plain'}).then(result21);
 function result21(data){
  console && console.log(data);
  document.getElementById("dia-capacity").innerHTML = 'DIAMOND | 606'//data['rows'][0][0];;
}
var query22 = 'SELECT ticket_type_name FROM dataset0 WHERE ticket_type_id IN (367)';
domo.post('/sql/v1/dataset0', query22, {contentType: 'text/plain'}).then(result22);
 function result22(data){
  console && console.log(data);
  document.getElementById("pre-capacity").innerHTML = 'PREMIER | 746'//data['rows'][0][0];
}
var query23 = 'SELECT ticket_type_name FROM dataset0 WHERE ticket_type_id IN (366)';
domo.post('/sql/v1/dataset0', query23, {contentType: 'text/plain'}).then(result23);
 function result23(data){
  console && console.log(data);
  document.getElementById("vip-capacity").innerHTML = 'VIP | 1086';//data['rows'][0][0];
}
var query24 = 'SELECT ticket_type_name FROM dataset0 WHERE ticket_type_id IN (365)';
domo.post('/sql/v1/dataset0', query24, {contentType: 'text/plain'}).then(result24);
 function result24(data){
  console && console.log(data);
  document.getElementById("exec-capacity").innerHTML = 'EXECUTIVE | 2010' //data['rows'][0][0];
}
//timer 1
var countDownDate1 = new Date("Mar 19, 2025 08:00:00").getTime();

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
    
  document.getElementById("timer1").innerHTML =days+" Days " ;
    
  // If the count down is over, write some text 
  if (distance1 < 0) {
    clearInterval(x1);
    document.getElementById("timer1").innerHTML = "Event Live";
  }
}, 1000);