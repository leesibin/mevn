"use strict";(self["webpackChunkvue_pr04"]=self["webpackChunkvue_pr04"]||[]).push([[443],{3760:function(e,n,t){t.r(n),t.d(n,{default:function(){return o}});var a=t(3396),u=t(9242);function r(e,n,t,r,i,m){return(0,a.wg)(),(0,a.iD)("div",null,[(0,a.wy)((0,a._)("input",{type:"text","onUpdate:modelValue":n[0]||(n[0]=e=>i.Ename=e),onKeyup:n[1]||(n[1]=(0,u.D2)((e=>m.joinSubmit()),["enter"]))},null,544),[[u.nr,i.Ename]]),(0,a._)("button",{onClick:n[2]||(n[2]=e=>m.joinSubmit())},"참여")])}t(7658);var i={name:"app",data(){return{Ename:""}},created(){this.$socket.on("Username",this.Ename)},methods:{joinSubmit(){this.$router.push({path:"home",query:{name:this.Ename}}),this.$socket.emit("Username",this.Ename)},mounted(){this.Ename=this.$route.params.name}}},m=t(89);const s=(0,m.Z)(i,[["render",r]]);var o=s}}]);
//# sourceMappingURL=about.925d85c6.js.map