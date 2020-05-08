(this["webpackJsonpreact-app"]=this["webpackJsonpreact-app"]||[]).push([[0],{65:function(e,t,n){e.exports=n(77)},74:function(e,t,n){},75:function(e,t,n){},77:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(7),i=n.n(o),c=n(27),l=n(14),s=n(47),u=n.n(s),m=n(48),f=(n(74),n(75),n(12)),d=n(96),p=n(107),h=n(80),g=n(108),E=n(18),v=n.n(E),y=Object(d.a)((function(e){return{root:{width:"100%"},inputRoot:{width:"100%"},input:{color:"white",padding:0,backgroundColour:"red","& .MuiInputBase-input":{padding:0,width:"100%"},"& .MuiInputBase-root":{width:"100%"}},commandPrompt:{marginRight:(0,e.spacing)(1)}}})),b=Object(l.b)((function(e){return{currentUser:e.currentUser}}))((function(e){var t=e.currentUser,n=e.value,a=e.onChange,o=e.onKeyDown,i=e.className,c=void 0===i?"":i,l=e.forwardRef,s=y(),u="".concat(t," $");return r.a.createElement(p.a,{display:"flex",justifyContent:"flex-start",alignItems:"center",flexDirection:"row",flexWrap:"nowrap",className:v()(s.root,c)},r.a.createElement(p.a,null,r.a.createElement(h.a,{className:s.commandPrompt,noWrap:!0},u)),r.a.createElement(g.a,{className:s.input,value:n,onChange:a,inputProps:{"aria-label":"naked"},onKeyDown:o,fullWidth:!0,spellCheck:"false",classes:{root:s.inputRoot},inputRef:l}))}));function w(e){return{type:"ADD_TERMINAL_HISTORY_ENTRIES",payload:e}}function _(e){return{type:"SET_CURRENT_IMAGE",imageFileName:e}}var O=n(33),N=n(17),x=n.n(N),S=n(26),j=["r_fisher","j_forrest","v_chapman","n_reyes","d_harris","e_freedman","r_barrera","y_hines","a_emerson"];function R(e){return{type:"SET_COMMANDS",newCommands:e}}var C=function(e){var t=Object(a.useState)(new Audio(e)),n=Object(f.a)(t,1)[0],r=Object(a.useState)(!1),o=Object(f.a)(r,2),i=o[0],c=o[1];return Object(a.useEffect)((function(){i?n.play():n.pause()}),[i,n]),Object(a.useEffect)((function(){n.addEventListener("ended",(function(){return c(!1)}))}),[n]),function(){return c(!i)}};var T=Object(d.a)((function(e){var t=e.spacing;return{root:{textAlign:"left",backgroundColor:"black",color:"white",borderRadius:"7px",height:"45rem",width:"60rem",display:"flex",flexDirection:"column",justifyContent:"flex-start",overflow:"hidden",overflowY:"scroll"},terminal:{padding:t(4)},commandPrompt:{marginRight:t(1),color:"#1ec700"},terminalInput:{color:"#1ec700"},marginBottom:{marginBottom:t(.2)}}})),k=Object(l.b)((function(e){return{terminalHistory:e.terminalHistory,currentUser:e.currentUser,commands:e.commands,files:e.files}}),(function(e){return{addToHistory:function(t){return e(w(t))},clearHistory:function(){return e({type:"CLEAR_TERMINAL_HISTORY"})},displayImage:function(t){return e(_(t))},sshToNewUser:function(t){return e(function(e){return function(){var t=Object(S.a)(x.a.mark((function t(n){return x.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:fetch("/commands?type=logged_in").then((function(e){return e.text()})).then((function(e){n(R(JSON.parse(e)))})).catch((function(t){return console.error("Error fetching commands for user ".concat(e,": ").concat(t))})),fetch("/files?user_name=".concat(e)).then((function(e){return e.text()})).then((function(e){n({type:"SET_FILES",newFiles:JSON.parse(e)})})).catch((function(t){return console.error("Error fetching files for user ".concat(e,": ").concat(t))})),n({type:"SET_CURRENT_USER",newUser:e});case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}(t))},turnOffPowerSourceByUser:function(t){return e(function(e){return function(){var t=Object(S.a)(x.a.mark((function t(n){return x.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:t.t0=e,t.next="y_hines"===t.t0?3:"a_emerson"===t.t0?5:7;break;case 3:return n({type:"TURN_OFF_POWER_SOURCE_1"}),t.abrupt("return");case 5:return n({type:"TURN_OFF_POWER_SOURCE_2"}),t.abrupt("return");case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}(t))}}}))((function(e){var t=e.currentUser,n=e.terminalHistory,o=e.commands,i=e.files,c=e.addToHistory,l=e.clearHistory,s=e.displayImage,u=e.sshToNewUser,m=e.turnOffPowerSourceByUser,d=T(),g=Object(a.useState)(Object(O.b)()),E=Object(f.a)(g,2),v=E[0],y=E[1],w=Object(a.useState)(-1),_=Object(f.a)(w,2),N=_[0],x=_[1],S=Object(a.useState)(""),R=Object(f.a)(S,2),k=R[0],I=R[1],U=Object(a.useRef)(null),A=Object(a.useRef)(null),M=C("/audio?file_name=click.mp3"),W=C("/audio?file_name=access_granted.m4a"),F=C("/audio?file_name=r_fisher.mp3"),H=C("/audio?file_name=j_forrest.mp3"),B=C("/audio?file_name=v_chapman.mp3"),D=C("/audio?file_name=n_reyes.mp3"),L=C("/audio?file_name=d_harris.mp3"),P=C("/audio?file_name=e_freedman.mp3"),z=C("/audio?file_name=r_barrera.mp3"),G=C("/audio?file_name=y_hines.mp3"),Y=C("/audio?file_name=a_emerson.mp3");Object(a.useEffect)((function(){if(t&&j.includes(t)){W();var e={r_fisher:F,j_forrest:H,v_chapman:B,n_reyes:D,d_harris:L,e_freedman:P,r_barrera:z,y_hines:G,a_emerson:Y};setTimeout((function(){return e[t]()}),500)}}),[t]);Object(a.useEffect)((function(){U.current&&U.current.scrollIntoView({behavior:"smooth",block:"end"})}),[n]);return r.a.createElement("div",{className:d.root,onClick:function(){A.current&&A.current.focus()}},r.a.createElement("div",{className:d.terminal,ref:U},n.map((function(e){return r.a.createElement(p.a,{display:"flex",justifyContent:"flex-start",alignItems:"center",flexDirection:"row",flexWrap:"nowrap"},"command"===e.type&&r.a.createElement(p.a,{display:"flex",justifyContent:"flex-start",alignItems:"flex-start",flexDirection:"row",className:d.marginBottom},r.a.createElement(h.a,{align:"left",className:d.commandPrompt,noWrap:!0},"".concat(t," $")),r.a.createElement(h.a,{align:"left"},e.value)),"output"===e.type&&r.a.createElement(p.a,{display:"flex",justifyContent:"flex-start",alignItems:"flex-start",flexDirection:"column",className:d.marginBottom},e.value.map((function(e){return"\n"===e?r.a.createElement("br",null):r.a.createElement(h.a,{align:"left"},e)}))))})),r.a.createElement(b,{value:k,onChange:function(e){I(e.target.value)},onKeyDown:function(e){if("Enter"===e.key)M(),y(v.push(k)),x(-1),"clear"===k?(y(Object(O.b)()),x(-1),l()):function(e,t,n,a,r,o,i,c,l){var s=e.split(" "),u=s[0],m=s.slice(1),d=[];if(d.push({type:"command",value:e||""}),u){var p=function(e){"string"===typeof e&&(e=[e]);var t={type:"output",value:e};d.push(t)};if(u.startsWith("./")){var h=u.substring(2);if(!Object.keys(a).includes(h))return p("./".concat(h,": No such file or directory")),void o(d);if("executable"!==a[h].file_type)return p("./".concat(h,": Permission denied. This is not an executable file.")),void o(d);if("power.exe"===h)return t?(l(t),p("Power has been switched off.")):p("Not logged in."),void o(d)}if(!Object.keys(n).includes(u))return p("".concat(u,": command not found. Use 'help' to list available commands.")),void o(d);switch(u){case"ls":var g=Object.keys(a);if(g.length){var E=g.sort((function(e,t){return e.localeCompare(t)}));p(E)}else p("No files found.");return void o(d);case"cat":var v=m[0];return v?Object.keys(a).includes(v)?("text"===a[v].file_type?p(a[v].content):"image"===a[v].file_type?(p("Image displayed in separate window."),r(v)):"executable"===a[v].file_type&&p('Invalid file type. To run executable files, type "./file_name".'),void o(d)):(p("cat: ".concat(v,": No such file or directory")),void o(d)):(p('Missing argument to command "cat". Usage: cat <file name>'),void o(d));case"map":return p("Map displayed in separate window."),r("map.png"),void o(d);case"ssh":var y=m[0],b=m[1];return b?void function(e,t){var n="";fetch("/password?user_name=".concat(e)).then((function(e){return e.text()})).then((function(a){var r="";if(n=a){if(t===n)return c(e),i(),void o([{type:"output",value:["Switched to user ".concat(e,".")]}]);r="Access denied. Invalid credentials."}else r="Error: User '".concat(e,"' not found.");p(r),o(d)})).catch((function(t){return console.error("Error fetching password for user ".concat(e,": ").concat(t))}))}(y,b):(p('Missing argument to command "ssh". Usage: ssh <user name> <user password>'),void o(d));case"help":return Object.entries(n).forEach((function(e){var t=Object(f.a)(e,2),n=t[0],a=t[1];p("".concat(n,": ").concat(a))})),void o(d);default:p("".concat(u,": command not found. Use 'help' to list available commands.")),o(d)}}else o(d)}(k,t,o,i,s,c,l,u,m),I("");else if("ArrowUp"===e.key){if(N===v.size-1)return;x(N+1),I(v.get(N+1)||"")}else if("ArrowDown"===e.key){if(-1===N)return;if(0===N)return void I("");x(N-1),I(v.get(N-1)||"")}else if("Tab"===e.key){e.preventDefault(),M();var n=function(e,t){var n=t.split(" "),a=n.slice(-1).pop();if(a){var r=[];Object.keys(e).forEach((function(e){return e.startsWith(a)?r.push(e):null}));var o="";if(r.length>1?o=function(e){e.sort((function(e,t){return e.length-t.length}));var t=e[0];return e.slice(1).forEach((function(e){for(;!e.startsWith(t);)t=t.substring(0,t.length-1)})),t}(r):1===r.length&&(o=r[0]),o){var i=n.slice(0,n.length-1);return i.push(o),i.join(" ")}}return""}(i,k);n&&I(n)}else x(-1)},className:d.terminalInput,forwardRef:A})))})),I=n(52),U=n.n(I),A=n(98),M=n(106),W=n(99),F=n(100),H=n(101),B=n(102),D=n(103),L=Object(d.a)((function(e){return{dialog:{padding:0,borderRadius:"5px","& .MuiDialogContent-root":{padding:0}},dialogTitle:{padding:(0,e.spacing)(.5),backgroundColor:"#E8E8E8",cursor:"move"},title:{fontSize:"12px",lineHeight:"normal",marginTop:"2px"},closeButton:{padding:0,marginTop:"-14px",marginRight:"3px"},smallHeight:{height:"1em"},smallFont:{fontSize:"1em"}}}));function P(e){return r.a.createElement(U.a,{handle:"#draggable-dialog-title",cancel:'[class*="MuiDialogContent-root"]'},r.a.createElement(A.a,e))}var z=function(e){var t=e.children,n=e.className,a=e.open,o=e.onClose,i=e.title,c=void 0===i?"":i,l=L();return r.a.createElement(M.a,{open:a,onClose:o,PaperComponent:P,"aria-labelledby":"draggable-dialog-title",className:v()(l.dialog,n),disableBackdropClick:!0,maxWidth:"lg"},r.a.createElement(W.a,{className:l.dialogTitle,id:"draggable-dialog-title"},r.a.createElement(F.a,{container:!0,className:l.smallHeight},r.a.createElement(F.a,{item:!0,xs:1,className:l.smallHeight}),r.a.createElement(F.a,{item:!0,xs:10,className:l.smallHeight},r.a.createElement(h.a,{variant:"body1",align:"center",className:l.title},c)),r.a.createElement(F.a,{item:!0,xs:1,container:!0,justify:"flex-end",alignItems:"center",wrap:"nowrap",className:l.smallHeight},r.a.createElement(F.a,{item:!0,className:l.smallHeight},r.a.createElement(H.a,{onClick:o,size:"small",className:l.closeButton},r.a.createElement(B.a,{className:l.smallFont},"close_icon")))))),r.a.createElement(D.a,null,t))},G=Object(d.a)((function(){return{image:{maxHeight:"40em",maxWidth:"50em"}}})),Y=Object(l.b)((function(e){return{currentImage:e.currentImage}}),(function(e){return{clearImage:function(){return e(_(""))}}}))((function(e){var t=e.currentImage,n=e.clearImage,o=G(),i=Object(a.useState)(!1),c=Object(f.a)(i,2),l=c[0],s=c[1];Object(a.useEffect)((function(){t&&s(!0)}),[t]);return t?r.a.createElement(z,{title:"Image - ".concat(t),open:l,onClose:function(){n(),s(!1)}},r.a.createElement("img",{src:"/image?file_name=".concat(t),className:o.image,alt:t})):null})),J=n(104),K=Object(d.a)((function(e){var t=e.spacing;return{root:{backgroundColor:"black",color:"white",height:"35rem",width:"50rem",borderRadius:"7px",display:"flex",justifyContent:"center",alignItems:"center",padding:t(10)},title:{fontFamily:"Roboto Mono",fontSize:"1.6em",fontWeight:600,textAlign:"center",userSelect:"none",marginTop:0},text:{fontFamily:"Roboto Mono",fontSize:"1.3em",fontWeight:500,textAlign:"left",color:"white",userSelect:"none",marginBlockStart:"30px",marginBlockEnd:"30px"},button:{fontFamily:"Roboto Mono",fontSize:"1.3em",fontWeight:500,marginTop:t(1)},lightGreen:{color:"#1ec700"}}})),$=function(e){var t=e.onButtonClick,n=K();return r.a.createElement("div",{className:n.root},r.a.createElement("div",null,r.a.createElement("h4",{className:n.title},"MISSION: LABORATORY LOCKDOWN"),r.a.createElement("p",{className:v()(n.text,n.lightGreen)},"Welcome, Agent #24601."),r.a.createElement("p",{className:n.text},"It has been discovered that the ",r.a.createElement("span",{className:n.lightGreen},"Corona Institute of Virology "),"has been genetically engineering deadly viruses for use as biological weapons."),r.a.createElement("p",{className:n.text},"Your mission is to ",r.a.createElement("span",{className:n.lightGreen},"hack into their computer system ")," and",r.a.createElement("span",{className:n.lightGreen}," shut down their laboratory power source"),". This would disable their security system and allow us to infiltrate the facility."),r.a.createElement("p",{className:n.text},"Fortunately for you, we were able to obtain the login credentials of Ryan Fisher, a lower level employee. To access their computer, type ",r.a.createElement("span",{className:n.lightGreen},"ssh r_fisher"),". The password is",r.a.createElement("span",{className:n.lightGreen}," sterilize"),"."),r.a.createElement("p",{className:n.text},"The rest is up to you. Good luck!"),r.a.createElement(J.a,{variant:"outlined",color:"primary",className:n.button,onClick:t},"START")))},V=Object(d.a)((function(e){var t=e.spacing;return{root:{backgroundColor:"black",color:"white",height:"30rem",width:"45rem",borderRadius:"7px",display:"flex",justifyContent:"center",alignItems:"center",padding:t(15)},title:{fontFamily:"Roboto Mono",fontSize:"1.9em",fontWeight:600,textAlign:"center",userSelect:"none",marginTop:0},text:{fontFamily:"Roboto Mono",fontSize:"1.5em",fontWeight:500,textAlign:"left",color:"white",userSelect:"none",marginBlockStart:"30px",marginBlockEnd:"30px"},button:{fontFamily:"Roboto Mono",fontSize:"1.3em",fontWeight:500,marginTop:t(1)},lightGreen:{color:"#1ec700"}}})),q=function(e){var t=e.onButtonClick,n=V();return r.a.createElement("div",{className:n.root},r.a.createElement("div",null,r.a.createElement("h4",{className:n.title},"MISSION COMPLETE"),r.a.createElement("p",{className:v()(n.text,n.lightGreen)},"Congratulations, Agent #24601."),r.a.createElement("p",{className:n.text},"You have successfully completed your mission. Thanks to you, we were able to infiltrate the lab and put a stop to their unethical testing practices."),r.a.createElement("p",{className:n.text},"Great work!"),r.a.createElement(J.a,{variant:"outlined",color:"primary",className:n.button,onClick:t},"BACK TO TERMINAL")))},Q=Object(d.a)((function(e){return{root:{backgroundColor:"#01220f",padding:(0,e.spacing)(4),minHeight:"100vh"}}})),X=Object(l.b)((function(e){var t=e.powerSource;return{powerSourcesOff:!t.powerSource1On&&!t.powerSource2On}}),(function(e){return{initDefaultCommands:function(){return e(function(){var e=Object(S.a)(x.a.mark((function e(t){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:fetch("/commands?type=logged_out").then((function(e){return e.text()})).then((function(e){var n=JSON.parse(e);t(R(n))})).catch((function(e){return console.error("Error fetching default commands: ".concat(e))}));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())},addToHistory:function(t){return e(w(t))}}}))((function(e){var t=e.powerSourcesOff,n=e.initDefaultCommands,o=e.addToHistory,i=Q(),c=Object(a.useState)(!1),l=Object(f.a)(c,2),s=l[0],u=l[1],m=C("/audio?file_name=click.mp3"),d=C("/audio?file_name=mission_complete.m4a");Object(a.useEffect)((function(){t&&(d(),u(!1))}),[t]),Object(a.useEffect)((function(){n(),o([{type:"output",value:['Type "ssh r_fisher sterilize" to proceed.']}])}),[]);var h=function(){m(),u(!0)},g=r.a.createElement($,{onButtonClick:h});return s?g=r.a.createElement(k,null):t&&(g=r.a.createElement(q,{onButtonClick:h})),r.a.createElement(p.a,{display:"flex",justifyContent:"center",alignItems:"center",className:i.root},r.a.createElement("div",null,g),r.a.createElement(Y,null))})),Z=n(105),ee=n(56),te=Object(ee.a)({palette:{primary:{main:"#ffffff"},secondary:{main:"#1ec700"}},typography:{fontFamily:["Roboto Mono","Open Sans","Lato","Roboto","Helvetica Neue","Arial","sans-serif"].join(","),fontSize:14,fontWeightLight:300,fontWeightRegular:400,fontWeightMedium:500}}),ne=n(53),ae=function(){return r.a.createElement(Z.a,{theme:te},r.a.createElement("div",{className:"App"},r.a.createElement("header",null,r.a.createElement(ne.a,null,r.a.createElement("title",null,"Laboratory Lockdown"))),r.a.createElement("body",null,r.a.createElement(X,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var re=Object(O.a)();function oe(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:re,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_TERMINAL_HISTORY_ENTRIES":return e.concat(t.payload);case"CLEAR_TERMINAL_HISTORY":return re;default:return e}}function ie(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_CURRENT_USER":return t.newUser;default:return e}}function ce(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_CURRENT_IMAGE":return t.imageFileName;default:return e}}var le={};function se(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:le,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_COMMANDS":return t.newCommands;default:return e}}var ue={};function me(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ue,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_FILES":return t.newFiles;case"CLEAR_FILES":return{};default:return e}}var fe=n(44),de={powerSource1On:!0,powerSource2On:!0};function pe(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:de,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"TURN_OFF_POWER_SOURCE_1":return Object(fe.a)({},e,{powerSource1On:!1});case"TURN_OFF_POWER_SOURCE_2":return Object(fe.a)({},e,{powerSource2On:!1});default:return e}}var he=Object(c.d)(Object(c.c)({terminalHistory:oe,currentUser:ie,currentImage:ce,commands:se,files:me,powerSource:pe}),Object(c.a)(u.a,m.a));i.a.render(r.a.createElement(l.a,{store:he},r.a.createElement(ae,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[65,1,2]]]);
//# sourceMappingURL=main.0aa2a66d.chunk.js.map