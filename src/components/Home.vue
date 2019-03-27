<template>
    <el-container class="home">
        <el-header>
            <div class="home-header">Header</div>
        </el-header>
        <el-container>
            <el-aside width="auto">
                <!--<el-switch
                        class="nav-switch"
                        v-model="isCollapse"
                        active-color="#ff4949"
                        inactive-color="#13ce66">
                </el-switch>-->
                <el-menu :default-active="$route.path" router class="el-menu-vertical-demo"
                         @open="handleOpen"
                         @close="handleClose"
                         :collapse="isCollapse">
                    <template v-for="(item,index) in $router.options.routes" :key="">
                        <el-submenu v-if="!item.leaf" :index="index+''">
                            <template slot="title">
                                <i :class="item.navIcon"></i>
                                <span slot="title">{{ item.name }}</span>
                            </template>
                            <el-menu-item v-for="child in item.children" :index="child.path" :key="child.path">
                                {{child.name}}
                            </el-menu-item>
                        </el-submenu>
                        <el-menu-item v-if="item.leaf" :index="item.children[0].path">
                            <i :class="item.navIcon"></i>
                            <span slot="title">{{ item.name }}</span>
                        </el-menu-item>
                    </template>
                </el-menu>
            </el-aside>
            <el-main>
                <router-view/>
            </el-main>
        </el-container>
    </el-container>
</template>

<script>
    export default {
        name: 'Home',
        data() {
            return {
                isCollapse: false
            }
        },
        mounted() {
            console.log(this.$router.options.routes)
            //console.log(this.$route)
        },
        methods: {
            handleOpen(key, keyPath) {
                console.log(key, keyPath);
            },
            handleClose(key, keyPath) {
                console.log(key, keyPath);
            }
        }
    }
</script>

<style scoped>
    .home {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
    }

    .el-menu{
        border-right: none;
    }

    .el-aside{
        border-right: solid 1px #e6e6e6;
    }

    .el-header {
        background-color: cadetblue;
    }

    /*.el-aside {
        background-color: cornflowerblue;
    }*/

    .el-main {
        /*background-color: cyan;*/
        padding: 0 20px;
    }

    .home-header {
        text-align: center;
        line-height: 60px;
        font-weight: bold;
        font-size: 24px;
    }

    .el-menu-vertical-demo:not(.el-menu--collapse) {
        width: 200px;
        min-height: 400px;
    }

    .nav-switch {
        padding: 18px 12px;
    }
</style>