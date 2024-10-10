<template>
  <div>
    <button class="back-btn" @click="gotoHome">Back</button>
    <div class="container">
      <h1>Create User</h1>
      <form @submit.prevent="handleSubmit">
        <div>
          <label for="id">ID:</label>
          <input type="text" class="id" v-model="id" />
        </div>
        <div>
          <label for="name">Name:</label>
          <input type="text" class="name" v-model="name" />
        </div>
        <div>
          <label for="dept">Department:</label>
          <input type="text" class="dept" v-model="dept" />
        </div>
        <button class="c-btn">Create User</button>
      </form>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      id: '',
      name: '',
      dept: ''
    };
  },
  methods: {
    handleSubmit() {
    const newUser = {
        user: {
            id: this.id,
            name: this.name,
            dept: this.dept
        }
    };
    axios.post('http://localhost:8085/JDBC/postjson', newUser)
        .then(response => {
            console.log('User created:', response.data);
            this.id = '';
            this.name = '';
            this.dept = '';
            this.$router.push('/');
        })
        .catch(error => {
          console.error('Error fetching users:', error);
        });
   },
    gotoHome() {
      this.$router.push('/');
    }
  }
};
</script>

<style>
.container {
  border: 2px solid black;
  width: 300px;
  margin-left: 450px;
  padding: 10px 50px 30px;
  border-radius: 10px;
}
h1 {
  text-align: center;
  margin-bottom: 50px;
  font-weight: 100;
}
.id,
.name,
.dept {
  width: 300px;
  height: 30px;
  border: 1px solid #ccc;
  padding: 10px;
  box-shadow: 2px rgba(0, 0, 0, 0.3), -2px -2px 5px rgba(0, 0, 0, 0.1);
}
label {
  font-weight: 100;
  color: rgb(131, 127, 127);
}
.c-btn {
  margin-top: 25px;
  width: 100px;
  height: 50px;
  background-color: rgb(53, 122, 100);
  color: aliceblue;
  border-radius: 10px;
  border-color: rgb(53, 122, 100);
}
.back-btn {
  display: flex;
  justify-content: flex-start;
  margin-left: 30px;
  width: 100px;
  height: 50px;
  color: rgb(53, 122, 100);
  border-radius: 10px;
  border-color: rgb(53, 122, 100);
  font-size: 20px;
  padding-left: 25px;
  padding-top: 10px;
}
</style>
