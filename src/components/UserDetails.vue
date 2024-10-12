<template>
    <div>
      
      <h1>User Details</h1>
      <p><strong>ID:</strong> {{ user.id }}</p>
      <p><strong>Name:</strong> {{ user.name }}</p>
      <p><strong>Department:</strong> {{ user.dept }}</p> 
      <div v-if="description"><p><strong>Description:</strong>{{ description }}</p></div>  
    </div>
  </template>

  <script>


  export default {
    props:{
      user:Object,       
      description:String
        
    },
  };
  </script>
  
  <style>
   /* .back-btn {
    margin-bottom: 20px;
    padding: 10px 20px;
    background-color: #ccc;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  } */
  /* .usercontainer{
    display: flex;
    justify-content: space-around;
    align-items: center;
  }  */
 
  </style>
  