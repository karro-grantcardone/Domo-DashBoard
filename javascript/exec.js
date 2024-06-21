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
//Real Estate Summit
//Ultimnate Vip
var query3a = 'SELECT SUM(tickets_sold) FROM dataset0 WHERE ticket_type_id in (453)';
domo.post('/sql/v1/dataset0', query3a, {contentType: 'text/plain'}).then(result3a);
 function result3a(data){
  console && console.log(data);
  document.getElementById("table3-item1").innerHTML = data['rows'][0][0];
}
var query3b = 'SELECT SUM(tickets_left) FROM dataset0 WHERE ticket_type_id in (453)';
domo.post('/sql/v1/dataset0', query3b, {contentType: 'text/plain'}).then(result3b);
 function result3b(data){
  console && console.log(data);
  document.getElementById("table3-item2").innerHTML = data['rows'][0][0];
}
var query3c = 'SELECT SUM(tickets_confirmed) FROM dataset0 WHERE ticket_type_id in (453)';
domo.post('/sql/v1/dataset0', query3c, {contentType: 'text/plain'}).then(result3c);
 function result3c(data){
  console && console.log(data);
  document.getElementById("table3-item3").innerHTML = data['rows'][0][0];
}
//super vip
var query3d = 'SELECT SUM(tickets_sold) FROM dataset0 WHERE ticket_type_id in (650)';
domo.post('/sql/v1/dataset0', query3d, {contentType: 'text/plain'}).then(result3d);
 function result3d(data){
  console && console.log(data);
  document.getElementById("table3-item4").innerHTML = data['rows'][0][0];
}
var query3e = 'SELECT SUM(tickets_left) FROM dataset0 WHERE ticket_type_id in (650)';
domo.post('/sql/v1/dataset0', query3e, {contentType: 'text/plain'}).then(result3e);
 function result3e(data){
  console && console.log(data);
  document.getElementById("table3-item5").innerHTML = data['rows'][0][0];
}
var query3f = 'SELECT SUM(tickets_confirmed) FROM dataset0 WHERE ticket_type_id in (650)';
domo.post('/sql/v1/dataset0', query3f, {contentType: 'text/plain'}).then(result3f);
 function result3f(data){
  console && console.log(data);
  document.getElementById("table3-item6").innerHTML = data['rows'][0][0];
}
//VIP
var query3g = 'SELECT SUM(tickets_sold) FROM dataset0 WHERE ticket_type_id in (452)';
domo.post('/sql/v1/dataset0', query3g, {contentType: 'text/plain'}).then(result3g);
 function result3g(data){
  console && console.log(data);
  document.getElementById("table3-item7").innerHTML = data['rows'][0][0];
}
var query3h = 'SELECT SUM(tickets_left) FROM dataset0 WHERE ticket_type_id in (452)';
domo.post('/sql/v1/dataset0', query3h, {contentType: 'text/plain'}).then(result3h);
 function result3h(data){
  console && console.log(data);
  document.getElementById("table3-item8").innerHTML = data['rows'][0][0];
}
var query3i = 'SELECT SUM(tickets_confirmed) FROM dataset0 WHERE ticket_type_id in (452)';
domo.post('/sql/v1/dataset0', query3i, {contentType: 'text/plain'}).then(result3i);
 function result3i(data){
  console && console.log(data);
  document.getElementById("table3-item9").innerHTML = data['rows'][0][0];
}
//TOTAL VIP
var query3j = 'SELECT SUM(tickets_sold) FROM dataset0 WHERE ticket_type_id in (452,453,650)';
domo.post('/sql/v1/dataset0', query3j, {contentType: 'text/plain'}).then(result3j);
 function result3j(data){
  console && console.log(data);
  document.getElementById("table3-item10").innerHTML = data['rows'][0][0];
}
var query3k = 'SELECT SUM(tickets_left) FROM dataset0 WHERE ticket_type_id in (452,453,650)';
domo.post('/sql/v1/dataset0', query3k, {contentType: 'text/plain'}).then(result3k);
 function result3k(data){
  console && console.log(data);
  document.getElementById("table3-item11").innerHTML = data['rows'][0][0];
}
var query3l = 'SELECT SUM(tickets_confirmed) FROM dataset0 WHERE ticket_type_id in (452,453,650)';
domo.post('/sql/v1/dataset0', query3l, {contentType: 'text/plain'}).then(result3l);
 function result3l(data){
  console && console.log(data);
  document.getElementById("table3-item12").innerHTML = data['rows'][0][0];
}
//Ececutive
var query3m = 'SELECT SUM(tickets_sold) FROM dataset0 WHERE ticket_type_id in (451)';
domo.post('/sql/v1/dataset0', query3m, {contentType: 'text/plain'}).then(result3m);
 function result3m(data){
  console && console.log(data);
  document.getElementById("table3-item13").innerHTML = data['rows'][0][0];
}
var query3n = 'SELECT SUM(tickets_left) FROM dataset0 WHERE ticket_type_id in (451)';
domo.post('/sql/v1/dataset0', query3n, {contentType: 'text/plain'}).then(result3n);
 function result3n(data){
  console && console.log(data);
  document.getElementById("table3-item14").innerHTML = data['rows'][0][0];
}
var query3o = 'SELECT SUM(tickets_confirmed) FROM dataset0 WHERE ticket_type_id in (451)';
domo.post('/sql/v1/dataset0', query3o, {contentType: 'text/plain'}).then(result3o);
 function result3o(data){
  console && console.log(data);
  document.getElementById("table3-item15").innerHTML = data['rows'][0][0];
}
//Total
var query3p = 'SELECT SUM(tickets_sold) FROM dataset0 WHERE ticket_type_id in (451,452,453,650)';
domo.post('/sql/v1/dataset0', query3p, {contentType: 'text/plain'}).then(result3p);
 function result3p(data){
  console && console.log(data);
  document.getElementById("table3-item16").innerHTML = data['rows'][0][0];
}
var query3q = 'SELECT SUM(tickets_left) FROM dataset0 WHERE ticket_type_id in (451,452,453,650)';
domo.post('/sql/v1/dataset0', query3q, {contentType: 'text/plain'}).then(result3q);
 function result3q(data){
  console && console.log(data);
  document.getElementById("table3-item17").innerHTML = data['rows'][0][0];
}
var query3r = 'SELECT SUM(tickets_confirmed) FROM dataset0 WHERE ticket_type_id in (451,452,453,650)';
domo.post('/sql/v1/dataset0', query3r, {contentType: 'text/plain'}).then(result3r);
 function result3r(data){
  console && console.log(data);
  document.getElementById("table3-item18").innerHTML = data['rows'][0][0];
}
//virtual
var query20 = 'SELECT SUM(tickets_sold) FROM dataset0 WHERE ticket_type_id in (454)';
domo.post('/sql/v1/dataset0', query20, {contentType: 'text/plain'}).then(result20);
 function result20(data){
  console && console.log(data);
  document.getElementById("table3-item19").innerHTML = data['rows'][0][0];
}
//TABLE 4
//COUPLES RETREAT MAY
var query4a = 'SELECT SUM(tickets_sold) FROM dataset0 WHERE ticket_type_id in (644)';
domo.post('/sql/v1/dataset0', query4a, {contentType: 'text/plain'}).then(result4a);
 function result4a(data){
  console && console.log(data);
  document.getElementById("table4-item1").innerHTML = data['rows'][0][0];
 }
