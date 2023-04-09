import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { data } from './data';
import * as d3 from 'd3';
import {TreeChart} from './treeChart-Org';
import { v4 as uuidv4 } from "uuid";
import { DataService } from './data.service';
@Component({
  selector: 'app-hierarchy-chart',
  templateUrl: './hierarchy-chart.component.html',
  styleUrls: ['./hierarchy-chart.component.css']
})
export class HierarchyChartComponent implements OnInit {   
   @ViewChild('chartContainer')
   chartContainer!: ElementRef;
   @Input() data!: any[];
   chart!: any;
 
   constructor(private dService: DataService) {    
      this.chart = new TreeChart();
      d3.json(
        "https://gist.githubusercontent.com/bumbeishvili/dc0d47bc95ef359fdc75b63cd65edaf2/raw/c33a3a1ef4ba927e3e92b81600c8c6ada345c64b/orgChart.json"
       ).then((data: any) => {       
         this.data=[];
        // data.forEach(element => {
        data =  this.dService.getEmbeddedHirarchy(data)
        // });     
           this.data = Object.assign([], data);
          // console.log('test data', data)
           this.updateChart()
       });
      
   }
 

  ngOnInit() {}

  ngAfterViewInit() {
    if (!this.chart) {
      this.chart = new TreeChart();
    }
    this.updateChart();
  }

  ngOnChanges() {
    this.updateChart();
  }
  updateChart() {
    if (!this.data) {
      return;
    }
    if (!this.chart) {
      return;
    }
    console.log('chart', this.chart)
    this.chart
      .container(this.chartContainer.nativeElement)
      .data(this.data)
      .svgWidth(500)
      .initialZoom(0.4)
      .styles({
         background: "white",
         backgroundImage: `none`,
         backgroundSize: "10px 10px",
         backgroundPosition: "center"
       })
       .onNodeClick((d) => {
         console.log(d + " node clicked");
        // console.log("props", Object.keys(props), d);
         this.onNodeClick(d);
       })
       .onNodeDragOver((e, d) => {
         e.preventDefault();
       })
       .onNodeDragEnter((e, d) => {
         e.target.style.backgroundColor = "red";
       })
       .onNodeDragLeave((e, d) => {
         e.target.style.backgroundColor = "blue";
       })
       .onNodeDrop((e, d) => {
         e.preventDefault();
         e.target.style.backgroundColor = "blue";
         const parentNodeId = d.nodeId;
         console.log("drop", parentNodeId);
         this.chart.addNode(this.getNode(parentNodeId));
       })
       .render();
  }
  // addNode(node) {
  //   this.chart.addNode(node);
  // }
  // addNode() {
  //   const node = getNode("O-1");

  //   addNodeChildFunc(node);
  // }

  getNode(parentNodeId){
    return {
      nodeId: uuidv4(),
      parentNodeId: parentNodeId,
      width: 330,
      height: 147,
      borderWidth: 0,
      backgroundColor: "blue",
      borderRadius: 5,
      // nodeImage: {
      //   url:
      //     "https://raw.githubusercontent.com/bumbeishvili/Assets/master/Projects/D3/Organization%20Chart/general.jpg",
      //   width: 100,
      //   height: 100,
      //   centerTopDistance: 0,
      //   centerLeftDistance: 0,
      //   cornerShape: "ROUNDED",
      //   shadow: true,
      //   borderWidth: 0
      // },
      nodeIcon: {
        icon: "https://to.ly/1yZnX",
        size: 30
      },
      connectorLineColor: {
        red: 220,
        green: 189,
        blue: 207,
        alpha: 1
      },
      connectorLineWidth: 5,
      dashArray: "",
      expanded: true,
      template: `<div>
                  <div style="margin-left:80px;
                              margin-top:10px;
                              font-size:20px;
                              font-weight:bold;
                         ">Added Root Child </div>
                 <div style="margin-left:80px;
                              margin-top:3px;
                              font-size:16px;
                         ">Added position </div>
  
                 <div style="margin-left:80px;
                              margin-top:3px;
                              font-size:14px;
                         ">Added unit</div>
  
                 <div style="margin-left:200px;
                             margin-top:15px;
                             font-size:13px;
                             position:absolute;
                             bottom:5px;
                            ">
                      <div>Added office</div>
                      <div style="margin-top:5px">Added area</div>
                 </div>
              </div>`
    };
  }
  onNodeClick(nodeId) {
    alert("clicked " + nodeId);
  }
}
