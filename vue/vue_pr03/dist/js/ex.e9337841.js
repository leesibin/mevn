"use strict";(self["webpackChunkvue_pr03"]=self["webpackChunkvue_pr03"]||[]).push([[578],{2212:function(n,u,t){t.r(u),t.d(u,{default:function(){return k}});var l=t(3396),a=t(7139),e=t(9242);const i={class:"ex_1"},r=(0,l._)("h3",null,"v-on버튼 기능사용하기",-1),o=(0,l._)("hr",null,null,-1),g=(0,l._)("h3",null,"v-if조건문",-1),s={key:0},p=(0,l._)("hr",null,null,-1),c=(0,l._)("h3",null,"v-model 양방향데이터",-1),_=(0,l._)("hr",null,null,-1),d=(0,l._)("hr",null,null,-1),h=(0,l._)("h3",null,"구구단",-1),D=(0,l._)("br",null,null,-1);function w(n,u,t,w,m,v){const b=(0,l.up)("P");return(0,l.wg)(),(0,l.iD)(l.HY,null,[(0,l._)("div",i,[(0,l.Uk)(" 변수 머스타치 사용하기 "),(0,l._)("h1",null,"안녕하세요.이름은"+(0,a.zw)(m.vname)+"이고."+(0,a.zw)(m.age)+"살 입니다.",1),r,(0,l._)("button",{onClick:u[0]||(u[0]=n=>v.func("안녕 팝업이야"))},"클릭버튼"),(0,l._)("button",{onClick:u[1]||(u[1]=n=>v.func("안녕 또팝업이야"))},"더블클릭버튼"),o,g,m.status?((0,l.wg)(),(0,l.iD)("h1",s,"제가제가보이나요?")):(0,l.kq)("",!0),(0,l.wy)((0,l._)("h1",null,"제가 보이나요?",512),[[e.F8,m.status]]),(0,l._)("button",{onClick:u[2]||(u[2]=n=>m.status=!0)},"보이게 할게요."),(0,l._)("button",{onClick:u[3]||(u[3]=n=>m.status=!1)},"안보이게 할게요."),(0,l._)("button",{onClick:u[4]||(u[4]=n=>m.status=!m.status)},"보이면숨기고 안보이면 보이게"),p,c,(0,l.wy)((0,l._)("input",{type:"text","onUpdate:modelValue":u[5]||(u[5]=n=>m.inData=n),onKeyup:u[6]||(u[6]=n=>v.func(m.inData+"적고손땜요!"))},null,544),[[e.nr,m.inData]]),(0,l.wy)((0,l._)("input",{type:"text","onUpdate:modelValue":u[7]||(u[7]=n=>m.inData=n),onKeyup:u[8]||(u[8]=(0,e.D2)((n=>v.func(m.inData+"적고손땜요!")),["enter"]))},null,544),[[e.nr,m.inData]]),(0,l._)("h2",null,(0,a.zw)(m.inData),1)]),_,(0,l._)("h3",null,"v-for사용하기 /배열 : "+(0,a.zw)(m.arrData),1),(0,l._)("button",{onClick:u[9]||(u[9]=(...n)=>v.add&&v.add(...n))},"추가하기"),(0,l._)("button",{onClick:u[10]||(u[10]=(...n)=>v.sub&&v.sub(...n))},"삭제하기"),(0,l._)("ul",null,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(m.arrData,(n=>((0,l.wg)(),(0,l.iD)("li",{key:n},(0,a.zw)(n),1)))),128))]),(0,l.Wm)(b,null,{default:(0,l.w5)((()=>[(0,l.Uk)("추가한 값:"+(0,a.zw)(m.anum),1)])),_:1}),(0,l.Wm)(b,null,{default:(0,l.w5)((()=>[(0,l.Uk)("삭제한 값:"+(0,a.zw)(m.dnum),1)])),_:1}),d,h,(0,l.wy)((0,l._)("input",{type:"text","onUpdate:modelValue":u[11]||(u[11]=n=>m.gugu=n),onKeyup:u[12]||(u[12]=(0,e.D2)((n=>v.bdd()),["enter"]))},null,544),[[e.nr,m.gugu]]),(0,l._)("button",{onClick:u[13]||(u[13]=(...n)=>v.bdd&&v.bdd(...n))},"열려라 참깨!"),(0,l._)("button",{onClick:u[14]||(u[14]=(...n)=>v.bub&&v.bub(...n))},"닫아라 참깨!"),D,((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(m.guguData,(n=>((0,l.wg)(),(0,l.iD)("span",{key:n},(0,a.zw)(n),1)))),128)),(0,l._)("p",null,"몇단이죠?"+(0,a.zw)(m.guguanum),1)],64)}t(7658);var m={name:"app",data(){return{vname:"김수환",age:60,status:!1,inData:"",arrData:[],dnum:"",anum:"",gugu:"",guguData:[],guguanum:""}},methods:{func:function(n){alert(n)},add:function(){this.arrData.push(this.arrData.length+1),this.anum=this.arrData.length,this.dnum=" "},sub:function(){this.dnum=this.arrData.pop(),this.anum=""},bdd:function(){this.guguData.push(1*this.gugu,2*this.gugu,3*this.gugu,4*this.gugu,5*this.gugu,6*this.gugu,7*this.gugu,8*this.gugu,9*this.gugu),this.guguanum=this.gugu+"단",this.gugu=""},bub:function(){this.gugu="",this.guguData.splice(0),this.guguanum=this.guguData.splice(0)}}},v=t(89);const b=(0,v.Z)(m,[["render",w]]);var k=b},29:function(n,u,t){t.r(u),t.d(u,{default:function(){return m}});var l=t(3396),a=t(7139),e=t(9242);const i={class:"ex_2"},r=(0,l._)("h1",null,"2.데이터 가져오기",-1),o=(0,l._)("h4",null,"가져온 데이터",-1),g=(0,l._)("tr",null,[(0,l._)("th",null,"카테고리"),(0,l._)("th",null,"품명"),(0,l._)("th",null,"가격"),(0,l._)("th",null,"배송비")],-1),s={key:0},p=(0,l._)("hr",null,null,-1),c=(0,l._)("span",null,"얼마이상의 물품을 출력할까요?",-1);function _(n,u,t,_,d,h){return(0,l.wg)(),(0,l.iD)("div",i,[r,o,(0,l._)("p",null,(0,a.zw)(d.dataArr),1),(0,l._)("table",null,[g,((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(d.dataArr,(n=>((0,l.wg)(),(0,l.iD)(l.HY,{key:n},[n.price>d.inUser?((0,l.wg)(),(0,l.iD)("tr",s,[(0,l._)("td",null,(0,a.zw)(n.category),1),(0,l._)("td",null,(0,a.zw)(n.product_name),1),(0,l._)("td",null,(0,a.zw)(n.price),1),(0,l._)("td",null,(0,a.zw)(n.delivery_price),1)])):(0,l.kq)("",!0)],64)))),128))]),p,c,(0,l.wy)((0,l._)("input",{type:"text","onUpdate:modelValue":u[0]||(u[0]=n=>d.inUser=n)},null,512),[[e.nr,d.inUser]])])}var d=[{product_name:"기계식 키보드",price:25e3,category:"노트북/태블릿",delivery_price:5e3},{product_name:"무선 마우스",price:12e3,category:"노트북/태블릿",delivery_price:3e3},{product_name:"아이패드",price:725e3,category:"노트북/태블릿",delivery_price:1e4},{product_name:"태블릿거치대",price:32e3,category:"노트북/태블릿",delivery_price:5e3}],h={name:"app",data(){return{inUser:0,dataArr:d}},methods:{}},D=t(89);const w=(0,D.Z)(h,[["render",_]]);var m=w},943:function(n,u,t){t.r(u),t.d(u,{default:function(){return z}});var l=t(3396),a=t(9242),e=t(7139);const i={class:"ex_3"},r=(0,l._)("h1",null,"3.데이터 바인딩",-1),o=(0,l._)("h2",null,"v-model을 사용하여 양방향을 구현",-1),g=(0,l._)("span",null,"v-model:",-1),s=(0,l._)("br",null,null,-1),p=(0,l._)("hr",null,null,-1),c=(0,l._)("h1",null,"4.데이터 단방향 바인딩",-1),_=(0,l._)("h2",null,"v-bind와 v-on을 사용하여 단방향(2가지=양방향)을 구현한다.",-1),d=["value"],h=(0,l._)("br",null,null,-1),D=(0,l._)("hr",null,null,-1),w=(0,l._)("button",null,"Page2",-1),m=(0,l._)("button",null,"Page3",-1),v=(0,l._)("button",null,"Page4",-1);function b(n,u,t,b,k,f){return(0,l.wg)(),(0,l.iD)("div",i,[r,o,g,(0,l.wy)((0,l._)("input",{type:"text","onUpdate:modelValue":u[0]||(u[0]=n=>k.inData=n)},null,512),[[a.nr,k.inData]]),(0,l._)("h3",null,(0,e.zw)(k.inData),1),(0,l._)("button",{onClick:u[1]||(u[1]=(...n)=>k.outData&&k.outData(...n))},"꺼내오기:"+(0,e.zw)(k.inData),1),s,p,c,_,(0,l._)("h4",null,(0,e.zw)(k.inValue),1),(0,l._)("input",{type:"text",value:k.inValue,onInput:u[2]||(u[2]=(...n)=>f.UpValue&&f.UpValue(...n))},null,40,d),(0,l._)("button",{style:{margin:"0 5px"},onClick:u[3]||(u[3]=(...n)=>f.setData&&f.setData(...n))},"데이터 입력"),(0,l._)("button",{onClick:u[4]||(u[4]=(...n)=>f.getData&&f.getData(...n))},"데이터 출력"),h,D,(0,l._)("button",{onClick:u[5]||(u[5]=(...u)=>n.img01&&n.img01(...u))},"Page1"),w,m,v])}var k={name:"app",data(){return{outData:"꺼내온 값이에요.",inData:"",inValue:"",temp:""}},methods:{UpValue:function(n){this.inValue=n.target.value},setData:function(n){this.inValue&&(alert("v-binding 된 값"+this.inValue+"를 입력함"),this.temp=this.inValue,this.inValue="")},getData:function(n){alert("v-on으로 저장된 값"+this.temp+"를 꺼내옴"),this.inValue=this.temp}}},f=t(89);const y=(0,f.Z)(k,[["render",b]]);var z=y},5757:function(n,u,t){t.r(u),t.d(u,{default:function(){return c}});var l=t(3396),a=t(7139);const e=["onClick"],i={key:0},r=["src"];function o(n,u,t,o,g,s){const p=(0,l.up)("H1");return(0,l.wg)(),(0,l.iD)("div",null,[(0,l.Wm)(p,null,{default:(0,l.w5)((()=>[(0,l.Uk)("포켓몬 피규어 신상출시!")])),_:1}),((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(g.pages,(n=>((0,l.wg)(),(0,l.iD)("button",{onClick:u=>g.page=n,key:n,class:(0,a.C_)({active:g.page==n})},(0,a.zw)(n),11,e)))),128)),((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(g.pages,((u,t)=>((0,l.wg)(),(0,l.iD)("div",{key:t},[u==g.page?((0,l.wg)(),(0,l.iD)("div",i)):(0,l.kq)("",!0),(0,l.Uk)(" "+(0,a.zw)(n.p)+" ",1),u==g.page?((0,l.wg)(),(0,l.iD)("img",{key:1,src:"../../img"+(t+1)+".jpg"},null,8,r)):(0,l.kq)("",!0)])))),128))])}var g={name:"app",data(){return{page:"page1",pages:["page1","page2","page3","page4"]}},methods:{}},s=t(89);const p=(0,s.Z)(g,[["render",o]]);var c=p}}]);