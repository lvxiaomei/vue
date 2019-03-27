<template>
    <div class="computed">
        <h1>计算属性</h1>
        <h5>data中的message： {{ message }}</h5>
        <h5>经过计算属性reversedMessage后的message： {{ reversedMessage }}</h5>

        <h1>计算属性缓存 vs 方法</h1>
        <h5>计算属性是基于它的相关依赖进行缓存的</h5>
        <h5>比如此例，计算属性reversedMessage是依赖message进行缓存的，也就是说只有message发生改变，reversedMessage才会重新计算！<br/>
            如果message没有发生改变，多次访问reversedMessage属性将立即返回之前的计算结果，而不必再次执行计算！</h5>
        <h5>方法：只要我们触发了重新渲染，方法总会被再次执行！</h5>
        <h5>PS：当我们需要缓存的时候，我们就用computed；不希望有缓存的时候就用方法。</h5>
    </div>
</template>

<script>
    export default {
        name: 'Computed',
        data() {
            return {
                message: 'Hello world!',
            }
        },
        computed: {
            reversedMessage() { //这里声明了一个计算属性 计算属性也是属性 所以可以像绑定普通属性一样在模板中绑定计算属性
                return this.message.split('').reverse().join('')
            }
        },
        methods: {

        }
    }
</script>

<style scoped>

</style>