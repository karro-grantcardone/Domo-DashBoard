var domo = window.domo; // For more on domo.js: https://developer.domo.com/docs/dev-studio-guides/domo-js#domo.get
var datasets = window.datasets;

//GC8
//diamond-fr

var query1 = 'SELECT COUNT(*) FROM dataset0 WHERE event_id=548 AND ticket_type_id IN (369)';
domo.post('/sql/v1/dataset0', query1, {contentType: 'text/plain'}).then(result1);
 function result1(data){
  console && console.log(data);
  document.getElementById("gc8-diamond-fr-tickets_sold").innerHTML = data['rows'][0][0];
}
var query2 = 'SELECT COUNT(*) FROM dataset0 WHERE event_id=548 AND ticket_type_id IN (369)';
domo.post('/sql/v1/dataset0', query2, {contentType: 'text/plain'}).then(result2);
 function result2(data){
  console && console.log(data);
  document.getElementById("gc8-diamond-fr-tickets_left").innerHTML = 62 -  data['rows'][0][0];
}
var query3 = 'SELECT COUNT(*) FROM dataset1 WHERE event_id=548 AND ticket_type_id IN (369)';
domo.post('/sql/v1/dataset1', query3, {contentType: 'text/plain'}).then(result3);
 function result3(data){
  console && console.log(data);
  document.getElementById("gc8-diamond-fr-tickets_confirmed").innerHTML = data['rows'][0][0];
}