var query4b = 'SELECT SUM(tickets_left) FROM dataset0 WHERE ticket_type_id in (644)';
domo.post('/sql/v1/dataset0', query4b, {contentType: 'text/plain'}).then(result4b);
 function result4b(data){
  console && console.log(data);
  document.getElementById("table4-item2").innerHTML = data['rows'][0][0];
 }
var query4c = 'SELECT SUM(tickets_confirmed) FROM dataset0 WHERE ticket_type_id in (644)';
domo.post('/sql/v1/dataset0', query4c, {contentType: 'text/plain'}).then(result4c);
 function result4c(data){
  console && console.log(data);
  document.getElementById("table4-item3").innerHTML = data['rows'][0][0];
 }
var query4d = 'SELECT SUM(tickets_sold) FROM dataset0 WHERE ticket_type_id in (645)';
domo.post('/sql/v1/dataset0', query4d, {contentType: 'text/plain'}).then(result4d);
 function result4d(data){
  console && console.log(data);
  document.getElementById("table4-item4").innerHTML = data['rows'][0][0];
 }
var query4e = 'SELECT SUM(tickets_left) FROM dataset0 WHERE ticket_type_id in (645)';
domo.post('/sql/v1/dataset0', query4e, {contentType: 'text/plain'}).then(result4e);
 function result4e(data){
  console && console.log(data);
  document.getElementById("table4-item5").innerHTML = data['rows'][0][0];
 }
var query4f = 'SELECT SUM(tickets_confirmed) FROM dataset0 WHERE ticket_type_id in (645)';
domo.post('/sql/v1/dataset0', query4f, {contentType: 'text/plain'}).then(result4f);
 function result4f(data){
  console && console.log(data);
  document.getElementById("table4-item6").innerHTML = data['rows'][0][0];
 }

