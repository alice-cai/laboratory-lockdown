(this["webpackJsonpreact-app"]=this["webpackJsonpreact-app"]||[]).push([[0],{51:function(e,t,n){e.exports=n(63)},56:function(e,t,n){},57:function(e,t,n){},63:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(5),l=n.n(o),c=(n(56),n(57),n(12)),i=n(84),u=n(91),s=n(90),m=n(88),d=n(87),f=n(85),p=n(37),g=n.n(p),b=n(66),h=Object(i.a)((function(e){var t=e.spacing;return{dialog:{padding:0,borderRadius:"5px","& .MuiDialogContent-root":{padding:0}},dialogTitle:{padding:t(.5),backgroundColor:"#E8E8E8"},margin:{margin:t(1)},label:{marginRight:t(1)},smallText:{fontSize:"12px"}}}));function E(e){return r.a.createElement(g.a,{handle:"#draggable-dialog-title",cancel:'[class*="MuiDialogContent-root"]'},r.a.createElement(f.a,e))}var y=function(e){var t=e.children,n=(e.className,e.open),a=e.onClose,o=h(),l=r.a.useState(!1),i=Object(c.a)(l,2);i[0],i[1];return r.a.createElement(s.a,{open:n,onClose:a,PaperComponent:E,"aria-labelledby":"draggable-dialog-title",className:o.dialog,maxWidth:"lg"},r.a.createElement(d.a,{style:{cursor:"move"},className:o.dialogTitle,id:"draggable-dialog-title"},r.a.createElement(b.a,{variant:"body1",align:"center",className:o.smallText},"terminal - alice_test")),r.a.createElement(m.a,null,t))},v=n(15);function j(e){return{type:"ADD_TERMINAL_HISTORY_ENTRIES",payload:e}}var R=n(92),O=n(42),w=n.n(O),x=Object(i.a)((function(e){return{root:{width:"100%"},inputRoot:{width:"100%"},input:{color:"white",padding:0,backgroundColour:"red","& .MuiInputBase-input":{padding:0,width:"100%"},"& .MuiInputBase-root":{width:"100%"}},commandPrompt:{marginRight:(0,e.spacing)(1)}}})),C=Object(v.b)((function(e){return{currentUser:e.currentUser}}))((function(e){var t=e.currentUser,n=e.value,a=e.onChange,o=e.onKeyDown,l=e.className,c=void 0===l?"":l,i=x(),s="".concat(t," $");return r.a.createElement(u.a,{display:"flex",justifyContent:"flex-start",alignItems:"center",flexDirection:"row",flexWrap:"nowrap",className:w()(i.root,c)},r.a.createElement(u.a,null,r.a.createElement(b.a,{className:i.commandPrompt,noWrap:!0},s)),r.a.createElement(R.a,{className:i.input,value:n,onChange:a,inputProps:{"aria-label":"naked"},onKeyDown:o,fullWidth:!0,classes:{root:i.inputRoot}}))})),N=Object(i.a)((function(e){var t=e.spacing;return{root:{textAlign:"left",backgroundColor:"black",color:"white",borderRadius:"5px",height:"55em",width:"70em",display:"flex",flexDirection:"column",justifyContent:"flex-start",overflow:"hidden",overflowY:"scroll"},terminal:{padding:t(4)},margin:{margin:t(1)},label:{marginRight:t(1),color:"#1ec700"},terminalInput:{color:"#1ec700"}}})),T=Object(v.b)((function(e){return{terminalHistory:e.terminalHistory,currentUser:e.currentUser}}),(function(e){return{addToHistory:function(t){return e(j(t))},clearHistory:function(){return e({type:"CLEAR_TERMINAL_HISTORY"})}}}))((function(e){e.test;var t=e.currentUser,n=e.terminalHistory,o=e.addToHistory,l=e.clearHistory,i=e.callback,s=N(),m=Object(a.useState)(""),d=Object(c.a)(m,2),f=d[0],p=d[1],g=Object(a.useState)({}),h=Object(c.a)(g,2),E=h[0],y=(h[1],Object(a.useRef)(null));return Object(a.useEffect)((function(){y.current&&y.current.scrollIntoView({behavior:"smooth",block:"end"})}),[n]),r.a.createElement("div",{className:s.root},r.a.createElement("div",{className:s.terminal,ref:y},n.map((function(e){return r.a.createElement(u.a,{display:"flex",justifyContent:"flex-start",alignItems:"center",flexDirection:"row",flexWrap:"nowrap"},"command"===e.type&&r.a.createElement(r.a.Fragment,null,r.a.createElement(b.a,{align:"left",className:s.label,noWrap:!0},"".concat(t," $")),r.a.createElement(b.a,{align:"left"},e.value)),"output"===e.type&&r.a.createElement(u.a,{display:"flex",justifyContent:"flex-start",alignItems:"flex-start",flexDirection:"column"},e.value.map((function(e){return"\n"===e?r.a.createElement("br",null):r.a.createElement(b.a,{align:"left"},e)}))))})),r.a.createElement(C,{value:f,onChange:function(e){p(e.target.value)},onKeyDown:function(e){if("Enter"===e.key){if("clear"===f)return l(),void p("");var t=f.split(" ")[0],n=[];if("cat"===t)return n.push({type:"command",value:f||""}),n.push({type:"output",value:E["announcement.txt"]}),o(n),void p("");"image"===t&&i(),n.push({type:"command",value:f||""}),t&&n.push({type:"output",value:["".concat(t,": command not found. Use 'help' to list available commands.")]}),o(n),p("")}},className:s.terminalInput})))})),I=Object(i.a)((function(e){var t=e.spacing;return{root:{textAlign:"left",padding:t(4),backgroundColor:"black",color:"white",borderRadius:"5px",display:"flex",flexDirection:"column",justifyContent:"flex-start"},margin:{margin:t(1)},label:{marginRight:t(1),color:"#1ec700"},terminalInput:{color:"#1ec700"},terminal:{padding:0,borderRadius:"5px","& .MuiDialogContent-root":{padding:0}}}})),S=Object(v.b)((function(e){return{terminalHistory:e.terminalHistory}}),(function(e){return{addToHistory:function(t){return e(j(t))},clearHistory:function(){return e({type:"CLEAR_TERMINAL_HISTORY"})},setUser:function(t){return e({type:"SET_CURRENT_USER",newUser:t})}}}))((function(e){e.test;var t=e.setUser,n=(e.terminalHistory,e.addToHistory,e.clearHistory,I()),o=Object(a.useState)(""),l=Object(c.a)(o,2),i=(l[0],l[1],Object(a.useState)([])),s=Object(c.a)(i,2),m=(s[0],s[1],Object(a.useState)({})),d=Object(c.a)(m,2),f=(d[0],d[1]);Object(a.useRef)(null);Object(a.useEffect)((function(){fetch("/commands").then((function(e){console.log(e.json())})).catch((function(e){return console.log("error")})),fetch("/files").then((function(e){return e.text()})).then((function(e){f(JSON.parse(e)),console.log(e)})).catch((function(e){return console.log("error")})),t("a_cai@corona")}),[]),console.log("image...???");var p=Object(a.useState)(!1),g=Object(c.a)(p,2),b=g[0],h=g[1];return r.a.createElement(u.a,{display:"flex",justifyContent:"center",alignItems:"center"},r.a.createElement("div",{className:n.terminal},r.a.createElement(T,{callback:function(){return h(!0)}})),r.a.createElement(y,{open:b,onClose:function(){return h(!1)}},r.a.createElement("img",{src:"/map",style:{height:"50em",width:"50em"}})))})),H=n(89),_=n(44),k=Object(_.a)({typography:{fontFamily:["Roboto Mono",'"Open Sans"',"Lato","Roboto",'"Helvetica Neue"',"Arial","sans-serif"].join(","),fontSize:14,fontWeightLight:300,fontWeightRegular:400,fontWeightMedium:500}}),U=function(){return r.a.createElement(H.a,{theme:k},r.a.createElement("div",{className:"App"},r.a.createElement("header",null,r.a.createElement("p",null,"My Token = ",window.token)),r.a.createElement("body",null,r.a.createElement(S,{test:"hello world!"}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var D=n(24),A=n(43),M=Object(A.a)();function W(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:M,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_TERMINAL_HISTORY_ENTRIES":return e.concat(t.payload);case"CLEAR_TERMINAL_HISTORY":return M;default:return e}}function L(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_CURRENT_USER":return t.newUser;default:return e}}var Y=Object(D.c)(Object(D.b)({terminalHistory:W,currentUser:L}));l.a.render(r.a.createElement(v.a,{store:Y},r.a.createElement(U,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[51,1,2]]]);
//# sourceMappingURL=main.d3989e25.chunk.js.map