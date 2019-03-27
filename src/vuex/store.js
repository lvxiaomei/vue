import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {  //在计算属性computed里面使用$store.state.count
        count: 1,
        todos: [
            {id: 1, test: '测试数据1', done: true},
            {id: 2, test: '测试数据2', done: false}
        ]
    },
    getters: {
        doneTodos: (state) => {  //接收state为第一个参数
            return state.todos.filter((todo) => { //filter根据某规则对数组进行过滤返回新数组
                return todo.done;
            })
        },
        doneTodosCount: (state, getters) => { //接收其他getter作为第二个参数
            return getters.doneTodos.length;
        },
        getTodoById: (state) => { //通过返回函数 实现getter传参
            return (id) => {
                return state.todos.find((todo) => { //find查找数组中符合要求的第一个数组成员 若返回值为true则返回该成员
                    return todo.id === id
                })
            }
        }
    },
    mutations: {  //在组件的methods里面用$store.commit('increment')提交mutations
        increment(state) {
            state.count++
        },
        incrementPayLoad(state, payload) {//mutation的载荷（payload）即传入其他参数 $store.commit('incrementPayLoad',{amount:10})
            state.count += payload.amount;
        }
    },
    actions: {
        increment(context) { //context相当于一个store实例 拥有与store实例相同的属性和方法
            context.commit("increment");
        },
        incrementAsync({commit}) { //{commit} 参数结构
            setInterval(() => { //action可以执行异步操作
                commit('increment')
            }, 1000)
        },
        incrementAsyncPayload({commit}, payload) { //action也有载荷
            commit('incrementPayLoad', payload)
        }
    }
})

