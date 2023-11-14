var domo = window.domo; // For more on domo.js: https://developer.domo.com/docs/dev-studio-guides/domo-js#domo.get
var datasets = window.datasets;

//REAL ESTATE INTERACTIVE DEC 2023
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
var query23 = 'SELECT COUNT(*) FROM dataset0 WHERE ticket_type_id in (654)';
domo.post('/sql/v1/dataset0', query23, {contentType: 'text/plain'}).then(result23);
 
function result23(data){
  console && console.log(data);
  document.getElementById("rei-vip-tickets_sold").innerHTML = data['rows'][0][0];
}
//rei-executive
var query24 = 'SELECT COUNT(*) FROM dataset0 WHERE ticket_type_id in (653)';
domo.post('/sql/v1/dataset0', query24, {contentType: 'text/plain'}).then(result24);
 
function result24(data){
  console && console.log(data);
  document.getElementById("rei-exec-tickets_sold").innerHTML = data['rows'][0][0];
}
//rei-totals
var query25 = 'SELECT COUNT(*) FROM dataset0 WHERE event_id = 665';
domo.post('/sql/v1/dataset0', query25, {contentType: 'text/plain'}).then(result25);
 
function result25(data){
  console && console.log(data);
  document.getElementById("rei-baller-tickets_sold").innerHTML = data['rows'][0][0];
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
var query4 = 'SELECT COUNT(*) FROM dataset0 WHERE event_id = 501 AND ticket_type_id = 631';
domo.post('/sql/v1/dataset0', query4, {contentType: 'text/plain'}).then(result4);
 
function result4(data){
  console && console.log(data);
  document.getElementById("super-tickets_sold").innerHTML = data['rows'][0][0];
}
var query5 = 'SELECT COUNT(*) FROM dataset0 WHERE ticket_type_id = 631';
domo.post('/sql/v1/dataset0', query5, {contentType: 'text/plain'}).then(result5);
function result5(data){
  console && console.log(data);
  document.getElementById("super-tickets_left").innerHTML = 48 - data['rows'][0][0];
}
var query6 = 'SELECT COUNT(*) FROM dataset1 WHERE ticket_type_id = 631';
domo.post('/sql/v1/dataset1', query6, {contentType: 'text/plain'}).then(result6);
function result6(data){
  console && console.log(data);
  document.getElementById("super-tickets_confirmed").innerHTML = data['rows'][0][0];
}
//vip
var query7 = 'SELECT COUNT(*) FROM dataset0 WHERE event_id = 501 AND ticket_type_id = 258';
domo.post('/sql/v1/dataset0', query7, {contentType: 'text/plain'}).then(result7);
 
function result7(data){
  console && console.log(data);
  document.getElementById("vip-tickets_sold").innerHTML = data['rows'][0][0];
}
var query8 = 'SELECT COUNT(*) FROM dataset0 WHERE ticket_type_id = 258';
domo.post('/sql/v1/dataset0', query8, {contentType: 'text/plain'}).then(result8);
function result8(data){
  console && console.log(data);
  document.getElementById("vip-tickets_left").innerHTML = 0 // - data['rows'][0][0];
}
var query9 = 'SELECT COUNT(*) FROM dataset1 WHERE ticket_type_id = 258';
domo.post('/sql/v1/dataset1', query9, {contentType: 'text/plain'}).then(result9);
function result9(data){
  console && console.log(data);
  document.getElementById("vip-tickets_confirmed").innerHTML = data['rows'][0][0];
}
//total vips
var query10 = 'SELECT COUNT(*) FROM dataset0 WHERE ticket_type_id in (631,259,258)';
domo.post('/sql/v1/dataset0', query10, {contentType: 'text/plain'}).then(result10);
 
function result10(data){
  console && console.log(data);
  document.getElementById("tot_vip-tickets_sold").innerHTML = data['rows'][0][0];
}
var query11 = 'SELECT COUNT(*) FROM dataset0 WHERE ticket_type_id in (631,259,258)';
domo.post('/sql/v1/dataset0', query11, {contentType: 'text/plain'}).then(result11);
function result11(data){
  console && console.log(data);
  document.getElementById("tot_vip-tickets_left").innerHTML = 582 - data['rows'][0][0];
}
var query12 = 'SELECT COUNT(*) FROM dataset0 WHERE ticket_type_id in (631,259,258)';
domo.post('/sql/v1/dataset1', query12, {contentType: 'text/plain'}).then(result12);
function result12(data){
  console && console.log(data);
  document.getElementById("tot_vip-tickets_confirmed").innerHTML = data['rows'][0][0];
}
//executive
var query13 = 'SELECT COUNT(*) FROM dataset0 WHERE ticket_type_id in (257)';
domo.post('/sql/v1/dataset0', query13, {contentType: 'text/plain'}).then(result13);
 
function result13(data){
  console && console.log(data);
  document.getElementById("exec-tickets_sold").innerHTML = data['rows'][0][0];
}
var query14 = 'SELECT COUNT(*) FROM dataset0 WHERE ticket_type_id in (257)';
domo.post('/sql/v1/dataset0', query14, {contentType: 'text/plain'}).then(result14);
function result14(data){
  console && console.log(data);
  document.getElementById("exec-tickets_left").innerHTML = 1302 - data['rows'][0][0];
}
var query15 = 'SELECT COUNT(*) FROM dataset0 WHERE ticket_type_id in (257)';
domo.post('/sql/v1/dataset1', query15, {contentType: 'text/plain'}).then(result15);
function result15(data){
  console && console.log(data);
  document.getElementById("exec-tickets_confirmed").innerHTML = data['rows'][0][0];
}
//total tickets
var query16 = 'SELECT COUNT(*) FROM dataset0 WHERE ticket_type_id in (257,258,259,631)';
domo.post('/sql/v1/dataset0', query16, {contentType: 'text/plain'}).then(result16);
 
function result16(data){
  console && console.log(data);
  document.getElementById("tot-tickets_sold").innerHTML = data['rows'][0][0];
}
var query17 = 'SELECT COUNT(*) FROM dataset0  WHERE ticket_type_id in (257,258,259,631)';
domo.post('/sql/v1/dataset0', query17, {contentType: 'text/plain'}).then(result17);
function result17(data){
  console && console.log(data);
  document.getElementById("tot-tickets_left").innerHTML = 1826 - data['rows'][0][0];
}
var query18 = 'SELECT COUNT(*) FROM dataset0 WHERE ticket_type_id in (257,258,259,631)';
domo.post('/sql/v1/dataset1', query18, {contentType: 'text/plain'}).then(result18);
function result18(data){
  console && console.log(data);
  document.getElementById("tot-tickets_confirmed").innerHTML = data['rows'][0][0];
}
//virtual
var query19 = 'SELECT COUNT(*) FROM dataset0 WHERE ticket_type_id in (260)';
domo.post('/sql/v1/dataset0', query19, {contentType: 'text/plain'}).then(result19);
 
function result19(data){
  console && console.log(data);
  document.getElementById("virtual-tickets_sold").innerHTML = data['rows'][0][0];
}