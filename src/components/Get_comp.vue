<template>
  <div>
    <h1>User List</h1>
    <ul v-if="users.length">
      <li v-for="user in users" :key="user.id">
        ID: {{ user.id }}, Name: {{ user.name }}, Department: {{ user.dept }}
      </li>
    </ul>
    <p v-else>No users found.</p>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      users: []
    };
  },
  created() {
    this.fetchUsers();
  },
  methods: {
    async fetchUsers() {
      try {
        const response = await axios.get('http://localhost:8085/JDBC/getjson'); 
        this.users = response.data.users; 
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    }
  }
};
</script>

<style scoped>

</style>





<template>
  <div>
      <h1 class="title">{{ title }}</h1>
   <button class="action-btn"  @click="viewAbout">Add User</button>
   <h2>User List</h2>
    <div v-for="user in users" :key="user.id" class="user-box">
      <div class="name-div">
        Name: {{ user.name }}
      </div>
      <div class="btn-div">
          <!-- <button class="view-btn" @click="goToUserDetails(user.id)">View</button>
          <button class="del-btn" @click="deleteUser(user)">Delete</button> -->
          <button class="view-btn" >View</button>
          <button class="del-btn">Delete</button>
      </div>
      
    </div>
  </div>
</template>
<script>

export default{
  data(){
       return {
           title:'User Manangement System',
           users:[]
       };
   },
   created() {
    this.fetchUsers();
    //this.loadUsers();
   },
  methods:{
      viewAbout(){
      this.$router.push('/create')
      },
      loadUsers() {
        const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
        this.users = storedUsers;
      },
      deleteUser(index) {
    
    this.users.splice(index, 1);
    localStorage.setItem('users', JSON.stringify(this.users));
  },
  goToUserDetails(id) {
    this.$router.push({ name: 'UserDetails', params: { id } });
  }
  }
}
</script>


<!-- <style>
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
</style> -->









