(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[21],{"8+s/":function(e,t,_){"use strict";function n(e){return e&&"object"===typeof e&&"default"in e?e["default"]:e}var a=_("q1tI"),r=n(a),o=n(_("Gytx"));function c(e,t,_){return t in e?Object.defineProperty(e,t,{value:_,enumerable:!0,configurable:!0,writable:!0}):e[t]=_,e}function i(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}var s=!("undefined"===typeof window||!window.document||!window.document.createElement);function l(e,t,_){if("function"!==typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!==typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if("undefined"!==typeof _&&"function"!==typeof _)throw new Error("Expected mapStateOnServer to either be undefined or a function.");function n(e){return e.displayName||e.name||"Component"}return function(l){if("function"!==typeof l)throw new Error("Expected WrappedComponent to be a React component.");var m,u=[];function d(){m=e(u.map((function(e){return e.props}))),p.canUseDOM?t(m):_&&(m=_(m))}var p=function(e){function t(){return e.apply(this,arguments)||this}i(t,e),t.peek=function(){return m},t.rewind=function(){if(t.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=m;return m=void 0,u=[],e};var _=t.prototype;return _.shouldComponentUpdate=function(e){return!o(e,this.props)},_.componentWillMount=function(){u.push(this),d()},_.componentDidUpdate=function(){d()},_.componentWillUnmount=function(){var e=u.indexOf(this);u.splice(e,1),d()},_.render=function(){return r.createElement(l,this.props)},t}(a.Component);return c(p,"displayName","SideEffect("+n(l)+")"),c(p,"canUseDOM",s),p}}e.exports=l},AOa7:function(e,t,_){},Mt6X:function(e,t,_){e.exports={intro_banner:"intro_banner___3lxuU",course_banner:"course_banner___2NlyB",honor_banner:"honor_banner___qMC-n",join_banner:"join_banner___V5apc",contact_banner:"contact_banner___3Cwu5",search_banner:"search_banner___3rMkL",copyright_banner:"copyright_banner___Pf5NA",project_banner:"project_banner___1CM5c",servicepolicy_banner:"servicepolicy_banner___3G16O",nopage_banner:"nopage_banner___3nTZ0",intro_title:"intro_title___2_SlN",home_title:"home_title___2hvlL",intro_subtitle:"intro_subtitle___3Cgjj",home_subtitle:"home_subtitle___3PAFq",intro_culture_child:"intro_culture_child___U9WRz",intro_culture_title:"intro_culture_title___2FaMa",intro_culture_subtitle:"intro_culture_subtitle___IRlzk",intro_avatar:"intro_avatar___2xhFC",intro_team_content:"intro_team_content___2sXbT",intro_team:"intro_team___2ffvF",intro_team_name:"intro_team_name___tpbQ9",intro_team_job:"intro_team_job___3bpv_",intro_team_introduce:"intro_team_introduce___evSFL",intro_information:"intro_information___2_In2",intro_school:"intro_school___2ey9Q",intro_img:"intro_img___xodZb",intro_count:"intro_count___1VyVy",intro_name:"intro_name___2j4zK",intro_application:"intro_application___31IWt",intro_project:"intro_project___-kj12",cascader:"cascader___3-3r6",course_years:"course_years___WURzi",course_years_name:"course_years_name___1X9yc",course_years_detail:"course_years_detail___UUDTR",course_years_time:"course_years_time___3BD9a",course_years_title:"course_years_title___2OYAw",course_years_summary:"course_years_summary___1m_9i",course_more:"course_more___35JRj",course_more_content:"course_more_content___3rovs",course_more_left:"course_more_left___2hmXX",honor_title:"honor_title___dOubV",join_email:"join_email___8hvBy",join_email_title:"join_email_title___21IJQ",join_card:"join_card___1wx2M",join_card_close:"join_card_close___3hlts",contact_form:"contact_form___1MAIw",contact_title:"contact_title___1I2qo",contact_desc:"contact_desc___daSh0",contact_icon:"contact_icon___3RZI4",contact_map:"contact_map___Smv82",contact_msg:"contact_msg___2DEe1",contact_info:"contact_info___2dLuP"}},"ZFw/":function(e,t,_){"use strict";var n=_("q1tI"),a=_("17x9"),r=_("8+s/");function o(e){var t=e[e.length-1];if(t)return t.title}function c(e){var t=e||"";t!==document.title&&(document.title=t)}function i(){}i.prototype=Object.create(n.Component.prototype),i.displayName="DocumentTitle",i.propTypes={title:a.string.isRequired},i.prototype.render=function(){return this.props.children?n.Children.only(this.props.children):null},e.exports=r(o,c)(i)},bE4q:function(e,t,_){"use strict";var n=_("wx14"),a=_("rePB"),r=_("KQm4"),o=_("q1tI"),c=_("TSYQ"),i=_.n(c),s=_("Zm9Q"),l=_("8Skl"),m=_("XBQK"),u=_("H84U"),d=function(e,t){var _={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(_[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(_[n[a]]=e[n[a]])}return _},p=function(e){var t,_=e.prefixCls,a=e.separator,r=void 0===a?"/":a,c=e.children,i=e.overlay,s=e.dropdownProps,p=d(e,["prefixCls","separator","children","overlay","dropdownProps"]),h=o["useContext"](u["b"]),v=h.getPrefixCls,b=v("breadcrumb",_),f=function(e){return i?o["createElement"](m["a"],Object(n["a"])({overlay:i,placement:"bottomCenter"},s),o["createElement"]("span",{className:"".concat(b,"-overlay-link")},e,o["createElement"](l["a"],null))):e};return t="href"in p?o["createElement"]("a",Object(n["a"])({className:"".concat(b,"-link")},p),c):o["createElement"]("span",Object(n["a"])({className:"".concat(b,"-link")},p),c),t=f(t),c?o["createElement"]("span",null,t,r&&""!==r&&o["createElement"]("span",{className:"".concat(b,"-separator")},r)):null};p.__ANT_BREADCRUMB_ITEM=!0;var h=p,v=function(e){var t=e.children,_=o["useContext"](u["b"]),n=_.getPrefixCls,a=n("breadcrumb");return o["createElement"]("span",{className:"".concat(a,"-separator")},t||"/")};v.__ANT_BREADCRUMB_SEPARATOR=!0;var b=v,f=_("BvKs"),g=_("uaoM"),y=_("0n0R"),E=function(e,t){var _={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(_[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(_[n[a]]=e[n[a]])}return _};function w(e,t){if(!e.breadcrumbName)return null;var _=Object.keys(t).join("|"),n=e.breadcrumbName.replace(new RegExp(":(".concat(_,")"),"g"),(function(e,_){return t[_]||e}));return n}function N(e,t,_,n){var a=_.indexOf(e)===_.length-1,r=w(e,t);return a?o["createElement"]("span",null,r):o["createElement"]("a",{href:"#/".concat(n.join("/"))},r)}var x=function(e,t){return e=(e||"").replace(/^\//,""),Object.keys(t).forEach((function(_){e=e.replace(":".concat(_),t[_])})),e},O=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",_=arguments.length>2?arguments[2]:void 0,n=Object(r["a"])(e),a=x(t,_);return a&&n.push(a),n},j=function(e){var t,_=e.prefixCls,r=e.separator,c=void 0===r?"/":r,l=e.style,m=e.className,d=e.routes,p=e.children,v=e.itemRender,b=void 0===v?N:v,w=e.params,j=void 0===w?{}:w,C=E(e,["prefixCls","separator","style","className","routes","children","itemRender","params"]),k=o["useContext"](u["b"]),R=k.getPrefixCls,S=k.direction,I=R("breadcrumb",_);if(d&&d.length>0){var A=[];t=d.map((function(e){var t,_=x(e.path,j);return _&&A.push(_),e.children&&e.children.length&&(t=o["createElement"](f["a"],null,e.children.map((function(e){return o["createElement"](f["a"].Item,{key:e.path||e.breadcrumbName},b(e,j,d,O(A,e.path,j)))})))),o["createElement"](h,{overlay:t,separator:c,key:_||e.breadcrumbName},b(e,j,d,A))}))}else p&&(t=Object(s["a"])(p).map((function(e,t){return e?(Object(g["a"])(e.type&&(!0===e.type.__ANT_BREADCRUMB_ITEM||!0===e.type.__ANT_BREADCRUMB_SEPARATOR),"Breadcrumb","Only accepts Breadcrumb.Item and Breadcrumb.Separator as it's children"),Object(y["a"])(e,{separator:c,key:t})):e})));var M=i()(I,Object(a["a"])({},"".concat(I,"-rtl"),"rtl"===S),m);return o["createElement"]("div",Object(n["a"])({className:M,style:l},C),t)};j.Item=h,j.Separator=b;var C=j;t["a"]=C},et2T:function(e,t,_){e.exports={home_carousel:"home_carousel___2bMZ3",home_banner_1:"home_banner_1___1AK7D",home_banner_2:"home_banner_2___p-JLV",home_banner_3:"home_banner_3___1h3Zg",home_banner_4:"home_banner_4___3VmdV",home_banner_5:"home_banner_5___3pD0P",home_banner_6:"home_banner_6___2kHN6",home_banner_down:"home_banner_down___2mdS8",home_banner_content:"home_banner_content___3oAIk",home_banner_dark:"home_banner_dark___3n9H4",home_banner_title:"home_banner_title___7O0pR",home_banner_desc:"home_banner_desc___2O_29",home_banner_action:"home_banner_action___BvYmv",banner_user:"banner_user___ZZneG","banner-user-elem":"banner-user-elem___1DUTI",home_news:"home_news___3nExv",advant_img:"advant_img___15ZDX",advant_title:"advant_title___y0Gnr",advant_desc:"advant_desc___1nyKl",services_left:"services_left___1yAW0",services_left_selected:"services_left_selected___24n3s",services_left_sensors:"services_left_sensors___2ULSo",services_left_equipments:"services_left_equipments___MYGCW",services_left_software:"services_left_software___3--cE",services_title:"services_title___2Hr3o",services_desc:"services_desc___2nsW8",services_img:"services_img___2H1VH",services_other:"services_other___37H08",services_right:"services_right___V23Qw",services_right_content:"services_right_content___1vD0Z",services_right_title:"services_right_title___1hfdZ",services_right_desc:"services_right_desc___11Ec5",services_divider:"services_divider___3KiEH",solutions_col:"solutions_col___3NecF",solutions_img:"solutions_img___-62zL",solutions_div:"solutions_div___1s0r_",solutions_title:"solutions_title___XSl6S",solutions_divider:"solutions_divider___EPeEB",solutions_desc:"solutions_desc___3gX9x",partners_content:"partners_content___1R5Gk",about_desc:"about_desc___1Q0Y6",about_img:"about_img___2G50n",ours_avatar:"ours_avatar___1z7bi",ours_title:"ours_title___3ZAJQ",ours_desc:"ours_desc___eTPSl",login_content:"login_content___2EIlK",login_img:"login_img___2uHAc",login_title:"login_title___t2dto",login_desc:"login_desc___2gkFg",login_button:"login_button___1cHUM",login_bg:"login_bg___19Yfx",login_bg_child:"login_bg_child___V7_50",news_img:"news_img___1bhSp",news_title:"news_title___2odQw",news_desc:"news_desc___1IesT",news_time:"news_time___2_mnX",news_content:"news_content___B8hRU",news_content_left:"news_content_left___8rJk9",news_more:"news_more___3LJ8R",solutions_div_small:"solutions_div_small___2_ASh",solutions_col_small:"solutions_col_small___2HzYU",solutions_img_small:"solutions_img_small___3B_nW",solutions_title_small:"solutions_title_small___3feDO",solutions_desc_small:"solutions_desc_small___1eAFr",copyright_name:"copyright_name___2jsHe",copyright_title:"copyright_title___2YHBE",copyright_desc:"copyright_desc___2fmZ_"}},gthi:function(e,t,_){"use strict";_.r(t),_.d(t,"default",(function(){return C}));_("14J3");var n,a=_("BMrR"),r=(_("jCWc"),_("kPKH")),o=(_("sPJy"),_("bE4q")),c=_("fWQN"),i=_("mtLc"),s=_("yKVA"),l=_("879j"),m=_("q1tI"),u=_.n(m),d=_("4zCG"),p=_("ZFw/"),h=_.n(p),v=_("ysgf"),b=_("jLID"),f=_("+cnc"),g=_.n(f),y=_("Mt6X"),E=_.n(y),w=_("et2T"),N=_.n(w),x=_("f2Ie"),O=_.n(x),j=_("55Ip");Object(d["enquireScreen"])((function(e){n=e}));var C=function(e){Object(s["a"])(_,e);var t=Object(l["a"])(_);function _(e){var n;return Object(c["a"])(this,_),n=t.call(this,e),n.state={},n}return Object(i["a"])(_,[{key:"componentDidMount",value:function(){var e=this;Object(d["enquireScreen"])((function(t){e.setState({isMobile:!!t})}))}},{key:"render",value:function(){return u.a.createElement("div",{className:"templates-wrapper"},u.a.createElement(h.a,{title:"\u552e\u540e\u653f\u7b56 - \u5357\u4eac\u845b\u5357\u5b9e\u4e1a\u6709\u9650\u516c\u53f8"}),u.a.createElement("div",{className:g.a.product_content},u.a.createElement(v["a"],{current:"\u9996\u9875"}),u.a.createElement("div",{className:"".concat(O.a.banner_content," ").concat(E.a.servicepolicy_banner)},u.a.createElement("div",{className:"".concat(O.a.home_page),style:{width:"100%"}},u.a.createElement("div",{className:O.a.banner_miantitle_narrow,style:{marginTop:50}},"\u552e\u540e\u653f\u7b56"),u.a.createElement(o["a"],{className:g.a.product_breadcrumb},u.a.createElement(o["a"].Item,null,u.a.createElement(j["a"],{to:"/",className:g.a.product_breadcrumb_text},"\u9996\u9875")),u.a.createElement(o["a"].Item,{className:g.a.product_breadcrumb_text},"\u552e\u540e\u653f\u7b56")))),u.a.createElement("div",{className:"".concat(O.a.home_page_wrapper),style:{padding:"80px 0px"}},u.a.createElement("div",{className:O.a.home_page},u.a.createElement(a["a"],{gutter:[32,32]},u.a.createElement(r["a"],{xs:24,sm:8,md:8,lg:8,xl:8},u.a.createElement("div",{className:N.a.copyright_name},"\u552e\u540e\u627f\u8bfa")),u.a.createElement(r["a"],{xs:24,sm:16,md:16,lg:16,xl:16},u.a.createElement("div",null,u.a.createElement("div",{className:N.a.copyright_title},"\u575a\u6301\u5353\u8d8a\u54c1\u8d28\u548c\u7cbe\u5fc3\u670d\u52a1"),u.a.createElement("div",{className:N.a.copyright_desc},"1. \u7528\u6237\u6536\u5230\u4ea7\u54c11\u4e2a\u6708\u5185\uff0c\u4ea7\u54c1\u82e5\u4e0d\u6ee1\u8db3\u6280\u672f\u8981\u6c42\u53ef\u9009\u62e9\u9000\u8d27\u3001\u6362\u8d27\u6216\u4fee\u7406\u3002"),u.a.createElement("div",{className:N.a.copyright_desc},"2. \u7528\u6237\u6536\u5230\u4ea7\u54c13\u4e2a\u6708\u5185\uff0c\u4ea7\u54c1\u82e5\u4e0d\u6ee1\u8db3\u6280\u672f\u8981\u6c42\u53ef\u9009\u62e9\u6362\u8d27\u6216\u4fee\u7406\u3002"),u.a.createElement("div",{className:N.a.copyright_desc},"3. \u7528\u6237\u6536\u5230\u4ea7\u54c11\u5e74\u5185\uff0c\u4ea7\u54c1\u82e5\u975e\u4eba\u4e3a\u6216\u4e0d\u53ef\u6297\u529b\u4e0d\u80fd\u6b63\u5e38\u4f7f\u7528\u514d\u8d39\u4fee\u7406\u3002"),u.a.createElement("div",{className:N.a.copyright_desc},"4. \u845b\u5357\u516c\u53f81\u5e74\u5185\u5bf9\u6240\u552e\u4ea7\u54c1\u5b9e\u884c\u4e09\u5305\uff0c\u7ec8\u8eab\u7ef4\u62a4\u3002")))))),u.a.createElement("div",{className:"".concat(O.a.home_page_wrapper),style:{padding:"80px 0px",backgroundColor:"#F6F6F6"}},u.a.createElement("div",{className:O.a.home_page},u.a.createElement(a["a"],{gutter:[32,32]},u.a.createElement(r["a"],{xs:24,sm:8,md:8,lg:8,xl:8},u.a.createElement("div",{className:N.a.copyright_name},"\u9000\u6362\u8d27\u653f\u7b56")),u.a.createElement(r["a"],{xs:24,sm:16,md:16,lg:16,xl:16},u.a.createElement("div",null,u.a.createElement("div",{className:N.a.copyright_title},"\u8d28\u91cf\u95ee\u9898\u9000\u6362\u65e0\u5fe7"),u.a.createElement("div",{className:N.a.copyright_desc},"1. \u7528\u6237\u6536\u5230\u4ea7\u54c1\u68c0\u9a8c\u65b9\u6cd5\u53ef\u53c2\u7167\uff1a\u56fd\u5bb6\u6807\u51c6\uff0c\u884c\u4e1a\u89c4\u8303\uff0c\u845b\u5357\u516c\u53f8\u6280\u672f\u6761\u4ef6\u3002"),u.a.createElement("div",{className:N.a.copyright_desc},"2. \u6536\u5230\u4ea7\u54c11\u4e2a\u6708\u5185\uff0c\u914d\u4ef6\u9f50\u5168\u65e0\u635f\u574f\uff0c\u4e14\u672a\u5728\u5de5\u7a0b\u4e2d\u4f7f\u7528\u8fc7\u7684\u4ea7\u54c1\u53ef\u4ee5\u9000\u8d27\u3002"),u.a.createElement("div",{className:N.a.copyright_desc},"3. \u6536\u5230\u4ea7\u54c13\u4e2a\u6708\u5185\uff0c\u914d\u4ef6\u9f50\u5168\u65e0\u635f\u574f\uff0c\u4e14\u672a\u5728\u5de5\u7a0b\u4e2d\u4f7f\u7528\u8fc7\u7684\u4ea7\u54c1\u53ef\u4ee5\u6362\u8d27\u3002")))))),u.a.createElement("div",{className:"".concat(O.a.home_page_wrapper),style:{padding:"80px 0px"}},u.a.createElement("div",{className:O.a.home_page},u.a.createElement(a["a"],{gutter:[32,32]},u.a.createElement(r["a"],{xs:24,sm:8,md:8,lg:8,xl:8},u.a.createElement("div",{className:N.a.copyright_name},"\u514d\u8d23\u6761\u6b3e")),u.a.createElement(r["a"],{xs:24,sm:16,md:16,lg:16,xl:16},u.a.createElement("div",null,u.a.createElement("div",{className:N.a.copyright_title},"\u975e\u4e09\u5305\u653f\u7b56\u8303\u56f4"),u.a.createElement("div",{className:N.a.copyright_desc},"1. \u4ea7\u54c1\u552e\u51fa\u8d85\u8fc71\u5e74\u3002"),u.a.createElement("div",{className:N.a.copyright_desc},"2. \u4ea7\u54c1\u56e0\u8dcc\u843d\u3001\u4e8b\u6545\u3001\u4e0d\u6b63\u786e\u7684\u5b89\u88c5\u6216\u4f7f\u7528\u6240\u9020\u6210\u7684\u635f\u574f\u3002"),u.a.createElement("div",{className:N.a.copyright_desc},"3. \u4ea7\u54c1\u578b\u53f7\u3001\u7f16\u53f7\u3001\u8bc6\u522b\u53f7\u4e0d\u7b26\u3002"),u.a.createElement("div",{className:N.a.copyright_desc},"4. \u4ea7\u54c1\u672a\u7ecf\u6388\u6743\u7684\u7ef4\u4fee\u3001\u62c6\u5378\u3001\u6539\u52a8\u3002"),u.a.createElement("div",{className:N.a.copyright_desc},"5. \u4f7f\u7528\u76d7\u7248\u6216\u672a\u7ecf\u6388\u6743\u8f6f\u4ef6\u9020\u6210\u7684\u635f\u574f\u3002"),u.a.createElement("div",{className:N.a.copyright_desc},"6. \u56e0\u75c5\u6bd2\u611f\u67d3\u3001\u9ed1\u5ba2\u653b\u51fb\u6216\u5176\u4ed6\u6076\u610f\u4fb5\u5bb3\u884c\u4e3a\u9020\u6210\u7684\u6545\u969c\u6216\u635f\u574f\u3002"),u.a.createElement("div",{className:N.a.copyright_desc},"7. \u56e0\u4e0d\u53ef\u6297\u529b\u6240\u9020\u6210\u7684\u635f\u574f\u3002")))))),u.a.createElement("div",{className:"".concat(O.a.home_page_wrapper),style:{padding:"80px 0px",backgroundColor:"#F6F6F6"}},u.a.createElement("div",{className:O.a.home_page},u.a.createElement(a["a"],{gutter:[32,32]},u.a.createElement(r["a"],{xs:24,sm:8,md:8,lg:8,xl:8},u.a.createElement("div",{className:N.a.copyright_name},"\u5305\u88c5\u8fd0\u8f93")),u.a.createElement(r["a"],{xs:24,sm:16,md:16,lg:16,xl:16},u.a.createElement("div",null,u.a.createElement("div",{className:N.a.copyright_title},"\u7cbe\u5bc6\u4eea\u5668\u7cbe\u5fc3\u5475\u62a4"),u.a.createElement("div",{className:N.a.copyright_desc},"1. \u4ea7\u54c1\u5305\u88c5\u53c2\u7167\u94c1\u8def\u53ca\u516c\u8def\u7269\u6d41\u6807\u51c6\u3002"),u.a.createElement("div",{className:N.a.copyright_desc},"2. \u4ea4\u8d27\u5730\u70b9\u4e3a\u7528\u6237\u6307\u5b9a\u5730\u70b9\u3002"),u.a.createElement("div",{className:N.a.copyright_desc},"3. \u5305\u8fd0\u8d39\u7528\u7531\u845b\u5357\u516c\u53f8\u8d1f\u8d23\u3002")))))),u.a.createElement(b["a"],{id:"Footer",key:"Footer",isMobile:n})))}}]),_}(u.a.Component)},sPJy:function(e,t,_){"use strict";_("cIOH"),_("AOa7"),_("lUTK"),_("qVdP")}}]);