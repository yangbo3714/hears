<template>
     <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
          <h2 class="sub-header">英雄</h2>
          <!-- <a class="btn btn-success" href="add.html">Add</a> -->
          <router-link class="btn btn-success" to="/hear/add">Add</router-link>
          <div class="table-responsive">
            <table class="table table-striped">
              <thead>
                <tr>
                  <th>#</th>
                  <th>姓名</th>
                  <th>性别</th>

                  <th>操作</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(item,index) in list" :key="item.id">
                  <td>{{index+1}}</td>
                  <td>{{item.name}}</td>
                  <td>{{item.gender}}</td>

                  <td>
                    <a href="edit.html">edit</a>
                    &nbsp;&nbsp;
                    <!-- <a href="javascript:window.confirm('Are you sure?')">delete</a> -->
                    <a href="javascript:;" @click="handle(item.id)">delete</a>
                  </td>
                </tr>
         
              </tbody>
            </table>
          </div>
        </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      list: []
    };
  },
  mounted() {
    this.loadData();
  },
  methods: {
    loadData() {
      axios.get("http://localhost:3000/brands").then(data => {
        this.list = data.data;
      });
    },
    handle(id) {
      if (!confirm("确定要删除吗?")) {
        return;
      }
      axios.delete("http://localhost:3000/brands/" + id)
          .then(data => {
            this.loadData();
      });
    }
  }
};
</script>
<style>
</style>

