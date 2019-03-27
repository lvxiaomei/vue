<template>
    <div>
        <ul>
            <li v-for="fruit in fruits">{{ fruit }}</li>
        </ul>

        <ul>
            <li v-for="item in sliceArr">{{ item }}</li>
        </ul>

        <ul>
            <li v-for="item in concatArr">{{ item }}</li>
        </ul>

        <ul>
            <li v-for="item in filterArr">{{ item }}</li>
        </ul>

        <el-row>
            <el-button @click="handlePush">push在数组末尾添加元素</el-button>
            <el-button @click="handleUnshift">unshit在数组开头添加元素</el-button>
            <el-button @click="handlePop">pop删除数组的最后一个元素</el-button>
        </el-row>
        <el-row>
            <el-button @click="handleShift">shift删除数组的第一个元素</el-button>
            <el-button @click="handleSplice">splice删除数组中一部分连续的元素</el-button>
            <el-button @click="handleSort">sort按照一定顺序给数组排序</el-button>
            <el-button @click="handleReverse">reverse颠倒数组中元素的顺序</el-button>
        </el-row>
        <el-row>
            <el-button @click="handleSlice">slice复制原数组中的一部分元素到一个新数组</el-button>
            <el-button @click="handleConcat">concat将原数组与其他项整合形成新数组</el-button>
            <el-button @click="handleFilter">filter根据某个规则过滤数组中的元素返回新数组（本例去重）</el-button>
        </el-row>

        <h3>1.splice(params1,params2,params3) params1删除的开始索引，从0开始；params2删除的长度；params3可选参数，在删除位置添加新元素。</h3>
        <h3>2.sort(sortFunc) sortFunc可选参数，没有参数时默认按照ASCII码进行升序排列。</h3>
        <h3>3.unshift、push、shift、pop、splice、sort、reverse会改变原数组。</h3>
        <h3>4.slice(start,end) start开始复制的索引，end可选参数，复制结束的索引，end省略则默认复制到数组尾部。</h3>
        <h3>5.slice、concat、filter不会改变原数组，返回一个新数组。</h3>
    </div>
</template>

<script>
    import ElRow from "element-ui/packages/row/src/row";

    export default {
        components: {ElRow},
        name: 'Array',
        data() {
            return {
                fruits: ['apple', 'orange', '520', 'orange'],
                sliceArr: [],
                concatArr: [],
                filterArr: []
            }
        },
        methods: {
            handlePush() {
                this.fruits.push('end add')
            },
            handleUnshift() {
                this.fruits.unshift('start add')
            },
            handlePop() {
                this.fruits.pop()
            },
            handleShift() {
                this.fruits.shift()
            },
            handleSplice() {
                this.fruits.splice(0, 3)
            },
            handleSort() {
                this.fruits.sort()
            },
            handleReverse() {
                this.fruits.reverse()
            },
            handleSlice() {
                this.sliceArr = this.fruits.slice(1)
            },
            handleConcat() {
                this.concatArr = this.fruits.concat(['testConcat1', 'testConcat2'])
            },
            handleFilter() {
                this.filterArr = this.fruits.filter((value, index, self) => {
                    /*self是原数组 value是原数组中的某一项 index是某项的下标
                      indexOf()返回某个元素的下标 如果有重复的元素则返回第一个元素的下标*/
                    console.log(value, index);
                    console.log(self.indexOf('orange'));
                    return self.indexOf(value) === index; //去重
                })
            }
        }
    }
</script>

<style scoped>
    .el-row {
        margin: 10px 0;
    }
</style>