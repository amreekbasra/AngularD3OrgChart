export const data = [
    {"name": "Eve",   "parent": ""},
    {"name": "Cain",  "parent": "Eve"},
    {"name": "Seth",  "parent": "Eve"},
    {"name": "Enos",  "parent": "Seth"},
    {"name": "Noam",  "parent": "Seth"},
    {"name": "Abel",  "parent": "Eve"},
    {"name": "Awan",  "parent": "Eve"},
    {"name": "Enoch", "parent": "Awan"},
    {"name": "Azura", "parent": "Eve"}
  ]

  export const treeData = {
    "name": "Eve",
    "value": 15,
    "type": "black",
    "level": "yellow",
    "children": [
       {
          "name": "Cain",
          "value": 10,
          "type": "grey",
          "level": "red"
       },
       {
          "name": "Seth",
          "value": 10,
          "type": "grey",
          "level": "red",
          "children": [
             {
                "name": "Enos",
                "value": 7.5,
                "type": "grey",
                "level": "purple"
             },
             {
                "name": "Noam",
                "value": 7.5,
                "type": "grey",
                "level": "purple"
             }
          ]
       },
       {
          "name": "Abel",
          "value": 10,
          "type": "grey",
          "level": "blue"
       },
       {
          "name": "Awan",
          "value": 10,
          "type": "grey",
          "level": "green",
          "children": [
             {
                "name": "Enoch",
                "value": 7.5,
                "type": "grey",
                "level": "orange"
             }
          ]
       },
       {
          "name": "Azura",
          "value": 10,
          "type": "grey",
          "level": "green"
       }
    ]
 };

 export class DataService{
   template = `<div>
   <div style="margin-left:70px;margin-top:10px;font-size:20px;font-weight:bold;">Ian Devling </div>
   <div style="margin-left:70px; margin-top:3px; font-size:16px;">Cheaf Executive Officer  </div> 
   <div style="margin-left:70px; margin-top:3px; font-size:14px;">Business first</div> 
   <div style="margin-left:196px; margin-top:15px; font-size:13px; position:absolute; bottom:5px;">
   <div>CTO office</div>
   <div style="margin-top:5px">Corporate</div> 
   </div> 
   </div>`
   getImage(){
      let d  = {
         "nodeId": "O-837",
         "parentNodeId": "O-415",
         "width": 350,
         "height": 160,
         "borderWidth": 0.6,
         "borderRadius": 0,
         "borderColor": {
             "red": 15,
             "green": 140,
             "blue": 121,
             "alpha": 0.7
         },
         "backgroundColor": {
             "red": 247,
             "green": 247,
             "blue": 249,
             "alpha": 0.4
         },
         "nodeIcon": {
             "size": 50
         },
         "nodeImage": {
             "url": "https://raw.githubusercontent.com/bumbeishvili/Assets/master/Projects/D3/Organization%20Chart/general.jpg",
             "width": 100,
             "height": 100,
             "centerTopDistance": 66,
             "centerLeftDistance": 66,
             "cornerShape": "CIRCLE",
             "shadow": false,
             "borderWidth": 0,
             "borderColor": {
                 "red": 19,
                 "green": 123,
                 "blue": 128,
                 "alpha": 0
             }
         },
         "template": "<div style=\"color:#2A2A2A;height:160px;margin-top:-30px;background-image: linear-gradient(to right , #FFFFFF, #ECEDF0);\">\n                  <div style=\"margin-left:147px;\n                              margin-top:30px;\n                              padding-top:20px;\n                              font-size:20px;\n                              font-weight:bold;\n                         \">Valle Saavedra </div>\n                 <div style=\"margin-left:147px;\n                              margin-top:3px;\n                              font-size:16px;\n                         \">Junior Inovator </div>\n\n                 <div style=\"margin-left:147px;\n                              margin-top:3px;\n                              font-size:14px;\n                         \">Marketing Department</div>\n\n                 <div style=\"margin-left:270px;\n                             margin-top:15px;\n                             font-size:13px;\n                             position:absolute;\n                             bottom:5px;\n                            \">\n                      <div>CEO office</div>\n                      <div style=\"margin-top:5px\">Corporate</div>\n                 </div>\n              </div>",
         "connectorLineColor": {
             "red": 59,
             "green": 60,
             "blue": 63,
             "alpha": 1
         },
         "connectorLineWidth": 2,
         "dashArray": "",
         "expanded": false,
         "directSubordinates": 0,
         "totalSubordinates": 0
     }
   }
 }