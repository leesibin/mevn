<template>
  <h3>{{inData}}</h3>
    <input type="text" v-model="inData">
    <button v-on:click ='add'>추가</button>
    <button v-on:click ='status' >삭제</button>
   
      <div v-for="data in inData" :key='data'>{{data}}</div>
    
    <p>추가{{aput}}</p>
  

</template>

<script>
export default{
  name : 'app',
  data(){
    return{
    inData : '',
    status : false,
   aput:''
    }
    },
  add:function(){
    this.inData.push(this.inData.length+1)
    this.aput = this.inData.length
  }
}

 




</script>

<style>

</style>