//diamond
var query4 = 'SELECT COUNT(*) FROM dataset0 WHERE event_id=548 AND ticket_type_id IN (368)';
domo.post('/sql/v1/dataset0', query4, {contentType: 'text/plain'}).then(result4);
 function result4(data){
  console && console.log(data);
  document.getElementById("gc8-diamond-tickets_sold").innerHTML = data['rows'][0][0];
}
var query5 = 'SELECT COUNT(*) FROM dataset0 WHERE event_id=548 AND ticket_type_id IN (368)';
domo.post('/sql/v1/dataset0', query5, {contentType: 'text/plain'}).then(result5);
 function result5(data){
  console && console.log(data);
  document.getElementById("gc8-diamond-tickets_left").innerHTML = 606 -  data['rows'][0][0];
}
var query6 = 'SELECT COUNT(*) FROM dataset1 WHERE event_id=548 AND ticket_type_id IN (368)';
domo.post('/sql/v1/dataset1', query6, {contentType: 'text/plain'}).then(result6);
 function result6(data){
  console && console.log(data);
  document.getElementById("gc8-diamond-tickets_confirmed").innerHTML = data['rows'][0][0];
}
//premier
var query7 = 'SELECT COUNT(*) FROM dataset0 WHERE event_id=548 AND ticket_type_id IN (367)';
domo.post('/sql/v1/dataset0', query7, {contentType: 'text/plain'}).then(result7);
 function result7(data){
  console && console.log(data);
  document.getElementById("gc8-premier-tickets_sold").innerHTML = data['rows'][0][0];
}
var query8 = 'SELECT COUNT(*) FROM dataset0 WHERE event_id=548 AND ticket_type_id IN (367)';
domo.post('/sql/v1/dataset0', query8, {contentType: 'text/plain'}).then(result8);
 function result8(data){
  console && console.log(data);
  document.getElementById("gc8-premier-tickets_left").innerHTML = 606 -  data['rows'][0][0];
}
var query9 = 'SELECT COUNT(*) FROM dataset1 WHERE event_id=548 AND ticket_type_id IN (367)';
domo.post('/sql/v1/dataset1', query9, {contentType: 'text/plain'}).then(result9);
 function result9(data){
  console && console.log(data);
  document.getElementById("gc8-premier-tickets_confirmed").innerHTML = data['rows'][0][0];
}
//vip
var query10 = 'SELECT COUNT(*) FROM dataset0 WHERE event_id=548 AND ticket_type_id IN (366)';
domo.post('/sql/v1/dataset0', query10, {contentType: 'text/plain'}).then(result10);
 function result10(data){
  console && console.log(data);
  document.getElementById("gc8-vip-tickets_sold").innerHTML = data['rows'][0][0];
}
var query11 = 'SELECT COUNT(*) FROM dataset0 WHERE event_id=548 AND ticket_type_id IN (366)';
domo.post('/sql/v1/dataset0', query11, {contentType: 'text/plain'}).then(result11);
 function result11(data){
  console && console.log(data);
  document.getElementById("gc8-vip-tickets_left").innerHTML = 1224 -  data['rows'][0][0];
}
var query12 = 'SELECT COUNT(*) FROM dataset1 WHERE event_id=548 AND ticket_type_id IN (366)';
domo.post('/sql/v1/dataset1', query12, {contentType: 'text/plain'}).then(result12);
 function result12(data){
  console && console.log(data);
  document.getElementById("gc8-vip-tickets_confirmed").innerHTML = data['rows'][0][0];
}
//executive
var query13 = 'SELECT COUNT(*) FROM dataset0 WHERE event_id=548 AND ticket_type_id IN (365)';
domo.post('/sql/v1/dataset0', query13, {contentType: 'text/plain'}).then(result13);
 function result13(data){
  console && console.log(data);
  document.getElementById("gc8-exec-tickets_sold").innerHTML = data['rows'][0][0];
}
var query14 = 'SELECT COUNT(*) FROM dataset0 WHERE event_id=548 AND ticket_type_id IN (365)';
domo.post('/sql/v1/dataset0', query14, {contentType: 'text/plain'}).then(result14);
 function result14(data){
  console && console.log(data);
  document.getElementById("gc8-exec-tickets_left").innerHTML = 1875 -  data['rows'][0][0];
}
var query15 = 'SELECT COUNT(*) FROM dataset1 WHERE event_id=548 AND ticket_type_id IN (365)';
domo.post('/sql/v1/dataset1', query15, {contentType: 'text/plain'}).then(result15);
 function result15(data){
  console && console.log(data);
  document.getElementById("gc8-exec-tickets_confirmed").innerHTML = data['rows'][0][0];
}
//gc8-virtual
var query16 = 'SELECT COUNT(*) FROM dataset0 WHERE event_id=548 AND ticket_type_id IN (384)';
domo.post('/sql/v1/dataset0', query16, {contentType: 'text/plain'}).then(result16);
 function result16(data){
  console && console.log(data);
  document.getElementById("gc8-virtual-tickets_sold").innerHTML = data['rows'][0][0];
}
//gc8 total sold
var query17 = 'SELECT COUNT(*) FROM dataset0 WHERE event_id=548 AND ticket_type_id IN (365,366,367,368,369)';
domo.post('/sql/v1/dataset0', query17, {contentType: 'text/plain'}).then(result17);
 function result17(data){
  console && console.log(data);
  document.getElementById("gc8-total_sold").innerHTML = data['rows'][0][0];
}
//gc8 total left
var query18 = 'SELECT COUNT(*) FROM dataset0 WHERE event_id=548 AND ticket_type_id IN (365,366,367,368,369)';
domo.post('/sql/v1/dataset0', query18, {contentType: 'text/plain'}).then(result18);
 function result18(data){
  console && console.log(data);
  document.getElementById("gc8-total_left").innerHTML =4515 -data['rows'][0][0];
}
//gc8 total confirmed
var query19 = 'SELECT COUNT(*) FROM dataset1 WHERE event_id=548 AND ticket_type_id IN (365,366,367,368,369)';
domo.post('/sql/v1/dataset1', query19, {contentType: 'text/plain'}).then(result19);
 function result19(data){
  console && console.log(data);
  document.getElementById("gc8-total_confirmed").innerHTML = data['rows'][0][0];
}