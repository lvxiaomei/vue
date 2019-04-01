<template>
    <div>
        <h4>vue-resource体积小，比jQuery小的多；支持主流浏览器（IE9以下不支持）；支持拦截器。</h4>
        <el-row>
            <el-button></el-button>
        </el-row>
    </div>
</template>

<script>
    import ElRow from "element-ui/packages/row/src/row";
    import ElButton from "../../../node_modules/element-ui/packages/button/src/button.vue";

    export default {
        components: {
            ElButton,
            ElRow},
        name: 'VueResource',
        data() {
            return {}
        },
        methods: {

        }
    }
</script>

<style scoped>

</style>