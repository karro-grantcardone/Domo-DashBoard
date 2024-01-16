var domo = window.domo; // For more on domo.js: https://developer.domo.com/docs/dev-studio-guides/domo-js#domo.get
var datasets = window.datasets;

//dynamic relationship
//vip
var query1 = 'SELECT COUNT(*) FROM dataset0 WHERE event_id = 521 AND ticket_type_id in (295)';
domo.post('/sql/v1/dataset0', query1, {contentType: 'text/plain'}).then(result1);
 function result1(data){
  console && console.log(data);
  document.getElementById("dynamic-vip-tickets_sold").innerHTML = data['rows'][0][0];
}
var query2 = 'SELECT COUNT(*) FROM dataset0 WHERE event_id = 521 AND ticket_type_id in (295)';
domo.post('/sql/v1/dataset0', query2, {contentType: 'text/plain'}).then(result2);
 function result2(data){
  console && console.log(data);
  document.getElementById("dynamic-vip-tickets_left").innerHTML = 20 - data['rows'][0][0];
}
var query3 = 'SELECT COUNT(*) FROM dataset0 WHERE event_id = 521 AND ticket_type_id in (295)';
domo.post('/sql/v1/dataset1', query3, {contentType: 'text/plain'}).then(result3);
 function result3(data){
  console && console.log(data);
  document.getElementById("dynamic-vip-tickets_confirmed").innerHTML = data['rows'][0][0];
}
//executive
var query4 = 'SELECT COUNT(*) FROM dataset0 WHERE event_id = 521 AND ticket_type_id in (294)';
domo.post('/sql/v1/dataset0', query4, {contentType: 'text/plain'}).then(result4);
 function result4(data){
  console && console.log(data);
  document.getElementById("dynamic-exec-tickets_sold").innerHTML = data['rows'][0][0];
}
var query5 = 'SELECT COUNT(*) FROM dataset0 WHERE event_id = 521 AND ticket_type_id in (294)';
domo.post('/sql/v1/dataset0', query5, {contentType: 'text/plain'}).then(result5);
 function result5(data){
  console && console.log(data);
  document.getElementById("dynamic-exec-tickets_left").innerHTML = 100 - data['rows'][0][0];
}
var query6 = 'SELECT COUNT(*) FROM dataset1 WHERE ticket_type_id in (294)';
domo.post('/sql/v1/dataset1', query6, {contentType: 'text/plain'}).then(result6);
 function result6(data){
  console && console.log(data);
  document.getElementById("dynamic-exec-tickets_confirmed").innerHTML = data['rows'][0][0];
}
//total
var query7 = 'SELECT COUNT(*) FROM dataset0 WHERE event_id = 521 AND ticket_type_id in (294,295)';
domo.post('/sql/v1/dataset0', query7, {contentType: 'text/plain'}).then(result7);
 function result7(data){
  console && console.log(data);
  document.getElementById("dynamic-tot-tickets_sold").innerHTML = data['rows'][0][0];
}
var query8 = 'SELECT COUNT(*) FROM dataset0 WHERE event_id = 521 AND ticket_type_id in (294,295)';
domo.post('/sql/v1/dataset0', query8, {contentType: 'text/plain'}).then(result8);
 function result8(data){
  console && console.log(data);
  document.getElementById("dynamic-tot-tickets_left").innerHTML = 120 - data['rows'][0][0];
}
var query9 = 'SELECT COUNT(*) FROM dataset0 WHERE event_id = 521 AND ticket_type_id in (294,295)';
domo.post('/sql/v1/dataset1', query9, {contentType: 'text/plain'}).then(result9);
 function result9(data){
  console && console.log(data);
  document.getElementById("dynamic-tot-tickets_confirmed").innerHTML = data['rows'][0][0];
}
//virtual
var query10 = 'SELECT COUNT(*) FROM dataset0 WHERE event_id = 521 AND ticket_type_id in (533)';
domo.post('/sql/v1/dataset0', query10, {contentType: 'text/plain'}).then(result10);
 function result10(data){
  console && console.log(data);
  document.getElementById("dynamic-virtual-tickets_sold").innerHTML = data['rows'][0][0];
}
//master your money
//vip
var query11 = 'SELECT COUNT(*) FROM dataset0 WHERE event_id = 506 AND ticket_type_id in (272)';
domo.post('/sql/v1/dataset0', query11, {contentType: 'text/plain'}).then(result11);
 function result11(data){
  console && console.log(data);
  document.getElementById("mym-vip-tickets_sold").innerHTML = data['rows'][0][0];
}
var query12 = 'SELECT COUNT(*) FROM dataset0 WHERE event_id = 506 AND ticket_type_id in (272)';
domo.post('/sql/v1/dataset0', query12, {contentType: 'text/plain'}).then(result12);
 function result12(data){
  console && console.log(data);
  document.getElementById("mym-vip-tickets_left").innerHTML = 20 - data['rows'][0][0];
}
var query13 = 'SELECT COUNT(*) FROM dataset0 WHERE event_id = 506 AND ticket_type_id in (272)';
domo.post('/sql/v1/dataset1', query13, {contentType: 'text/plain'}).then(result13);
 function result13(data){
  console && console.log(data);
  document.getElementById("mym-vip-tickets_confirmed").innerHTML = data['rows'][0][0];
}
//executive
var query14 = 'SELECT COUNT(*) FROM dataset0 WHERE event_id = 506 AND ticket_type_id in (271)';
domo.post('/sql/v1/dataset0', query14, {contentType: 'text/plain'}).then(result14);
 function result14(data){
  console && console.log(data);
  document.getElementById("mym-exec-tickets_sold").innerHTML = data['rows'][0][0];
}
var query15 = 'SELECT COUNT(*) FROM dataset0 WHERE event_id = 506 AND ticket_type_id in (271)';
domo.post('/sql/v1/dataset0', query15, {contentType: 'text/plain'}).then(result15);
 function result15(data){
  console && console.log(data);
  document.getElementById("mym-exec-tickets_left").innerHTML = 100 - data['rows'][0][0];
}
var query16 = 'SELECT COUNT(*) FROM dataset1 WHERE event_id = 506 AND ticket_type_id in (271)';
domo.post('/sql/v1/dataset1', query16, {contentType: 'text/plain'}).then(result16);
 function result16(data){
  console && console.log(data);
  document.getElementById("mym-exec-tickets_confirmed").innerHTML = data['rows'][0][0];
}
//total
var query17 = 'SELECT COUNT(*) FROM dataset0 WHERE event_id = 506 AND ticket_type_id in (271,272)';
domo.post('/sql/v1/dataset0', query17, {contentType: 'text/plain'}).then(result17);
 function result17(data){
  console && console.log(data);
  document.getElementById("mym-tot-tickets_sold").innerHTML = data['rows'][0][0];
}
var query18 = 'SELECT COUNT(*) FROM dataset0 WHERE event_id = 506 AND ticket_type_id in (271,272)';
domo.post('/sql/v1/dataset0', query18, {contentType: 'text/plain'}).then(result18);
 function result18(data){
  console && console.log(data);
  document.getElementById("mym-tot-tickets_left").innerHTML = 120 - data['rows'][0][0];
}
var query19 = 'SELECT COUNT(*) FROM dataset0 WHERE event_id = 506 AND ticket_type_id in (271,272)';
domo.post('/sql/v1/dataset1', query19, {contentType: 'text/plain'}).then(result19);
 function result19(data){
  console && console.log(data);
  document.getElementById("mym-tot-tickets_confirmed").innerHTML = data['rows'][0][0];
}
//virtual
var query20 = 'SELECT COUNT(*) FROM dataset0 WHERE event_id = 506 AND ticket_type_id in (534)';
domo.post('/sql/v1/dataset0', query20, {contentType: 'text/plain'}).then(result20);
 function result20(data){
  console && console.log(data);
  document.getElementById("mym-virtual-tickets_sold").innerHTML = data['rows'][0][0];
}
//couples retreat
//purchaser
var query111 = 'SELECT COUNT(*) FROM dataset0 WHERE ticket_type_id in (642)';
domo.post('/sql/v1/dataset0', query111, {contentType: 'text/plain'}).then(result111);
 function result111(data){
  console && console.log(data);
  document.getElementById("purchaser-tickets_sold").innerHTML = data['rows'][0][0];
}
var query121 = 'SELECT COUNT(*) FROM dataset0 WHERE ticket_type_id in (642)';
domo.post('/sql/v1/dataset0', query121, {contentType: 'text/plain'}).then(result121);
 function result121(data){
  console && console.log(data);
  document.getElementById("purchaser-tickets_left").innerHTML = 40 - data['rows'][0][0];
}
var query131 = 'SELECT COUNT(*) FROM dataset1 WHERE ticket_type_id in (642)';
domo.post('/sql/v1/dataset1', query131, {contentType: 'text/plain'}).then(result131);
 function result13a(data){
  console && console.log(data);
  document.getElementById("purchaser-tickets_confirmed").innerHTML = data['rows'][0][0];
}

var query0 = 'SELECT COUNT(*) FROM dataset0 WHERE ticket_type_id in (643)';
domo.post('/sql/v1/dataset0', query0, {contentType: 'text/plain'}).then(result0);
 function result0(data){
  console && console.log(data);
  document.getElementById("partner2-tickets_sold").innerHTML = data['rows'][0][0];
}