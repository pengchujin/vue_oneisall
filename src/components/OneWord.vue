<template>
    <div class="card">
        <el-container>
        <el-header>
                <div class="ONE">
                    <span>ONE IS ALL</span>
                     <div class="date">
                         {{ ResData.date }}                        
                     </div>
                </div>
        </el-header>
        <div class="main">
            <div class="pic">
                <img width="750" v-bind:src="ResData.img_url"/>
            </div>
            <div class="word">{{ ResData.word }}</div>
            <div class="author">{{ ResData.word_from }}</div>
             <div class="dateC">
                 <el-button size="mini" type="primary" icon="el-icon-arrow-left" @click="back" ></el-button>
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
<<<<<<< HEAD
             <div class="EQ">
                 <a href="/question"><p>问题</p></a>
             <a href="/essay"><p>文章</p></a>
             </div>
        </el-main>
=======
        </div>
>>>>>>> cfdb127606182304fed5870fb7d8498fb09e4705
    </el-container>
    </div>
</template>

<script>
import { formatDate } from '../formatDate.js'

export default {
  name: 'OneWord',
  data() {
      return {
        ResData: {},
        date: new Date(),
        url: 'http://qust.me:8889/api/new/one'
      }
  },
  methods:{
      fresh: function(){
          let fDate = formatDate(this.date, 'yyyy-MM-dd')
          this.url = 'http://qust.me:8889/api/one/date/' + fDate
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
              this.url = 'http://qust.me:8889/api/one/date/' + fDate
              this.$http.get(this.url).then((response) => {
              this.ResData = response.data
      })
              console.log(fDate)
              
      },
      go: function(){
              const date = this.date;
              date.setTime(date.getTime() + 3600 * 1000 * 24);
              let fDate = formatDate(date, 'yyyy-MM-dd')
              this.url = 'http://qust.me:8889/api/one/date/' + fDate
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
</script scoped>

<style>
  .ONE {
      font-size: 20px;
      padding-top: 18px;
  }
  .card {
    margin: 0 auto;
    width: 750px; /* 宽度值，随便啦 */  /* 高度值，随便啦 */
  }
  .pic {
      max-width: 750px;
  }
  .dateC {
      padding: 30px;
      margin: auto;      

      left: 0;
      right: 0;
  }
  .word {
      padding-top: 20px;
      font-size: 20px;
  }
  .author {
      padding: 10px;
      text-align: right;
  }
  .date {
      text-align: right;
      font-size: 16px;
  }
  .el-header, .el-footer {
    background-color: #41B883;
    color: #333;
    text-align: center;
    height: 60px;
  }
  
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }
  
  .main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    padding-top: 0px;
    padding-left: 0px;
    height: 1300px;
  }
  
  body > .el-container {
    margin-bottom: 40px;
  }
  
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
  a{
  text-decoration: none;
  color: #606266;
} 
.EQ{
    padding: 5%;
   white-space:nowrap;
   font-size: 28px;
}
</style>