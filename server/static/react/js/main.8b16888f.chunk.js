(this["webpackJsonpreact-app"]=this["webpackJsonpreact-app"]||[]).push([[0],{60:function(e,t,n){e.exports=n(72)},69:function(e,t,n){},70:function(e,t,n){},72:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(6),c=n.n(o),i=n(23),l=n(13),s=n(45),u=n.n(s),m=n(46),f=(n(69),n(70),n(95)),d=n(103),p=n(40),g=n.n(p),h=n(47);function v(e){return{type:"SET_COMMANDS",newCommands:e}}function E(e){return{type:"SET_FILES",newFiles:e}}function b(e){return{type:"SET_CURRENT_USER",newUser:e}}var y=n(19),w=n(75),O=n(105),j=n(32),N=n.n(j),I=Object(f.a)((function(e){return{root:{width:"100%"},inputRoot:{width:"100%"},input:{color:"white",padding:0,backgroundColour:"red","& .MuiInputBase-input":{padding:0,width:"100%"},"& .MuiInputBase-root":{width:"100%"}},commandPrompt:{marginRight:(0,e.spacing)(1)}}})),R=Object(l.b)((function(e){return{currentUser:e.currentUser}}))((function(e){var t=e.currentUser,n=e.value,a=e.onChange,o=e.onKeyDown,c=e.className,i=void 0===c?"":c,l=I(),s="".concat(t," $");return r.a.createElement(d.a,{display:"flex",justifyContent:"flex-start",alignItems:"center",flexDirection:"row",flexWrap:"nowrap",className:N()(l.root,i)},r.a.createElement(d.a,null,r.a.createElement(w.a,{className:l.commandPrompt,noWrap:!0},s)),r.a.createElement(O.a,{className:l.input,value:n,onChange:a,inputProps:{"aria-label":"naked"},onKeyDown:o,fullWidth:!0,classes:{root:l.inputRoot}}))}));function C(e){return{type:"SET_CURRENT_IMAGE",imageFileName:e}}var _=n(29),S=Object(f.a)((function(e){var t=e.spacing;return{root:{textAlign:"left",backgroundColor:"black",color:"white",borderRadius:"5px",height:"55em",width:"70em",display:"flex",flexDirection:"column",justifyContent:"flex-start",overflow:"hidden",overflowY:"scroll"},terminal:{padding:t(4)},commandPrompt:{marginRight:t(1),color:"#1ec700"},terminalInput:{color:"#1ec700"}}})),x=Object(l.b)((function(e){return{terminalHistory:e.terminalHistory,currentUser:e.currentUser,commands:e.commands,files:e.files}}),(function(e){return{addToHistory:function(t){return e(function(e){return{type:"ADD_TERMINAL_HISTORY_ENTRIES",payload:e}}(t))},clearHistory:function(){return e({type:"CLEAR_TERMINAL_HISTORY"})},displayImage:function(t){return e(C(t))},sshToNewUser:function(t){return e(function(e){return function(){var t=Object(h.a)(g.a.mark((function t(n){return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:fetch("/commands?user_name=".concat(e)).then((function(e){return e.text()})).then((function(e){n(v(JSON.parse(e)))})).catch((function(t){return console.error("Error fetching commands for user ".concat(e,": ").concat(t))})),fetch("/files?user_name=".concat(e)).then((function(e){return e.text()})).then((function(e){n(E(JSON.parse(e)))})).catch((function(t){return console.error("Error fetching files for user ".concat(e,": ").concat(t))})),n(b(e));case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}(t))}}}))((function(e){var t=e.currentUser,n=e.terminalHistory,o=e.addToHistory,c=e.clearHistory,i=e.displayImage,l=e.commands,s=e.files,u=e.sshToNewUser,m=S(),f=Object(a.useState)(Object(_.b)()),p=Object(y.a)(f,2),g=p[0],h=p[1],v=Object(a.useState)(-1),E=Object(y.a)(v,2),b=E[0],O=E[1],j=Object(a.useState)(""),N=Object(y.a)(j,2),I=N[0],C=N[1],x=Object(a.useRef)(null);return Object(a.useEffect)((function(){x.current&&x.current.scrollIntoView({behavior:"smooth",block:"end"})}),[n]),r.a.createElement("div",{className:m.root},r.a.createElement("div",{className:m.terminal,ref:x},n.map((function(e){return r.a.createElement(d.a,{display:"flex",justifyContent:"flex-start",alignItems:"center",flexDirection:"row",flexWrap:"nowrap"},"command"===e.type&&r.a.createElement(r.a.Fragment,null,r.a.createElement(w.a,{align:"left",className:m.commandPrompt,noWrap:!0},"".concat(t," $")),r.a.createElement(w.a,{align:"left"},e.value)),"output"===e.type&&r.a.createElement(d.a,{display:"flex",justifyContent:"flex-start",alignItems:"flex-start",flexDirection:"column"},e.value.map((function(e){return"\n"===e?r.a.createElement("br",null):r.a.createElement(w.a,{align:"left"},e)}))))})),r.a.createElement(R,{value:I,onChange:function(e){C(e.target.value)},onKeyDown:function(e){if("Enter"===e.key)h(g.push(I)),O(-1),"clear"===I?(h(Object(_.b)()),O(-1),c()):function(e,t,n,a,r,o,c){var i=e.split(" "),l=i[0],s=i.slice(1),u=[];if(u.push({type:"command",value:e||""}),l){var m=function(e){"string"===typeof e&&(e=[e]);var t={type:"output",value:e};u.push(t)};if(!Object.keys(t).includes(l))return m("".concat(l,": command not found. Use 'help' to list available commands.")),void r(u);switch(l){case"ls":var f=Object.keys(n).sort((function(e,t){return e.localeCompare(t)}));return m(f),void r(u);case"cat":var d=s[0];return d?Object.keys(n).includes(d)?("text"===n[d].file_type?m(n[d].content):"image"===n[d].file_type&&(m("Image displayed in separate window."),a(d)),void r(u)):(m("cat: ".concat(d,": No such file or directory")),void r(u)):(m('Missing argument to command "cat". Usage: cat <file name>'),void r(u));case"map":return m("Map displayed in separate window."),a("map.png"),void r(u);case"ssh":var p=s[0],g=s[1];return g?void function(e,t){var n="";fetch("/password?user_name=".concat(e)).then((function(e){return e.text()})).then((function(a){var i="";if(n=a){if(t===n)return c(e),o(),void r([{type:"output",value:["Switched to user ".concat(e,".")]}]);i="Access denied. Invalid credentials."}else i="Error: User not found.";m(i),r(u)})).catch((function(t){return console.error("Error fetching password for user ".concat(e,": ").concat(t))}))}(p,g):(m('Missing argument to command "ssh". Usage: ssh <user name> <user password>'),void r(u));case"help":return Object.entries(t).forEach((function(e){var t=Object(y.a)(e,2),n=t[0],a=t[1];m("".concat(n,": ").concat(a))})),void r(u);default:m("".concat(l,": command not found. Use 'help' to list available commands.")),r(u)}}else r(u)}(I,l,s,i,o,c,u),C("");else if("ArrowUp"===e.key){if(b===g.size-1)return;O(b+1),C(g.get(b+1)||"")}else if("ArrowDown"===e.key){if(-1===b)return;if(0===b)return void C("");O(b-1),C(g.get(b-1)||"")}else if("Tab"===e.key){e.preventDefault();var t=function(e,t){var n=t.split(" "),a=n.slice(-1).pop();if(a){var r=[];Object.keys(e).forEach((function(e){return e.startsWith(a)?r.push(e):null}));var o="";if(r.length>1?o=function(e){e.sort((function(e,t){return e.length-t.length}));var t=e[0];return e.slice(1).forEach((function(e){for(;!e.startsWith(t);)t=t.substring(0,t.length-1)})),t}(r):1===r.length&&(o=r[0]),o){var c=n.slice(0,n.length-1);return c.push(o),c.join(" ")}}return""}(s,I);t&&C(t)}else O(-1)},className:m.terminalInput})))})),T=n(104),U=n(102),k=n(100),M=n(99),A=n(98),D=n(97),H=n(51),W=n.n(H),L=Object(f.a)((function(e){var t=e.spacing;return{dialog:{padding:0,borderRadius:"5px","& .MuiDialogContent-root":{padding:0}},dialogTitle:{padding:t(.5),backgroundColor:"#E8E8E8"},margin:{margin:t(1)},label:{marginRight:t(1)},smallText:{fontSize:"12px"}}}));function F(e){return r.a.createElement(W.a,{handle:"#draggable-dialog-title",cancel:'[class*="MuiDialogContent-root"]'},r.a.createElement(D.a,e))}var J=function(e){var t=e.children,n=e.className,a=e.open,o=e.onClose,c=e.title,i=void 0===c?"":c,l=L();return r.a.createElement(U.a,{open:a,onClose:o,PaperComponent:F,"aria-labelledby":"draggable-dialog-title",className:N()(l.dialog,n),maxWidth:"lg"},r.a.createElement(A.a,{style:{cursor:"move"},className:l.dialogTitle,id:"draggable-dialog-title"},r.a.createElement(w.a,{variant:"body1",align:"center",className:l.smallText},i)),r.a.createElement(M.a,null,t),r.a.createElement(k.a,null,r.a.createElement(T.a,{variant:"contained",color:"primary",onClick:o},"Close")))},P=Object(f.a)((function(){return{image:{height:"40em",width:"40em"}}})),Y=Object(l.b)((function(e){return{currentImage:e.currentImage}}),(function(e){return{clearImage:function(){return e(C(""))}}}))((function(e){var t=e.currentImage,n=e.clearImage,o=P(),c=Object(a.useState)(!1),i=Object(y.a)(c,2),l=i[0],s=i[1];Object(a.useEffect)((function(){t&&s(!0)}),[t]);return t?r.a.createElement(J,{title:"image",open:l,onClose:function(){n(),s(!1)}},r.a.createElement("img",{src:"/image?file_name=".concat(t),className:o.image})):null})),B=Object(f.a)((function(e){e.spacing;return{terminal:{padding:0,borderRadius:"5px","& .MuiDialogContent-root":{padding:0}}}})),z=Object(l.b)((function(e){e.terminalHistory;return{}}),(function(e){return{setUser:function(t){return e(b(t))},setCommands:function(t){return e(v(t))},setFiles:function(t){return e(E(t))}}}))((function(e){var t=e.setUser,n=e.setCommands,o=e.setFiles,c=B();return Object(a.useEffect)((function(){fetch("/commands?user_name=r_fisher").then((function(e){return e.text()})).then((function(e){console.log("commands: ".concat(e)),n(JSON.parse(e))})).catch((function(e){return console.log("error")})),fetch("/files?user_name=r_fisher").then((function(e){return e.text()})).then((function(e){o(JSON.parse(e)),console.log(e)})).catch((function(e){return console.log("error")})),t("a_cai@corona")}),[]),r.a.createElement(d.a,{display:"flex",justifyContent:"center",alignItems:"center"},r.a.createElement("div",{className:c.terminal},r.a.createElement(x,null)),r.a.createElement(Y,null))})),K=n(101),$=n(52),G=Object($.a)({typography:{fontFamily:["Roboto Mono",'"Open Sans"',"Lato","Roboto",'"Helvetica Neue"',"Arial","sans-serif"].join(","),fontSize:14,fontWeightLight:300,fontWeightRegular:400,fontWeightMedium:500}}),V=function(){return r.a.createElement(K.a,{theme:G},r.a.createElement("div",{className:"App"},r.a.createElement("header",null,r.a.createElement("p",null,"My Token = ",window.token)),r.a.createElement("body",null,r.a.createElement(z,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var q=Object(_.a)();function Q(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:q,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_TERMINAL_HISTORY_ENTRIES":return e.concat(t.payload);case"CLEAR_TERMINAL_HISTORY":return q;default:return e}}function X(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_CURRENT_USER":return t.newUser;default:return e}}function Z(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_CURRENT_IMAGE":return t.imageFileName;default:return e}}var ee={};function te(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ee,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_COMMANDS":return t.newCommands;default:return e}}var ne={};function ae(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ne,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_FILES":return t.newFiles;case"CLEAR_FILES":return{};default:return e}}var re=Object(i.d)(Object(i.c)({terminalHistory:Q,currentUser:X,currentImage:Z,commands:te,files:ae}),Object(i.a)(u.a,m.a));c.a.render(r.a.createElement(l.a,{store:re},r.a.createElement(V,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[60,1,2]]]);
//# sourceMappingURL=main.8b16888f.chunk.js.map