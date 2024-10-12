<template>
    <div>
      <h1>Description</h1>
      <textarea style="height: 100px;width: 300px;" v-model="description"></textarea>
      <button class="savebtn" @click="sendDescript">Save</button>
    </div>
</template>

<script>
export default{
    data(){
        return {
          description:'',
           display:false
        }
    },
    methods:{
       sendDescript(){
        this.$emit('descript',this.description);
        this.description='';
       }
    }
}

</script>
<style>
  .savebtn{
    display: block;
    margin: 0 auto;
    width: 70px;
    height: 30px;
    margin-top: 20px;
    
  }
</style>