<template>
    <div>
        <h4>mockjs模拟数据；axios模拟后台接口。</h4>
        <h4>先npm安装axios、mockjs，然后创建一个js来mock数据，在这个js里面import mockjs，然后在组件里面引入该js，再引入axios即可使用axios请求接口。</h4>

        <el-row>
            <el-button @click="postTest">postTest</el-button>
        </el-row>
        <ul>
            <li v-for="data in resData" :key="">{{ data }}</li>
        </ul>
    </div>
</template>

<script>
    import axios from "axios"
    import mock from "../../mock/mock.js"
    export default {
        name: 'Mock',
        data() {
            return {
                resData:[],
            }
        },
        methods: {
            postTest() {
                axios.post("/data/index").then((res)=>{
                    this.resData = res.data;
                    console.log(res.data);
                },(err)=>{
                   console.log(err);
                });
            }

        }
    }
</script>

<style scoped>

</style>