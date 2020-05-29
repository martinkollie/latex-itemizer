(this["webpackJsonplatex-itemizer"]=this["webpackJsonplatex-itemizer"]||[]).push([[0],{14:function(e,t,a){"use strict";a.r(t);var l=a(0),n=a.n(l),c=a(3),r=a.n(c),s=a(4),m=a(5),i=a(1),o=a(8),u=a(7),d=a(6),h=a.n(d),v=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(e){var l;return Object(s.a)(this,a),(l=t.call(this,e)).state={mode:"itemize",items:[],charactersToRemove:["*","\u2022"]},l.itemize=l.itemize.bind(Object(i.a)(l)),l.removeBullets=l.removeBullets.bind(Object(i.a)(l)),l.handleModeChange=l.handleModeChange.bind(Object(i.a)(l)),l.handleRemoveChars=l.handleRemoveChars.bind(Object(i.a)(l)),l}return Object(m.a)(a,[{key:"itemize",value:function(e){var t=e.target.value.split("\n"),a=[];t.forEach((function(e){return a.push(e)})),this.setState({items:a})}},{key:"removeBullets",value:function(e){e.target.value;var t=this.state.charactersToRemove.join("|"),a=this.state.items.map((function(e){return e.replace(new RegExp("["+t+"]"),"")}));console.log(a),this.setState({items:a})}},{key:"handleModeChange",value:function(e){var t=e.target.value;this.setState({mode:t})}},{key:"handleRemoveChars",value:function(e){e.target.value;this.setState({charactersToRemove:e.target.value.split(",")})}},{key:"render",value:function(){var e=this;return n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row mb-3"},n.a.createElement("div",{className:"col"},n.a.createElement("div",{className:"card"},n.a.createElement("div",{className:"card-body"},n.a.createElement("div",{className:"title"},n.a.createElement("span",null,n.a.createElement("img",{src:h.a,alt:""})),n.a.createElement("h1",{className:"card-title"},"LaTeX Itemizer")),n.a.createElement("div",{className:"container p-0 m-0"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col"},n.a.createElement("p",null,"Converts a list into a LaTeX list format."))),n.a.createElement("hr",null),n.a.createElement("h5",null,"Options"),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-sm-12 col-md-6  "},n.a.createElement("h6",null,"List types"),n.a.createElement("small",{className:"text-muted"},"LaTeX package"),n.a.createElement("select",{onChange:this.handleModeChange,className:"form-control w-75"},n.a.createElement("option",{value:"itemize"},"Itemize"),n.a.createElement("option",{value:"enumerate"},"Enumerate"))),n.a.createElement("div",{className:"col-6"},n.a.createElement("h6",null,"Characters to remove"),n.a.createElement("small",{className:"text-muted"},"(e.g bullets) comma separated values"),n.a.createElement("ul",null,this.state.charactersToRemove.map((function(e){return n.a.createElement("li",null,e)}))),n.a.createElement("input",{type:"text",onChange:function(t){return e.handleRemoveChars(t)},defaultValue:this.state.charactersToRemove.join(","),className:"form-control  w-75"})))))))),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col col-6 mb-3"},n.a.createElement("div",{className:"card",style:{height:"300px"}},n.a.createElement("div",{className:"card-body"},n.a.createElement("h5",{className:"card-title"},"Plain text list"),n.a.createElement("textarea",{onChange:this.itemize,className:"textarea",style:{width:"100%",height:"80%"}})))),n.a.createElement("div",{className:"col col-6"},n.a.createElement("div",{className:"card"},n.a.createElement("div",{className:"card-body text-left"},n.a.createElement("h5",{className:"card-title"},"LaTeX list"),n.a.createElement("code",null,"\\begin","".concat("{"+this.state.mode+"}")," ",n.a.createElement("br",null)," ",this.state.items.map((function(e){return n.a.createElement("span",null,"\\item ",e," ",n.a.createElement("br",null))})),"\\end","".concat("{"+this.state.mode+"}")," ",n.a.createElement("br",null)),n.a.createElement("button",{onClick:this.removeBullets,className:"btn btn-primary btn-block mt-3"},"Remove characters"))))))}}]),a}(l.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(n.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},6:function(e,t,a){e.exports=a.p+"static/media/logo.cbd8b5a8.svg"},9:function(e,t,a){e.exports=a(14)}},[[9,1,2]]]);
//# sourceMappingURL=main.a7ba4704.chunk.js.map