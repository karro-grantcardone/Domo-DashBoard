var domo = window.domo; // For more on domo.js: https://developer.domo.com/docs/dev-studio-guides/domo-js#domo.get
var datasets = window.datasets;

//TABLE 1
//10X Celebrity Cruise
//owers
var query1a = 'SELECT SUM(tickets_sold) FROM dataset1 WHERE ticket_type_id in (100)';
domo.post('/sql/v1/dataset1', query1a, {contentType: 'text/plain'}).then(result1a);
 function result1a(data){
  console && console.log(data);
  document.getElementById("table1-item1").innerHTML = data['rows'][0][0];
}
var query1b = 'SELECT SUM(tickets_left) FROM dataset1 WHERE ticket_type_id in (100)';
domo.post('/sql/v1/dataset1', query1b, {contentType: 'text/plain'}).then(result1b);
 function result1b(data){
  console && console.log(data);
  document.getElementById("table1-item2").innerHTML = data['rows'][0][0];
}
var query1c = 'SELECT SUM(tickets_confirmed) FROM dataset1 WHERE ticket_type_id in (100)';
domo.post('/sql/v1/dataset1', query1c, {contentType: 'text/plain'}).then(result1c);
 function result1c(data){
  console && console.log(data);
  document.getElementById("table1-item3").innerHTML = data['rows'][0][0];
}
//concierge
var query1d = 'SELECT SUM(tickets_sold) FROM dataset1 WHERE ticket_type_id in (101)';
domo.post('/sql/v1/dataset1', query1d, {contentType: 'text/plain'}).then(result1d);
 function result1d(data){
  console && console.log(data);
  document.getElementById("table1-item4").innerHTML = data['rows'][0][0];
}
var query1e = 'SELECT SUM(tickets_left) FROM dataset1 WHERE ticket_type_id in (101)';
domo.post('/sql/v1/dataset1', query1e, {contentType: 'text/plain'}).then(result1e);
 function result1e(data){
  console && console.log(data);
  document.getElementById("table1-item5").innerHTML = data['rows'][0][0];
}
var query1f = 'SELECT SUM(tickets_confirmed) FROM dataset1 WHERE ticket_type_id in (101)';
domo.post('/sql/v1/dataset1', query1f, {contentType: 'text/plain'}).then(result1f);
 function result1f(data){
  console && console.log(data);
  document.getElementById("table1-item6").innerHTML = data['rows'][0][0];
}
//ilma
var query1g = 'SELECT SUM(tickets_sold) FROM dataset1 WHERE ticket_type_id in (102)';
domo.post('/sql/v1/dataset1', query1g, {contentType: 'text/plain'}).then(result1g);
 function result1g(data){
  console && console.log(data);
  document.getElementById("table1-item7").innerHTML = data['rows'][0][0];
}
var query1h = 'SELECT SUM(tickets_left) FROM dataset1 WHERE ticket_type_id in (102)';
domo.post('/sql/v1/dataset1', query1h, {contentType: 'text/plain'}).then(result1h);
 function result1h(data){
  console && console.log(data);
  document.getElementById("table1-item8").innerHTML = data['rows'][0][0];
}
var query3i = 'SELECT SUM(tickets_confirmed) FROM dataset1 WHERE ticket_type_id in (102)';
domo.post('/sql/v1/dataset1', query3i, {contentType: 'text/plain'}).then(result3i);
 function result3i(data){
  console && console.log(data);
  document.getElementById("table3-item9").innerHTML = data['rows'][0][0];
}
// view
var query1j = 'SELECT SUM(tickets_sold) FROM dataset1 WHERE ticket_type_id in (103)';
domo.post('/sql/v1/dataset1', query1j, {contentType: 'text/plain'}).then(result1j);
 function result1j(data){
  console && console.log(data);
  document.getElementById("table1-item10").innerHTML = data['rows'][0][0];
}
var query1k = 'SELECT SUM(tickets_left) FROM dataset1 WHERE ticket_type_id in (103)';
domo.post('/sql/v1/dataset1', query1k, {contentType: 'text/plain'}).then(result1k);
 function result1k(data){
  console && console.log(data);
  document.getElementById("table1-item11").innerHTML = data['rows'][0][0];
}
var query1l = 'SELECT SUM(tickets_confirmed) FROM dataset1 WHERE ticket_type_id in (103)';
domo.post('/sql/v1/dataset1', query1l, {contentType: 'text/plain'}).then(result1l);
 function result1l(data){
  console && console.log(data);
  document.getElementById("table1-item12").innerHTML = data['rows'][0][0];
}
//grand
var query1m = 'SELECT SUM(tickets_sold) FROM dataset1 WHERE ticket_type_id in (104)';
domo.post('/sql/v1/dataset1', query1m, {contentType: 'text/plain'}).then(result1m);
 function result1m(data){
  console && console.log(data);
  document.getElementById("table1-item13").innerHTML = data['rows'][0][0];
}
var query1n = 'SELECT SUM(tickets_left) FROM dataset1 WHERE ticket_type_id in (104)';
domo.post('/sql/v1/dataset1', query1n, {contentType: 'text/plain'}).then(result1n);
 function result1n(data){
  console && console.log(data);
  document.getElementById("table1-item14").innerHTML = data['rows'][0][0];
}
var query1o = 'SELECT SUM(tickets_confirmed) FROM dataset1 WHERE ticket_type_id in (104)';
domo.post('/sql/v1/dataset1', query1o, {contentType: 'text/plain'}).then(result1o);
 function result1o(data){
  console && console.log(data);
  document.getElementById("table1-item15").innerHTML = data['rows'][0][0];
}
//signature
var query1p = 'SELECT SUM(tickets_sold) FROM dataset1 WHERE ticket_type_id in (105)';
domo.post('/sql/v1/dataset1', query1p, {contentType: 'text/plain'}).then(result1p);
 function result1p(data){
  console && console.log(data);
  document.getElementById("table1-item16").innerHTML = data['rows'][0][0];
}
var query1q = 'SELECT SUM(tickets_left) FROM dataset1 WHERE ticket_type_id in (105)';
domo.post('/sql/v1/dataset1', query1q, {contentType: 'text/plain'}).then(result1q);
 function result1q(data){
  console && console.log(data);
  document.getElementById("table1-item17").innerHTML = data['rows'][0][0];
}
var query1r = 'SELECT SUM(tickets_confirmed) FROM dataset1 WHERE ticket_type_id in (105)';
domo.post('/sql/v1/dataset1', query1r, {contentType: 'text/plain'}).then(result1r);
 function result1r(data){
  console && console.log(data);
  document.getElementById("table1-item18").innerHTML = data['rows'][0][0];
}
//total
var query1s = 'SELECT SUM(tickets_sold) FROM dataset1 WHERE ticket_type_id in (100,101,102,103,104,105)';
domo.post('/sql/v1/dataset1', query1s, {contentType: 'text/plain'}).then(result1s);
 function result1s(data){
  console && console.log(data);
  document.getElementById("table1-item19").innerHTML = data['rows'][0][0];
}
var query1t = 'SELECT SUM(tickets_left) FROM dataset1 WHERE ticket_type_id in (100,101,102,103,104,105)';
domo.post('/sql/v1/dataset1', query1t, {contentType: 'text/plain'}).then(result1t);
 function result1t(data){
  console && console.log(data);
  document.getElementById("table1-item20").innerHTML = data['rows'][0][0];
}
var query1u = 'SELECT SUM(tickets_confirmed) FROM dataset1 WHERE ticket_type_id in (100,101,102,103,104,105)';
domo.post('/sql/v1/dataset1', query1u, {contentType: 'text/plain'}).then(result1u);
 function result1u(data){
  console && console.log(data);
  document.getElementById("table1-item21").innerHTML = data['rows'][0][0];
}
//TABLE 2
//GROWTH CONFERENCE
//diamon-fr
var query5b = 'SELECT SUM(tickets_sold) FROM dataset0 WHERE ticket_type_id in (597)';
domo.post('/sql/v1/dataset0', query5b, {contentType: 'text/plain'}).then(result5b);
 function result5b(data){
  console && console.log(data);
  document.getElementById("gc-diamond-fr-tickets_sold").innerHTML = data['rows'][0][0];
}
var query51 = 'SELECT SUM(tickets_left) FROM dataset0 WHERE ticket_type_id in (597)';
domo.post('/sql/v1/dataset0', query51, {contentType: 'text/plain'}).then(result51);
 function result51(data){
  console && console.log(data);
  document.getElementById("gc-diamond-fr-tickets_left").innerHTML = data['rows'][0][0];
}
var query6b = 'SELECT SUM(tickets_confirmed) FROM dataset0 WHERE ticket_type_id in (597)';
domo.post('/sql/v1/dataset0', query6b, {contentType: 'text/plain'}).then(result6b);
 function result6b(data){
  console && console.log(data);
  document.getElementById("gc-diamond-fr-tickets_confirmed").innerHTML = data['rows'][0][0];
}
var query6ba = 'SELECT seats FROM dataset0 WHERE ticket_type_id in (597)';
domo.post('/sql/v1/dataset0', query6ba, {contentType: 'text/plain'}).then(result6ba);
 function result6ba(data){
  console && console.log(data);
  document.getElementById("gc-diamond-fr-tickets_seats").innerHTML = data['rows'][0][0];
}
//diamond
var query7b = 'SELECT SUM(tickets_sold) FROM dataset0 WHERE ticket_type_id in (596)';
domo.post('/sql/v1/dataset0', query7b, {contentType: 'text/plain'}).then(result7b);
 function result7b(data){
  console && console.log(data);
  document.getElementById("gc-diamond-tickets_sold").innerHTML = data['rows'][0][0];
}
var query7ab = 'SELECT SUM(tickets_left) FROM dataset0 WHERE ticket_type_id in (596)';
domo.post('/sql/v1/dataset0', query7ab, {contentType: 'text/plain'}).then(result7ab);
 function result7ab(data){
  console && console.log(data);
  document.getElementById("gc-diamond-tickets_left").innerHTML = data['rows'][0][0];
}
var query8b = 'SELECT SUM(tickets_confirmed) FROM dataset0 WHERE ticket_type_id in (596)';
domo.post('/sql/v1/dataset0', query8b, {contentType: 'text/plain'}).then(result8b);
 function result8b(data){
  console && console.log(data);
  document.getElementById("gc-diamond-tickets_confirmed").innerHTML = data['rows'][0][0];
}
var query8ba = 'SELECT seats FROM dataset0 WHERE ticket_type_id in (596)';
domo.post('/sql/v1/dataset0', query8ba, {contentType: 'text/plain'}).then(result8ba);
 function result8ba(data){
  console && console.log(data);
  document.getElementById("gc-diamond-tickets_seats").innerHTML = data['rows'][0][0];
}
//premier
var query9 = 'SELECT SUM(tickets_sold) FROM dataset0 WHERE ticket_type_id in (553)';
domo.post('/sql/v1/dataset0', query9, {contentType: 'text/plain'}).then(result9);
 function result9(data){
  console && console.log(data);
  document.getElementById("gc-premier-tickets_sold").innerHTML = data['rows'][0][0];
}
var query9ab = 'SELECT SUM(tickets_left) FROM dataset0 WHERE ticket_type_id in (553)';
domo.post('/sql/v1/dataset0', query9ab, {contentType: 'text/plain'}).then(result9ab);
 function result9ab(data){
  console && console.log(data);
  document.getElementById("gc-premier-tickets_left").innerHTML = data['rows'][0][0];
}
var query10ab = 'SELECT SUM(tickets_confirmed) FROM dataset0 WHERE ticket_type_id in (553)';
domo.post('/sql/v1/dataset0', query10ab, {contentType: 'text/plain'}).then(result10ab);
 function result10ab(data){
  console && console.log(data);
  document.getElementById("gc-premier-tickets_confirmed").innerHTML = data['rows'][0][0];
}
var query10abc = 'SELECT seats FROM dataset0 WHERE ticket_type_id in (553)';
domo.post('/sql/v1/dataset0', query10abc, {contentType: 'text/plain'}).then(result10abc);
 function result10abc(data){
  console && console.log(data);
  document.getElementById("gc-premier-tickets_seats").innerHTML = data['rows'][0][0];
}
//vip
var query11 = 'SELECT SUM(tickets_sold) FROM dataset0 WHERE ticket_type_id in (595)';
domo.post('/sql/v1/dataset0', query11, {contentType: 'text/plain'}).then(result11);
 function result11(data){
  console && console.log(data);
  document.getElementById("gc-vip-tickets_sold").innerHTML = +data['rows'][0][0];
}
var query11bb = 'SELECT SUM(tickets_left) FROM dataset0 WHERE ticket_type_id in (595)';
domo.post('/sql/v1/dataset0', query11bb, {contentType: 'text/plain'}).then(result11bb);
 function result11bb(data){
  console && console.log(data);
  document.getElementById("gc-vip-tickets_left").innerHTML = data['rows'][0][0];
}
var query12 = 'SELECT SUM(tickets_confirmed) FROM dataset0 WHERE ticket_type_id in (595)';
domo.post('/sql/v1/dataset0', query12, {contentType: 'text/plain'}).then(result12);
 function result12(data){
  console && console.log(data);
  document.getElementById("gc-vip-tickets_confirmed").innerHTML = data['rows'][0][0];
}
var query12ab = 'SELECT seats FROM dataset0 WHERE ticket_type_id in (595)';
domo.post('/sql/v1/dataset0', query12ab, {contentType: 'text/plain'}).then(result12ab);
 function result12ab(data){
  console && console.log(data);
  document.getElementById("gc-vip-tickets_seats").innerHTML = data['rows'][0][0];
}
//executive
var query13 = 'SELECT SUM(tickets_sold) FROM dataset0 WHERE ticket_type_id in (594)';
domo.post('/sql/v1/dataset0', query13, {contentType: 'text/plain'}).then(result13);
 function result13(data){
  console && console.log(data);
  document.getElementById("gc-exec-tickets_sold").innerHTML = data['rows'][0][0];
}
var query13ab = 'SELECT SUM(tickets_left) FROM dataset0 WHERE ticket_type_id in (594)';
domo.post('/sql/v1/dataset0', query13ab, {contentType: 'text/plain'}).then(result13ab);
 function result13ab(data){
  console && console.log(data);
  document.getElementById("gc-exec-tickets_left").innerHTML = data['rows'][0][0];
}
var query14 = 'SELECT SUM(tickets_confirmed) FROM dataset0 WHERE ticket_type_id in (594)';
domo.post('/sql/v1/dataset0', query14, {contentType: 'text/plain'}).then(result14);
 function result14(data){
  console && console.log(data);
  document.getElementById("gc-exec-tickets_confirmed").innerHTML = data['rows'][0][0];
}
//virtual
var query15 = 'SELECT SUM(tickets_sold) FROM dataset0 WHERE ticket_type_id in (984)';
domo.post('/sql/v1/dataset0', query15, {contentType: 'text/plain'}).then(result15);
 function result15(data){
  console && console.log(data);
  document.getElementById("gc-virtual-tickets_sold").innerHTML = data['rows'][0][0];
}
var query150a = 'SELECT SUM(tickets_sold) FROM dataset0 WHERE ticket_type_id in (985)';
domo.post('/sql/v1/dataset0', query150a, {contentType: 'text/plain'}).then(result150a);
 function result150a(data){
  console && console.log(data);
  document.getElementById("gc-virtual-vip-tickets_sold").innerHTML = data['rows'][0][0];
}
//total
var query16 = 'SELECT SUM(tickets_sold) FROM dataset0 WHERE ticket_type_id in (597,596,553,595,594)';
domo.post('/sql/v1/dataset0', query16, {contentType: 'text/plain'}).then(result16);
 function result16(data){
  console && console.log(data);
  document.getElementById("gc-tot-tickets_sold").innerHTML = +data['rows'][0][0] - 136;
}
var query16ab = 'SELECT SUM(tickets_left) FROM dataset0 WHERE ticket_type_id in (597,596,553,595,594)';
domo.post('/sql/v1/dataset0', query16ab, {contentType: 'text/plain'}).then(result16ab);
 function result16ab(data){
  console && console.log(data);
  document.getElementById("gc-tot-tickets_left").innerHTML = +data['rows'][0][0];
}
var query17 = 'SELECT SUM(tickets_confirmed) FROM dataset0 WHERE ticket_type_id in (597,596,553,595,594)';
domo.post('/sql/v1/dataset0', query17, {contentType: 'text/plain'}).then(result17);
 function result17(data){
  console && console.log(data);
  document.getElementById("gc-tot-tickets_confirmed").innerHTML = data['rows'][0][0];
}
var query17gc = 'SELECT SUM(seats) FROM dataset0 WHERE ticket_type_id in (365,366,367,368,369)';
domo.post ('/sql/v1/dataset0', query17gc, {contentType: 'text/plain'}).then(result17gc);
 function result17gc(data){
  console && console.log(data);
  document.getElementById("gc-tot-seat-select").innerHTML = data['rows'][0][0];
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
//COUPLES RETREAT MAY
var query4a = 'SELECT SUM(tickets_sold) FROM dataset0 WHERE ticket_type_id in (642)';
domo.post('/sql/v1/dataset0', query4a, {contentType: 'text/plain'}).then(result4a);
 function result4a(data){
  console && console.log(data);
  document.getElementById("table4-item1").innerHTML = data['rows'][0][0];
 }
var query4b = 'SELECT SUM(tickets_left) FROM dataset0 WHERE ticket_type_id in (642)';
domo.post('/sql/v1/dataset0', query4b, {contentType: 'text/plain'}).then(result4b);
 function result4b(data){
  console && console.log(data);
  document.getElementById("table4-item2").innerHTML = data['rows'][0][0];
 }
var query4c = 'SELECT SUM(tickets_confirmed) FROM dataset0 WHERE ticket_type_id in (642)';
domo.post('/sql/v1/dataset0', query4c, {contentType: 'text/plain'}).then(result4c);
 function result4c(data){
  console && console.log(data);
  document.getElementById("table4-item3").innerHTML = data['rows'][0][0];
 }
var query4d = 'SELECT SUM(tickets_sold) FROM dataset0 WHERE ticket_type_id in (643)';
domo.post('/sql/v1/dataset0', query4d, {contentType: 'text/plain'}).then(result4d);
 function result4d(data){
  console && console.log(data);
  document.getElementById("table4-item4").innerHTML = data['rows'][0][0];
 }
var query4e = 'SELECT SUM(tickets_left) FROM dataset0 WHERE ticket_type_id in (643)';
domo.post('/sql/v1/dataset0', query4e, {contentType: 'text/plain'}).then(result4e);
 function result4e(data){
  console && console.log(data);
  document.getElementById("table4-item5").innerHTML = data['rows'][0][0];
 }
var query4f = 'SELECT SUM(tickets_confirmed) FROM dataset0 WHERE ticket_type_id in (643)';
domo.post('/sql/v1/dataset0', query4f, {contentType: 'text/plain'}).then(result4f);
 function result4f(data){
  console && console.log(data);
  document.getElementById("table4-item6").innerHTML = data['rows'][0][0];
 }

//TABLE 5 
//1-day mastermind
//in-person
var query100a = 'SELECT SUM(tickets_sold) FROM dataset0 WHERE ticket_type_id in (1059)';
domo.post('/sql/v1/dataset0', query100a, {contentType: 'text/plain'}).then(result100a);
 function result100a(data){
  console && console.log(data);
  document.getElementById("table5-item1").innerHTML = data['rows'][0][0];
}
var query100b = 'SELECT SUM(tickets_left) FROM dataset0 WHERE ticket_type_id in (1059)';
domo.post('/sql/v1/dataset0', query100b, {contentType: 'text/plain'}).then(result100b);
 function result100b(data){
  console && console.log(data);
  document.getElementById("table5-item2").innerHTML = data['rows'][0][0];
}
var query100c = 'SELECT SUM(tickets_confirmed) FROM dataset0 WHERE ticket_type_id in (1059)';
domo.post('/sql/v1/dataset0', query100c, {contentType: 'text/plain'}).then(result100c);
 function result100c(data){
  console && console.log(data);
  document.getElementById("table5-item3").innerHTML = data['rows'][0][0];
}
var query100d = 'SELECT SUM(tickets_sold) FROM dataset0 WHERE ticket_type_id in (1073)';
domo.post('/sql/v1/dataset0', query100d, {contentType: 'text/plain'}).then(result100d);
 function result100d(data){
  console && console.log(data);
  document.getElementById("table5-item4").innerHTML = data['rows'][0][0];
}

//TABLE 6
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
var query11b = 'SELECT COUNT(*) FROM dataset2 WHERE ticket_type_id in (201)';
domo.post('/sql/v1/dataset2', query11b, {contentType: 'text/plain'}).then(result11b);
 function result11b(data){
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
domo.post('/sql/v1/dataset2', query1000a, {contentType: 'text/plain'}).then(result21b);
 function result21b(data){
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