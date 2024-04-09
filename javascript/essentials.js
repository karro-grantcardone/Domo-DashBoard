var domo = window.domo; // For more on domo.js: https://developer.domo.com/docs/dev-studio-guides/domo-js#domo.get
var datasets = window.datasets;

//1-day mastermind
var query1 = 'SELECT SUM(tickets_sold) FROM dataset0 WHERE ticket_type_id in (404)';
domo.post('/sql/v1/dataset0', query1, {contentType: 'text/plain'}).then(result1);
 function result1(data){
  console && console.log(data);
  document.getElementById("1-day-tickets_sold").innerHTML = data['rows'][0][0];
}
var query2 = 'SELECT SUM(tickets_left) FROM dataset0 WHERE ticket_type_id in (404)';
domo.post('/sql/v1/dataset0', query2, {contentType: 'text/plain'}).then(result2);
 function result2(data){
  console && console.log(data);
  document.getElementById("1-day-tickets_left").innerHTML = data['rows'][0][0];
}
var query3 = 'SELECT SUM(tickets_confirmed) FROM dataset0 WHERE ticket_type_id in (404)';
domo.post('/sql/v1/dataset0', query3, {contentType: 'text/plain'}).then(result3);
 function result3(data){
  console && console.log(data);
  document.getElementById("1-day-tickets_confirmed").innerHTML = data['rows'][0][0];
}
var query4 = 'SELECT SUM(tickets_sold) FROM dataset0 WHERE ticket_type_id in (405)';
domo.post('/sql/v1/dataset0', query4, {contentType: 'text/plain'}).then(result4);
 function result4(data){
  console && console.log(data);
  document.getElementById("1-day-virtual-tickets_sold").innerHTML = data['rows'][0][0];
}
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
var query400 = 'SELECT SUM(tickets_sold) FROM dataset0 WHERE ticket_type_id in (492)';
domo.post('/sql/v1/dataset0', query400, {contentType: 'text/plain'}).then(result400);
 function result400(data){
  console && console.log(data);
  document.getElementById("ybi-exec-tickets_sold").innerHTML = data['rows'][0][0];
}
var query500 = 'SELECT SUM(tickets_sold) FROM dataset0 WHERE ticket_type_id in (493,492,758)';
domo.post('/sql/v1/dataset0', query500, {contentType: 'text/plain'}).then(result500);
 function result500(data){
  console && console.log(data);
  document.getElementById("ybi-tot-tickets_sold").innerHTML = data['rows'][0][0];
}
//10x business summit
//ctti
var query6a = 'SELECT SUM(tickets_sold) FROM dataset2 WHERE ticket_type_id in (102)';
domo.post('/sql/v1/dataset2', query6a, {contentType: 'text/plain'}).then(result6a);
 function result6a(data){
  console && console.log(data);
  document.getElementById("ctti-bs-super-tickets_sold").innerHTML = data['rows'][0][0];
}
var query7a = 'SELECT SUM(tickets_sold) FROM dataset2 WHERE  ticket_type_id in (101)';
domo.post('/sql/v1/dataset2', query7a, {contentType: 'text/plain'}).then(result7a);
 function result7a(data){
  console && console.log(data);
  document.getElementById("ctti-bs-vip-tickets_sold").innerHTML = data['rows'][0][0];
}
var query8a = 'SELECT SUM(tickets_sold) FROM dataset2 WHERE ticket_type_id in (100)';
domo.post('/sql/v1/dataset2', query8a, {contentType: 'text/plain'}).then(result8a);
 function result8a(data){
  console && console.log(data);
  document.getElementById("ctti-bs-exec-tickets_sold").innerHTML = data['rows'][0][0];
}
var query9 = 'SELECT SUM(tickets_sold) FROM dataset0 WHERE ticket_type_id in (487,464,463)';
domo.post('/sql/v1/dataset0', query9, {contentType: 'text/plain'}).then(result9);
 function result9(data){
  console && console.log(data);
  document.getElementById("ctti-bs-tickets_sold").innerHTML = data['rows'][0][0];
}
//cardone ventures
var query10 = 'SELECT SUM(tickets_sold) FROM dataset2 WHERE ticket_type_id in (202)';
domo.post('/sql/v1/dataset2', query10, {contentType: 'text/plain'}).then(result10);
 function result10(data){
  console && console.log(data);
  document.getElementById("cv-bs-super-tickets_sold").innerHTML = data['rows'][0][0];
}
var query11 = 'SELECT SUM(tickets_sold) FROM dataset2 WHERE ticket_type_id in (201)';
domo.post('/sql/v1/dataset2', query11, {contentType: 'text/plain'}).then(result11);
 function result11(data){
  console && console.log(data);
  document.getElementById("cv-bs-vip-tickets_sold").innerHTML = data['rows'][0][0];
}
var query12 = 'SELECT SUM(tickets_sold) FROM dataset2 WHERE ticket_type_id in (200)';
domo.post('/sql/v1/dataset2', query12, {contentType: 'text/plain'}).then(result12);
 function result12(data){
  console && console.log(data);
  document.getElementById("cv-bs-exec-tickets_sold").innerHTML = data['rows'][0][0];
}
var query13 = 'SELECT SUM(tickets_sold) FROM dataset2 WHERE ticket_type_id in (200,201,202)';
domo.post('/sql/v1/dataset2', query13, {contentType: 'text/plain'}).then(result13);
 function result13(data){
  console && console.log(data);
  document.getElementById("cv-bs-tickets_sold").innerHTML = data['rows'][0][0];
}
var query14 = 'SELECT SUM(tickets_sold) FROM dataset2 WHERE ticket_type_id in (102,202)';
domo.post('/sql/v1/dataset2', query14, {contentType: 'text/plain'}).then(result14);
 function result14(data){
  console && console.log(data);
  document.getElementById("tot-bs-super-tickets_sold").innerHTML = data['rows'][0][0];
}
var query15 = 'SELECT SUM(tickets_sold) FROM dataset2 WHERE ticket_type_id in (101,201)';
domo.post('/sql/v1/dataset2', query15, {contentType: 'text/plain'}).then(result15);
 function result15(data){
  console && console.log(data);
  document.getElementById("tot-bs-vip-tickets_sold").innerHTML = data['rows'][0][0];
}
var query16 = 'SELECT SUM(tickets_sold) FROM dataset2 WHERE ticket_type_id in (100,200)';
domo.post('/sql/v1/dataset2', query16, {contentType: 'text/plain'}).then(result16);
 function result16(data){
  console && console.log(data);
  document.getElementById("tot-bs-exec-tickets_sold").innerHTML = data['rows'][0][0];
}
var query17 = 'SELECT SUM(tickets_sold) FROM dataset2';
domo.post('/sql/v1/dataset2', query17, {contentType: 'text/plain'}).then(result17);
 function result17(data){
  console && console.log(data);
  document.getElementById("bs-tickets_sold").innerHTML = data['rows'][0][0];
}
var query18 = 'SELECT SUM(tickets_sold) FROM dataset2 WHERE ticket_type_id in (102,202)';
domo.post('/sql/v1/dataset2', query18, {contentType: 'text/plain'}).then(result18);
 function result18(data){
  console && console.log(data);
  document.getElementById("bs-super-tickets_left").innerHTML = 40 - data['rows'][0][0];
}
var query19 = 'SELECT SUM(tickets_sold) FROM dataset2 WHERE ticket_type_id in (101,201)';
domo.post('/sql/v1/dataset2', query19, {contentType: 'text/plain'}).then(result19);
 function result19(data){
  console && console.log(data);
  document.getElementById("bs-vip-tickets_left").innerHTML = 200 - data['rows'][0][0];
}
var query20 = 'SELECT SUM(tickets_sold) FROM dataset2 WHERE ticket_type_id in (100,200)';
domo.post('/sql/v1/dataset2', query20, {contentType: 'text/plain'}).then(result20);
 function result20(data){
  console && console.log(data);
  document.getElementById("bs-exec-tickets_left").innerHTML = 245 - data['rows'][0][0];
}
var query21 = 'SELECT SUM(tickets_sold) FROM dataset2';
domo.post('/sql/v1/dataset2', query21, {contentType: 'text/plain'}).then(result21);
 function result21(data){
  console && console.log(data);
  document.getElementById("bs-tickets_left").innerHTML = 485 - data['rows'][0][0];
}
var query22 = 'SELECT SUM(tickets_sold) FROM dataset2 where ticket_type_id in (102,202) and confirmed = 1';
domo.post('/sql/v1/dataset2', query22, {contentType: 'text/plain'}).then(result22);
 function result22(data){
  console && console.log(data);
  document.getElementById("bs-super-tickets_confirmed").innerHTML = data['rows'][0][0];
}
var query23 = 'SELECT SUM(tickets_sold) FROM dataset2 where ticket_type_id in (101,201) and confirmed = 1';
domo.post('/sql/v1/dataset2', query23, {contentType: 'text/plain'}).then(result23);
 function result23(data){
  console && console.log(data);
  document.getElementById("bs-vip-tickets_confirmed").innerHTML = data['rows'][0][0];
}
var query24 = 'SELECT SUM(tickets_sold) FROM dataset2 where ticket_type_id in (100,200) and confirmed = 1';
domo.post('/sql/v1/dataset2', query24, {contentType: 'text/plain'}).then(result24);
 function result24(data){
  console && console.log(data);
  document.getElementById("bs-exec-tickets_confirmed").innerHTML = data['rows'][0][0];
}
var query25 = 'SELECT SUM(tickets_sold) FROM dataset2 where confirmed = 1';
domo.post('/sql/v1/dataset2', query25, {contentType: 'text/plain'}).then(result25);
 function result25(data){
  console && console.log(data);
  document.getElementById("bs-tickets_confirmed").innerHTML = data['rows'][0][0];
}

//timer 1
var countDownDate1 = new Date("Apr 5, 2024 08:00:00").getTime();

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
    
  document.getElementById("timer_t2").innerHTML = days2+' Days Left';
    
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
