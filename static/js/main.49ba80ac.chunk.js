(this.webpackJsonpERP=this.webpackJsonpERP||[]).push([[0],{14:function(e,t,a){},196:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(74),c=a.n(r),o=(a(14),a(21)),s=a(1),i=a(2),m=a(4),u=a(3),d=a(5),h=a(6),p=a.n(h),b={headers:{"Content-Type":"application/json;charset=UTF-8","Access-Control-Allow-Origin":"*"}},E=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).onChange=function(e){return a.setState(Object(o.a)({},e.target.name,e.target.value))},a.onSubmit=function(e){e.preventDefault();var t=a.state.id.toUpperCase(),n=a.state.password,l=a.state.admin;console.log(t),p.a.post("http://localhost:4000/".concat(l),{Id:t,password:n},b).then((function(e){a.setState({profile:e.data})})).catch((function(e){console.log(e)})),console.log(a.state.profile)},a.state={admin:"",id:"",password:"",profile:{},wrong_password:!1},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"componentDidUpdate",value:function(){var e=this.state.profile;void 0===e||("wrong password"===e?!1===this.state.wrong_password&&this.setState({wrong_password:!0}):e.ID?(localStorage.setItem("userName",e.Name),localStorage.setItem("user",e.ID),this.props.history.push("/student")):e.tid&&(localStorage.setItem("user",e.tid),localStorage.setItem("userName",e.Name),this.props.history.push("/teacher")))}},{key:"render",value:function(){return l.a.createElement("div",{className:"model-container "},l.a.createElement("div",{className:"card  bg-light"},l.a.createElement("div",{className:"card-body"},l.a.createElement("h4",{className:"card-title my-0 p-0"},"LogIn "),l.a.createElement("p",{className:"card-text m-1"},"Welcome to portal..."),l.a.createElement("form",{onSubmit:this.onSubmit},l.a.createElement("div",{className:"form-check form-check-inline mx-auto"},l.a.createElement("label",{className:"form-check-label mx-3"},l.a.createElement("input",{className:"form-check-input ",type:"radio",name:"admin",id:"1",value:"student",onChange:this.onChange})," Student"),l.a.createElement("label",{className:"form-check-label"},l.a.createElement("input",{className:"form-check-input mx-3",type:"radio",name:"admin",id:"2",value:"teacher",onChange:this.onChange})," Teacher")),l.a.createElement("div",{className:"form-group"},l.a.createElement("input",{type:"text",className:"form-control m-0",name:"id",value:this.state.id,onChange:this.onChange,placeholder:"Enter username"})),l.a.createElement("div",{className:"form-group m-0"},l.a.createElement("input",{type:"password",className:"form-control",name:"password",value:this.state.password,onChange:this.onChange,placeholder:"Enter Password..."})),this.state.wrong_password?l.a.createElement("p",{className:"text-danger"},"wrong password"):null,l.a.createElement("i",{className:"text-primary"},"Forgot password"),l.a.createElement("button",{type:"submit",className:"btn btn-primary mt-1"},"LogIn")))))}}]),t}(n.Component),g=a(9),f=a(17),v=a(22),O=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).handle=function(e){return e.preventDefault(),localStorage.removeItem("user"),localStorage.removeItem("userName"),a.setState({isLogin:!1}),l.a.createElement(f.a,{to:"/teacher"})},a.state={info:!1,isLogin:!0},a.handle=a.handle.bind(Object(v.a)(a)),a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.setState.isLogin}},{key:"render",value:function(){var e=this,t=localStorage.getItem("user"),a=localStorage.getItem("userName");console.log(a,t),console.log("info : ",this.state.info);var n="https://joeschmoe.io/api/v1/"+a;return l.a.createElement("div",{className:"nav-top"},l.a.createElement("div",{className:"nav-title"},"IIIT KOTA "),l.a.createElement("li",{onClick:function(){e.setState({info:!e.state.info})},className:"link",style:{cursor:"pointer"}},l.a.createElement("i",{className:"fa fa-user-circle"})," Profile ",l.a.createElement("i",{className:"fa fa-angle-down"})),this.state.info?l.a.createElement("div",{class:"panel"},l.a.createElement("div",{className:"user"},l.a.createElement("img",{src:n,className:"card-img ",alt:"p"}),l.a.createElement("div",{className:"cardBody"},l.a.createElement("h5",null,a),l.a.createElement("p",null,t))),l.a.createElement("button",{type:"button",name:"logout",onClick:this.handle,className:"btn btn-danger ",id:"lo"},l.a.createElement("a",{href:"http://localhost:3000"},"Log Out")),l.a.createElement("input",{name:"",id:"set",class:"btn btn-primary",type:"button",value:"Settings"})):null)}}]),t}(n.Component),y=Object(f.g)(O),j=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).state={},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=localStorage.getItem("user"),t=localStorage.getItem("userName");console.log(t,e),console.log("info : ",this.state.info);var a="https://joeschmoe.io/api/v1/"+t;return l.a.createElement("div",{className:"box"},l.a.createElement("div",{className:"user"},l.a.createElement("img",{src:a,className:"card-img ",alt:"p"}),l.a.createElement("div",{className:"cardBody"},l.a.createElement("h5",null,t),l.a.createElement("p",null,e))),l.a.createElement("ul",{className:"topic"},l.a.createElement("li",null,l.a.createElement("i",{className:"fa fa-home"})," ",l.a.createElement(g.b,{style:{color:"white"},to:"/student"},"Home")),l.a.createElement("li",null,l.a.createElement("i",{className:"fa fa-book"}),l.a.createElement(g.b,{style:{color:"white"},to:"/student/Attendance"}," Attendance")),l.a.createElement("li",null,l.a.createElement("i",{className:"fas fa-award"})," ",l.a.createElement(g.b,{style:{color:"white"},to:"/student/Performance"}," Performance")," "),l.a.createElement("li",null,l.a.createElement("i",{className:"fa fa-wallet"})," ",l.a.createElement(g.b,{style:{color:"white"},to:"/student/Fees"},"Fees"))),l.a.createElement("div",{className:"about"},l.a.createElement("i",{className:"fa fa-copyright"}," By Pranjal & team"),l.a.createElement("br",null),"version v1.0.0.1"))}}]),t}(n.Component),N=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).state={student:{}},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props.value,t=e.ID,a=e.Name,n=e.DOB,r=e.Gender,c=e.Category,o=e.Admission,s=e.Branch,i=e.Course,m=e.Section,u=e.Contact_No,d="https://joeschmoe.io/api/v1/"+a;return l.a.createElement("div",{className:" profile "},l.a.createElement("div",{className:"m-4"},l.a.createElement("h1",null,"Profile"),l.a.createElement("i",{className:"fas fa-pencil-alt float-right",style:{color:"green",cursor:"pointer"}}),"   "),l.a.createElement("table",{className:"table m-4"},l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("th",{className:"row"},"Name : "),l.a.createElement("td",null,a),l.a.createElement("td",{rowSpan:"3"}," ",l.a.createElement("img",{src:d,alt:"Profile",width:"100px"}))),l.a.createElement("tr",null,l.a.createElement("th",{className:"row"}," ID : "),l.a.createElement("td",null,t," ")),l.a.createElement("tr",null,l.a.createElement("th",{className:"row"}," Contact no : "),l.a.createElement("td",null,u)),l.a.createElement("tr",null,l.a.createElement("th",{className:"row"}," DOB : "),l.a.createElement("td",null," ",n)),l.a.createElement("tr",null,l.a.createElement("th",{className:"row"}," Gender : "),l.a.createElement("td",null," ",r)),l.a.createElement("tr",null,l.a.createElement("th",{className:"row"}," Category : "),l.a.createElement("td",null,c)),l.a.createElement("tr",null,l.a.createElement("th",{className:"row"}," Admission : "),l.a.createElement("td",null,o)),l.a.createElement("tr",null,l.a.createElement("th",{className:"row"}," Branch : "),l.a.createElement("td",null," ",s)),l.a.createElement("tr",null,l.a.createElement("th",{className:"row"}," Course : "),l.a.createElement("td",null," ",i)),l.a.createElement("tr",null,l.a.createElement("th",{className:"row"}," Section : "),l.a.createElement("td",null," ",m," ")))))}}]),t}(n.Component),C=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).state={Id:"",profile:{},sname:{}},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=localStorage.getItem("user");p.a.get("http://localhost:4000/".concat(t)).then((function(t){t.data?(console.log(t.data),e.setState({profile:t.data}),console.log(e.state.profile)):console.log("error")})).catch((function(e){console.log(e)}));var a=localStorage.getItem("user");console.log("ID:",a)}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(y,null),l.a.createElement("div",{className:"row"},l.a.createElement(j,{value:this.state.profile}),l.a.createElement(N,{value:this.state.profile})))}}]),t}(n.Component),S=a(79),w=a(34),k=a(19),x=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).state={data:[],chartData:{}},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){for(var e=this,t=localStorage.getItem("user"),a=["adbms","adms","aoops","apython","ampmc","aeco"],n=["dbms","dms","oops","python","mpmc","eco"],l=function(l){p.a.get("http://localhost:4000/Attendance/".concat(a[l],"/").concat(t)).then((function(t){if(t.data){console.log(t.data);var a=Object.values(t.data),r=Object(w.a)(a).slice(1);r.push(n[l].toUpperCase()),e.setState((function(e){return{data:[].concat(Object(S.a)(e.data),[r])}})),console.log("data:",e.state.data)}else console.log("error")})).catch((function(e){console.log(e)}))},r=0;r<a.length;r++)l(r)}},{key:"render",value:function(){var e=localStorage.getItem("user");return console.log("data:2",this.state.data),l.a.createElement("div",null,l.a.createElement(y,null),l.a.createElement(j,{value:e}),l.a.createElement("div",{className:"Charts attendance row"},this.state.data.map((function(e){return l.a.createElement(k.a,{data:{labels:["July","August","September","October","November","December"],datasets:[{label:"Attendance",data:e,backgroundColor:["rgba(255, 99, 132, 0.2)","rgba(54, 162, 235, 0.2)","rgba(255, 206, 86, 0.2)","rgba(75, 192, 192, 0.2)","rgba(153, 102, 255, 0.2)","rgba(255, 159, 64, 0.2)"],borderColor:["rgba(255,99,132,1)","rgba(54, 162, 235, 1)","rgba(255, 206, 86, 1)","rgba(75, 192, 192, 1)","rgba(153, 102, 255, 1)","rgba(255, 159, 64, 1)"],borderWidth:1}]},options:{responsive:!1,aspectRatio:1.5,scales:{xAxes:[{ticks:{maxRotation:90,minRotation:80}}],yAxes:[{ticks:{beginAtZero:!0}}]},title:{display:!0,text:e[6]+" Attendance Per Month",fontSize:25},legend:{display:!0,position:"right"}},width:800,height:500})}))))}}]),t}(n.Component),A=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).state={},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=localStorage.getItem("user"),t=localStorage.getItem("userName"),a="https://joeschmoe.io/api/v1/"+t;return l.a.createElement("div",{className:"box"},l.a.createElement("div",{className:"user"},l.a.createElement("img",{src:a,className:"card-img ",alt:"p"}),l.a.createElement("div",{className:"cardBody"},l.a.createElement("h5",null,t),l.a.createElement("p",null,e))),l.a.createElement("ul",{className:"topic"},l.a.createElement("li",null,l.a.createElement("i",{className:"fa fa-home"})," ",l.a.createElement(g.b,{style:{color:"white"},to:"/teacher"},"Home")),l.a.createElement("li",null,l.a.createElement("i",{className:"fa fa-book"}),l.a.createElement(g.b,{style:{color:"white"},to:"/teacher/Attendance"}," Attendance")),l.a.createElement("li",null,l.a.createElement("i",{className:"fas fa-award"})," ",l.a.createElement(g.b,{style:{color:"white"},to:"/teacher/Performance"}," Performance")," "),l.a.createElement("li",null,l.a.createElement("i",{className:"fas fa-award"})," ",l.a.createElement(g.b,{style:{color:"white"},to:"/teacher/salary"}," Salary")," ")),l.a.createElement("div",{className:"about"},l.a.createElement("i",{className:"fa fa-copyright"}," By pranjal & team"),l.a.createElement("br",null),"version v1.0.0.1"))}}]),t}(n.Component),D={headers:{"Content-Type":"application/json;charset=UTF-8","Access-Control-Allow-Origin":"*"}},I=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).onChange=function(e){return a.setState(Object(o.a)({},e.target.name,e.target.value))},a.onSubmit=function(e){var t=localStorage.getItem("user"),n=a.state,l={id:n.id,July:n.July,August:n.August,September:n.September,October:n.October,November:n.November,December:n.December};console.log(l),p.a.post("http://localhost:4000/teacher/attendance/new/".concat(t),l,D).then((function(e){console.log(e.data)}))},a.state={attendence:[],id:"",July:"",August:"",September:"",October:"",November:"",December:""},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=localStorage.getItem("user");p.a.get("http://localhost:4000/teacher/attendance/".concat(t)).then((function(t){t.data?(console.log(t.data),e.setState({attendence:t.data}),console.log(e.state.attendence[0])):console.log("error")})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){var e=this.state.attendence,t=e[0],a=[];for(var n in t)a.push(n);return console.log("data: ",e),console.log("data: ",a),l.a.createElement("div",null,l.a.createElement(y,null),l.a.createElement(A,null),l.a.createElement("div",{className:"profile table"},l.a.createElement("table",{class:"table table-striped table-inverse table-responsive"},l.a.createElement("thead",{class:"thead-inverse"},l.a.createElement("tr",null,a.map((function(e){return l.a.createElement("th",null,e)})))),l.a.createElement("tbody",null,e.map((function(e){return l.a.createElement(M,{key:e.id,fee:e})})))),l.a.createElement("form",{onSubmit:this.onSubmit},l.a.createElement("input",{className:"mx-1 inputId rounded",name:"id",value:this.state.id,placeholder:"Enter Id",onChange:this.onChange}),l.a.createElement("input",{className:"mx-1 inputAtt rounded",name:"July",value:this.state.July,placeholder:"July",onChange:this.onChange}),l.a.createElement("input",{className:"mx-1 inputAtt rounded",name:"August",value:this.state.August,placeholder:"August",onChange:this.onChange}),l.a.createElement("input",{className:"mx-1 inputAtt rounded",name:"September",value:this.state.September,placeholder:"September",onChange:this.onChange}),l.a.createElement("input",{className:"mx-1 inputAtt rounded",name:"October",value:this.state.October,placeholder:"October",onChange:this.onChange}),l.a.createElement("input",{className:"mx-1 inputAtt rounded",name:"November",value:this.state.November,placeholder:"November",onChange:this.onChange}),l.a.createElement("input",{className:"mx-1 inputAtt rounded",name:"December",value:this.state.December,placeholder:"December",onChange:this.onChange}),l.a.createElement("input",{type:"submit",value:"Add",className:"btn-primary rounded"}))))}}]),t}(n.Component),M=function(e){function t(){return Object(s.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props.fee,t=Object.values(e);return l.a.createElement(l.a.Fragment,null,l.a.createElement("tr",null,t.map((function(e){return l.a.createElement("td",null,e)}))))}}]),t}(n.Component),P=I,T=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).state={data:[],maxData:[],chartData1:{labels:["DBMS","OOPS","PYTHON","DMS","ECO","MPMC"],datasets:[{label:"Max Marks",data:[40,39,40,31,37,35]},{label:"Your marks",data:[30,22,38,28,30,28],backgroundColor:["rgba(255, 99, 132, 0.2)","rgba(54, 162, 235, 0.2)","rgba(255, 206, 86, 0.2)","rgba(75, 192, 192, 0.2)","rgba(153, 102, 255, 0.2)","rgba(255, 159, 64, 0.2)"],borderColor:["rgba(255,99,132,1)","rgba(54, 162, 235, 1)","rgba(255, 206, 86, 1)","rgba(75, 192, 192, 1)","rgba(153, 102, 255, 1)","rgba(255, 159, 64, 1)"],borderWidth:1}]}},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=localStorage.getItem("user");p.a.get("http://localhost:4000/performance/".concat(t)).then((function(t){var a=Object.values(t.data),n=Object(w.a)(a).slice(1);e.setState((function(e){return{data:n}})),console.log("data:",e.state.data)})).catch((function(e){console.log(e)})),p.a.get("http://localhost:4000/performance/max/".concat(t)).then((function(t){e.setState({maxData:Object.values(t.data)}),console.log("data2:",e.state.maxData)})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(y,null),l.a.createElement(j,null),l.a.createElement("div",{className:"Charts attendance"},l.a.createElement(k.a,{data:{labels:["DBMS","OOPS","PYTHON","DMS","ECO","MPMC"],datasets:[{label:"Max Marks",data:this.state.maxData},{label:"Your Marks",data:this.state.data,backgroundColor:["rgba(255, 99, 132, 0.2)","rgba(54, 162, 235, 0.2)","rgba(255, 206, 86, 0.2)","rgba(75, 192, 192, 0.2)","rgba(153, 102, 255, 0.2)","rgba(255, 159, 64, 0.2)"],borderColor:["rgba(255,99,132,1)","rgba(54, 162, 235, 1)","rgba(255, 206, 86, 1)","rgba(75, 192, 192, 1)","rgba(153, 102, 255, 1)","rgba(255, 159, 64, 1)"],borderWidth:1}]},options:{responsive:!1,scales:{xAxes:[{ticks:{maxRotation:90,minRotation:80}}],yAxes:[{ticks:{beginAtZero:!0}}]},title:{display:!0,text:"Marks per Subject-MID TERM",fontSize:25},legend:{display:!0,position:"right"}},width:800,height:500}),l.a.createElement(k.a,{data:this.state.chartData1,options:{responsive:!1,scales:{xAxes:[{ticks:{maxRotation:90,minRotation:80}}],yAxes:[{ticks:{beginAtZero:!0}}]},title:{display:!0,text:"Marks per Subject-END TERM",fontSize:25},legend:{display:!0,position:"right"}},width:800,height:500})))}}]),t}(n.Component),B=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).state={chartData:{labels:["Brilliant","Excellent","Good","Average","Fail"],datasets:[{label:"Performance",data:[5,15,40,50,2],backgroundColor:["rgba(255, 99, 132, 0.2)","rgba(54, 162, 235, 0.2)","rgba(255, 206, 86, 0.2)","rgba(75, 192, 192, 0.2)","rgba(153, 102, 255, 0.2)"],borderColor:["rgba(255,99,132,1)","rgba(54, 162, 235, 1)","rgba(255, 206, 86, 1)","rgba(75, 192, 192, 1)","rgba(153, 102, 255, 1)"],borderWidth:1}]}},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(k.b,{data:this.state.chartData,options:{responsive:!1,scales:{xAxes:[{ticks:{maxRotation:90,minRotation:80}}],yAxes:[{ticks:{beginAtZero:!0}}]},title:{display:!0,text:"Status of Class",fontSize:25},legend:{display:!0,position:"right"}},width:800,height:500}))}}]),t}(n.Component),R=a(78),F=a.n(R),_=function(e){var t=e.name,a=e.placeholder,n=e.value,r=e.label,c=e.error,o=e.info,s=e.type,i=e.onChange,m=e.disabled;return l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:t},r),l.a.createElement("input",{type:s,className:F()("form-control form-control-lg",{"is-invalid":c}),placeholder:a,name:t,value:n,onChange:i,disabled:m}),o&&l.a.createElement("small",{className:"form-text text-muted"},o),c&&l.a.createElement("div",{className:"invalid-feedback"},c))};_.defaultProps={type:"text"};var J={headers:{"Content-Type":"application/json;charset=UTF-8","Access-Control-Allow-Origin":"*"}},U=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).onChange=function(e){return a.setState(Object(o.a)({},e.target.name,e.target.value))},a.onSubmit=function(e){var t=localStorage.getItem("user"),n=a.state.Id.toUpperCase(),l=a.state.marks,r=a.state.attendence.map((function(e){return e.ID}));console.log(r),r.indexOf(n)<0?p.a.post("http://localhost:4000/teacher/performance/new/".concat(t),{ID:n,marks:l},J).then((function(e){console.log(e.data)})):p.a.post("http://localhost:4000/teacher/performance/update/".concat(t),{ID:n,marks:l},J).then((function(e){console.log(e.data)}))},a.state={attendence:[],Id:"",marks:""},a.onChange=a.onChange.bind(Object(v.a)(a)),a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=localStorage.getItem("user");p.a.get("http://localhost:4000/teacher/performance/".concat(t)).then((function(t){t.data?(console.log(t.data),e.setState({attendence:t.data}),console.log(e.state.attendence[0])):console.log("error")})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){var e=this.state.attendence,t=e[0],a=[];for(var n in t)a.push(n);return console.log("data: ",e),l.a.createElement("div",null,l.a.createElement(y,null),l.a.createElement(A,null),l.a.createElement("div",{className:"profile row"},l.a.createElement("table",{class:"table table-bordered table-responsive"},l.a.createElement("thead",{class:"thead-inverse"},l.a.createElement("tr",null,a.map((function(e){return l.a.createElement("th",null,e)})))),l.a.createElement("tbody",null,e.map((function(e){return l.a.createElement(W,{key:e.id,fee:e})})),l.a.createElement("td",{colSpan:"2",className:"p-0"},l.a.createElement("form",{onSubmit:this.onSubmit},l.a.createElement("input",{className:"m-1",name:"Id",value:this.state.Id,placeholder:"Enter Id",onChange:this.onChange}),l.a.createElement("input",{name:"marks",value:this.state.marks,placeholder:"Enter marks",onChange:this.onChange}),l.a.createElement("input",{type:"submit",value:"Add",className:"btn-primary"}))))),l.a.createElement("br",null),l.a.createElement(B,null)))}}]),t}(n.Component),W=function(e){function t(){return Object(s.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props.fee,t=Object.values(e);return l.a.createElement(l.a.Fragment,null,l.a.createElement("tr",null,t.map((function(e){return l.a.createElement("td",null,e)}))))}}]),t}(n.Component),H=U,L=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).state={student:{}},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props.profile,t=e.tid,a=e.Name,n=e.DOB,r=e.Gender,c=e.Subject,o=e.Email,s=e.Qualification,i=e.Contact_No,m="https://joeschmoe.io/api/v1/"+a;return l.a.createElement("div",{className:" profile "},l.a.createElement("div",{className:"m-4"},l.a.createElement("h1",null,"Profile"),l.a.createElement("i",{className:"fas fa-pencil-alt float-right",style:{color:"green",cursor:"pointer"}}),"   "),l.a.createElement("table",{className:"table m-4"},l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("th",{className:"row"},"Name : "),l.a.createElement("td",null,a),l.a.createElement("td",{rowSpan:"3"}," ",l.a.createElement("img",{src:m,alt:"Profile",width:"100px"}))),l.a.createElement("tr",null,l.a.createElement("th",{className:"row"}," ID : "),l.a.createElement("td",null,t," ")),l.a.createElement("tr",null,l.a.createElement("th",{className:"row"}," Contact no : "),l.a.createElement("td",null,i)),l.a.createElement("tr",null,l.a.createElement("th",{className:"row"}," Email : "),l.a.createElement("td",null," ",o," ")),l.a.createElement("tr",null,l.a.createElement("th",{className:"row"}," DOB : "),l.a.createElement("td",null," ",n)),l.a.createElement("tr",null,l.a.createElement("th",{className:"row"}," Gender : "),l.a.createElement("td",null," ",r)),l.a.createElement("tr",null,l.a.createElement("th",{className:"row"}," Subject : "),l.a.createElement("td",null,c)),l.a.createElement("tr",null,l.a.createElement("th",{className:"row"}," Qualification : "),l.a.createElement("td",null," ",s)))))}}]),t}(n.Component),G=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).state={profile:{}},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=localStorage.getItem("user");p.a.get("http://localhost:4000/teacher/".concat(t)).then((function(t){t.data?(console.log(t.data),e.setState({profile:t.data}),console.log(e.state.profile)):console.log("error")})).catch((function(e){console.log(e)})),console.log(this.state.profile)}},{key:"render",value:function(){var e=this.state.profile;return l.a.createElement("div",null,l.a.createElement(y,null),l.a.createElement("div",{className:"row"},l.a.createElement(A,{key:e.tid,profile:e}),l.a.createElement(L,{profile:this.state.profile})))}}]),t}(n.Component),Y=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).state={status:[],test:{year:"2018-19",type:"Hostel",transaction_id:"14201998",payment_mode:"Cash",status:"To be Refunded",id:"2018KUCP1127",Amount:"26,000"}},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=localStorage.getItem("user");p.a.get("http://localhost:4000/Salary/".concat(t)).then((function(t){t.data?(console.log(t.data),e.setState({status:t.data}),console.log(e.state.status[0])):console.log("error")})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){var e=this.state.status,t=e[0],a=[];for(var n in t)a.push(n);return console.log("data: ",e),l.a.createElement("div",null,l.a.createElement(y,null),l.a.createElement(A,null),l.a.createElement("div",{className:"profile table"},l.a.createElement("table",{class:"table table-striped table-inverse table-responsive"},l.a.createElement("thead",{class:"thead-inverse"},l.a.createElement("tr",null,a.map((function(e){return l.a.createElement("th",null,e)})))),l.a.createElement("tbody",null,e.map((function(e){return l.a.createElement(z,{key:e.transactionid,fee:e})}))))))}}]),t}(n.Component),z=function(e){function t(){return Object(s.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props.fee,t=Object.values(e);return l.a.createElement(l.a.Fragment,null,l.a.createElement("tr",null,t.map((function(e){return l.a.createElement("td",null,e)})),l.a.createElement("td",null,l.a.createElement("i",{className:"fa fa-download"}))))}}]),t}(n.Component),Z=Y,K=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).state={status:[],test:{year:"2018-19",type:"Hostel",transaction_id:"14201998",payment_mode:"Cash",status:"To be Refunded",id:"2018KUCP1127",Amount:"26,000"}},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=localStorage.getItem("user");p.a.get("http://localhost:4000/Fees/".concat(t)).then((function(t){t.data?(console.log(t.data),e.setState({status:t.data}),console.log(e.state.status[0])):console.log("error")})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){var e=this.state.status;return console.log("data: ",e),l.a.createElement("div",null,l.a.createElement(y,null),l.a.createElement(j,null),l.a.createElement("div",{className:"profile table"},l.a.createElement("table",{class:"table table-striped table-inverse table-responsive"},l.a.createElement("thead",{class:"thead-inverse"},l.a.createElement("tr",null,l.a.createElement("th",null,"Year"),l.a.createElement("th",null,"Type"),l.a.createElement("th",null,"Payment Mode"),l.a.createElement("th",null,"Transcation ID"),l.a.createElement("th",null,"Status"),l.a.createElement("th",null,"Amount"),l.a.createElement("th",null,"Download"))),l.a.createElement("tbody",null,e.map((function(e){return l.a.createElement(Q,{key:e.transaction_id.x,fee:e})}))))))}}]),t}(n.Component),Q=function(e){function t(){return Object(s.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("tr",null,l.a.createElement("td",null,this.props.fee.year),l.a.createElement("td",null,this.props.fee.type),l.a.createElement("td",null,this.props.fee.payment_mode),l.a.createElement("td",null,this.props.fee.transaction_id),l.a.createElement("td",null,this.props.fee.status),l.a.createElement("td",null,this.props.fee.Amount),l.a.createElement("td",null,l.a.createElement("i",{className:"fa fa-download"}))))}}]),t}(n.Component),$=K;var q=function(){return l.a.createElement(g.a,null,l.a.createElement(f.d,null,l.a.createElement(f.b,{exact:!0,path:"/",component:E}),l.a.createElement(f.b,{exact:!0,path:"/student",component:C}),l.a.createElement(f.b,{exact:!0,path:"/student/Attendance",component:x}),l.a.createElement(f.b,{exact:!0,path:"/student/Performance",component:T}),l.a.createElement(f.b,{exact:!0,path:"/student/Fees",component:$}),l.a.createElement(f.b,{exact:!0,path:"/teacher",component:G}),l.a.createElement(f.b,{exact:!0,path:"/teacher/Attendance",component:P}),l.a.createElement(f.b,{exact:!0,path:"/teacher/Performance",component:H}),l.a.createElement(f.b,{exact:!0,path:"/teacher/salary",component:Z})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(q,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},80:function(e,t,a){e.exports=a(196)}},[[80,1,2]]]);
//# sourceMappingURL=main.49ba80ac.chunk.js.map