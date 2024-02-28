var domo = window.domo; // For more on domo.js: https://developer.domo.com/docs/dev-studio-guides/domo-js#domo.get
var datasets = window.datasets;

//TABLE 1
//REAL ESTATE INTERACTIVE Jan 2023
//baller
var query0 = 'SELECT SUM(tickets_sold) FROM dataset0 WHERE event_id = 665 AND ticket_type_id = 655';
domo.post('/sql/v1/dataset0', query0, {contentType: 'text/plain'}).then(result0);
 function result0(data){
  console && console.log(data);
  document.getElementById("rei-baller-tickets_sold").innerHTML = data['rows'][0][0];
}
var query1 = 'SELECT SUM(tickets_sold) FROM dataset0 WHERE event_id = 665 AND ticket_type_id = 655';
domo.post('/sql/v1/dataset0', query1, {contentType: 'text/plain'}).then(result1);
 function result1(data){
  console && console.log(data);
  document.getElementById("rei-baller-tickets_confirmed").innerHTML = data['rows'][0][0];
}
//vip
var query2 = 'SELECT SUM(tickets_sold) FROM dataset0 WHERE ticket_type_id in (837)';
domo.post('/sql/v1/dataset0', query2, {contentType: 'text/plain'}).then(result2);
 function result2(data){
  console && console.log(data);
  document.getElementById("rei-vip-tickets_sold").innerHTML = data['rows'][0][0];
}
//executive
var query3 = 'SELECT SUM(tickets_sold) FROM dataset0 WHERE ticket_type_id in (831)';
domo.post('/sql/v1/dataset0', query3, {contentType: 'text/plain'}).then(result3);
 function result3(data){
  console && console.log(data);
  document.getElementById("rei-exec-tickets_sold").innerHTML = data['rows'][0][0];
}
//total
var query4 = 'SELECT SUM(tickets_sold) FROM dataset0 WHERE ticket_type_id in (837,831)';
domo.post('/sql/v1/dataset0', query4, {contentType: 'text/plain'}).then(result4);
 function result4(data){
  console && console.log(data);
  document.getElementById("rei-tot-tickets_sold").innerHTML = data['rows'][0][0];
}
//TABLE 2
//GROWTH CONFERENCE
//diamon-fr
var query5b = 'SELECT SUM(tickets_sold) FROM dataset0 WHERE ticket_type_id in (369)';
domo.post('/sql/v1/dataset0', query5b, {contentType: 'text/plain'}).then(result5b);
 function result5b(data){
  console && console.log(data);
  document.getElementById("gc-diamond-fr-tickets_sold").innerHTML = data['rows'][0][0];
}
var query51 = 'SELECT SUM(tickets_left) FROM dataset0 WHERE ticket_type_id in (369)';
domo.post('/sql/v1/dataset0', query51, {contentType: 'text/plain'}).then(result51);
 function result51(data){
  console && console.log(data);
  document.getElementById("gc-diamond-fr-tickets_left").innerHTML = data['rows'][0][0];
}
var query6b = 'SELECT SUM(tickets_confirmed) FROM dataset0 WHERE ticket_type_id in (369)';
domo.post('/sql/v1/dataset0', query6b, {contentType: 'text/plain'}).then(result6b);
 function result6b(data){
  console && console.log(data);
  document.getElementById("gc-diamond-fr-tickets_confirmed").innerHTML = data['rows'][0][0];
}
var query6ba = 'SELECT COUNT(*) FROM dataset1 WHERE ticket_type_id in (369)';
domo.post('/sql/v1/dataset1', query6ba, {contentType: 'text/plain'}).then(result6ba);
 function result6ba(data){
  console && console.log(data);
  document.getElementById("gc-diamond-fr-tickets_seats").innerHTML = data['rows'][0][0];
}
//diamond
var query7b = 'SELECT SUM(tickets_sold) FROM dataset0 WHERE event_id = 548 AND ticket_type_id in (368)';
domo.post('/sql/v1/dataset0', query7b, {contentType: 'text/plain'}).then(result7b);
 function result7b(data){
  console && console.log(data);
  document.getElementById("gc-diamond-tickets_sold").innerHTML = data['rows'][0][0];
}
var query7ab = 'SELECT SUM(tickets_left) FROM dataset0 WHERE ticket_type_id in (368)';
domo.post('/sql/v1/dataset0', query7ab, {contentType: 'text/plain'}).then(result7ab);
 function result7ab(data){
  console && console.log(data);
  document.getElementById("gc-diamond-tickets_left").innerHTML = data['rows'][0][0];
}
var query8b = 'SELECT SUM(tickets_confirmed) FROM dataset0 WHERE ticket_type_id in (368)';
domo.post('/sql/v1/dataset0', query8b, {contentType: 'text/plain'}).then(result8b);
 function result8b(data){
  console && console.log(data);
  document.getElementById("gc-diamond-tickets_confirmed").innerHTML = data['rows'][0][0];
}
var query8ba = 'SELECT COUNT(*) FROM dataset1 WHERE ticket_type_id in (368)';
domo.post('/sql/v1/dataset1', query8ba, {contentType: 'text/plain'}).then(result8ba);
 function result8ba(data){
  console && console.log(data);
  document.getElementById("gc-diamond-tickets_seats").innerHTML = data['rows'][0][0];
}
//premier
var query9 = 'SELECT SUM(tickets_sold) FROM dataset0 WHERE ticket_type_id in (367)';
domo.post('/sql/v1/dataset0', query9, {contentType: 'text/plain'}).then(result9);
 function result9(data){
  console && console.log(data);
  document.getElementById("gc-premier-tickets_sold").innerHTML = data['rows'][0][0];
}
var query9ab = 'SELECT SUM(tickets_left) FROM dataset0 WHERE ticket_type_id in (367)';
domo.post('/sql/v1/dataset0', query9ab, {contentType: 'text/plain'}).then(result9ab);
 function result9ab(data){
  console && console.log(data);
  document.getElementById("gc-premier-tickets_left").innerHTML =data['rows'][0][0];
}
var query10ab = 'SELECT SUM(tickets_confirmed) FROM dataset0 WHERE ticket_type_id in (367)';
domo.post('/sql/v1/dataset0', query10ab, {contentType: 'text/plain'}).then(result10ab);
 function result10ab(data){
  console && console.log(data);
  document.getElementById("gc-premier-tickets_confirmed").innerHTML = data['rows'][0][0];
}
var query10abc = 'SELECT COUNT(*) FROM dataset1 WHERE ticket_type_id in (367)';
domo.post('/sql/v1/dataset1', query10abc, {contentType: 'text/plain'}).then(result10abc);
 function result10abc(data){
  console && console.log(data);
  document.getElementById("gc-premier-tickets_seats").innerHTML = data['rows'][0][0];
}
//vip
var query11 = 'SELECT SUM(tickets_sold) FROM dataset0 WHERE ticket_type_id in (366)';
domo.post('/sql/v1/dataset0', query11, {contentType: 'text/plain'}).then(result11);
 function result11(data){
  console && console.log(data);
  document.getElementById("gc-vip-tickets_sold").innerHTML = data['rows'][0][0];
}
var query11ab = 'SELECT SUM(tickets_left) FROM dataset0 WHERE ticket_type_id in (366)';
domo.post('/sql/v1/dataset0', query11ab, {contentType: 'text/plain'}).then(result11ab);
 function result11ab(data){
  console && console.log(data);
  document.getElementById("gc-vip-tickets_left").innerHTML =data['rows'][0][0];
}
var query12 = 'SELECT SUM(tickets_confirmed) FROM dataset0 WHERE ticket_type_id in (366)';
domo.post('/sql/v1/dataset0', query12, {contentType: 'text/plain'}).then(result12);
 function result12(data){
  console && console.log(data);
  document.getElementById("gc-vip-tickets_confirmed").innerHTML = data['rows'][0][0];
}
var query12ab = 'SELECT COUNT(*) FROM dataset1 WHERE ticket_type_id in (366)';
domo.post('/sql/v1/dataset1', query12ab, {contentType: 'text/plain'}).then(result12ab);
 function result12ab(data){
  console && console.log(data);
  document.getElementById("gc-vip-tickets_seats").innerHTML = data['rows'][0][0];
}
//executive
var query13 = 'SELECT SUM(tickets_sold) FROM dataset0 WHERE ticket_type_id in (365)';
domo.post('/sql/v1/dataset0', query13, {contentType: 'text/plain'}).then(result13);
 function result13(data){
  console && console.log(data);
  document.getElementById("gc-exec-tickets_sold").innerHTML = data['rows'][0][0];
}
var query13ab = 'SELECT SUM(tickets_left) FROM dataset0 WHERE ticket_type_id in (365)';
domo.post('/sql/v1/dataset0', query13ab, {contentType: 'text/plain'}).then(result13ab);
 function result13ab(data){
  console && console.log(data);
  document.getElementById("gc-exec-tickets_left").innerHTML = data['rows'][0][0];
}
var query14 = 'SELECT SUM(tickets_confirmed) FROM dataset0 WHERE ticket_type_id in (365)';
domo.post('/sql/v1/dataset0', query14, {contentType: 'text/plain'}).then(result14);
 function result14(data){
  console && console.log(data);
  document.getElementById("gc-exec-tickets_confirmed").innerHTML = data['rows'][0][0];
}
//virtual
var query15 = 'SELECT SUM(tickets_sold) FROM dataset0 WHERE ticket_type_id in (384)';
domo.post('/sql/v1/dataset0', query15, {contentType: 'text/plain'}).then(result15);
 function result15(data){
  console && console.log(data);
  document.getElementById("gc-virtual-tickets_sold").innerHTML = data['rows'][0][0];
}
//total
var query16 = 'SELECT SUM(tickets_sold) FROM dataset0 WHERE ticket_type_id in (365,366,367,368,369)';
domo.post('/sql/v1/dataset0', query16, {contentType: 'text/plain'}).then(result16);
 function result16(data){
  console && console.log(data);
  document.getElementById("gc-tot-tickets_sold").innerHTML = data['rows'][0][0];
}
var query16ab = 'SELECT SUM(tickets_left) FROM dataset0 WHERE ticket_type_id in (365,366,367,368,369)';
domo.post('/sql/v1/dataset0', query16ab, {contentType: 'text/plain'}).then(result16ab);
 function result16ab(data){
  console && console.log(data);
  document.getElementById("gc-tot-tickets_left").innerHTML =data['rows'][0][0];
}
var query17 = 'SELECT SUM(tickets_confirmed) FROM dataset0 WHERE ticket_type_id in (365,366,367,368,369)';
domo.post('/sql/v1/dataset0', query17, {contentType: 'text/plain'}).then(result17);
 function result17(data){
  console && console.log(data);
  document.getElementById("gc-tot-tickets_confirmed").innerHTML = data['rows'][0][0];
}
//TABLE 3
//Master Your Money
//VIP
var query18 = 'SELECT SUM(tickets_sold) FROM dataset0 WHERE ticket_type_id in (272)';
domo.post('/sql/v1/dataset0', query18, {contentType: 'text/plain'}).then(result18);
 function result18(data){
  console && console.log(data);
  document.getElementById("table3-vip-tickets_sold").innerHTML = data['rows'][0][0];
}
var query184 = 'SELECT SUM(tickets_left) FROM dataset0 WHERE ticket_type_id in (272)';
domo.post('/sql/v1/dataset0', query184, {contentType: 'text/plain'}).then(result184);
 function result184(data){
  console && console.log(data);
  document.getElementById("table3-vip-tickets_left").innerHTML = data['rows'][0][0];
}
var query19 = 'SELECT SUM(tickets_confirmed) FROM dataset0 WHERE ticket_type_id in (272)';
domo.post('/sql/v1/dataset0', query19, {contentType: 'text/plain'}).then(result19);
 function result19(data){
  console && console.log(data);
  document.getElementById("table3-vip-tickets_confirmed").innerHTML = data['rows'][0][0];
}
//Executice
var query200 = 'SELECT SUM(tickets_sold) FROM dataset0 WHERE ticket_type_id in (271)';
domo.post('/sql/v1/dataset0', query200, {contentType: 'text/plain'}).then(result200);
 function result200(data){
  console && console.log(data);
  document.getElementById("table3-exec-tickets_sold").innerHTML = data['rows'][0][0];
}
var query201 = 'SELECT SUM(tickets_left) FROM dataset0 WHERE ticket_type_id in (271)';
domo.post('/sql/v1/dataset0', query201, {contentType: 'text/plain'}).then(result201);
 function result201(data){
  console && console.log(data);
  document.getElementById("table3-exec-tickets_left").innerHTML = data['rows'][0][0];
}
var query202 = 'SELECT SUM(tickets_confirmed) FROM dataset0 WHERE ticket_type_id in (271)';
domo.post('/sql/v1/dataset0', query202, {contentType: 'text/plain'}).then(result202);
 function result202(data){
  console && console.log(data);
  document.getElementById("table3-exec-tickets_confirmed").innerHTML = data['rows'][0][0];
}
//Totals
var query203 = 'SELECT SUM(tickets_sold) FROM dataset0 WHERE ticket_type_id in (271,272)';
domo.post('/sql/v1/dataset0', query203, {contentType: 'text/plain'}).then(result203);
 function result203(data){
  console && console.log(data);
  document.getElementById("table3-tot-tickets_sold").innerHTML = data['rows'][0][0];
}
var query204 = 'SELECT SUM(tickets_left) FROM dataset0 WHERE ticket_type_id in (271,272)';
domo.post('/sql/v1/dataset0', query204, {contentType: 'text/plain'}).then(result204);
 function result204(data){
  console && console.log(data);
  document.getElementById("table3-tot-tickets_left").innerHTML = data['rows'][0][0];
}
var query205 = 'SELECT SUM(tickets_confirmed) FROM dataset0 WHERE ticket_type_id in (271,272)';
domo.post('/sql/v1/dataset0', query205, {contentType: 'text/plain'}).then(result205);
 function result205(data){
  console && console.log(data);
  document.getElementById("table3-tot-tickets_confirmed").innerHTML = data['rows'][0][0];
}
//virtual
var query20 = 'SELECT SUM(tickets_sold) FROM dataset0 WHERE ticket_type_id in (534)';
domo.post('/sql/v1/dataset0', query20, {contentType: 'text/plain'}).then(result20);
 function result20(data){
  console && console.log(data);
  document.getElementById("table3-virtual-tickets_sold").innerHTML = data['rows'][0][0];
}
//TABLE 4
//REAL ESTATE SUMMIT DEC 2023
//ult-vip
var query1000 = 'SELECT SUM(tickets_sold) FROM dataset0 WHERE ticket_type_id in (642)';
domo.post('/sql/v1/dataset0', query1000, {contentType: 'text/plain'}).then(result1000);
 function result1000(data){
  console && console.log(data);
  document.getElementById("rs-ult-vip_sold").innerHTML = data['rows'][0][0];
}
var query1001 = 'SELECT SUM(tickets_left) FROM dataset0 WHERE ticket_type_id in (642)';
domo.post('/sql/v1/dataset0', query1001, {contentType: 'text/plain'}).then(result1001);
 function result1001(data){
  console && console.log(data);
  document.getElementById("rs-ult-vip_left").innerHTML = data['rows'][0][0];
}
var query1002 = 'SELECT SUM(tickets_confirmed) FROM dataset0 WHERE ticket_type_id in (642)';
domo.post('/sql/v1/dataset0', query1002, {contentType: 'text/plain'}).then(result1002);
 function result1002(data){
  console && console.log(data);
  document.getElementById("rs-ult-vip_confirmed").innerHTML = data['rows'][0][0];
}
//super-vip
var query1003 = 'SELECT SUM(tickets_sold) FROM dataset0 WHERE ticket_type_id in (827)';
domo.post('/sql/v1/dataset0', query1003, {contentType: 'text/plain'}).then(result1003);
 function result1003(data){
  console && console.log(data);
  document.getElementById("rs-super-tickets_sold").innerHTML = data['rows'][0][0];
}
var query237 = 'SELECT SUM(tickets_left) FROM dataset0 WHERE ticket_type_id in (827)';
domo.post('/sql/v1/dataset0', query237, {contentType: 'text/plain'}).then(result237);
 function result237(data){
  console && console.log(data);
  document.getElementById("rs-super-tickets_left").innerHTML = data['rows'][0][0];
}
var query24 = 'SELECT SUM(tickets_confirmed) FROM dataset0 WHERE ticket_type_id in (827)';
domo.post('/sql/v1/dataset0', query24, {contentType: 'text/plain'}).then(result24);
 function result24(data){
  console && console.log(data);
  document.getElementById("rs-super-tickets_confirmed").innerHTML = data['rows'][0][0];
}
//vip
var query25 = 'SELECT SUM(tickets_sold) FROM dataset0 WHERE ticket_type_id in (826)';
domo.post('/sql/v1/dataset0', query25, {contentType: 'text/plain'}).then(result25);
 function result25(data){
  console && console.log(data);
  document.getElementById("rs-vip-tickets_sold").innerHTML = data['rows'][0][0];
}
var query2000 = 'SELECT SUM(tickets_left) FROM dataset0 WHERE ticket_type_id in (826)';
domo.post('/sql/v1/dataset0', query2000, {contentType: 'text/plain'}).then(result2000);
 function result2000(data){
  console && console.log(data);
  document.getElementById("rs-vip-tickets_left").innerHTML = data['rows'][0][0];
}
var query26 = 'SELECT SUM(tickets_confirmed) FROM dataset0 WHERE ticket_type_id in (826)';
domo.post('/sql/v1/dataset0', query26, {contentType: 'text/plain'}).then(result26);
 function result26(data){
  console && console.log(data);
  document.getElementById("rs-vip-tickets_confirmed").innerHTML = data['rows'][0][0];
}
//total vips
var query2001 = 'SELECT SUM(tickets_sold) FROM dataset0 WHERE ticket_type_id in (826,827)';
domo.post('/sql/v1/dataset0', query2001, {contentType: 'text/plain'}).then(result2001);
 function result2001(data){
  console && console.log(data);
  document.getElementById("rs-tot_vip-tickets_sold").innerHTML = data['rows'][0][0];
}
var query2002 = 'SELECT SUM(tickets_left) FROM dataset0 WHERE ticket_type_id in (826,827)';
domo.post('/sql/v1/dataset0', query2002, {contentType: 'text/plain'}).then(result2002);
 function result2002(data){
  console && console.log(data);
  document.getElementById("rs-tot_vip-tickets_left").innerHTML = data['rows'][0][0];
}
var query2003 = 'SELECT SUM(tickets_confirmed) FROM dataset0 WHERE ticket_type_id in (826,827)';
domo.post('/sql/v1/dataset0', query2003, {contentType: 'text/plain'}).then(result2003);
 function result2003(data){
  console && console.log(data);
  document.getElementById("rs-tot_vip-tickets_confirmed").innerHTML = data['rows'][0][0];
}
//executive
var query27 = 'SELECT SUM(tickets_sold) FROM dataset0 WHERE ticket_type_id in (825)';
domo.post('/sql/v1/dataset0', query27, {contentType: 'text/plain'}).then(result27);
 function result27(data){
  console && console.log(data);
  document.getElementById("rs-exec-tickets_sold").innerHTML = data['rows'][0][0];
}
var query273 = 'SELECT SUM(tickets_left) FROM dataset0 WHERE ticket_type_id in (825)';
domo.post('/sql/v1/dataset0', query273, {contentType: 'text/plain'}).then(result273);
 function result273(data){
  console && console.log(data);
  document.getElementById("rs-exec-tickets_left").innerHTML = data['rows'][0][0];
}
var query28 = 'SELECT SUM(tickets_confirmed) FROM dataset0 WHERE ticket_type_id in (825)';
domo.post('/sql/v1/dataset0', query28, {contentType: 'text/plain'}).then(result28);
 function result28(data){
  console && console.log(data);
  document.getElementById("rs-exec-tickets_confirmed").innerHTML = data['rows'][0][0];
}
//total
var query29 = 'SELECT SUM(tickets_sold) FROM dataset0 WHERE ticket_type_id in (825,826,827)';
domo.post('/sql/v1/dataset0', query29, {contentType: 'text/plain'}).then(result29);
 function result29(data){
  console && console.log(data);
  document.getElementById("rs-tot-tickets_sold").innerHTML = data['rows'][0][0];
}
var query291 = 'SELECT SUM(tickets_left) FROM dataset0 WHERE ticket_type_id in (825,826,827)';
domo.post('/sql/v1/dataset0', query291, {contentType: 'text/plain'}).then(result291);
 function result291(data){
  console && console.log(data);
  document.getElementById("rs-tot-tickets_left").innerHTML = data['rows'][0][0];
}
var query30 = 'SELECT SUM(tickets_confirmed) FROM dataset0 WHERE ticket_type_id in (825,826,827)';
domo.post('/sql/v1/dataset0', query30, {contentType: 'text/plain'}).then(result30);
 function result30(data){
  console && console.log(data);
  document.getElementById("rs-tot-tickets_confirmed").innerHTML = data['rows'][0][0];
}
//virtual
var query31 = 'SELECT SUM(tickets_sold) FROM dataset0 WHERE ticket_type_id in (828)';
domo.post('/sql/v1/dataset0', query31, {contentType: 'text/plain'}).then(result31);
 function result31(data){
  console && console.log(data);
  document.getElementById("rs-virtual-tickets_sold").innerHTML = data['rows'][0][0];
}
//TABLE 5
//10X BUSINESS SUMMIT
//10x business summit
//ctti
var query6a = 'SELECT COUNT(*) FROM dataset2 WHERE ticket_type_id in (102)';
domo.post('/sql/v1/dataset2', query6a, {contentType: 'text/plain'}).then(result6a);
 function result6a(data){
  console && console.log(data);
  document.getElementById("ctti-bs-super-tickets_sold").innerHTML = data['rows'][0][0];
}
var query7a = 'SELECT COUNT(*) FROM dataset2 WHERE  ticket_type_id in (101)';
domo.post('/sql/v1/dataset2', query7a, {contentType: 'text/plain'}).then(result7a);
 function result7a(data){
  console && console.log(data);
  document.getElementById("ctti-bs-vip-tickets_sold").innerHTML = data['rows'][0][0];
}
var query8a = 'SELECT COUNT(*) FROM dataset2 WHERE ticket_type_id in (100)';
domo.post('/sql/v1/dataset2', query8a, {contentType: 'text/plain'}).then(result8a);
 function result8a(data){
  console && console.log(data);
  document.getElementById("ctti-bs-exec-tickets_sold").innerHTML = data['rows'][0][0];
}
var query9a = 'SELECT COUNT(*) FROM dataset2 WHERE ticket_type_id in (100,101,102)';
domo.post('/sql/v1/dataset2', query9a, {contentType: 'text/plain'}).then(result9a);
 function result9a(data){
  console && console.log(data);
  document.getElementById("ctti-bs-tickets_sold").innerHTML = data['rows'][0][0];
}
//cardone ventures
var query10a = 'SELECT COUNT(*) FROM dataset2 WHERE ticket_type_id in (202)';
domo.post('/sql/v1/dataset2', query10a, {contentType: 'text/plain'}).then(result10a);
 function result10a(data){
  console && console.log(data);
  document.getElementById("cv-bs-super-tickets_sold").innerHTML = data['rows'][0][0];
}
var query11a = 'SELECT COUNT(*) FROM dataset2 WHERE ticket_type_id in (201)';
domo.post('/sql/v1/dataset2', query11a, {contentType: 'text/plain'}).then(result11a);
 function result11a(data){
  console && console.log(data);
  document.getElementById("cv-bs-vip-tickets_sold").innerHTML = data['rows'][0][0];
}
var query12a = 'SELECT COUNT(*) FROM dataset2 WHERE ticket_type_id in (200)';
domo.post('/sql/v1/dataset2', query12a, {contentType: 'text/plain'}).then(result12a);
 function result12a(data){
  console && console.log(data);
  document.getElementById("cv-bs-exec-tickets_sold").innerHTML = data['rows'][0][0];
}
var query13a = 'SELECT COUNT(*) FROM dataset2 WHERE ticket_type_id in (200,201,202)';
domo.post('/sql/v1/dataset2', query13a, {contentType: 'text/plain'}).then(result13a);
 function result13a(data){
  console && console.log(data);
  document.getElementById("cv-bs-tickets_sold").innerHTML = data['rows'][0][0];
}
var query14a = 'SELECT COUNT(*) FROM dataset2 WHERE ticket_type_id in (102,202)';
domo.post('/sql/v1/dataset2', query14a, {contentType: 'text/plain'}).then(result14a);
 function result14a(data){
  console && console.log(data);
  document.getElementById("tot-bs-super-tickets_sold").innerHTML = data['rows'][0][0];
}
var query15a = 'SELECT COUNT(*) FROM dataset2 WHERE ticket_type_id in (101,201)';
domo.post('/sql/v1/dataset2', query15a, {contentType: 'text/plain'}).then(result15a);
 function result15a(data){
  console && console.log(data);
  document.getElementById("tot-bs-vip-tickets_sold").innerHTML = data['rows'][0][0];
}
var query16a = 'SELECT COUNT(*) FROM dataset2 WHERE ticket_type_id in (100,200)';
domo.post('/sql/v1/dataset2', query16a, {contentType: 'text/plain'}).then(result16a);
 function result16a(data){
  console && console.log(data);
  document.getElementById("tot-bs-exec-tickets_sold").innerHTML = data['rows'][0][0];
}
var query17a = 'SELECT COUNT(*) FROM dataset2';
domo.post('/sql/v1/dataset2', query17a, {contentType: 'text/plain'}).then(result17a);
 function result17a(data){
  console && console.log(data);
  document.getElementById("bs-tickets_sold").innerHTML = data['rows'][0][0];
}
var query18a = 'SELECT COUNT(*) FROM dataset2 WHERE ticket_type_id in (102,202)';
domo.post('/sql/v1/dataset2', query18a, {contentType: 'text/plain'}).then(result18a);
 function result18a(data){
  console && console.log(data);
  document.getElementById("bs-super-tickets_left").innerHTML = 40 - data['rows'][0][0];
}
var query19a = 'SELECT COUNT(*) FROM dataset2 WHERE ticket_type_id in (101,201)';
domo.post('/sql/v1/dataset2', query19a, {contentType: 'text/plain'}).then(result19a);
 function result19a(data){
  console && console.log(data);
  document.getElementById("bs-vip-tickets_left").innerHTML = 200 - data['rows'][0][0];
}
var query20a = 'SELECT COUNT(*) FROM dataset2 WHERE ticket_type_id in (100,200)';
domo.post('/sql/v1/dataset2', query20a, {contentType: 'text/plain'}).then(result20a);
 function result20a(data){
  console && console.log(data);
  document.getElementById("bs-exec-tickets_left").innerHTML = 245 - data['rows'][0][0];
}
var query1000a = 'SELECT COUNT(*) FROM dataset2';
domo.post('/sql/v1/dataset2', query1000a, {contentType: 'text/plain'}).then(result21a);
 function result21a(data){
  console && console.log(data);
  document.getElementById("bs-tickets_left").innerHTML = 485 - data['rows'][0][0];
}
var query22a = 'SELECT COUNT(*) FROM dataset2 where ticket_type_id in (102,202) and confirmed = 1';
domo.post('/sql/v1/dataset2', query22a, {contentType: 'text/plain'}).then(result22a);
 function result22a(data){
  console && console.log(data);
  document.getElementById("bs-super-tickets_confirmed").innerHTML = data['rows'][0][0];
}
var query23a = 'SELECT COUNT(*) FROM dataset2 where ticket_type_id in (101,201) and confirmed = 1';
domo.post('/sql/v1/dataset2', query23a, {contentType: 'text/plain'}).then(result23a);
 function result23a(data){
  console && console.log(data);
  document.getElementById("bs-vip-tickets_confirmed").innerHTML = data['rows'][0][0];
}
var query24a = 'SELECT COUNT(*) FROM dataset2 where ticket_type_id in (100,200) and confirmed = 1';
domo.post('/sql/v1/dataset2', query24a, {contentType: 'text/plain'}).then(result24a);
 function result24a(data){
  console && console.log(data);
  document.getElementById("bs-exec-tickets_confirmed").innerHTML = data['rows'][0][0];
}
var query25a = 'SELECT COUNT(*) FROM dataset2 where confirmed = 1';
domo.post('/sql/v1/dataset2', query25a, {contentType: 'text/plain'}).then(result25a);
 function result25a(data){
  console && console.log(data);
  document.getElementById("bs-tickets_confirmed").innerHTML = data['rows'][0][0];
}

