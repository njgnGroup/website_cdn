(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[10],{"6C4h":function(e,t,a){e.exports=a.p+"static/icon_wechat.b4d3a54f.svg"},Mt6X:function(e,t,a){e.exports={intro_banner:"intro_banner___3lxuU",course_banner:"course_banner___2NlyB",honor_banner:"honor_banner___qMC-n",join_banner:"join_banner___V5apc",contact_banner:"contact_banner___3Cwu5",search_banner:"search_banner___3rMkL",copyright_banner:"copyright_banner___Pf5NA",project_banner:"project_banner___1CM5c",servicepolicy_banner:"servicepolicy_banner___3G16O",nopage_banner:"nopage_banner___3nTZ0",intro_title:"intro_title___2_SlN",home_title:"home_title___2hvlL",intro_subtitle:"intro_subtitle___3Cgjj",home_subtitle:"home_subtitle___3PAFq",intro_culture_child:"intro_culture_child___U9WRz",intro_culture_title:"intro_culture_title___2FaMa",intro_culture_subtitle:"intro_culture_subtitle___IRlzk",intro_avatar:"intro_avatar___2xhFC",intro_team_content:"intro_team_content___2sXbT",intro_team:"intro_team___2ffvF",intro_team_name:"intro_team_name___tpbQ9",intro_team_job:"intro_team_job___3bpv_",intro_team_introduce:"intro_team_introduce___evSFL",intro_information:"intro_information___2_In2",intro_school:"intro_school___2ey9Q",intro_img:"intro_img___xodZb",intro_count:"intro_count___1VyVy",intro_name:"intro_name___2j4zK",intro_application:"intro_application___31IWt",intro_project:"intro_project___-kj12",cascader:"cascader___3-3r6",course_years:"course_years___WURzi",course_years_name:"course_years_name___1X9yc",course_years_detail:"course_years_detail___UUDTR",course_years_time:"course_years_time___3BD9a",course_years_title:"course_years_title___2OYAw",course_years_summary:"course_years_summary___1m_9i",course_more:"course_more___35JRj",course_more_content:"course_more_content___3rovs",course_more_left:"course_more_left___2hmXX",honor_title:"honor_title___dOubV",join_email:"join_email___8hvBy",join_email_title:"join_email_title___21IJQ",join_card:"join_card___1wx2M",join_card_close:"join_card_close___3hlts",contact_form:"contact_form___1MAIw",contact_title:"contact_title___1I2qo",contact_desc:"contact_desc___daSh0",contact_icon:"contact_icon___3RZI4",contact_map:"contact_map___Smv82",contact_msg:"contact_msg___2DEe1",contact_info:"contact_info___2dLuP"}},"W+iJ":function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return P}));a("XCrF");var n,r=a("1GRj"),c=(a("DYRE"),a("zeV3")),o=(a("sRBo"),a("kaz8")),s=(a("14J3"),a("BMrR")),_=(a("+L6B"),a("2/Rp")),l=(a("jCWc"),a("kPKH")),m=(a("y8nQ"),a("Vl3Y")),i=(a("5NDa"),a("5rEg")),u=(a("sPJy"),a("bE4q")),d=(a("miYZ"),a("tsqr")),p=a("9og8"),b=a("fWQN"),E=a("mtLc"),h=a("yKVA"),g=a("879j"),v=(a("tU7J"),a("wFql")),y=a("WmNS"),f=a.n(y),N=a("q1tI"),j=a.n(N),w=a("4zCG"),x=a("ZFw/"),q=a.n(x),I=a("ysgf"),k=a("jLID"),C=a("+cnc"),F=a.n(C),M=a("Mt6X"),S=a.n(M),O=a("f2Ie"),z=a.n(O),T=a("55Ip"),R=a("7kb5"),U=a("t3Un"),V=a("Aeqt"),J=v["a"].Text;Object(w["enquireScreen"])((function(e){n=e}));var P=function(e){Object(h["a"])(v,e);var t=Object(g["a"])(v);function v(e){var a;return Object(b["a"])(this,v),a=t.call(this,e),a.componentWillReceiveProps=function(e){var t=a.props.history.location.query;"requestdemo"===t.type?a.setState({requestdemo:!0}):a.setState({requestdemo:!1})},a.onValuesChange=function(e){void 0!==e.telephoneNumber&&a.setState({telephoneNumber:e.telephoneNumber.trim()})},a.sendTelephoneMsg=Object(p["a"])(f.a.mark((function e(){var t,n,r;return f.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t=a.state.telephoneNumber,""!==t){e.next=4;break}return d["default"].warning("\u8bf7\u8f93\u5165\u624b\u673a\u53f7\u7801"),e.abrupt("return");case 4:return e.next=6,Object(U["a"])(V["a"].loginUrl+"send_telephone_msg",{method:"post",requestType:"form",data:{telephone:t}});case 6:if(n=e.sent,n.op){e.next=10;break}return n.message&&d["default"].error(n.message),e.abrupt("return");case 10:r=setInterval((function(){a.setState({time:a.state.time-1,disabled:!0}),a.state.time<0&&(clearInterval(r),a.setState({time:60,disabled:!1}))}),1e3);case 11:case"end":return e.stop()}}),e)}))),a.onFinish=function(){a.form.current.validateFields().then((function(e){a.submit(e)}))},a.submit=function(){var e=Object(p["a"])(f.a.mark((function e(t){var n,r;return f.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=a.state.requestdemo,n&&(t.tips="".concat(void 0!==t.way?"\u83b7\u53d6\u9014\u5f84\uff1a".concat(t.way,"\uff0c"):"","\u4e1a\u52a1\u63cf\u8ff0\uff1a").concat(t.tips),t.way=void 0,t.agreement=void 0),e.next=4,Object(U["a"])(V["a"].loginUrl+"check_telephone_msg",{method:"post",requestType:"form",data:{telephone:t.telephoneNumber,msgCode:t.code}});case 4:if(r=e.sent,r.op){e.next=8;break}return r.message&&d["default"].error(r.message),e.abrupt("return");case 8:a.sendEmail(t);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a.sendEmail=function(){var e=Object(p["a"])(f.a.mark((function e(t){var n;return f.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(U["a"])(V["a"].emailUrl+"send_email_for_each",{method:"post",requestType:"form",data:{templateCode:"Email_013",data:JSON.stringify(t)}});case 2:n=e.sent,"0000"===n.code?(d["default"].success("\u7559\u8a00\u5df2\u6210\u529f\u63d0\u4ea4\uff0c\u6211\u4eec\u5c06\u5c3d\u5feb\u4e0e\u60a8\u8054\u7cfb\uff0c\u8bf7\u60a8\u8010\u5fc3\u7b49\u5f85\uff01"),a.form.current.resetFields()):n.message&&d["default"].error(n.message);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a.state={isMobile:n,disabled:!1,telephoneNumber:"",time:60,requestdemo:!1},a.form=j.a.createRef(),a}return Object(E["a"])(v,[{key:"componentDidMount",value:function(){var e=this;Object(w["enquireScreen"])((function(t){e.setState({isMobile:!!t})}));var t=this.props.history.location.query;"requestdemo"===t.type?this.setState({requestdemo:!0}):this.setState({requestdemo:!1})}},{key:"render",value:function(){var e=this.state,t=e.time,d=e.disabled,p=e.requestdemo;return j.a.createElement("div",{className:"templates-wrapper"},j.a.createElement(q.a,{title:"\u8054\u7cfb\u6211\u4eec - \u5357\u4eac\u845b\u5357\u5b9e\u4e1a\u6709\u9650\u516c\u53f8"}),j.a.createElement("div",{className:F.a.product_content},j.a.createElement(I["a"],{current:"\u8054\u7cfb\u6211\u4eec"}),j.a.createElement("div",{className:"".concat(z.a.banner_content," ").concat(S.a.contact_banner)},j.a.createElement("div",{className:"".concat(z.a.home_page),style:{width:"100%"}},j.a.createElement("div",{className:z.a.banner_miantitle_narrow,style:{marginTop:50}},p?"\u4f53\u9a8c\u4e91\u5e73\u53f0":"\u8054\u7cfb\u6211\u4eec"),j.a.createElement(u["a"],{className:F.a.product_breadcrumb},j.a.createElement(u["a"].Item,null,j.a.createElement(T["a"],{to:"/",className:F.a.product_breadcrumb_text},"\u9996\u9875")),!p&&j.a.createElement(u["a"].Item,null,j.a.createElement(T["a"],{to:"/aboutGn",className:F.a.product_breadcrumb_text},"\u5173\u4e8e\u6211\u4eec")),j.a.createElement(u["a"].Item,{className:F.a.product_breadcrumb_text},p?"\u7533\u8bf7\u4f53\u9a8c\u4e91\u5e73\u53f0":"\u8054\u7cfb\u6211\u4eec")))),j.a.createElement("div",{className:z.a.home_page_wrapper,style:{padding:"60px 0px"}},j.a.createElement("div",{className:z.a.home_page},p?j.a.createElement(j.a.Fragment,null,j.a.createElement("div",{className:S.a.contact_msg},"\u7533\u8bf7\u4e91\u5e73\u53f0Demo*"),j.a.createElement("div",{className:S.a.contact_info},"*1\uff1a\u8bf7\u586b\u5199\u4ee5\u4e0b\u5fc5\u8981\u8d44\u6599\uff0c\u6211\u4eec\u7684\u5ba2\u6237\u8fd0\u8425\u4e13\u5bb6\u5f88\u5feb\u4f1a\u4e0e\u60a8\u8054\u7cfb",j.a.createElement("br",null),"*2\uff1a\u52a9\u529b\u9ad8\u6821\u79d1\u7814\uff0c\u9ad8\u6821\u8001\u5e08\u79d1\u7814\u8bd5\u9a8c\u9879\u76ee\u53ef\u514d\u8d39\u4f7f\u7528")):j.a.createElement("div",{className:S.a.contact_msg},"\u4fdd\u6301\u8054\u7edc"),j.a.createElement(s["a"],{style:{marginTop:50}},j.a.createElement(l["a"],{xs:24,sm:24,md:24,lg:12,xl:12,style:{padding:n?"0px 0px 50px 0px":"0px 50px 50px 50px"}},j.a.createElement(m["a"],{layout:"vertical",ref:this.form,name:"messageForm",onFinish:this.onFinish,onValuesChange:this.onValuesChange,scrollToFirstError:!0,className:S.a.contact_form},j.a.createElement(m["a"].Item,{name:"personName",label:"\u59d3\u540d",rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u59d3\u540d!"}]},j.a.createElement(i["a"],{size:"large",placeholder:"\u8bf7\u8f93\u5165\u59d3\u540d"})),j.a.createElement(m["a"].Item,{name:"companyName",label:"\u516c\u53f8\u540d\u79f0",rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u516c\u53f8\u540d\u79f0!"}]},j.a.createElement(i["a"],{size:"large",placeholder:"\u8bf7\u8f93\u5165\u516c\u53f8\u540d\u79f0"})),j.a.createElement(m["a"].Item,{name:"emailaddress",label:"Email\u5730\u5740",rules:[{type:"email",message:"\u90ae\u7bb1\u683c\u5f0f\u9519\u8bef!"},{required:!0,message:"\u8bf7\u8f93\u5165\u90ae\u7bb1\u5730\u5740!"}]},j.a.createElement(i["a"],{size:"large",placeholder:"\u8bf7\u8f93\u5165\u90ae\u7bb1\u5730\u5740"})),j.a.createElement(m["a"].Item,{label:"\u624b\u673a\u53f7\u7801",name:"telephoneNumber",rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u60a8\u7684\u624b\u673a\u53f7\u7801!"},{pattern:/^1[3|4|5|6|7|8][0-9]\d{8}$/,message:"\u8bf7\u8f93\u5165\u6b63\u786e\u7684\u624b\u673a\u53f7"}]},j.a.createElement(i["a"],{size:"large",placeholder:"\u8bf7\u8f93\u5165\u624b\u673a\u53f7\u7801"})),j.a.createElement(m["a"].Item,{label:"\u9a8c\u8bc1\u7801",required:!0},j.a.createElement(s["a"],{gutter:8},j.a.createElement(l["a"],{span:14},j.a.createElement(m["a"].Item,{noStyle:!0,name:"code",rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u9a8c\u8bc1\u7801!"}]},j.a.createElement(i["a"],{size:"large",placeholder:"\u8bf7\u8f93\u5165\u624b\u673a\u9a8c\u8bc1\u7801"}))),j.a.createElement(l["a"],{span:6},j.a.createElement(_["a"],{disabled:d,size:"large",onClick:this.sendTelephoneMsg},d?"".concat(t,"\u79d2\u540e\u91cd\u65b0\u53d1\u9001"):"\u83b7\u53d6\u9a8c\u8bc1\u7801")))),p&&j.a.createElement(m["a"].Item,{name:"way",label:"\u4ece\u4f55\u5904\u5f97\u77e5\u6211\u4eec\uff1f"},j.a.createElement(i["a"],{size:"large",placeholder:"\u60a8\u662f\u4ece\u4ec0\u4e48\u9014\u5f84\u83b7\u53d6\u5230\u845b\u5357\u4e91\u76f8\u5173\u4fe1\u606f\u7684\uff1f"})),j.a.createElement(m["a"].Item,{name:"tips",label:p?"\u4e1a\u52a1\u63cf\u8ff0":"\u7559\u8a00\u5185\u5bb9",rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u7559\u8a00\u5185\u5bb9!"}]},j.a.createElement(i["a"].TextArea,{rows:4,placeholder:"\u8bf7\u8f93\u5165"})),p&&j.a.createElement(m["a"].Item,{name:"agreement",valuePropName:"checked",rules:[{validator:function(e,t){return t?Promise.resolve():Promise.reject(new Error("\u8bf7\u63a5\u53d7\u534f\u8bae"))}}]},j.a.createElement(o["a"],null,"\u52fe\u9009\u5373\u4ee3\u8868\u60a8\u540c\u610f\u672c\u7f51\u7ad9",j.a.createElement("a",{href:"/copyright",target:"_blank"},"\u7248\u6743\u53ca\u9690\u79c1\u6761\u6b3e"))),j.a.createElement(m["a"].Item,null,j.a.createElement(_["a"],{type:"primary",htmlType:"submit",style:{marginTop:20}},p?"\u53d1\u9001\u7533\u8bf7":"\u53d1\u9001\u7559\u8a00")))),j.a.createElement(l["a"],{xs:24,sm:24,md:24,lg:12,xl:12},p&&j.a.createElement("div",{style:{padding:50}},j.a.createElement(c["b"],{direction:"vertical"},j.a.createElement("div",{className:S.a.contact_title},"\u845b\u5357\u4e91\u5e73\u53f0\u884c\u4e1a\u5e94\u7528"),j.a.createElement(J,{className:S.a.contact_desc},"\u6c34\u5e93\u5927\u575d\u5728\u7ebf\u76d1\u6d4b"),j.a.createElement(J,{className:S.a.contact_desc},"\u5c3e\u77ff\u5e93\u5728\u7ebf\u76d1\u6d4b"),j.a.createElement(J,{className:S.a.contact_desc},"\u9ad8\u8fb9\u5761\u5728\u7ebf\u76d1\u6d4b"),j.a.createElement(J,{className:S.a.contact_desc},"\u53e4\u5efa\u7b51\u5728\u7ebf\u76d1\u6d4b"),j.a.createElement(J,{className:S.a.contact_desc},"\u623f\u5c4b\u5b89\u5168\u5728\u7ebf\u76d1\u6d4b"),j.a.createElement(J,{className:S.a.contact_desc},"\u6865\u6881\u96a7\u9053\u5728\u7ebf\u76d1\u6d4b"),j.a.createElement(J,{className:S.a.contact_desc},"\u57fa\u5751\u94a2\u7ed3\u6784\u5728\u7ebf\u76d1\u6d4b"),j.a.createElement(J,{className:S.a.contact_desc},"\u91d1\u5c5e\u94a2\u95f8\u95e8\u5728\u7ebf\u76d1\u6d4b"),j.a.createElement(J,{className:S.a.contact_desc},"\u6c34\u7535\u7ad9\u5b89\u5168\u5728\u7ebf\u76d1\u6d4b"),j.a.createElement(J,{className:S.a.contact_desc},"......"))),j.a.createElement("div",{style:{padding:50}},j.a.createElement(c["b"],{direction:"vertical"},j.a.createElement("div",{className:S.a.contact_title},"\u845b\u5357\u5728\u60a8\u8eab\u8fb9"),j.a.createElement(J,{className:S.a.contact_desc},"\u603b\u673a\uff1a025-84443850, 025-84443851"),!p&&j.a.createElement(J,{className:S.a.contact_desc},"\u2002\u2002\u2002\u2002\u2002\u2002\u552e\u524d\u4ea7\u54c1\u54a8\u8be2\uff0c\u8bf7\u62e81"),!p&&j.a.createElement(J,{className:S.a.contact_desc},"\u2002\u2002\u2002\u2002\u2002\u2002\u552e\u540e\u6280\u672f\u652f\u6301\uff0c\u8bf7\u62e82"),j.a.createElement(J,{className:S.a.contact_desc},"\u2002\u2002\u2002\u2002\u2002\u2002\u9047\u5fd9\u53ef\u4ee5\u5728\u4e24\u4e2a\u603b\u673a\u53f7\u7801\u95f4\u8f6e\u6362\u62e8\u6253"),j.a.createElement(J,{className:S.a.contact_desc},"\u4e91\u5e73\u53f0\u76f8\u5173\u4ea7\u54c1\uff1a025-84443852"),!p&&j.a.createElement(J,{className:S.a.contact_desc},"\u4ea7\u54c1\u6545\u969c\u62a5\u4fee\uff1a025-84443853"),j.a.createElement(J,{className:S.a.contact_desc},"Email\u5730\u5740\uff1anjgn@njgn.com"))),!p&&j.a.createElement("div",{style:{padding:50}},j.a.createElement(c["b"],{direction:"vertical"},j.a.createElement("div",{className:S.a.contact_title},"\u516c\u53f8\u5730\u5740"),j.a.createElement(J,{className:S.a.contact_desc},"\u5357\u4eac\u5e02\u9f13\u697c\u533a\u9a6c\u5bb6\u885726\u53f76\u697c"))),j.a.createElement("div",{style:{padding:50},className:S.a.contact_icon},j.a.createElement(c["b"],{direction:"vertical"},j.a.createElement("div",{className:S.a.contact_title},"\u793e\u4ea4\u5e10\u53f7"),j.a.createElement(r["a"],{style:{cursor:"pointer"},src:a("6C4h"),preview:{src:a("vcvu")}}))))))),!p&&j.a.createElement("div",{className:z.a.home_page_wrapper},j.a.createElement("div",{className:S.a.contact_map},j.a.createElement(R["Map"],{center:{lng:118.788479,lat:32.080124},zoom:"16",style:{width:"100%",height:"100%"}},j.a.createElement(R["Marker"],{position:{lng:118.788479,lat:32.080124},icon:"loc_red"}),j.a.createElement(R["NavigationControl"],null),j.a.createElement(R["ScaleControl"],null),j.a.createElement(R["OverviewMapControl"],null)))),j.a.createElement(k["a"],{id:"Footer",key:"Footer",isMobile:n})))}}]),v}(j.a.Component)}}]);