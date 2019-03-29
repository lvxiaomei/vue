<template>
    <div>
        <h4>一个store的核心分为state、getter、mutation、action、module</h4>

        <h4>state 单一状态树 用一个对象就包含了全部的应用层级状态 组件中在计算属性里用$store.state.属性名进行访问。</h4>
        <h4>
            ⚠️ 使用对象展开运算符 需要安装babel-plugin-transform-object-rest-spread插件，同时webpack2以上还需要安装babel-preset-stage-3，然后再修改.babelrc文件即可。</h4>
        <h4>mapState 辅助函数 当一个组件需要获取多个状态时，将这些状态都声明为计算属性会有些重复和冗余，可以使用 mapState 辅助函数帮助我们生成计算属性。</h4>

        <h4>getter 可以理解为state的计算属性。getter的返回值会被缓存起来，且只有当它的依赖值发生了改变才会被重新计算。</h4>
        <h4>getter 接收state作为第一个参数；接收其他getter作为第二个参数。</h4>
        <h4>getter 可通过$store.getters.属性名 进行访问；也可通过方法进行访问。通过方法进行访问时，不会进行缓存，每次访问都会进行重新调用。</h4>
        <h4>getter 通过返回一个函数来实现getter传参。</h4>
        <h4>mapGetters 将store中的getter映射到局部计算属性。</h4>

        <h4>mutation 改变store中状态的唯一方法就是提交mutation，通过$store.commit(type)提交。</h4>
        <h4>mutation 非常类似于事件 每个mutation都有一个type和一个回调函数，state作为回调函数的第一个参数。</h4>
        <h4>
            $store.commit(type,payload)可以传入额外的参数即载荷（payload），通常这个参数会是一个对象。也可用对象的方式提交，比如：$store.commit({type:'increment',amount:10})</h4>
        <h4>⚠️ mutation必须是同步函数，所以在mutation里无法进行异地调用。</h4>
        <h4>其他mutation操作，PS:用常量代替mutation事件类型（type）、mapMutation</h4>

        <h4>action 类似于mutation 不同在于action只是提交mutation而不是直接更改store的状态，另外action可以进行异步操作。</h4>
        <h4>action 通过$store.dispatch('')触发。</h4>
        <h4>action 也有载荷也可用对象的方式发布。</h4>
        <h4>其他action操作，PS：mapActions，组合Action(action通常是异步的，不知道action什么时候结束，通常用then或async/await进行组合)。</h4>

        <h4>module vuex允许store分割成模块 每个模块都有自己的state,getter,mutation,action。</h4>
        <h4>模块内部的getter和mutation以局部的state作为第一个参数，模块内部的 getter，根节点状态会作为第三个参数暴露出来。</h4>
        <h4>模块内部的action，局部状态通过context.state暴露出来，根结点状态通过context.rootState暴露出来。</h4>

        <button @click="testIncrement1">mutation</button>
        <button @click="testIncrement2">mutationPayload</button>
        <button @click="testAction1">action</button>
        <button @click="testAction2">actionPayload</button>
        <span>state：{{ testStore }}</span>
        <div>getter1：{{ testGetters1 }}</div>
        <div>getter2：{{ testGetters2 }}</div>
        <div>getter3：{{ testGetters3 }}</div>

    </div>
</template>

<script>
    import {mapState, mapGetters, mapMutations, mapActions} from 'vuex';

    export default {
        name: 'Vuex',
        data() {
            return {}
        },
        computed: {
            ...mapState([ //this.count 将映射为 this.$store.state.count
                "count",
                "todos"
            ]),

            ...mapGetters(["doneTodos"]), //this.doneTodos 将映射为 this.$store.getters.doneTodos mapMutations与mapActions同理

            testStore() {
                /*return this.$store.state.count*/
                return this.count;
            },
            testGetters1() {
                /*return this.$store.getters.doneTodos;*/ //通过属性访问
                return this.doneTodos;
            },
            testGetters2() {
                return this.$store.getters.doneTodosCount; //通过属性访问
            },
            testGetters3() {
                return this.$store.getters.getTodoById(2); //通过方法访问
            },
            /*...mapGetters([
                'doneTodos',
                'doneTodosCount',
                'getTodoById'
            ])*/
        },
        methods: {
            testIncrement1() {
                this.$store.commit('increment');
            },
            testIncrement2() {
                /*this.$store.commit('incrementPayLoad',{amount:10});*/

                //对象方式提交
                this.$store.commit({
                    type: 'incrementPayLoad',
                    amount: 10
                });
            },
            testAction1() {
                this.$store.dispatch("incrementAsync");
            },
            testAction2() {
                this.$store.dispatch("incrementAsyncPayload", {amount: 5});

                //对象方式发布
                /*this.$store.dispatch({
                    type:'incrementAsyncPayload',
                    amount:5
                })*/
            }

        }
    }
</script>

<style scoped>

</style>