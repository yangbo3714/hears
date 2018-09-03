<template>
    <div>
    
    <div class="container-fluid">
        <div class="row">
     
        <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
            <h2 class="sub-header">Add Hero</h2>
            <form>
            <div class="form-group">
                <label for="txtName">英雄姓名</label>
                <input type="text" class="form-control" id="txtName" placeholder="英雄姓名" v-model="formDate.name">
            </div>
            <div class="form-group">
                <label for="txtGender">英雄性别</label>
                <input type="text" class="form-control" id="txtGender" placeholder="英雄性别" v-model="formDate.gender">
            </div>
            <button  @click.prevent="handle" class="btn btn-success">Submit</button>
            </form>
        </div>
        </div>
    </div>

    </div>
</template>

<script>
    import axios from 'axios'
    export default {
        data() {
            return {
                formDate : {
                    name:'',
                    gender:''
                }
            }
        },
        methods:{
            handle(){
                axios.post('http://localhost:3000/brands',this.formDate)
                    .then((data) => {
                        this.$router.push('/hear')
                    })
            }
        }

    }
</script>
 <style>
 

 </style>
 