import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }
width	=	342		
height	=	146		
borderWidth	=	1		
borderRadius	=	5
borderColor= {
       "red": 15,
       "green": 140,
       "blue": 121,
       "alpha": 1
   }
backgroundColor= {
       "red": 192,
       "green": 196,
       "blue": 227,
       "alpha": 1
   }
nodeIcon= {
      "icon": "",
      "size": 30
  }
connectorLineColor = {
   "red": 67,
   "green": 68,
   "blue": 73,
   "alpha": 1
}
nodeBorderColor= {
  "red": 19,
  "green": 123,
  "blue": 128,
  "alpha": 0
}
connectorLineWidth = 5
dashArray= ""
expanded= false


  getTemplate(nodeData){
   return `<div>
   <div style="margin-left:70px;margin-top:10px;font-size:20px;font-weight:bold;">${nodeData?.name?nodeData?.name: "test name"}</div>
   <div style="margin-left:70px; margin-top:3px; font-size:16px;"> ${nodeData?.positionName? nodeData?.positionName: "test position"}  </div> 
   <div style="margin-left:70px; margin-top:3px; font-size:14px;"> ${nodeData?.area? nodeData?.area: "test area"}  </div> 
   <div style="margin-left:196px; margin-top:15px; font-size:13px; position:absolute; bottom:5px;">
   <div>${nodeData?.office}</div>
   <div style="margin-top:5px">Corporate</div> 
   </div> 
   </div>`
  }
   getEmbeddedHirarchy(flatData){
    let counter =0;
     const data = flatData.map((d) =>{
      counter++;
      console.log('data row', d)
      let dam = {
        nodeId:d.nodeId,
        parentNodeId:d.parentNodeId,
        width:this.width,
        height:this.height,
        borderWidth:0.6,
        borderRadius:0,
        borderColor: this.borderColor,
        backgroundColor: this.backgroundColor,
        nodeIcon: this.nodeIcon,
        nodeImage:this.getNodeImage(d),
        template: this.getTemplate(d),
        connectorLineColor: this.connectorLineColor,
        connectorLineWidth: this.connectorLineWidth,
        dashArray:'',
        expanded: counter>10 ?false: true
      }
     
      return dam;
     });
     //console.log('data row updated', data)
     return data;
   }

   getNodeImage(d){
    return   {"url": d?.url ? d?.url:"",
    width: 100,
    height: 100,
    centerTopDistance: 66,
    centerLeftDistance: 66,
    cornerShape: "CIRCLE",
    shadow: false,
    borderWidth: 0,
    borderColor: {
        red: 19,
        green: 123,
        blue: 128,
        alpha: 0
    }
   }
  }
}
