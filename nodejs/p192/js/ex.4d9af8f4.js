"use strict";(self["webpackChunkvue_pr03"]=self["webpackChunkvue_pr03"]||[]).push([[578],{7611:function(n,t,u){u.r(t),u.d(t,{default:function(){return c}});var e=u(3396),a=u(7139),l=u(9242);const i={id:"container"};function r(n,t,u,r,o,s){return(0,e.wg)(),(0,e.iD)("div",i,[(0,e.Uk)(" 안녕하세요. 채팅창을 만들고 있는 중입니다... "),(0,e._)("div",null,[(0,e._)("ul",null,[((0,e.wg)(!0),(0,e.iD)(e.HY,null,(0,e.Ko)(o.arrmeg,(n=>((0,e.wg)(),(0,e.iD)("li",{key:n},(0,a.zw)(n),1)))),128))])]),(0,e._)("div",null,[(0,e.wy)((0,e._)("input",{type:"text","onUpdate:modelValue":t[0]||(t[0]=n=>r.state=n),onKeyup:t[1]||(t[1]=(0,l.D2)(((...n)=>s.add&&s.add(...n)),["enter"]))},null,544),[[l.nr,r.state]]),(0,e._)("button",{onClick:t[2]||(t[2]=(...n)=>s.add&&s.add(...n))},"전송")])])}u(7658);var o=u(4870),s={name:"App",data(){return{inmeg:"",arrmeg:[],meg:"",megtext:""}},setup(){const n=(0,e.FN)(),t=n.appContext.config.globalProperties.$socket,u=(0,o.qj)({message:"",textarea:""});function a(){t.emit("chat",{message:u.message}),u.message=""}return(0,e.bv)((()=>{t.on("chat",(n=>{u.textarea+=n.message+"\n"}))})),{state:u,chatSubmit:a}},methods:{add:function(){this.arrmeg.push(this.state),this.megtext=this.arrmeg}}},g=u(89);const d=(0,g.Z)(s,[["render",r]]);var c=d},1830:function(n,t,u){u.r(t),u.d(t,{default:function(){return f}});var e=u(3396),a=u(7139),l=u(9242);const i=(0,e._)("h3",null,"v-on버튼 기능사용하기",-1),r=(0,e._)("hr",null,null,-1),o=(0,e._)("h3",null,"v-if조건문",-1),s={key:0},g=(0,e._)("hr",null,null,-1),d=(0,e._)("h3",null,"v-model 양방향데이터",-1),c=(0,e._)("hr",null,null,-1),p=(0,e._)("hr",null,null,-1),_=(0,e._)("h3",null,"구구단",-1),h=(0,e._)("br",null,null,-1);function m(n,t,u,m,D,v){const w=(0,e.up)("P");return(0,e.wg)(),(0,e.iD)(e.HY,null,[(0,e._)("div",null,[(0,e.Uk)(" 변수 머스타치 사용하기 "),(0,e._)("h1",null,"안녕하세요.이름은"+(0,a.zw)(D.vname)+"이고."+(0,a.zw)(D.age)+"살 입니다.",1),i,(0,e._)("button",{onClick:t[0]||(t[0]=n=>v.func("안녕 팝업이야"))},"클릭버튼"),(0,e._)("button",{onClick:t[1]||(t[1]=n=>v.func("안녕 또팝업이야"))},"더블클릭버튼"),r,o,D.status?((0,e.wg)(),(0,e.iD)("h1",s,"제가제가보이나요?")):(0,e.kq)("",!0),(0,e.wy)((0,e._)("h1",null,"제가 보이나요?",512),[[l.F8,D.status]]),(0,e._)("button",{onClick:t[2]||(t[2]=n=>D.status=!0)},"보이게 할게요."),(0,e._)("button",{onClick:t[3]||(t[3]=n=>D.status=!1)},"안보이게 할게요."),(0,e._)("button",{onClick:t[4]||(t[4]=n=>D.status=!D.status)},"보이면숨기고 안보이면 보이게"),g,d,(0,e.wy)((0,e._)("input",{type:"text","onUpdate:modelValue":t[5]||(t[5]=n=>D.inData=n),onKeyup:t[6]||(t[6]=n=>v.func(D.inData+"적고손땜요!"))},null,544),[[l.nr,D.inData]]),(0,e.wy)((0,e._)("input",{type:"text","onUpdate:modelValue":t[7]||(t[7]=n=>D.inData=n),onKeyup:t[8]||(t[8]=(0,l.D2)((n=>v.func(D.inData+"적고손땜요!")),["enter"]))},null,544),[[l.nr,D.inData]]),(0,e._)("h2",null,(0,a.zw)(D.inData),1)]),c,(0,e._)("h3",null,"v-for사용하기 /배열 : "+(0,a.zw)(D.arrData),1),(0,e._)("input",{onClick:t[9]||(t[9]=(...n)=>v.add&&v.add(...n))}),(0,e.Uk)("추가하기 "),(0,e._)("button",{onClick:t[10]||(t[10]=(...n)=>v.sub&&v.sub(...n))},"삭제하기"),(0,e._)("ul",null,[((0,e.wg)(!0),(0,e.iD)(e.HY,null,(0,e.Ko)(D.arrData,(n=>((0,e.wg)(),(0,e.iD)("li",{key:n},(0,a.zw)(n),1)))),128))]),(0,e.Wm)(w,null,{default:(0,e.w5)((()=>[(0,e.Uk)("추가한 값:"+(0,a.zw)(D.anum),1)])),_:1}),(0,e.Wm)(w,null,{default:(0,e.w5)((()=>[(0,e.Uk)("삭제한 값:"+(0,a.zw)(D.dnum),1)])),_:1}),p,_,(0,e.wy)((0,e._)("input",{type:"text","onUpdate:modelValue":t[11]||(t[11]=n=>D.gugu=n),onKeyup:t[12]||(t[12]=(0,l.D2)((n=>v.bdd()),["enter"]))},null,544),[[l.nr,D.gugu]]),(0,e._)("button",{onClick:t[13]||(t[13]=(...n)=>v.bdd&&v.bdd(...n))},"열려라 참깨!"),(0,e._)("button",{onClick:t[14]||(t[14]=(...n)=>v.bub&&v.bub(...n))},"닫아라 참깨!"),h,((0,e.wg)(!0),(0,e.iD)(e.HY,null,(0,e.Ko)(D.guguData,(n=>((0,e.wg)(),(0,e.iD)("span",{key:n},(0,a.zw)(n),1)))),128)),(0,e._)("p",null,"몇단이죠?"+(0,a.zw)(D.guguanum),1)],64)}u(7658);var D={name:"app",data(){return{vname:"김수환",age:60,status:!1,inData:"",arrData:[],dnum:"",anum:"",gugu:"",guguData:[],guguanum:""}},methods:{func:function(n){alert(n)},add:function(){this.arrData.push(this.arrData.length+1),this.anum=this.arrData.length,this.dnum=" "},sub:function(){this.dnum=this.arrData.pop(),this.anum=""},bdd:function(){this.guguData.push(1*this.gugu,2*this.gugu,3*this.gugu,4*this.gugu,5*this.gugu,6*this.gugu,7*this.gugu,8*this.gugu,9*this.gugu),this.guguanum=this.gugu+"단",this.gugu=""},bub:function(){this.gugu="",this.guguData.splice(0),this.guguanum=this.guguData.splice(0)}}},v=u(89);const w=(0,v.Z)(D,[["render",m]]);var f=w},40:function(n,t,u){u.r(t),u.d(t,{default:function(){return D}});var e=u(3396),a=u(7139),l=u(9242);const i=(0,e._)("h1",null,"2.데이터 가져오기",-1),r=(0,e._)("h4",null,"가져온 데이터",-1),o=(0,e._)("tr",null,[(0,e._)("th",null,"카테고리"),(0,e._)("th",null,"품명"),(0,e._)("th",null,"가격"),(0,e._)("th",null,"배송비")],-1),s={key:0},g=(0,e._)("hr",null,null,-1),d=(0,e._)("span",null,"얼마이상의 물품을 출력할까요?",-1);function c(n,t,u,c,p,_){return(0,e.wg)(),(0,e.iD)("div",null,[i,r,(0,e._)("p",null,(0,a.zw)(p.dataArr),1),(0,e._)("table",null,[o,((0,e.wg)(!0),(0,e.iD)(e.HY,null,(0,e.Ko)(p.dataArr,(n=>((0,e.wg)(),(0,e.iD)(e.HY,{key:n},[n.price>p.inUser?((0,e.wg)(),(0,e.iD)("tr",s,[(0,e._)("td",null,(0,a.zw)(n.category),1),(0,e._)("td",null,(0,a.zw)(n.product_name),1),(0,e._)("td",null,(0,a.zw)(n.price),1),(0,e._)("td",null,(0,a.zw)(n.delivery_price),1)])):(0,e.kq)("",!0)],64)))),128))]),g,d,(0,e.wy)((0,e._)("input",{type:"text","onUpdate:modelValue":t[0]||(t[0]=n=>p.inUser=n)},null,512),[[l.nr,p.inUser]])])}var p=[{product_name:"기계식 키보드",price:25e3,category:"노트북/태블릿",delivery_price:5e3},{product_name:"무선 마우스",price:12e3,category:"노트북/태블릿",delivery_price:3e3},{product_name:"아이패드",price:725e3,category:"노트북/태블릿",delivery_price:1e4},{product_name:"태블릿거치대",price:32e3,category:"노트북/태블릿",delivery_price:5e3}],_={name:"app",data(){return{inUser:0,dataArr:p}},methods:{}},h=u(89);const m=(0,h.Z)(_,[["render",c]]);var D=m},8535:function(n,t,u){u.r(t),u.d(t,{default:function(){return y}});var e=u(3396),a=u(9242),l=u(7139);const i=(0,e._)("h1",null,"3.데이터 바인딩",-1),r=(0,e._)("h2",null,"v-model을 사용하여 양방향을 구현",-1),o=(0,e._)("span",null,"v-model:",-1),s=(0,e._)("br",null,null,-1),g=(0,e._)("hr",null,null,-1),d=(0,e._)("h1",null,"4.데이터 단방향 바인딩",-1),c=(0,e._)("h2",null,"v-bind와 v-on을 사용하여 단방향(2가지=양방향)을 구현한다.",-1),p=["value"],_=(0,e._)("br",null,null,-1),h=(0,e._)("hr",null,null,-1),m=(0,e._)("button",null,"Page2",-1),D=(0,e._)("button",null,"Page3",-1),v=(0,e._)("button",null,"Page4",-1);function w(n,t,u,w,f,b){return(0,e.wg)(),(0,e.iD)("div",null,[i,r,o,(0,e.wy)((0,e._)("input",{type:"text","onUpdate:modelValue":t[0]||(t[0]=n=>f.inData=n)},null,512),[[a.nr,f.inData]]),(0,e._)("h3",null,(0,l.zw)(f.inData),1),(0,e._)("button",{onClick:t[1]||(t[1]=(...n)=>f.outData&&f.outData(...n))},"꺼내오기:"+(0,l.zw)(f.inData),1),s,g,d,c,(0,e._)("h4",null,(0,l.zw)(f.inValue),1),(0,e._)("input",{type:"text",value:f.inValue,onInput:t[2]||(t[2]=(...n)=>b.UpValue&&b.UpValue(...n))},null,40,p),(0,e._)("button",{style:{margin:"0 5px"},onClick:t[3]||(t[3]=(...n)=>b.setData&&b.setData(...n))},"데이터 입력"),(0,e._)("button",{onClick:t[4]||(t[4]=(...n)=>b.getData&&b.getData(...n))},"데이터 출력"),_,h,(0,e._)("button",{onClick:t[5]||(t[5]=(...t)=>n.img01&&n.img01(...t))},"Page1"),m,D,v])}var f={name:"app",data(){return{outData:"꺼내온 값이에요.",inData:"",inValue:"",temp:""}},methods:{UpValue:function(n){this.inValue=n.target.value},setData:function(n){this.inValue&&(alert("v-binding 된 값"+this.inValue+"를 입력함"),this.temp=this.inValue,this.inValue="")},getData:function(n){alert("v-on으로 저장된 값"+this.temp+"를 꺼내옴"),this.inValue=this.temp}}},b=u(89);const k=(0,b.Z)(f,[["render",w]]);var y=k},5757:function(n,t,u){u.r(t),u.d(t,{default:function(){return c}});var e=u(3396),a=u(7139);const l=["onClick"],i={key:0},r=["src"];function o(n,t,u,o,s,g){const d=(0,e.up)("H1");return(0,e.wg)(),(0,e.iD)("div",null,[(0,e.Wm)(d,null,{default:(0,e.w5)((()=>[(0,e.Uk)("포켓몬 피규어 신상출시!")])),_:1}),((0,e.wg)(!0),(0,e.iD)(e.HY,null,(0,e.Ko)(s.pages,(n=>((0,e.wg)(),(0,e.iD)("button",{onClick:t=>s.page=n,key:n,class:(0,a.C_)({active:s.page==n})},(0,a.zw)(n),11,l)))),128)),((0,e.wg)(!0),(0,e.iD)(e.HY,null,(0,e.Ko)(s.pages,((t,u)=>((0,e.wg)(),(0,e.iD)("div",{key:u},[t==s.page?((0,e.wg)(),(0,e.iD)("div",i)):(0,e.kq)("",!0),(0,e.Uk)(" "+(0,a.zw)(n.p)+" ",1),t==s.page?((0,e.wg)(),(0,e.iD)("img",{key:1,src:"../../img"+(u+1)+".jpg"},null,8,r)):(0,e.kq)("",!0)])))),128))])}var s={name:"app",data(){return{page:"page1",pages:["page1","page2","page3","page4"]}},methods:{}},g=u(89);const d=(0,g.Z)(s,[["render",o]]);var c=d},6020:function(n,t,u){u.r(t),u.d(t,{default:function(){return h}});var e=u(3396);function a(n,t,u,a,l,i){const r=(0,e.up)("login-form");return(0,e.wg)(),(0,e.iD)("div",null,[(0,e.Wm)(r)])}var l=u(9242);const i={class:"login__form"},r=(0,e._)("label",{for:"input-username"}," 닉네임을 입력하세요. ",-1);function o(n,t,u,a,o,s){return(0,e.wg)(),(0,e.iD)("div",i,[(0,e._)("div",null,[r,(0,e._)("input",{id:"input-username",onKeyup:t[0]||(t[0]=(0,l.D2)(((...n)=>s.join&&s.join(...n)),["enter"])),required:""},null,32)])])}u(7658);var s={data(){return{userName:""}},methods:{join(){const n={userName:this.userName};n.userName&&(this.$store.dispatch("login",n),this.$router.push({name:"chat",params:{userData:n}}))}}},g=u(89);const d=(0,g.Z)(s,[["render",o]]);var c=d,p={components:{loginForm:c}};const _=(0,g.Z)(p,[["render",a]]);var h=_}}]);