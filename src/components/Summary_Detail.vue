<template>
  <div>
    <button class="back-btn" @click="goBackHome">Back</button>
    <div v-if="loading">loading...</div>
    <div v-else>
   
    <div class="usercontainer">
    <user-details :user="user" :description="description"></user-details>
  <descript @descript="descripttion"></descript>
  </div>
    </div>

  </div>
  
</template>

<script>
import axios from 'axios';
import UserDetails from './UserDetails.vue';
import User_Description from './User_Description.vue';
export default{
    components:{
        'user-details':UserDetails,
        'descript':User_Description
    },
    data(){
      return {
        description:'',
        user:null,
        loading:false
      }
    },
    created() {
      const userId = this.$route.params.id;
      this.fetchUserDetails(userId);
    },
    methods:{
      fetchUserDetails(userId) {
        this.loading=true;
      axios.get(`http://localhost:8085/JDBC/getuserbyid?id=${userId}`)
        .then(response => {
          setTimeout(() => {
            this.loading = false; 
            this.user = response.data.user;
            
           }, 1000);
        })
        .catch(error => {
          console.error('Error', error);
        });
    },
    descripttion(addDescription){
      this.description=addDescription;
      console.log(this.description);
    },
    goBackHome() {
      this.$router.push('/');
    }
    }
}
</script>
<style>
   .usercontainer{
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  .back-btn {
    margin-bottom: 20px;
    padding: 10px 20px;
    background-color: #ccc;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
</style>