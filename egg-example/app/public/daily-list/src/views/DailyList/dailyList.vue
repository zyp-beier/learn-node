<template>
    <div class="daily-list-page">
        <div class="daily-list-bg">
            <div class="title">
                A VIBRANT DAY
            </div>
            <div class="author">
                ZHAO YINPING
            </div>
            <main class="main">
                <div class="daily-list-wrap">
                    <div class="daily-list-title">
                        IMPORTANT TASKS
                    </div>
                    <div class="daily-list-add">
                        <div @click="addDailyItem">添加</div>
                    </div>
                    <div class="daily-list" v-for="(item,index) in daily_list" :key="index">
                        <div class="daily-item">
                            <div>
                                <label for="daily-item-checkbox" id="checkbox-label"></label>
                                <input type="checkbox" value="id" id="daily-item-checkbox">
                            </div>
                            <div class="input">
                                <input type="text" :value="item.title" style="font-size: 18px;padding-left:15px;color:#333" >
                            </div>
                            <div class="daily-item-remove" @click="removeDailyItem(index)">
                                删除
                            </div>
                        </div>
                    </div>
                </div>
                <div class="message-wrap">
                    <div class="daily-list-title">
                        DAILY MESSAGE
                    </div>
                    <div class="message">
                        <textarea name="" id="1" cols="25" rows="10"/>
                    </div>
                </div>
            </main>
        </div>
    </div>
</template>

<script>
    export default {
        name: "dailyList",
        data() {
            return {
                daily_list:[
                    {
                        id:1,
                        title: '英语',
                    },
                    {
                        id:2,
                        title: '政治',
                    },
                    {
                        id:3,
                        title: 'js',
                    }
                ]
            }
        },
        methods: {
            addDailyItem() {
                this.$router.push({
                    name: 'detail'
                })
            },
            removeDailyItem(index) {
                this.daily_list.splice(index,1)
            }
        }
    }
</script>

<style scoped>
    .daily-list-page {
        box-sizing: border-box;
        position: absolute;
        width: 100%;
        height: 100%;
    }

    .daily-list-bg {
        box-sizing: border-box;
        width:800px;
        height: 100%;
        margin: 0 auto;
        background: url("../../assets/background.png") no-repeat;
        background-size: 100%;
        -moz-background-size: 100%;
        padding: 100px;
        position: relative;
    }

    .title {
        text-align: center;
        font-weight: 400;
        font-size: 50px;
    }

    .author {
        font-size: 25px;
        text-align: center;
        font-weight: 500;
        margin-top: 10px;
    }

    .main {
        display: flex;
        justify-content: space-between;
        margin-top: 50px;
    }

    .daily-list-title {
        font-size: 25px;
        font-weight: 500;
    }

    .daily-list-add {
        margin-top: 10px;
    }

    .daily-list-add div {
        width: 40px;
        text-align: center;
        padding:5px 10px;
        border: 1px solid #fff;
        background-color: rgba(0, 0, 0, 0.2);
        font-size: 15px;
        border-radius: 5px;
        color: #ccc;
        cursor: pointer;
    }
    .daily-list {
        margin-top: 20px;
    }

    .daily-item {
        display: flex;
        align-items: center;
    }

    input[type=checkbox] {
        display: none;
    }

    #checkbox-label:before {
        content: "\2714";
        border: 0.1em solid #000;
        border-radius: 0.2em;
        display: inline-block;
        width: 1em;
        height: 1em;
        padding-left: 0.2em;
        padding-bottom: 0.3em;
        margin-right: 0.2em;
        vertical-align: bottom;
        color: transparent;
        transition: .2s;
    }

    #checkbox-label:active:before {
        transform: scale(0);
    }

    #daily-item-checkbox:checked + #checkbox-label:before {
        background-color: MediumSeaGreen;
        border-color: MediumSeaGreen;
        color: #fff;
    }
    .daily-item-remove{
        color:#ccc;
        font-size: 15px;
        cursor: pointer;
    }
    .input input {
        outline-style: none;
        border: 0px;
        background-color: rgba(0, 0, 0, 0);
        border-bottom: 1px black dashed;
    }
    .message-wrap {

    }
    .message textarea{
        margin-top: 10px;
        resize: none;
        background-color: rgba(255,255,255,.5);
        font-size: 18px;
        color:#333
    }
    .message textarea:focus{
        background-color: rgba(255,255,255,.5);
        resize: none;
        outline: 0;
        outline: thin dotted \9;
    }

</style>
