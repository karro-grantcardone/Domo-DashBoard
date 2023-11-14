var domo = window.domo; // For more on domo.js: https://developer.domo.com/docs/dev-studio-guides/domo-js#domo.get
var datasets = window.datasets;

//marketing nov 2023
var query1 = 'SELECT COUNT(*) FROM dataset0 WHERE event_id = 489 AND ticket_type_id in (230)';
domo.post('/sql/v1/dataset0', query1, {contentType: 'text/plain'}).then(result1);
 function result1(data){
  console && console.log(data);
  document.getElementById("marketing-tickets_sold").innerHTML = data['rows'][0][0];
}
var query2 = 'SELECT COUNT(*) FROM dataset0 WHERE event_id = 489 AND ticket_type_id in (230)';
domo.post('/sql/v1/dataset0', query2, {contentType: 'text/plain'}).then(result2);
 function result2(data){
  console && console.log(data);
  document.getElementById("marketing-tickets_left").innerHTML = 125 - data['rows'][0][0];
}
var query3 = 'SELECT COUNT(*) FROM dataset1 WHERE event_id = 489 AND ticket_type_id in (230)';
domo.post('/sql/v1/dataset1', query3, {contentType: 'text/plain'}).then(result3);
 function result3(data){
  console && console.log(data);
  document.getElementById("marketing-tickets_confirmed").innerHTML = data['rows'][0][0];
}
var query4 = 'SELECT COUNT(*) FROM dataset0 WHERE event_id = 489 AND ticket_type_id in (231)';
domo.post('/sql/v1/dataset0', query4, {contentType: 'text/plain'}).then(result4);
 function result4(data){
  console && console.log(data);
  document.getElementById("marketing-virtual-tickets_sold").innerHTML = data['rows'][0][0];
}
//sales nov 2023
var query5 = 'SELECT COUNT(*) FROM dataset0 WHERE event_id = 495 AND ticket_type_id in (242)';
domo.post('/sql/v1/dataset0', query5, {contentType: 'text/plain'}).then(result5);
 function result5(data){
  console && console.log(data);
  document.getElementById("sales-tickets_sold").innerHTML = data['rows'][0][0];
}
var query6 = 'SELECT COUNT(*) FROM dataset0 WHERE event_id = 495 AND ticket_type_id in (242)';
domo.post('/sql/v1/dataset0', query6, {contentType: 'text/plain'}).then(result6);
 function result6(data){
  console && console.log(data);
  document.getElementById("sales-tickets_left").innerHTML = 125 - data['rows'][0][0];
}
var query7 = 'SELECT COUNT(*) FROM dataset1 WHERE event_id = 495 AND ticket_type_id in (242)';
domo.post('/sql/v1/dataset1', query7, {contentType: 'text/plain'}).then(result7);
 function result7(data){
  console && console.log(data);
  document.getElementById("sales-tickets_confirmed").innerHTML = data['rows'][0][0];
}
var query8 = 'SELECT COUNT(*) FROM dataset0 WHERE event_id = 495 AND ticket_type_id in (243)';
domo.post('/sql/v1/dataset0', query8, {contentType: 'text/plain'}).then(result8);
 function result8(data){
  console && console.log(data);
  document.getElementById("sales-virtual-tickets_sold").innerHTML = data['rows'][0][0];
}