//TABLE 5 
//1-day mastermind
//diamond
var query400a = 'SELECT SUM(tickets_sold) FROM dataset0 WHERE ticket_type_id in (471)';
domo.post('/sql/v1/dataset0', query400a, {contentType: 'text/plain'}).then(result400a);
 function result400a(data){
  console && console.log(data);
  document.getElementById("table5-item1").innerHTML = data['rows'][0][0];
}
var query400b = 'SELECT SUM(tickets_left) FROM dataset0 WHERE ticket_type_id in (471)';
domo.post('/sql/v1/dataset0', query400b, {contentType: 'text/plain'}).then(result400b);
 function result400b(data){
  console && console.log(data);
  document.getElementById("table5-item2").innerHTML = data['rows'][0][0];
}
var query400c = 'SELECT SUM(tickets_confirmed) FROM dataset0 WHERE ticket_type_id in (471)';
domo.post('/sql/v1/dataset0', query400c, {contentType: 'text/plain'}).then(result400c);
 function result400c(data){
  console && console.log(data);
  document.getElementById("table5-item3").innerHTML = data['rows'][0][0];
}
//vip
var query400d = 'SELECT SUM(tickets_sold) FROM dataset0 WHERE ticket_type_id in (470)';
domo.post('/sql/v1/dataset0', query400d, {contentType: 'text/plain'}).then(result400d);
 function result400d(data){
  console && console.log(data);
  document.getElementById("table5-item4").innerHTML = data['rows'][0][0];
}
var query400e = 'SELECT SUM(tickets_left) FROM dataset0 WHERE ticket_type_id in (470)';
domo.post('/sql/v1/dataset0', query400e, {contentType: 'text/plain'}).then(result400e);
 function result400e(data){
  console && console.log(data);
  document.getElementById("table5-item5").innerHTML = data['rows'][0][0];
}
var query400f = 'SELECT SUM(tickets_confirmed) FROM dataset0 WHERE ticket_type_id in (470)';
domo.post('/sql/v1/dataset0', query400f, {contentType: 'text/plain'}).then(result400f);
 function result400f(data){
  console && console.log(data);
  document.getElementById("table5-item6").innerHTML = data['rows'][0][0];
}
//executive
var query400g = 'SELECT SUM(tickets_sold) FROM dataset0 WHERE ticket_type_id in (469)';
domo.post('/sql/v1/dataset0', query400g, {contentType: 'text/plain'}).then(result400g);
 function result400g(data){
  console && console.log(data);
  document.getElementById("table5-item7").innerHTML = data['rows'][0][0];
}
var query400h = 'SELECT SUM(tickets_left) FROM dataset0 WHERE ticket_type_id in (469)';
domo.post('/sql/v1/dataset0', query400h, {contentType: 'text/plain'}).then(result400h);
 function result400h(data){
  console && console.log(data);
  document.getElementById("table5-item8").innerHTML = data['rows'][0][0];
}
var query400i = 'SELECT SUM(tickets_confirmed) FROM dataset0 WHERE ticket_type_id in (469)';
domo.post('/sql/v1/dataset0', query400i, {contentType: 'text/plain'}).then(result400i);
 function result400i(data){
  console && console.log(data);
  document.getElementById("table5-item9").innerHTML = data['rows'][0][0];
}
//general
var query400j = 'SELECT SUM(tickets_sold) FROM dataset0 WHERE ticket_type_id in (504)';
domo.post('/sql/v1/dataset0', query400j, {contentType: 'text/plain'}).then(result400j);
 function result400j(data){
  console && console.log(data);
  document.getElementById("table5-item10").innerHTML = data['rows'][0][0];
}
var query400k = 'SELECT SUM(tickets_left) FROM dataset0 WHERE ticket_type_id in (504)';
domo.post('/sql/v1/dataset0', query400k, {contentType: 'text/plain'}).then(result400k);
 function result400k(data){
  console && console.log(data);
  document.getElementById("table5-item11").innerHTML = data['rows'][0][0];
}
var query400l = 'SELECT SUM(tickets_confirmed) FROM dataset0 WHERE ticket_type_id in (504)';
domo.post('/sql/v1/dataset0', query400l, {contentType: 'text/plain'}).then(result400l);
 function result400l(data){
  console && console.log(data);
  document.getElementById("table5-item12").innerHTML = data['rows'][0][0];
}
//total
var query400m = 'SELECT SUM(tickets_sold) FROM dataset0 WHERE ticket_type_id in (504,469,470,471)';
domo.post('/sql/v1/dataset0', query400m, {contentType: 'text/plain'}).then(result400m);
 function result400m(data){
  console && console.log(data);
  document.getElementById("table5-item13").innerHTML = data['rows'][0][0];
}
var query400n = 'SELECT SUM(tickets_left) FROM dataset0 WHERE ticket_type_id in (504,469,470,471)';
domo.post('/sql/v1/dataset0', query400n, {contentType: 'text/plain'}).then(result400n);
 function result400n(data){
  console && console.log(data);
  document.getElementById("table5-item14").innerHTML = data['rows'][0][0];
}
var query400o = 'SELECT SUM(tickets_confirmed) FROM dataset0 WHERE ticket_type_id in (504,469,470,471)';
domo.post('/sql/v1/dataset0', query400o, {contentType: 'text/plain'}).then(result400o);
 function result400o(data){
  console && console.log(data);
  document.getElementById("table5-item15").innerHTML = data['rows'][0][0];
}


