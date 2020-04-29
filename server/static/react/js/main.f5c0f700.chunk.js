(this["webpackJsonpreact-app"]=this["webpackJsonpreact-app"]||[]).push([[0],{57:function(e,t,n){e.exports=n(68)},62:function(e,t,n){},63:function(e,t,n){},68:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(6),c=n.n(o),l=(n(62),n(63),n(16)),i=n(91),u=n(99),s=n(13);function m(e){return{type:"ADD_TERMINAL_HISTORY_ENTRIES",payload:e}}var d=n(71),p=n(101),f=n(31),g=n.n(f),h=Object(i.a)((function(e){return{root:{width:"100%"},inputRoot:{width:"100%"},input:{color:"white",padding:0,backgroundColour:"red","& .MuiInputBase-input":{padding:0,width:"100%"},"& .MuiInputBase-root":{width:"100%"}},commandPrompt:{marginRight:(0,e.spacing)(1)}}})),v=Object(s.b)((function(e){return{currentUser:e.currentUser}}))((function(e){var t=e.currentUser,n=e.value,a=e.onChange,o=e.onKeyDown,c=e.className,l=void 0===c?"":c,i=h(),s="".concat(t," $");return r.a.createElement(u.a,{display:"flex",justifyContent:"flex-start",alignItems:"center",flexDirection:"row",flexWrap:"nowrap",className:g()(i.root,l)},r.a.createElement(u.a,null,r.a.createElement(d.a,{className:i.commandPrompt,noWrap:!0},s)),r.a.createElement(p.a,{className:i.input,value:n,onChange:a,inputProps:{"aria-label":"naked"},onKeyDown:o,fullWidth:!0,classes:{root:i.inputRoot}}))}));function y(e){return{type:"SET_CURRENT_IMAGE",imageFileName:e}}var E=Object(i.a)((function(e){var t=e.spacing;return{root:{textAlign:"left",backgroundColor:"black",color:"white",borderRadius:"5px",height:"55em",width:"70em",display:"flex",flexDirection:"column",justifyContent:"flex-start",overflow:"hidden",overflowY:"scroll"},terminal:{padding:t(4)},margin:{margin:t(1)},label:{marginRight:t(1),color:"#1ec700"},terminalInput:{color:"#1ec700"}}})),b=Object(s.b)((function(e){var t=e.terminalHistory,n=e.currentUser,a=e.commands;return{terminalHistory:t,currentUser:n,commands:a,commandList:Object.keys(a)}}),(function(e){return{addToHistory:function(t){return e(m(t))},clearHistory:function(){return e({type:"CLEAR_TERMINAL_HISTORY"})},displayMap:function(){return e(y("map"))}}}))((function(e){e.test;var t=e.currentUser,n=e.terminalHistory,o=e.addToHistory,c=e.clearHistory,i=e.displayMap,s=e.commands,m=e.commandList,p=(e.callback,E()),f=Object(a.useState)(""),g=Object(l.a)(f,2),h=g[0],y=g[1],b=Object(a.useState)({}),w=Object(l.a)(b,2),O=w[0],R=(w[1],Object(a.useRef)(null));return Object(a.useEffect)((function(){R.current&&R.current.scrollIntoView({behavior:"smooth",block:"end"})}),[n]),r.a.createElement("div",{className:p.root},r.a.createElement("div",{className:p.terminal,ref:R},n.map((function(e){return r.a.createElement(u.a,{display:"flex",justifyContent:"flex-start",alignItems:"center",flexDirection:"row",flexWrap:"nowrap"},"command"===e.type&&r.a.createElement(r.a.Fragment,null,r.a.createElement(d.a,{align:"left",className:p.label,noWrap:!0},"".concat(t," $")),r.a.createElement(d.a,{align:"left"},e.value)),"output"===e.type&&r.a.createElement(u.a,{display:"flex",justifyContent:"flex-start",alignItems:"flex-start",flexDirection:"column"},e.value.map((function(e){return"\n"===e?r.a.createElement("br",null):r.a.createElement(d.a,{align:"left"},e)}))))})),r.a.createElement(v,{value:h,onChange:function(e){y(e.target.value)},onKeyDown:function(e){if("Enter"===e.key){if("clear"===h)return c(),void y("");var t=h.split(" "),n=t[0],a=[];if(!m.includes(n))return a.push({type:"command",value:h||""}),a.push({type:"output",value:["".concat(n,": command not found. Use 'help' to list available commands.")]}),o(a),void y("");if(a.push({type:"command",value:h||""}),"cat"===n)return a.push({type:"output",value:O["announcement.txt"]}),o(a),void y("");if("map"===n)a.push({type:"output",value:["Map displayed in separate window."]}),i(),o(a),y("");else if("ssh"===n){var r=t[1],u=t[2];if(!u)return a.push({type:"output",value:["Usage: ssh <user name> <user password>"]}),o(a),void y("");var d="";fetch("/password?user_name=".concat(r)).then((function(e){return e.text()})).then((function(e){(d=e)?u===d?a.push({type:"output",value:["hell yea"]}):a.push({type:"output",value:["Incorrect password."]}):a.push({type:"output",value:["User doesn't exist."]}),o(a),y("")})).catch((function(e){return console.log("error fetching password")}))}else"help"===n?(Object.entries(s).forEach((function(e){var t=Object(l.a)(e,2),n=t[0],r=t[1];a.push({type:"output",value:["".concat(n,": ").concat(r)]})})),o(a),y("")):(n&&a.push({type:"output",value:["".concat(n,": command not found. Use 'help' to list available commands.")]}),o(a),y(""))}},className:p.terminalInput})))})),w=n(100),O=n(98),R=n(96),j=n(95),x=n(94),C=n(93),N=n(46),I=n.n(N),T=Object(i.a)((function(e){var t=e.spacing;return{dialog:{padding:0,borderRadius:"5px","& .MuiDialogContent-root":{padding:0}},dialogTitle:{padding:t(.5),backgroundColor:"#E8E8E8"},margin:{margin:t(1)},label:{marginRight:t(1)},smallText:{fontSize:"12px"}}}));function _(e){return r.a.createElement(I.a,{handle:"#draggable-dialog-title",cancel:'[class*="MuiDialogContent-root"]'},r.a.createElement(C.a,e))}var S=function(e){var t=e.children,n=e.className,a=e.open,o=e.onClose,c=e.title,l=void 0===c?"":c,i=T();return r.a.createElement(O.a,{open:a,onClose:o,PaperComponent:_,"aria-labelledby":"draggable-dialog-title",className:g()(i.dialog,n),maxWidth:"lg"},r.a.createElement(x.a,{style:{cursor:"move"},className:i.dialogTitle,id:"draggable-dialog-title"},r.a.createElement(d.a,{variant:"body1",align:"center",className:i.smallText},l)),r.a.createElement(j.a,null,t),r.a.createElement(R.a,null,r.a.createElement(w.a,{variant:"contained",color:"primary",onClick:o},"Close")))},M=Object(i.a)((function(){return{image:{height:"50em",width:"50em"}}})),H=Object(s.b)((function(e){return{currentImage:e.currentImage}}),(function(e){return{clearImage:function(){return e(y(""))}}}))((function(e){var t=e.currentImage,n=e.clearImage,o=M(),c=Object(a.useState)(!1),i=Object(l.a)(c,2),u=i[0],s=i[1];Object(a.useEffect)((function(){t&&s(!0)}),[t]);return r.a.createElement(S,{title:"image",open:u,onClose:function(){n(),s(!1)}},r.a.createElement("img",{src:"/".concat(t),className:o.image}))}));var U=Object(i.a)((function(e){var t=e.spacing;return{root:{textAlign:"left",padding:t(4),backgroundColor:"black",color:"white",borderRadius:"5px",display:"flex",flexDirection:"column",justifyContent:"flex-start"},margin:{margin:t(1)},label:{marginRight:t(1),color:"#1ec700"},terminalInput:{color:"#1ec700"},terminal:{padding:0,borderRadius:"5px","& .MuiDialogContent-root":{padding:0}}}})),k=Object(s.b)((function(e){return{terminalHistory:e.terminalHistory}}),(function(e){return{addToHistory:function(t){return e(m(t))},clearHistory:function(){return e({type:"CLEAR_TERMINAL_HISTORY"})},setUser:function(t){return e({type:"SET_CURRENT_USER",newUser:t})},setCommands:function(t){return e({type:"SET_COMMANDS",newCommands:t})}}}))((function(e){e.test;var t=e.setUser,n=(e.terminalHistory,e.addToHistory,e.clearHistory,e.setCommands),o=U(),c=Object(a.useState)(""),i=Object(l.a)(c,2),s=(i[0],i[1],Object(a.useState)({})),m=Object(l.a)(s,2),d=(m[0],m[1]);Object(a.useRef)(null);return Object(a.useEffect)((function(){fetch("/password?user_name=r_fisher").then((function(e){return e.text()})).then((function(e){console.log("password: ".concat(e))})).catch((function(e){return console.log("error")})),fetch("/commands?user_name=r_fisher").then((function(e){return e.text()})).then((function(e){console.log("commands: ".concat(e)),n(JSON.parse(e))})).catch((function(e){return console.log("error")})),fetch("/files").then((function(e){return e.text()})).then((function(e){d(JSON.parse(e)),console.log(e)})).catch((function(e){return console.log("error")})),t("a_cai@corona")}),[]),r.a.createElement(u.a,{display:"flex",justifyContent:"center",alignItems:"center"},r.a.createElement("div",{className:o.terminal},r.a.createElement(b,{callback:function(){return y("map")}})),r.a.createElement(H,null))})),A=n(97),D=n(49),L=Object(D.a)({typography:{fontFamily:["Roboto Mono",'"Open Sans"',"Lato","Roboto",'"Helvetica Neue"',"Arial","sans-serif"].join(","),fontSize:14,fontWeightLight:300,fontWeightRegular:400,fontWeightMedium:500}}),W=function(){return r.a.createElement(A.a,{theme:L},r.a.createElement("div",{className:"App"},r.a.createElement("header",null,r.a.createElement("p",null,"My Token = ",window.token)),r.a.createElement("body",null,r.a.createElement(k,{test:"hello world!"}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Y=n(23),B=n(47),F=n.n(B),J=n(48),P=Object(J.a)();function K(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:P,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_TERMINAL_HISTORY_ENTRIES":return e.concat(t.payload);case"CLEAR_TERMINAL_HISTORY":return P;default:return e}}function $(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_CURRENT_USER":return t.newUser;default:return e}}function z(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_CURRENT_IMAGE":return t.imageFileName;default:return e}}var G={};function V(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:G,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_COMMANDS":return t.newCommands;default:return e}}var q=Object(Y.d)(Object(Y.c)({terminalHistory:K,currentUser:$,currentImage:z,commands:V}),Object(Y.a)(F.a));c.a.render(r.a.createElement(s.a,{store:q},r.a.createElement(W,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[57,1,2]]]);
//# sourceMappingURL=main.f5c0f700.chunk.js.map