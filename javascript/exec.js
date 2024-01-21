var domo = window.domo; // For more on domo.js: https://developer.domo.com/docs/dev-studio-guides/domo-js#domo.get
var datasets = window.datasets;

//TABLE 1
//REAL ESTATE INTERACTIVE Jan 2023
//baller
var query0 = 'SELECT COUNT(*) FROM dataset0 WHERE event_id = 665 AND ticket_type_id = 655';
domo.post('/sql/v1/dataset0', query0, {contentType: 'text/plain'}).then(result0);
 function result0(data){
  console && console.log(data);
  document.getElementById("rei-baller-tickets_sold").innerHTML = data['rows'][0][0];
}
var query1 = 'SELECT COUNT(*) FROM dataset1 WHERE event_id = 665 AND ticket_type_id = 655';
domo.post('/sql/v1/dataset1', query1, {contentType: 'text/plain'}).then(result1);
 function result1(data){
  console && console.log(data);
  document.getElementById("rei-baller-tickets_confirmed").innerHTML = data['rows'][0][0];
}
//vip
var query2 = 'SELECT COUNT(*) FROM dataset0 WHERE ticket_type_id in (837)';
domo.post('/sql/v1/dataset0', query2, {contentType: 'text/plain'}).then(result2);
 function result2(data){
  console && console.log(data);
  document.getElementById("rei-vip-tickets_sold").innerHTML = data['rows'][0][0];
}
//executive
var query3 = 'SELECT COUNT(*) FROM dataset0 WHERE ticket_type_id in (831)';
domo.post('/sql/v1/dataset0', query3, {contentType: 'text/plain'}).then(result3);
 function result3(data){
  console && console.log(data);
  document.getElementById("rei-exec-tickets_sold").innerHTML = data['rows'][0][0];
}
//total
var query4 = 'SELECT COUNT(*) FROM dataset0 WHERE ticket_type_id in (837,831)';
domo.post('/sql/v1/dataset0', query4, {contentType: 'text/plain'}).then(result4);
 function result4(data){
  console && console.log(data);
  document.getElementById("rei-tot-tickets_sold").innerHTML = data['rows'][0][0];
}
//TABLE 2
//GROWTH CONFERENCE
//diamon-fr
var query5 = 'SELECT COUNT(*) FROM dataset0 WHERE ticket_type_id in (369)';
domo.post('/sql/v1/dataset0', query5, {contentType: 'text/plain'}).then(result5);
 function result5(data){
  console && console.log(data);
  document.getElementById("gc-diamond-fr-tickets_sold").innerHTML = data['rows'][0][0];
}
var query51 = 'SELECT COUNT(*) FROM dataset0 WHERE ticket_type_id in (369)';
domo.post('/sql/v1/dataset0', query51, {contentType: 'text/plain'}).then(result51);
 function result51(data){
  console && console.log(data);
  document.getElementById("gc-diamond-fr-tickets_left").innerHTML = 62 - data['rows'][0][0];
}
var query6 = 'SELECT COUNT(*) FROM dataset1 WHERE ticket_type_id in (369)';
domo.post('/sql/v1/dataset1', query6, {contentType: 'text/plain'}).then(result6);
 function result6(data){
  console && console.log(data);
  document.getElementById("gc-diamond-fr-tickets_confirmed").innerHTML = data['rows'][0][0];
}
//diamond
var query7 = 'SELECT COUNT(*) FROM dataset0 WHERE event_id = 548 AND ticket_type_id in (368)';
domo.post('/sql/v1/dataset0', query7, {contentType: 'text/plain'}).then(result7);
 function result7(data){
  console && console.log(data);
  document.getElementById("gc-diamond-tickets_sold").innerHTML = data['rows'][0][0];
}
var query7a = 'SELECT COUNT(*) FROM dataset0 WHERE ticket_type_id in (368)';
domo.post('/sql/v1/dataset0', query7a, {contentType: 'text/plain'}).then(result7a);
 function result7a(data){
  console && console.log(data);
  document.getElementById("gc-diamond-tickets_left").innerHTML =606 - data['rows'][0][0];
}
var query8 = 'SELECT COUNT(*) FROM dataset1 WHERE event_id = 548 AND ticket_type_id in (368)';
domo.post('/sql/v1/dataset1', query8, {contentType: 'text/plain'}).then(result8);
 function result8(data){
  console && console.log(data);
  document.getElementById("gc-diamond-tickets_confirmed").innerHTML = data['rows'][0][0];
}
//premier
var query9 = 'SELECT COUNT(*) FROM dataset0 WHERE event_id = 548 AND ticket_type_id in (367)';
domo.post('/sql/v1/dataset0', query9, {contentType: 'text/plain'}).then(result9);
 function result9(data){
  console && console.log(data);
  document.getElementById("gc-premier-tickets_sold").innerHTML = data['rows'][0][0];
}
var query9a = 'SELECT COUNT(*) FROM dataset0 WHERE ticket_type_id in (367)';
domo.post('/sql/v1/dataset0', query9a, {contentType: 'text/plain'}).then(result9a);
 function result9a(data){
  console && console.log(data);
  document.getElementById("gc-premier-tickets_left").innerHTML =746 - data['rows'][0][0];
}
var query10 = 'SELECT COUNT(*) FROM dataset1 WHERE event_id = 548 AND ticket_type_id in (367)';
domo.post('/sql/v1/dataset1', query10, {contentType: 'text/plain'}).then(result10);
 function result10(data){
  console && console.log(data);
  document.getElementById("gc-premier-tickets_confirmed").innerHTML = data['rows'][0][0];
}
//vip
var query11 = 'SELECT COUNT(*) FROM dataset0 WHERE event_id = 548 AND ticket_type_id in (366)';
domo.post('/sql/v1/dataset0', query11, {contentType: 'text/plain'}).then(result11);
 function result11(data){
  console && console.log(data);
  document.getElementById("gc-vip-tickets_sold").innerHTML = data['rows'][0][0];
}
var query11a = 'SELECT COUNT(*) FROM dataset0 WHERE ticket_type_id in (366)';
domo.post('/sql/v1/dataset0', query11a, {contentType: 'text/plain'}).then(result11a);
 function result11a(data){
  console && console.log(data);
  document.getElementById("gc-vip-tickets_left").innerHTML =1222 - data['rows'][0][0];
}
var query12 = 'SELECT COUNT(*) FROM dataset1 WHERE event_id = 548 AND ticket_type_id in (366)';
domo.post('/sql/v1/dataset1', query12, {contentType: 'text/plain'}).then(result12);
 function result12(data){
  console && console.log(data);
  document.getElementById("gc-vip-tickets_confirmed").innerHTML = data['rows'][0][0];
}
//executive
var query13 = 'SELECT COUNT(*) FROM dataset0 WHERE event_id = 548 AND ticket_type_id in (365)';
domo.post('/sql/v1/dataset0', query13, {contentType: 'text/plain'}).then(result13);
 function result13(data){
  console && console.log(data);
  document.getElementById("gc-exec-tickets_sold").innerHTML = data['rows'][0][0];
}
var query13a = 'SELECT COUNT(*) FROM dataset0 WHERE ticket_type_id in (365)';
domo.post('/sql/v1/dataset0', query13a, {contentType: 'text/plain'}).then(result13a);
 function result13a(data){
  console && console.log(data);
  document.getElementById("gc-exec-tickets_left").innerHTML =1874 - data['rows'][0][0];
}
var query14 = 'SELECT COUNT(*) FROM dataset1 WHERE event_id = 548 AND ticket_type_id in (365)';
domo.post('/sql/v1/dataset1', query14, {contentType: 'text/plain'}).then(result14);
 function result14(data){
  console && console.log(data);
  document.getElementById("gc-exec-tickets_confirmed").innerHTML = data['rows'][0][0];
}
//virtual
var query15 = 'SELECT COUNT(*) FROM dataset0 WHERE event_id = 548 AND ticket_type_id in (384)';
domo.post('/sql/v1/dataset0', query15, {contentType: 'text/plain'}).then(result15);
 function result15(data){
  console && console.log(data);
  document.getElementById("gc-virtual-tickets_sold").innerHTML = data['rows'][0][0];
}
//total
var query16 = 'SELECT COUNT(*) FROM dataset0 WHERE event_id = 548 AND ticket_type_id in (365,366,367,368,369)';
domo.post('/sql/v1/dataset0', query16, {contentType: 'text/plain'}).then(result16);
 function result16(data){
  console && console.log(data);
  document.getElementById("gc-tot-tickets_sold").innerHTML = data['rows'][0][0];
}
var query16a = 'SELECT COUNT(*) FROM dataset0 WHERE ticket_type_id in (365,366,367,368,369)';
domo.post('/sql/v1/dataset0', query16a, {contentType: 'text/plain'}).then(result16a);
 function result16a(data){
  console && console.log(data);
  document.getElementById("gc-tot-tickets_left").innerHTML =4511 - data['rows'][0][0];
}
var query17 = 'SELECT COUNT(*) FROM dataset1 WHERE event_id = 548 AND ticket_type_id in (365,366,367,368,369)';
domo.post('/sql/v1/dataset1', query17, {contentType: 'text/plain'}).then(result17);
 function result17(data){
  console && console.log(data);
  document.getElementById("gc-tot-tickets_confirmed").innerHTML = data['rows'][0][0];
}
//TABLE 3
//MARKETING ESSENTIALS
//in-person
var query18 = 'SELECT COUNT(*) FROM dataset0 WHERE ticket_type_id in (428)';
domo.post('/sql/v1/dataset0', query18, {contentType: 'text/plain'}).then(result18);
 function result18(data){
  console && console.log(data);
  document.getElementById("marketing-tickets_sold").innerHTML = data['rows'][0][0];
}
var query184 = 'SELECT COUNT(*) FROM dataset0 WHERE ticket_type_id in (428)';
domo.post('/sql/v1/dataset0', query184, {contentType: 'text/plain'}).then(result184);
 function result184(data){
  console && console.log(data);
  document.getElementById("marketing-tickets_left").innerHTML = 100 - data['rows'][0][0];
}
var query19 = 'SELECT COUNT(*) FROM dataset1 WHERE ticket_type_id in (428)';
domo.post('/sql/v1/dataset1', query19, {contentType: 'text/plain'}).then(result19);
 function result19(data){
  console && console.log(data);
  document.getElementById("marketing-tickets_confirmed").innerHTML = data['rows'][0][0];
}
//virtual
var query20 = 'SELECT COUNT(*) FROM dataset0 WHERE ticket_type_id in (429)';
domo.post('/sql/v1/dataset0', query20, {contentType: 'text/plain'}).then(result20);
 function result20(data){
  console && console.log(data);
  document.getElementById("marketing-virtual-tickets_sold").innerHTML = data['rows'][0][0];
}
//TABLE 4
//REAL ESTATE SUMMIT DEC 2023
//ult-vip
var query21 = 'SELECT COUNT(*) FROM dataset0 WHERE ticket_type_id in (642)';
domo.post('/sql/v1/dataset0', query21, {contentType: 'text/plain'}).then(result21);
 function result21(data){
  console && console.log(data);
  document.getElementById("rs-ult-vip-tickets_sold").innerHTML = data['rows'][0][0];
}
var query219 = 'SELECT COUNT(*) FROM dataset0 WHERE ticket_type_id in (642)';
domo.post('/sql/v1/dataset0', query219, {contentType: 'text/plain'}).then(result219);
 function result219(data){
  console && console.log(data);
  document.getElementById("rs-ult-vip-tickets_left").innerHTML = 40 - data['rows'][0][0];
}
var query22 = 'SELECT COUNT(*) FROM dataset1 WHERE ticket_type_id in (642)';
domo.post('/sql/v1/dataset1', query22, {contentType: 'text/plain'}).then(result22);
 function result22(data){
  console && console.log(data);
  document.getElementById("rs-ult-vip-tickets_confirmed").innerHTML = data['rows'][0][0];
}
//super-vip
var query23 = 'SELECT COUNT(*) FROM dataset0 WHERE ticket_type_id in (294)';
domo.post('/sql/v1/dataset0', query23, {contentType: 'text/plain'}).then(result23);
 function result23(data){
  console && console.log(data);
  document.getElementById("rs-super-vip-tickets_sold").innerHTML = data['rows'][0][0];
}
var query237 = 'SELECT COUNT(*) FROM dataset0 WHERE ticket_type_id in (632)';
domo.post('/sql/v1/dataset0', query237, {contentType: 'text/plain'}).then(result237);
 function result237(data){
  console && console.log(data);
  document.getElementById("rs-super-vip-tickets_left").innerHTML = 100 - data['rows'][0][0];
}
var query24 = 'SELECT COUNT(*) FROM dataset1 WHERE event_id = 501 AND ticket_type_id = 631';
domo.post('/sql/v1/dataset1', query24, {contentType: 'text/plain'}).then(result24);
 function result24(data){
  console && console.log(data);
  document.getElementById("rs-super-vip-tickets_confirmed").innerHTML = data['rows'][0][0];
}
//vip
var query25 = 'SELECT COUNT(*) FROM dataset0 WHERE event_id = 501 AND ticket_type_id = 258';
domo.post('/sql/v1/dataset0', query25, {contentType: 'text/plain'}).then(result25);
 function result25(data){
  console && console.log(data);
  document.getElementById("rs-vip-tickets_sold").innerHTML = data['rows'][0][0];
}
var query26 = 'SELECT COUNT(*) FROM dataset1 WHERE event_id = 501 AND ticket_type_id = 258';
domo.post('/sql/v1/dataset1', query26, {contentType: 'text/plain'}).then(result26);
 function result26(data){
  console && console.log(data);
  document.getElementById("rs-vip-tickets_confirmed").innerHTML = data['rows'][0][0];
}
//executive
var query27 = 'SELECT COUNT(*) FROM dataset0 WHERE ticket_type_id in (643)';
domo.post('/sql/v1/dataset0', query27, {contentType: 'text/plain'}).then(result27);
 function result27(data){
  console && console.log(data);
  document.getElementById("rs-exec-tickets_sold").innerHTML = data['rows'][0][0];
}
var query273 = 'SELECT COUNT(*) FROM dataset0 WHERE ticket_type_id in (643)';
domo.post('/sql/v1/dataset0', query273, {contentType: 'text/plain'}).then(result273);
 function result273(data){
  console && console.log(data);
  document.getElementById("rs-exec-tickets_left").innerHTML = 40 - data['rows'][0][0];
}
var query28 = 'SELECT COUNT(*) FROM dataset1 WHERE ticket_type_id in (643)';
domo.post('/sql/v1/dataset1', query28, {contentType: 'text/plain'}).then(result28);
 function result28(data){
  console && console.log(data);
  document.getElementById("rs-exec-tickets_confirmed").innerHTML = data['rows'][0][0];
}
//total
var query29 = 'SELECT COUNT(*) FROM dataset0 WHERE ticket_type_id in (295,294)';
domo.post('/sql/v1/dataset0', query29, {contentType: 'text/plain'}).then(result29);
 function result29(data){
  console && console.log(data);
  document.getElementById("rs-tot-tickets_sold").innerHTML = data['rows'][0][0];
}
var query291 = 'SELECT COUNT(*) FROM dataset0 WHERE ticket_type_id in (295,294)';
domo.post('/sql/v1/dataset0', query291, {contentType: 'text/plain'}).then(result291);
 function result291(data){
  console && console.log(data);
  document.getElementById("rs-tot-tickets_left").innerHTML = 120 - data['rows'][0][0];
}
var query30 = 'SELECT COUNT(*) FROM dataset1 WHERE ticket_type_id in (295,294)';
domo.post('/sql/v1/dataset1', query30, {contentType: 'text/plain'}).then(result30);
 function result30(data){
  console && console.log(data);
  document.getElementById("rs-tot-tickets_confirmed").innerHTML = data['rows'][0][0];
}
//virtual
var query31 = 'SELECT COUNT(*) FROM dataset0 WHERE ticket_type_id in (533)';
domo.post('/sql/v1/dataset0', query31, {contentType: 'text/plain'}).then(result31);
 function result31(data){
  console && console.log(data);
  document.getElementById("rs-virtual-tickets_sold").innerHTML = data['rows'][0][0];
}
//TABLE 5
//10X BUSINESS SUMMIT
//super-vip
var query32 = 'SELECT COUNT(*) FROM dataset0 WHERE ticket_type_id in (493)';
domo.post('/sql/v1/dataset0', query32, {contentType: 'text/plain'}).then(result32);
 function result32(data){
  console && console.log(data);
  document.getElementById("bs-super-vip-tickets_sold").innerHTML = data['rows'][0][0];
}
var query321 = 'SELECT COUNT(*) FROM dataset0 WHERE ticket_type_id in (493)';
domo.post('/sql/v1/dataset0', query321, {contentType: 'text/plain'}).then(result321);
 function result321(data){
  console && console.log(data);
  document.getElementById("bs-super-vip-tickets_left").innerHTML =16 - data['rows'][0][0];
}
var query33 = 'SELECT COUNT(*) FROM dataset1 WHERE ticket_type_id in (493)';
domo.post('/sql/v1/dataset1', query33, {contentType: 'text/plain'}).then(result33);
 function result33(data){
  console && console.log(data);
  document.getElementById("bs-super-vip-tickets_confirmed").innerHTML = data['rows'][0][0];
}
//vip
var query34 = 'SELECT COUNT(*) FROM dataset0 WHERE ticket_type_id in (758)';
domo.post('/sql/v1/dataset0', query34, {contentType: 'text/plain'}).then(result34);
 function result34(data){
  console && console.log(data);
  document.getElementById("bs-vip-tickets_sold").innerHTML = data['rows'][0][0];
}
var query35 = 'SELECT COUNT(*) FROM dataset2 WHERE ticket_type in (101,319) and confirmed=1';
domo.post('/sql/v1/dataset2', query35, {contentType: 'text/plain'}).then(result35);
 function result35(data){
  console && console.log(data);
  document.getElementById("bs-vip-tickets_confirmed").innerHTML = data['rows'][0][0];
}
//executive
var query36 = 'SELECT COUNT(*) FROM dataset0 WHERE ticket_type_id in (492)';
domo.post('/sql/v1/dataset0', query36, {contentType: 'text/plain'}).then(result36);
 function result36(data){
  console && console.log(data);
  document.getElementById("bs-exec-tickets_sold").innerHTML = data['rows'][0][0];
}
var query37 = 'SELECT COUNT(*) FROM dataset2 WHERE ticket_type in (100,318) and confirmed=1';
domo.post('/sql/v1/dataset2', query37, {contentType: 'text/plain'}).then(result37);
 function result37(data){
  console && console.log(data);
  document.getElementById("bs-exec-tickets_confirmed").innerHTML = data['rows'][0][0];
}
//total
var query38 = 'SELECT COUNT(*) FROM dataset0 WHERE ticket_type_id in (758,492,493)';
domo.post('/sql/v1/dataset0', query38, {contentType: 'text/plain'}).then(result38);
 function result38(data){
  console && console.log(data);
  document.getElementById("bs-tot-tickets_sold").innerHTML = data['rows'][0][0];
}
var query39 = 'SELECT COUNT(*) FROM dataset2 WHERE confirmed=1';
domo.post('/sql/v1/dataset2', query39, {contentType: 'text/plain'}).then(result39);
 function result39(data){
  console && console.log(data);
  document.getElementById("bs-tot-tickets_confirmed").innerHTML = data['rows'][0][0];
}
//TABLE 6 
//SALES ESSENTIAL
//in-person
var query40 = 'SELECT COUNT(*) FROM dataset0 WHERE ticket_type_id in (263)';
domo.post('/sql/v1/dataset0', query40, {contentType: 'text/plain'}).then(result40);
 function result40(data){
  console && console.log(data);
  document.getElementById("sales-tickets_sold").innerHTML = data['rows'][0][0];
}
var query401 = 'SELECT COUNT(*) FROM dataset0 WHERE ticket_type_id in (263)';
domo.post('/sql/v1/dataset0', query401, {contentType: 'text/plain'}).then(result401);
 function result401(data){
  console && console.log(data);
  document.getElementById("sales-tickets_left").innerHTML = 150 - data['rows'][0][0];
}
var query41 = 'SELECT COUNT(*) FROM dataset1 WHERE event_id = 495 AND ticket_type_id in (242)';
domo.post('/sql/v1/dataset1', query41, {contentType: 'text/plain'}).then(result41);
 function result41(data){
  console && console.log(data);
  document.getElementById("sales-tickets_confirmed").innerHTML = data['rows'][0][0];
}
//virtual
var query42 = 'SELECT COUNT(*) FROM dataset0 WHERE event_id = 495 AND ticket_type_id in (243)';
domo.post('/sql/v1/dataset0', query42, {contentType: 'text/plain'}).then(result42);
 function result42(data){
  console && console.log(data);
  document.getElementById("sales-virtual-tickets_sold").innerHTML = data['rows'][0][0];
}