//TABLE 6
//10X BUSINESS SUMMIT
// super vip
var query6a = 'SELECT SUM(tickets_sold) FROM dataset0 WHERE ticket_type_id in (606)';
domo.post('/sql/v1/dataset0', query6a, {contentType: 'text/plain'}).then(result6a);
 function result6a(data){
  console && console.log(data);
  document.getElementById("table6-item1").innerHTML = data['rows'][0][0];
}
var query6b = 'SELECT SUM(tickets_left) FROM dataset0 WHERE  ticket_type_id in (606)';
domo.post('/sql/v1/dataset0', query6b, {contentType: 'text/plain'}).then(result6b);
 function result6b(data){
  console && console.log(data);
  document.getElementById("table6-item2").innerHTML = data['rows'][0][0];
}
var query6c = 'SELECT SUM(tickets_confirmed) FROM dataset0 WHERE ticket_type_id in (606)';
domo.post('/sql/v1/dataset0', query6c, {contentType: 'text/plain'}).then(result6c);
 function result6c(data){
  console && console.log(data);
  document.getElementById("table6-item3").innerHTML = data['rows'][0][0];
}
//vip
var query6d = 'SELECT SUM(tickets_sold) FROM dataset0 WHERE ticket_type_id in (443)';
domo.post('/sql/v1/dataset0', query6d, {contentType: 'text/plain'}).then(result6d);
 function result6d(data){
  console && console.log(data);
  document.getElementById("table6-item4").innerHTML = data['rows'][0][0];
}
var query6e = 'SELECT SUM(tickets_left) FROM dataset0 WHERE  ticket_type_id in (443)';
domo.post('/sql/v1/dataset0', query6e, {contentType: 'text/plain'}).then(result6e);
 function result6e(data){
  console && console.log(data);
  document.getElementById("table6-item5").innerHTML = data['rows'][0][0];
}
var query6f = 'SELECT SUM(tickets_confirmed) FROM dataset0 WHERE ticket_type_id in (443)';
domo.post('/sql/v1/dataset0', query6f, {contentType: 'text/plain'}).then(result6f);
 function result6f(data){
  console && console.log(data);
  document.getElementById("table6-item6").innerHTML = data['rows'][0][0];
}
//executive
var query6g = 'SELECT SUM(tickets_sold) FROM dataset0 WHERE ticket_type_id in (442)';
domo.post('/sql/v1/dataset0', query6g, {contentType: 'text/plain'}).then(result6g);
 function result6g(data){
  console && console.log(data);
  document.getElementById("table6-item7").innerHTML = data['rows'][0][0];
}
var query6h = 'SELECT SUM(tickets_left) FROM dataset0 WHERE  ticket_type_id in (442)';
domo.post('/sql/v1/dataset0', query6h, {contentType: 'text/plain'}).then(result6h);
 function result6h(data){
  console && console.log(data);
  document.getElementById("table6-item8").innerHTML = data['rows'][0][0];
}
var query6hi = 'SELECT SUM(tickets_confirmed) FROM dataset0 WHERE ticket_type_id in (442)';
domo.post('/sql/v1/dataset0', query6hi, {contentType: 'text/plain'}).then(result6hi);
 function result6hi(data){
  console && console.log(data);
  document.getElementById("table6-item9").innerHTML = data['rows'][0][0];
}
//total
var query6i = 'SELECT SUM(tickets_sold) FROM dataset0 WHERE ticket_type_id in (606,443,442)';
domo.post('/sql/v1/dataset0', query6i, {contentType: 'text/plain'}).then(result6i);
 function result6i(data){
  console && console.log(data);
  document.getElementById("table6-item10").innerHTML = data['rows'][0][0];
}
var query6j = 'SELECT SUM(tickets_left) FROM dataset0 WHERE  ticket_type_id in (606,443,442)';
domo.post('/sql/v1/dataset0', query6j, {contentType: 'text/plain'}).then(result6j);
 function result6j(data){
  console && console.log(data);
  document.getElementById("table6-item11").innerHTML = data['rows'][0][0];
}
var query6k = 'SELECT SUM(tickets_confirmed) FROM dataset0 WHERE ticket_type_id in (606,443,442)';
domo.post('/sql/v1/dataset0', query6k, {contentType: 'text/plain'}).then(result6k);
 function result6k(data){
  console && console.log(data);
  document.getElementById("table6-item12").innerHTML = data['rows'][0][0];
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