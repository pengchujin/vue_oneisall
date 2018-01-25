<template :gutter="10">
<el-row>
  <el-col :xs="0" :sm="2" :md="4" :lg="5" :xl="8"><br></el-col>
  <el-col :xs="24" :sm="20" :md="16" :lg="14" :xl="8">
    <div class="Qs">
      <a href="/">
        <h1 align="center">{{ResData.title}}</h1>
      </a>
      <h3>问题：</h3> 
        <p>{{ResData.q_content}} </p>
      <h3>{{ResData.a_author}}的回答：</h3>
      {{ResData.guide}}
      <span v-html="ResData.a_content"></span>
      <br>
       <div class="dateC">
                 <el-button size="mini" type="primary" icon="el-icon-arrow-left" @click="back"></el-button>
             <el-date-picker
                v-model="date"
                type="date"               
                v-bind:placeholder="ResData.date"
                align="right"
                @change="fresh">
             </el-date-picker>
             <!--  format="yyyy 年 MM 月 dd 日"
                value-format="yyyy-MM-dd" -->
                <el-button size="mini" type="primary" icon="el-icon-arrow-right" @click="go"></el-button>
             </div>
    </div>
  </el-col>
  <el-col :xs="0" :sm="2" :md="4" :lg="5" :xl="8"><br></el-col>
</el-row>
</template>

<script>
import { formatDate } from '../formatDate.js'
export default {
   name: 'Question',
   data() {
      return {
        ResData: {},
        date: new Date(),
        url: 'http://qust.me:8889/api/new/question'
      }
  },
 methods:{
      fresh: function(){
          let fDate = formatDate(this.date, 'yyyy-MM-dd')
          this.url = 'http://qust.me:8889/api/question/date/' + fDate
          console.log('------------------------------------')
          console.log(this.date,fDate)
          this.$http.get(this.url).then((response) => {
          this.ResData = response.data
      })
      },
      back: function(){
              const date = this.date;
              date.setTime(date.getTime() - 3600 * 1000 * 24);
              let fDate = formatDate(date, 'yyyy-MM-dd')
              this.url = 'http://qust.me:8889/api/question/date/' + fDate
              this.$http.get(this.url).then((response) => {
              this.ResData = response.data
      })
              console.log(fDate)
              
      },
      go: function(){
              const date = this.date;
              date.setTime(date.getTime() + 3600 * 1000 * 24);
              let fDate = formatDate(date, 'yyyy-MM-dd')
              this.url = 'http://qust.me:8889/api/question/date/' + fDate
              this.$http.get(this.url).then((response) => {
              this.ResData = response.data
      })
              console.log(fDate)
              
      }
  },
  mounted(){            
      this.$http.get(this.url).then((response) => {
      this.ResData = response.data
      }).catch(function (error) {
      console.log(error);
      }); 
  }
}
</script>

<style scoped>
.Qs{
  font-size: 17px;
  line-height: 26px;
  padding: 16px;
  color: #606266;
}
h1{
  font-size: 26px;
  line-height: 180%;
  padding: 2%
}
a{
  text-decoration: none;
  color: #606266;
}
.dateC {
  text-align: center;
  padding: 2%;     
  }
</style>