//TABLE 6 
//1-day mastermind
//in-person
var query40 = 'SELECT SUM(tickets_sold) FROM dataset0 WHERE ticket_type_id in (404)';
domo.post('/sql/v1/dataset0', query40, {contentType: 'text/plain'}).then(result40);
 function result40(data){
  console && console.log(data);
  document.getElementById("table6-in-person").innerHTML = data['rows'][0][0];
}
var query41 = 'SELECT SUM(tickets_sold) FROM dataset0 WHERE ticket_type_id in (405)';
domo.post('/sql/v1/dataset0', query41, {contentType: 'text/plain'}).then(result41);
 function result41(data){
  console && console.log(data);
  document.getElementById("table6-virtual").innerHTML = data['rows'][0][0];
}
//timer 1
var countDownDate1 = new Date("Apr 2, 2024 08:00:00").getTime();

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
    
  document.getElementById("timer1").innerHTML =days+" Days "+hours+'hr:'+minutes+"m:"+seconds+"s" ;
    
  // If the count down is over, write some text 
  if (distance1 < 0) {
    clearInterval(x1);
    document.getElementById("timer1").innerHTML = "Event Live";
  }
}, 1000);




//not in use
var query42 = 'SELECT SUM(tickets_sold) FROM dataset0 WHERE ticket_type_id in (493) AND ticket_stage_v2 = 1';
domo.post('/sql/v1/dataset0', query42, {contentType: 'text/plain'}).then(result42);
 function result42(data){
  console && console.log(data);
  document.getElementById("ybi-baller-tickets_confirmed").innerHTML = data['rows'][0][0];
}
var query43 = 'SELECT SUM(tickets_sold) FROM dataset0 WHERE ticket_type_id in (758)';
domo.post('/sql/v1/dataset0', query43, {contentType: 'text/plain'}).then(result43);
 function result43(data){
  console && console.log(data);
  document.getElementById("ybi-vip-tickets_sold").innerHTML = data['rows'][0][0];
}
var query44 = 'SELECT SUM(tickets_sold) FROM dataset0 WHERE ticket_type_id in (492)';
domo.post('/sql/v1/dataset0', query44, {contentType: 'text/plain'}).then(result44);
 function result44(data){
  console && console.log(data);
  document.getElementById("ybi-exec-tickets_sold").innerHTML = data['rows'][0][0];
}
var query45 = 'SELECT SUM(tickets_sold) FROM dataset0 WHERE event_id = 608';
domo.post('/sql/v1/dataset0', query45, {contentType: 'text/plain'}).then(result45);
 function result45(data){
  console && console.log(data);
  document.getElementById("ybi-tot-tickets_sold").innerHTML = data['rows'][0][0];
}
