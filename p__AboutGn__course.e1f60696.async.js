(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[11],{"15/o":function(e,t,a){},"1YHl":function(e,t,a){"use strict";a("cIOH"),a("15/o")},AOa7:function(e,t,a){},Mt6X:function(e,t,a){e.exports={intro_banner:"intro_banner___3lxuU",course_banner:"course_banner___2NlyB",honor_banner:"honor_banner___qMC-n",join_banner:"join_banner___V5apc",contact_banner:"contact_banner___3Cwu5",search_banner:"search_banner___3rMkL",copyright_banner:"copyright_banner___Pf5NA",project_banner:"project_banner___1CM5c",servicepolicy_banner:"servicepolicy_banner___3G16O",intro_title:"intro_title___2_SlN",home_title:"home_title___2hvlL",intro_subtitle:"intro_subtitle___3Cgjj",home_subtitle:"home_subtitle___3PAFq",intro_culture_child:"intro_culture_child___U9WRz",intro_culture_title:"intro_culture_title___2FaMa",intro_culture_subtitle:"intro_culture_subtitle___IRlzk",intro_avatar:"intro_avatar___2xhFC",intro_team_content:"intro_team_content___2sXbT",intro_team:"intro_team___2ffvF",intro_team_name:"intro_team_name___tpbQ9",intro_team_job:"intro_team_job___3bpv_",intro_team_introduce:"intro_team_introduce___evSFL",intro_information:"intro_information___2_In2",intro_school:"intro_school___2ey9Q",intro_img:"intro_img___xodZb",intro_count:"intro_count___1VyVy",intro_name:"intro_name___2j4zK",intro_application:"intro_application___31IWt",intro_project:"intro_project___-kj12",cascader:"cascader___3-3r6",course_years:"course_years___WURzi",course_years_name:"course_years_name___1X9yc",course_years_detail:"course_years_detail___UUDTR",course_years_time:"course_years_time___3BD9a",course_years_title:"course_years_title___2OYAw",course_years_summary:"course_years_summary___1m_9i",course_more:"course_more___35JRj",course_more_content:"course_more_content___3rovs",course_more_left:"course_more_left___2hmXX",honor_title:"honor_title___dOubV",join_email:"join_email___8hvBy",join_email_title:"join_email_title___21IJQ",join_card:"join_card___1wx2M",join_card_close:"join_card_close___3hlts",contact_form:"contact_form___1MAIw",contact_title:"contact_title___1I2qo",contact_desc:"contact_desc___daSh0",contact_icon:"contact_icon___3RZI4",contact_map:"contact_map___Smv82",contact_msg:"contact_msg___2DEe1",contact_info:"contact_info___2dLuP"}},VNzZ:function(e,t,a){"use strict";var r=a("wx14"),n=a("rePB"),o=a("1OyB"),c=a("vuIU"),i=a("Ji7U"),s=a("LK+K"),l=a("U8pU"),_=a("q1tI"),u=a("TSYQ"),m=a.n(u),f=a("bT9E"),p=a("t23M"),d=a("H84U"),h=a("PEeC"),y=a("zT1h");function b(e){return e!==window?e.getBoundingClientRect():{top:0,bottom:window.innerHeight}}function v(e,t,a){if(void 0!==a&&t.top>e.top-a)return a+t.top}function g(e,t,a){if(void 0!==a&&t.bottom<e.bottom+a){var r=window.innerHeight-t.bottom;return a+r}}var O=["resize","scroll","touchstart","touchmove","touchend","pageshow","load"],E=[];function j(e,t){if(e){var a=E.find((function(t){return t.target===e}));a?a.affixList.push(t):(a={target:e,affixList:[t],eventHandlers:{}},E.push(a),O.forEach((function(t){a.eventHandlers[t]=Object(y["a"])(e,t,(function(){a.affixList.forEach((function(e){e.lazyUpdatePosition()}))}))})))}}function x(e){var t=E.find((function(t){var a=t.affixList.some((function(t){return t===e}));return a&&(t.affixList=t.affixList.filter((function(t){return t!==e}))),a}));t&&0===t.affixList.length&&(E=E.filter((function(e){return e!==t})),O.forEach((function(e){var a=t.eventHandlers[e];a&&a.remove&&a.remove()})))}var N,w=function(e,t,a,r){var n,o=arguments.length,c=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,a):r;if("object"===("undefined"===typeof Reflect?"undefined":Object(l["a"])(Reflect))&&"function"===typeof Reflect.decorate)c=Reflect.decorate(e,t,a,r);else for(var i=e.length-1;i>=0;i--)(n=e[i])&&(c=(o<3?n(c):o>3?n(t,a,c):n(t,a))||c);return o>3&&c&&Object.defineProperty(t,a,c),c};function T(){return"undefined"!==typeof window?window:null}(function(e){e[e["None"]=0]="None",e[e["Prepare"]=1]="Prepare"})(N||(N={}));var P=function(e){Object(i["a"])(a,e);var t=Object(s["a"])(a);function a(){var e;return Object(o["a"])(this,a),e=t.apply(this,arguments),e.state={status:N.None,lastAffix:!1,prevTarget:null},e.getOffsetTop=function(){var t=e.props.offsetBottom,a=e.props.offsetTop;return void 0===t&&void 0===a&&(a=0),a},e.getOffsetBottom=function(){return e.props.offsetBottom},e.savePlaceholderNode=function(t){e.placeholderNode=t},e.saveFixedNode=function(t){e.fixedNode=t},e.measure=function(){var t=e.state,a=t.status,r=t.lastAffix,n=e.props.onChange,o=e.getTargetFunc();if(a===N.Prepare&&e.fixedNode&&e.placeholderNode&&o){var c=e.getOffsetTop(),i=e.getOffsetBottom(),s=o();if(s){var l={status:N.None},_=b(s),u=b(e.placeholderNode),m=v(u,_,c),f=g(u,_,i);void 0!==m?(l.affixStyle={position:"fixed",top:m,width:u.width,height:u.height},l.placeholderStyle={width:u.width,height:u.height}):void 0!==f&&(l.affixStyle={position:"fixed",bottom:f,width:u.width,height:u.height},l.placeholderStyle={width:u.width,height:u.height}),l.lastAffix=!!l.affixStyle,n&&r!==l.lastAffix&&n(l.lastAffix),e.setState(l)}}},e.prepareMeasure=function(){e.setState({status:N.Prepare,affixStyle:void 0,placeholderStyle:void 0})},e.render=function(){var t=e.context.getPrefixCls,a=e.state,o=a.affixStyle,c=a.placeholderStyle,i=e.props,s=i.prefixCls,l=i.children,u=m()(Object(n["a"])({},t("affix",s),o)),d=Object(f["a"])(e.props,["prefixCls","offsetTop","offsetBottom","target","onChange"]);return _["createElement"](p["a"],{onResize:function(){e.updatePosition()}},_["createElement"]("div",Object(r["a"])({},d,{ref:e.savePlaceholderNode}),o&&_["createElement"]("div",{style:c,"aria-hidden":"true"}),_["createElement"]("div",{className:u,ref:e.saveFixedNode,style:o},_["createElement"](p["a"],{onResize:function(){e.updatePosition()}},l))))},e}return Object(c["a"])(a,[{key:"getTargetFunc",value:function(){var e=this.context.getTargetContainer,t=this.props.target;return void 0!==t?t:e||T}},{key:"componentDidMount",value:function(){var e=this,t=this.getTargetFunc();t&&(this.timeout=setTimeout((function(){j(t(),e),e.updatePosition()})))}},{key:"componentDidUpdate",value:function(e){var t=this.state.prevTarget,a=this.getTargetFunc(),r=null;a&&(r=a()||null),t!==r&&(x(this),r&&(j(r,this),this.updatePosition()),this.setState({prevTarget:r})),e.offsetTop===this.props.offsetTop&&e.offsetBottom===this.props.offsetBottom||this.updatePosition(),this.measure()}},{key:"componentWillUnmount",value:function(){clearTimeout(this.timeout),x(this),this.updatePosition.cancel(),this.lazyUpdatePosition.cancel()}},{key:"updatePosition",value:function(){this.prepareMeasure()}},{key:"lazyUpdatePosition",value:function(){var e=this.getTargetFunc(),t=this.state.affixStyle;if(e&&t){var a=this.getOffsetTop(),r=this.getOffsetBottom(),n=e();if(n&&this.placeholderNode){var o=b(n),c=b(this.placeholderNode),i=v(c,o,a),s=g(c,o,r);if(void 0!==i&&t.top===i||void 0!==s&&t.bottom===s)return}}this.prepareMeasure()}}]),a}(_["Component"]);P.contextType=d["b"],w([Object(h["b"])()],P.prototype,"updatePosition",null),w([Object(h["b"])()],P.prototype,"lazyUpdatePosition",null);t["a"]=P},bE4q:function(e,t,a){"use strict";var r=a("wx14"),n=a("rePB"),o=a("KQm4"),c=a("q1tI"),i=a("TSYQ"),s=a.n(i),l=a("Zm9Q"),_=a("8Skl"),u=a("XBQK"),m=a("H84U"),f=function(e,t){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var n=0;for(r=Object.getOwnPropertySymbols(e);n<r.length;n++)t.indexOf(r[n])<0&&Object.prototype.propertyIsEnumerable.call(e,r[n])&&(a[r[n]]=e[r[n]])}return a},p=function(e){var t,a=e.prefixCls,n=e.separator,o=void 0===n?"/":n,i=e.children,s=e.overlay,l=e.dropdownProps,p=f(e,["prefixCls","separator","children","overlay","dropdownProps"]),d=c["useContext"](m["b"]),h=d.getPrefixCls,y=h("breadcrumb",a),b=function(e){return s?c["createElement"](u["a"],Object(r["a"])({overlay:s,placement:"bottomCenter"},l),c["createElement"]("span",{className:"".concat(y,"-overlay-link")},e,c["createElement"](_["a"],null))):e};return t="href"in p?c["createElement"]("a",Object(r["a"])({className:"".concat(y,"-link")},p),i):c["createElement"]("span",Object(r["a"])({className:"".concat(y,"-link")},p),i),t=b(t),i?c["createElement"]("span",null,t,o&&""!==o&&c["createElement"]("span",{className:"".concat(y,"-separator")},o)):null};p.__ANT_BREADCRUMB_ITEM=!0;var d=p,h=function(e){var t=e.children,a=c["useContext"](m["b"]),r=a.getPrefixCls,n=r("breadcrumb");return c["createElement"]("span",{className:"".concat(n,"-separator")},t||"/")};h.__ANT_BREADCRUMB_SEPARATOR=!0;var y=h,b=a("BvKs"),v=a("uaoM"),g=a("0n0R"),O=function(e,t){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var n=0;for(r=Object.getOwnPropertySymbols(e);n<r.length;n++)t.indexOf(r[n])<0&&Object.prototype.propertyIsEnumerable.call(e,r[n])&&(a[r[n]]=e[r[n]])}return a};function E(e,t){if(!e.breadcrumbName)return null;var a=Object.keys(t).join("|"),r=e.breadcrumbName.replace(new RegExp(":(".concat(a,")"),"g"),(function(e,a){return t[a]||e}));return r}function j(e,t,a,r){var n=a.indexOf(e)===a.length-1,o=E(e,t);return n?c["createElement"]("span",null,o):c["createElement"]("a",{href:"#/".concat(r.join("/"))},o)}var x=function(e,t){return e=(e||"").replace(/^\//,""),Object.keys(t).forEach((function(a){e=e.replace(":".concat(a),t[a])})),e},N=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",a=arguments.length>2?arguments[2]:void 0,r=Object(o["a"])(e),n=x(t,a);return n&&r.push(n),r},w=function(e){var t,a=e.prefixCls,o=e.separator,i=void 0===o?"/":o,_=e.style,u=e.className,f=e.routes,p=e.children,h=e.itemRender,y=void 0===h?j:h,E=e.params,w=void 0===E?{}:E,T=O(e,["prefixCls","separator","style","className","routes","children","itemRender","params"]),P=c["useContext"](m["b"]),C=P.getPrefixCls,S=P.direction,k=C("breadcrumb",a);if(f&&f.length>0){var B=[];t=f.map((function(e){var t,a=x(e.path,w);return a&&B.push(a),e.children&&e.children.length&&(t=c["createElement"](b["a"],null,e.children.map((function(e){return c["createElement"](b["a"].Item,{key:e.path||e.breadcrumbName},y(e,w,f,N(B,e.path,w)))})))),c["createElement"](d,{overlay:t,separator:i,key:a||e.breadcrumbName},y(e,w,f,B))}))}else p&&(t=Object(l["a"])(p).map((function(e,t){return e?(Object(v["a"])(e.type&&(!0===e.type.__ANT_BREADCRUMB_ITEM||!0===e.type.__ANT_BREADCRUMB_SEPARATOR),"Breadcrumb","Only accepts Breadcrumb.Item and Breadcrumb.Separator as it's children"),Object(g["a"])(e,{separator:i,key:t})):e})));var M=s()(k,Object(n["a"])({},"".concat(k,"-rtl"),"rtl"===S),u);return c["createElement"]("div",Object(r["a"])({className:M,style:_},T),t)};w.Item=d,w.Separator=y;var T=w;t["a"]=T},pG2B:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return F}));a("+L6B");var r,n=a("2/Rp"),o=(a("1YHl"),a("VNzZ")),c=(a("lUTK"),a("BvKs")),i=(a("14J3"),a("BMrR")),s=(a("jCWc"),a("kPKH")),l=(a("sPJy"),a("bE4q")),_=(a("miYZ"),a("tsqr")),u=a("oBTY"),m=a("rAM+"),f=a("9og8"),p=a("fWQN"),d=a("mtLc"),h=a("yKVA"),y=a("879j"),b=(a("tU7J"),a("wFql")),v=a("WmNS"),g=a.n(v),O=a("q1tI"),E=a.n(O),j=a("4zCG"),x=a("ZFw/"),N=a.n(x),w=a("ysgf"),T=a("jLID"),P=a("+cnc"),C=a.n(P),S=a("Mt6X"),k=a.n(S),B=a("f2Ie"),M=a.n(B),R=a("55Ip"),A=a("9kvl"),I=a("Aeqt"),U=a("t3Un"),q=a("+n12"),D=b["a"].Text;Object(j["enquireScreen"])((function(e){r=e}));var F=function(e){Object(h["a"])(a,e);var t=Object(y["a"])(a);function a(e){var n;return Object(p["a"])(this,a),n=t.call(this,e),n.getCompanyHistory=Object(f["a"])(g.a.mark((function e(){var t,a,r,o,c,i,s,l,f,p,d,h,y,b,v,O;return g.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t={language:"\u4e2d\u6587",sortColumnName:"history_date",sortOrderType:"desc"},e.next=3,Object(U["a"])(I["a"].companyHistoryUrl+"queryByCondition",{method:"GET",requestType:"form",params:t});case 3:if(a=e.sent,"0000"===a.code){r=[],o=[],c=[],i=Object(m["a"])(a.result);try{for(i.s();!(s=i.n()).done;)l=s.value,r.push(Object(q["d"])(l.historyDate,"yyyy")),r=Object(u["a"])(new Set(r))}catch(g){i.e(g)}finally{i.f()}for(r.length>=10&&(c=r.slice(0,9),c.push("\u66f4\u65e9")),f=0,p=r;f<p.length;f++){d=p[f],h=Object.create(null),h.year=d,h.events=[],y=Object(m["a"])(a.result);try{for(y.s();!(b=y.n()).done;)v=b.value,Object(q["d"])(v.historyDate,"yyyy")===d&&(O=Object.create(null),O.time=Object(q["d"])(v.historyDate,"yyyy.MM"),O.title=v.summary,O.detail=v.historyDetail,h.events.push(O))}catch(g){y.e(g)}finally{y.f()}o.push(h)}n.setState({menus:c,data:o})}else a.message&&_["default"].error(a.message);case 5:case"end":return e.stop()}}),e)}))),n.handleClick=function(e){var t=n.state.data;"\u66f4\u65e9"===e.key?n.scrollToAnchor(t[9].year):n.scrollToAnchor(e.key)},n.scrollToAnchor=function(e){if(e){var t=document.getElementById(e);t&&t.scrollIntoView({block:"start",behavior:"smooth"})}},n.showCasesMore=function(){A["a"].push("/aboutGn/project")},n.state={isMobile:r,menus:[],years:[],data:[]},n}return Object(d["a"])(a,[{key:"componentDidMount",value:function(){var e=this;this.getCompanyHistory(),Object(j["enquireScreen"])((function(t){e.setState({isMobile:!!t})}))}},{key:"render",value:function(){var e=this.state,t=e.data,a=e.menus,r=e.isMobile;return E.a.createElement("div",{className:"templates-wrapper"},E.a.createElement(N.a,{title:"\u53d1\u5c55\u5386\u7a0b - \u5357\u4eac\u845b\u5357\u5b9e\u4e1a\u6709\u9650\u516c\u53f8"}),E.a.createElement("div",{className:C.a.product_content},E.a.createElement(w["a"],{current:"\u53d1\u5c55\u5386\u7a0b"}),E.a.createElement("div",{className:"".concat(M.a.banner_content," ").concat(k.a.course_banner)},E.a.createElement("div",{className:"".concat(M.a.home_page),style:{width:"100%"}},E.a.createElement("div",{className:M.a.banner_miantitle_narrow,style:{marginTop:50}},"\u53d1\u5c55\u5386\u7a0b"),E.a.createElement(l["a"],{className:C.a.product_breadcrumb},E.a.createElement(l["a"].Item,null,E.a.createElement(R["a"],{to:"/",className:C.a.product_breadcrumb_text},"\u9996\u9875")),E.a.createElement(l["a"].Item,null,E.a.createElement(R["a"],{to:"/aboutGn",className:C.a.product_breadcrumb_text},"\u5173\u4e8e\u6211\u4eec")),E.a.createElement(l["a"].Item,{className:C.a.product_breadcrumb_text},"\u53d1\u5c55\u5386\u7a0b")))),E.a.createElement("div",{className:"".concat(M.a.home_page_wrapper," ").concat(C.a.product_list)},E.a.createElement("div",{className:"".concat(M.a.home_page)},E.a.createElement("div",{className:k.a.intro_title},"\u6211\u4eec\u7684\u6bcf\u4e00\u6b65"),E.a.createElement("div",{className:k.a.intro_subtitle},"The Story of Our Success"),E.a.createElement(i["a"],{gutter:[32,32]},E.a.createElement(s["a"],{xs:24,sm:20,md:20,lg:20,xl:20},t.map((function(e){return E.a.createElement(i["a"],{key:e.year,style:{marginBottom:30}},E.a.createElement(s["a"],{span:r?8:5,align:"center",className:k.a.course_years_name,id:e.year},e.year),E.a.createElement(s["a"],{span:r?16:19},e.events.map((function(e,t){return E.a.createElement("div",{key:t,className:k.a.course_years_detail},E.a.createElement("div",null,E.a.createElement("span",{className:k.a.course_years_time},e.time),"\xa0\xa0\xa0",E.a.createElement("span",{className:k.a.course_years_title},e.title)),E.a.createElement("div",{className:k.a.course_years_summary},e.detail))}))))}))),!r&&E.a.createElement(s["a"],{xs:24,sm:4,md:4,lg:4,xl:4,className:k.a.course_years},E.a.createElement(o["a"],{offsetTop:0},E.a.createElement(c["a"],{defaultSelectedKeys:[a[0]],mode:"inline",onClick:this.handleClick,style:{width:100}},a.map((function(e){return E.a.createElement(c["a"].Item,{key:e},e)})))))))),E.a.createElement("div",{className:"".concat(M.a.home_page_wrapper," ").concat(k.a.course_more),style:{marginTop:100}},E.a.createElement("div",{className:"".concat(M.a.home_page," ").concat(k.a.course_more_content)},E.a.createElement(D,{className:k.a.course_more_left},"\u6211\u4eec\u7684\u6bcf\u4e00\u4e2a\u811a\u5370\uff0c\u90fd\u51dd\u805a\u7740\u5bf9\u5353\u8d8a\u54c1\u8d28\u548c\u7cbe\u5fc3\u670d\u52a1\u7684\u8ffd\u6c42"),E.a.createElement(n["a"],{type:"primary",className:k.a.course_more_right,onClick:this.showCasesMore},"\u6240\u6709\u5de5\u7a0b\u6848\u4f8b"))),E.a.createElement(T["a"],{id:"Footer",key:"Footer",isMobile:r})))}}]),a}(E.a.Component)},sPJy:function(e,t,a){"use strict";a("cIOH"),a("AOa7"),a("lUTK"),a("qVdP")}}]);