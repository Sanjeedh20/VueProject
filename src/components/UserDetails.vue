<template>
    <div>
      <div v-if="loading">loading....</div>
      <div v-else >
      <button class="back-btn" @click="goBack">Back</button>
      <div class="usercontainer">
      <div>
      <h1>User Details</h1>
      <p><strong>ID:</strong> {{ user.id }}</p>
      <p><strong>Name:</strong> {{ user.name }}</p>
      <p><strong>Department:</strong> {{ user.dept }}</p>
      <div v-if="display">
        <p><strong>Description:</strong> {{ description }}</p>
      </div>
    </div>
    <div>
      <h1>Description</h1>
      <textarea style="height: 100px;width: 300px;" v-model="description"></textarea>
      <button class="savebtn" @click="adddescript">Save</button>
    </div>
    </div>
      </div>
    </div>
  </template>

  <script>
import axios from 'axios';

  export default {
    data() {
      return {
        user: null,
        loading:false,
        display:false,
        description:''
      };
    },
    created() {
      const userId = this.$route.params.id;
      this.fetchUserDetails(userId);
    },
    methods: {
      goBack() {
        this.$router.push('/'); 
      },
      adddescript(){
        this.display=true;
      },
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
          console.error('Error fetching user details:', error);
        });
    }
    }
  };
  </script>
  
  <style>
  .back-btn {
    margin-bottom: 20px;
    padding: 10px 20px;
    background-color: #ccc;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  .usercontainer{
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  .savebtn{
    display: block;
    margin: 0 auto;
    width: 70px;
    height: 30px;
    margin-top: 20px;
    
  }
  </style>
  