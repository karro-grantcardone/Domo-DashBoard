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
  document.getElementById("ybi-baller-tickets_left").innerHTML = 20 - data['rows'][0][0];
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
var query6 = 'SELECT COUNT(*) FROM dataset2 WHERE ticket_type in (508)';
domo.post('/sql/v1/dataset2', query6, {contentType: 'text/plain'}).then(result6);
 function result6(data){
  console && console.log(data);
  document.getElementById("ctti-bs-super-tickets_sold").innerHTML = data['rows'][0][0];
}
var query7 = 'SELECT COUNT(*) FROM dataset2 WHERE  ticket_type in (319)';
domo.post('/sql/v1/dataset2', query7, {contentType: 'text/plain'}).then(result7);
 function result7(data){
  console && console.log(data);
  document.getElementById("ctti-bs-vip-tickets_sold").innerHTML = data['rows'][0][0];
}
var query8 = 'SELECT COUNT(*) FROM dataset2 WHERE ticket_type in (318)';
domo.post('/sql/v1/dataset2', query8, {contentType: 'text/plain'}).then(result8);
 function result8(data){
  console && console.log(data);
  document.getElementById("ctti-bs-exec-tickets_sold").innerHTML = data['rows'][0][0];
}
var query9 = 'SELECT COUNT(*) FROM dataset2 WHERE ticket_type in (318,319,508)';
domo.post('/sql/v1/dataset2', query9, {contentType: 'text/plain'}).then(result9);
 function result9(data){
  console && console.log(data);
  document.getElementById("ctti-bs-tickets_sold").innerHTML = data['rows'][0][0];
}
//cardone ventures
var query10 = 'SELECT COUNT(*) FROM dataset2 WHERE ticket_type in (102)';
domo.post('/sql/v1/dataset2', query10, {contentType: 'text/plain'}).then(result10);
 function result10(data){
  console && console.log(data);
  document.getElementById("cv-bs-super-tickets_sold").innerHTML = data['rows'][0][0];
}
var query11 = 'SELECT COUNT(*) FROM dataset2 WHERE ticket_type in (101)';
domo.post('/sql/v1/dataset2', query11, {contentType: 'text/plain'}).then(result11);
 function result11(data){
  console && console.log(data);
  document.getElementById("cv-bs-vip-tickets_sold").innerHTML = data['rows'][0][0];
}
var query12 = 'SELECT COUNT(*) FROM dataset2 WHERE ticket_type in (100)';
domo.post('/sql/v1/dataset2', query12, {contentType: 'text/plain'}).then(result12);
 function result12(data){
  console && console.log(data);
  document.getElementById("cv-bs-exec-tickets_sold").innerHTML = data['rows'][0][0];
}
var query13 = 'SELECT COUNT(*) FROM dataset2 WHERE ticket_type in (100,101,102)';
domo.post('/sql/v1/dataset2', query13, {contentType: 'text/plain'}).then(result13);
 function result13(data){
  console && console.log(data);
  document.getElementById("cv-bs-tickets_sold").innerHTML = data['rows'][0][0];
}
var query14 = 'SELECT COUNT(*) FROM dataset2 WHERE ticket_type in (508,102)';
domo.post('/sql/v1/dataset2', query14, {contentType: 'text/plain'}).then(result14);
 function result14(data){
  console && console.log(data);
  document.getElementById("tot-bs-super-tickets_sold").innerHTML = data['rows'][0][0];
}
var query15 = 'SELECT COUNT(*) FROM dataset2 WHERE ticket_type in (101,319)';
domo.post('/sql/v1/dataset2', query15, {contentType: 'text/plain'}).then(result15);
 function result15(data){
  console && console.log(data);
  document.getElementById("tot-bs-vip-tickets_sold").innerHTML = data['rows'][0][0];
}
var query16 = 'SELECT COUNT(*) FROM dataset2 WHERE ticket_type in (100,318)';
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
var query18 = 'SELECT COUNT(*) FROM dataset2 WHERE ticket_type in (508,102)';
domo.post('/sql/v1/dataset2', query18, {contentType: 'text/plain'}).then(result18);
 function result18(data){
  console && console.log(data);
  document.getElementById("bs-super-tickets_left").innerHTML = 40 - data['rows'][0][0];
}
var query19 = 'SELECT COUNT(*) FROM dataset2 WHERE ticket_type in (319,101)';
domo.post('/sql/v1/dataset2', query19, {contentType: 'text/plain'}).then(result19);
 function result19(data){
  console && console.log(data);
  document.getElementById("bs-vip-tickets_left").innerHTML = 168 - data['rows'][0][0];
}
var query20 = 'SELECT COUNT(*) FROM dataset2 WHERE ticket_type in (318,100)';
domo.post('/sql/v1/dataset2', query20, {contentType: 'text/plain'}).then(result20);
 function result20(data){
  console && console.log(data);
  document.getElementById("bs-exec-tickets_left").innerHTML = 245 - data['rows'][0][0];
}
var query21 = 'SELECT COUNT(*) FROM dataset2';
domo.post('/sql/v1/dataset2', query21, {contentType: 'text/plain'}).then(result21);
 function result21(data){
  console && console.log(data);
  document.getElementById("bs-tickets_left").innerHTML = 453 - data['rows'][0][0];
}
var query22 = 'SELECT COUNT(*) FROM dataset2 where ticket_type in (508,102) and confirmed = 1';
domo.post('/sql/v1/dataset2', query22, {contentType: 'text/plain'}).then(result22);
 function result22(data){
  console && console.log(data);
  document.getElementById("bs-super-tickets_confirmed").innerHTML = data['rows'][0][0];
}
var query23 = 'SELECT COUNT(*) FROM dataset2 where ticket_type in (319,101) and confirmed = 1';
domo.post('/sql/v1/dataset2', query23, {contentType: 'text/plain'}).then(result23);
 function result23(data){
  console && console.log(data);
  document.getElementById("bs-vip-tickets_confirmed").innerHTML = data['rows'][0][0];
}
var query24 = 'SELECT COUNT(*) FROM dataset2 where ticket_type in (318,100) and confirmed = 1';
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
var query = 'SELECT COUNT(*) FROM dataset0 WHERE event_id = 501 AND ticket_type_id = 259';
domo.post('/sql/v1/dataset0', query, {contentType: 'text/plain'}).then(result);
 function result(data){
  console && console.log(data);
  document.getElementById("ult-tickets_sold").innerHTML = data['rows'][0][0];
}
