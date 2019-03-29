1。使用了v-model的组件会自动监听input事件，并把input事件所携带的值传给v-model所绑定的属性


<template>
    <div class="practice">
        <h3>点击事件</h3>
        <div>
            <button @click.once="handleCount">{{ startCount }}</button>
            <span>{{ count }}</span>
        </div>
        <br/>
        <form>
            <h3>单选框</h3>
            <div v-for="fruit in fruitArr" :key="fruit.id">
                <input type="radio" :value="fruit.name" :id="fruit.id" v-model="selectFruit"/>
                <label :for="fruit.id">{{ fruit.name }}</label>
            </div>
            <div>选中的水果是：{{ selectFruit}}</div>

            <h3>多选框</h3>
            <div v-for="food in foods" :key="food.id">
                <input type="checkbox" :id="food.id" :value="food.name" v-model="selectedFood"/>
                <label :for="food.id">{{ food.name }}</label>
            </div>
            <div>今晚吃：{{ selectedFood }}</div>
        </form>

    </div>
</template>

<script>
    export default {
        name: 'Form',
        data() {
            return {
                startCount: '开始计数',
                count: 0,
                fruitArr: [
                    {id:'apple',name:'苹果'},
                    {id:'banana',name:'香蕉'},
                    {id:'orange',name:'橘子'},
                    {id:'grapefruit',name:'柚子'},
                    {id:'strawberry',name:'草莓'}
                ],
                selectFruit:null,
                foods:[
                    {id:'0',name:'青椒肉丝'},
                    {id:'1',name:'蒜蓉粉丝虾'},
                    {id:'2',name:'酸菜鱼'},
                    {id:'3',name:'金针菇炒蛋'}
                ],
                selectedFood:[],
            }
        },
        methods: {
            handleCount() {
                setInterval(() => {
                    this.count += 1
                }, 1000);
            }
        }
    }
</script>

<style scoped>

</style>
