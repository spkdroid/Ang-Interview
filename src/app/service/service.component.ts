import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {



  constructor() { }



MAIL = [
  {"name":"Ramkumar Velmurugan","subject":"Please Reply to this mail","time":"7:41 AM"},
  {"name":"Siddarth","subject":"Please Reply to this mail","time":"4:31 AM"},
  {"name":"Mark Arum","subject":"Please Reply to this mail","time":"1:24 AM"},
  {"name":"Mark","subject":"Please Reply to this mail","time":"11:23 PM"},
  {"name":"TD Bank","subject":"Please Reply to this mail","time":"10:41 AM"},
  {"name":"Scotia Bank","subject":"Please Reply to this mail","time":"8:45 AM"},
  {"name":"Read","subject":"Please Reply to this mail","time":"3:41 AM"}
];

  buildTable(data) {
    var table = document.createElement("table");
    table.className="table table-striped table-hover";
    var thead = document.createElement("thead");
    var tbody = document.createElement("tbody");
    var headRow = document.createElement("tr");
    ["Name","Subject","Time","Status"].forEach(function(el) {
      var th=document.createElement("th");
      th.appendChild(document.createTextNode(el));
      headRow.appendChild(th);
    });
    thead.appendChild(headRow);
    table.appendChild(thead); 
    data.forEach(function(el) {
      var tr = document.createElement("tr");
      var btn = document.createElement('input');
      btn.type="button";
      btn.value="Read"
      btn.className="btn btn-primary";
      for (var o in el) {  
        var td = document.createElement("td");
        td.appendChild(document.createTextNode(el[o]));        
        tr.appendChild(td);        
    }
     var td = document.createElement("td");
     td.appendChild(btn);
     tbody.appendChild(tr); 
     tr.appendChild(td);     
    });
    table.appendChild(tbody);             
    return table;
}


  ngOnInit() {
    document.getElementById("content").appendChild(this.buildTable(this.MAIL));
  }


}
