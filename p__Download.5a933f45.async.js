(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[17],{BA3F:function(e,a,t){"use strict";t.d(a,"a",(function(){return m}));t("lUTK");var n=t("BvKs"),r=t("fWQN"),o=t("mtLc"),c=t("yKVA"),l=t("879j"),s=t("q1tI"),i=t.n(s),u=t("wE4A"),d=t.n(u),m=function(e){Object(c["a"])(t,e);var a=Object(l["a"])(t);function t(){var e;Object(r["a"])(this,t);for(var n=arguments.length,o=new Array(n),c=0;c<n;c++)o[c]=arguments[c];return e=a.call.apply(a,[this].concat(o)),e.state={},e.handleClick=function(a){e.props.callback(a.key)},e}return Object(o["a"])(t,[{key:"render",value:function(){var e=this.props,a=e.menu,t=e.current;return i.a.createElement("div",{className:d.a.leftMenu},i.a.createElement(n["a"],{selectedKeys:[t],mode:"inline",onClick:this.handleClick},a.map((function(e){return i.a.createElement(n["a"].Item,{key:e.name},e.name)}))))}}]),t}(i.a.Component)},nFT4:function(e,a,t){e.exports={download_banner:"download_banner___2jPvk",download_icon:"download_icon___1KK9z",download_negative:"download_negative___z0EQT",download_button:"download_button___1erKP",download_card:"download_card___3R-jW"}},ocZn:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return W}));t("14J3");var n,r=t("BMrR"),o=(t("R9oj"),t("ECub")),c=(t("IzEo"),t("bx4M")),l=(t("DYRE"),t("zeV3")),s=(t("jCWc"),t("kPKH")),i=(t("1YHl"),t("VNzZ")),u=(t("sPJy"),t("bE4q")),d=(t("miYZ"),t("tsqr")),m=t("rAM+"),p=t("9og8"),f=t("fWQN"),y=t("mtLc"),v=t("yKVA"),b=t("879j"),h=(t("Znn+"),t("ZTPi")),g=(t("tU7J"),t("wFql")),w=t("WmNS"),E=t.n(w),_=t("q1tI"),j=t.n(_),S=t("4zCG"),T=t("ZFw/"),N=t.n(T),k=t("ysgf"),O=t("jLID"),x=t("+cnc"),L=t.n(x),P=t("nFT4"),C=t.n(P),M=t("f2Ie"),q=t.n(M),F=t("dF/Y"),I=t("2XLT"),A=t("BA3F"),D=t("55Ip"),K=t("Aeqt"),U=t("t3Un"),z=t("+n12");Object(S["enquireScreen"])((function(e){n=e}));var H=g["a"].Paragraph,B=g["a"].Text,R=h["a"].TabPane,W=function(e){Object(v["a"])(t,e);var a=Object(b["a"])(t);function t(e){var r;return Object(f["a"])(this,t),r=a.call(this,e),r.getDownloadCategory=Object(p["a"])(E.a.mark((function e(){var a,t,n,o;return E.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(U["a"])(K["a"].downloadUrl+"query_all_super_cate",{method:"GET",requestType:"form"});case 2:if(a=e.sent,"0000"===a.code){if(r.setState({dataSource:a.result}),0!==a.result.length){t=Object(m["a"])(a.result[0].categorySorts);try{for(t.s();!(n=t.n()).done;)o=n.value,o.name=o.category}catch(c){t.e(c)}finally{t.f()}r.setState({dataType:a.result[0].categorySorts,currentType:0!==a.result[0].categorySorts.length?a.result[0].categorySorts[0].category:null},(function(){r.getDownloadList()}))}}else a.message&&d["default"].error(a.message);case 4:case"end":return e.stop()}}),e)}))),r.handleTabsClick=function(e){var a,t=r.state.dataSource,n=Object(m["a"])(t);try{for(n.s();!(a=n.n()).done;){var o=a.value;if(o.superName===e){var c,l=Object(m["a"])(o.categorySorts);try{for(l.s();!(c=l.n()).done;){var s=c.value;s.name=s.category}}catch(i){l.e(i)}finally{l.f()}r.setState({dataType:o.categorySorts,currentType:0!==o.categorySorts.length?o.categorySorts[0].category:null},(function(){r.getDownloadList()}))}}}catch(i){n.e(i)}finally{n.f()}},r.getCurrentMenu=function(e){r.setState({currentType:e},(function(){r.getDownloadList()}))},r.getDownloadList=Object(p["a"])(E.a.mark((function e(){var a,t,n,o,c,l,s,i,u,p,f,y;return E.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(a=r.state.currentType,null!==a){e.next=3;break}return e.abrupt("return");case 3:return t={category:a},e.next=6,Object(U["a"])(K["a"].downloadUrl+"query_by_condition",{method:"GET",requestType:"form",params:t});case 6:if(n=e.sent,"0000"===n.code){o=[],c=Object(m["a"])(n.result);try{for(c.s();!(l=c.n()).done;){s=l.value,i=Object.create(null),i.id=s.id,i.name=s.resourceName,i.version=s.introduce,i.time=s.latestUpdateTime,i.imagePath="".concat(K["a"].fileResourceUrl).concat(s.imagePath),i.filePath=s.filePath,u=[],p=Object(m["a"])(s.products);try{for(p.s();!(f=p.n()).done;)y=f.value,u.push(y.proName)}catch(v){p.e(v)}finally{p.f()}i.aProducts=u.join("/"),i.hover=!1,o.push(i)}}catch(v){c.e(v)}finally{c.f()}r.setState({downloadList:o})}else n.message&&d["default"].error(n.message);case 8:case"end":return e.stop()}}),e)}))),r.mouseEnter=function(e){r.setHoverStatus(e,!0)},r.mouseLeave=function(e){r.setHoverStatus(e,!1)},r.setHoverStatus=function(e,a){var t,n=r.state.downloadList,o=Object(m["a"])(n);try{for(o.s();!(t=o.n()).done;){var c=t.value;c.id===e?c.hover=a:a&&(c.hover=!a)}}catch(l){o.e(l)}finally{o.f()}r.setState({downloadList:n})},r.downloadFile=function(){var e=Object(p["a"])(E.a.mark((function e(a){return E.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:window.location.href="".concat(K["a"].fileUrl,"download?FileName=").concat(a);case 1:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}(),r.state={isMobile:n,dataSource:[],dataType:[],currentType:null,downloadList:[]},r}return Object(y["a"])(t,[{key:"componentDidMount",value:function(){var e=this;this.getDownloadCategory(),this.enquireHandler=Object(S["enquireScreen"])((function(a){e.setState({isMobile:a})}))}},{key:"componentWillUnmount",value:function(){Object(S["unenquireScreen"])(this.enquireHandler)}},{key:"render",value:function(){var e=this,a=this.state,t=a.dataSource,d=a.dataType,m=a.downloadList,p=a.currentType;return j.a.createElement("div",{className:"templates-wrapper"},j.a.createElement(N.a,{title:"\u4e0b\u8f7d\u4e2d\u5fc3 - \u5357\u4eac\u845b\u5357\u5b9e\u4e1a\u6709\u9650\u516c\u53f8"}),j.a.createElement("div",{className:L.a.product_content},j.a.createElement(k["a"],{current:"\u4e0b\u8f7d\u4e2d\u5fc3"}),j.a.createElement("div",{className:"".concat(q.a.banner_content," ").concat(C.a.download_banner)},j.a.createElement("div",{className:"".concat(q.a.home_page),style:{width:"100%"}},j.a.createElement("div",{className:q.a.banner_miantitle_narrow,style:{marginTop:50}},"\u4e0b\u8f7d\u4e2d\u5fc3"),j.a.createElement(u["a"],{className:L.a.product_breadcrumb},j.a.createElement(u["a"].Item,null,j.a.createElement(D["a"],{to:"/",className:L.a.product_breadcrumb_text},"\u9996\u9875")),j.a.createElement(u["a"].Item,null,j.a.createElement(D["a"],{to:"/support",className:L.a.product_breadcrumb_text},"\u670d\u52a1\u4e0e\u652f\u6301")),j.a.createElement(u["a"].Item,{className:L.a.product_breadcrumb_text},"\u4e0b\u8f7d\u4e2d\u5fc3")))),j.a.createElement("div",{className:q.a.home_page_wrapper},j.a.createElement("div",{className:"".concat(q.a.home_page," ").concat(L.a.product_affix),style:{marginBottom:40}},j.a.createElement(i["a"],{offsetTop:0},j.a.createElement(h["a"],{onChange:this.handleTabsClick},t.map((function(e){return j.a.createElement(R,{tab:e.superName,key:e.superName})})))))),j.a.createElement("div",{className:"".concat(q.a.home_page_wrapper," ").concat(L.a.product_list)},j.a.createElement("div",{className:"".concat(q.a.home_page)},j.a.createElement(r["a"],{gutter:[32,32]},j.a.createElement(s["a"],{xs:24,sm:8,md:8,lg:6,xl:6},j.a.createElement(A["a"],{menu:d,callback:this.getCurrentMenu,current:p})),j.a.createElement(s["a"],{xs:24,sm:16,md:16,lg:18,xl:18},j.a.createElement(r["a"],{gutter:[32,32]},0!==m.length?m.map((function(a,t){return j.a.createElement(s["a"],{key:t,xs:12,sm:12,md:12,lg:8,xl:8,className:C.a.download_card,onMouseEnter:e.mouseEnter.bind(e,a.id),onMouseLeave:e.mouseLeave.bind(e,a.id)},j.a.createElement(c["a"],{hoverable:!0,style:{minHeight:250}},a.hover?j.a.createElement("div",{style:{width:"100%"}},j.a.createElement(l["b"],{direction:"vertical",className:C.a.download_negative},j.a.createElement(B,null,"\u9002\u7528\u4ea7\u54c1\uff1a"),j.a.createElement(H,{ellipsis:{rows:6,expandable:!0,symbol:"\u66f4\u591a"}},a.aProducts)),j.a.createElement("div",{className:C.a.download_button,onClick:e.downloadFile.bind(e,a.filePath)},j.a.createElement(F["a"],{style:{color:"#448AF3",fontSize:18}}),"\xa0\u7acb\u5373\u4e0b\u8f7d")):j.a.createElement(l["b"],{direction:"vertical",align:"center",style:{width:"100%"}},j.a.createElement("img",{src:a.imagePath,className:C.a.download_icon}),j.a.createElement(B,{style:{fontSize:18,wordBreak:"break-all"}},a.name),j.a.createElement(B,{style:{color:"#aaaaaa"}},""!==a.version&&j.a.createElement("span",null,"\u7248\u672c\uff1a",a.version)),j.a.createElement("div",{style:{marginTop:10,color:"#aaaaaa"}},j.a.createElement(I["a"],{style:{color:"#aaaaaa"}}),"\xa0",Object(z["d"])(a.time,"yyyy-MM-dd")))))})):j.a.createElement(o["a"],{image:o["a"].PRESENTED_IMAGE_SIMPLE,style:{margin:"auto",marginTop:100,marginBottom:100}})))))),j.a.createElement(O["a"],{id:"Footer",key:"Footer",isMobile:n})))}}]),t}(j.a.Component)}}]);