<template>
    <div>
        <h4>vue-resource体积小，比jQuery小的多；支持主流浏览器（IE9以下不支持）；支持拦截器。</h4>
        <h4>vue-resource拦截器，可以判断token是否过期等等。</h4>

        <el-row>
            <el-button @click="testResource">testResource</el-button>
        </el-row>
        <el-row>
            <ul>
                <li v-for="item in arr">{{item}}</li>
            </ul>
        </el-row>

        <div class="loading-wrap" v-if="showLoading"></div>
    </div>
</template>

<script>
    export default {
        name: 'VueResource',
        data() {
            return {
                arr: [],
                showLoading: false,
            }
        },
        methods: {
            testResource() {
                this.showLoading = true;
                this.$http.post("/data/index").then((res) => {
                    this.showLoading = false;
                    this.arr = res.data;
                }, (err) => {
                    console.log(err)
                });
            }
        }
    }
</script>

<style scoped>
    .loading-wrap {
        position: absolute;
        top: 60px;
        right: 0;
        bottom: 0;
        left: 200px;
        background: url("../../assets/loading.gif") no-repeat center center;
        background-size: 50px 50px;
    }
</style>