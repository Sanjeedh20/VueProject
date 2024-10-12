<template>
    <div>
        <h1 class="title">{{ title }}</h1>
     <button class="action-btn"  @click="viewAbout">Add User</button>
     <div v-if="loading">loading.....</div>
     <div v-else>
     <h2>User List</h2>
      <div v-for="user in users" :key="user.id" class="user-box">
        <div class="name-div">
          <strong>Name : </strong> {{ user.name }}
        </div>
        <div class="btn-div">
             <button class="view-btn" @click="goToUserDetails(user.id)">View</button>
            <button class="del-btn" @click="deleteUser(user.id)">Delete</button> 
        </div>    
      </div>
     </div>
     <div v-if="isdeleted">
       <strong>Id : </strong> {{ user.id }}  <strong>Name : </strong>{{ user.name }} <strong>Department : </strong>{{ user.dept }}  is <strong>Deleted</strong> 
    </div>
    </div>
    
</template>
<script>
import axios from 'axios';
export default {
    data() {
        return {
            title: 'User Management System',
            users: [],
            user:[],
            loading:false,
            isdeleted:false
        };
    },
    created() {
        this.fetchUsers();
        console.log(this.loading);
        
    },
    methods: {
        viewAbout() {
            this.$router.push('/create');
        },
        goToUserDetails(userId) {
      this.$router.push({ name: 'Summary', params: { id: userId } });
      },
        async fetchUsers(){
          this.loading=true;
          try{
            const response=await  axios.get('http://localhost:8085/JDBC/getjson');
            this.users=response.data.users;
            this.loading=false;
          }
          catch(error){
            console.log('Error',error);
          }
        },
        deleteUser(userId) {
            axios.delete(`http://localhost:8085/JDBC/deluserbyid?id=${userId}`)
                .then(response => {
                    console.log('User deleted:', response.data);
                    this.user=response.data.user;
                    this.users = this.users.filter(user => user.id !== userId);
                    this.isdeleted=true;
                    setTimeout(() => {
                    this.isdeleted = false; 
                    }, 2000);
                })
                .catch(error => {
                    console.error('Error', error);
                });
        }
    }
}

</script>


<style>
  .title{
     flex-grow: 1;
     text-align: center;
  }
  .action-btn{
    position: absolute;
  top: 10px;  
  right: 10px; 
  padding: 10px 20px;
  margin-top: 40px;
  margin-right: 10px;
  width: 110px;
  height: 50px;
  color: rgb(53, 122, 100);
  border-radius: 10px;
  border-color: rgb(53, 122, 100);
  font-size: 15px;
  }
  header{
     display: flex;
     justify-content: space-between;
  }
  .user-box{
  margin-left: 500px;
  margin-bottom: 10px;
  display: flex;         
  justify-content: space-between; 
  align-items: center;    
  padding: 10px; 
  width: 400px;
  border: 1px solid black;
  border-radius: 5px;
  
  
  }
 .del-btn{
    margin-left: 10px;
 }
 </style>








