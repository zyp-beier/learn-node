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
                <div class="daily-title flex">
                    <div class="daily-label">
                        title:
                    </div>
                    <div>
                        <input type="text" class="detail-input">
                    </div>
                </div>
                <div class="daily-content flex">
                    <div class="daily-label">
                        内容:
                    </div>
                    <div>
                        <input type="text" class="detail-input">
                    </div>
                </div>
            </main>
            <div class="btn-grow">
                <div class="detail-btn" @click="addDailyItem">保存</div>
                <div class="detail-btn" @click="$router.back()">取消</div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "details",
        data() {
            return{

            }
        },
        methods: {
            addDailyItem() {
                // let id = this.daily_list[0].id;
                // let title = this.daily_list[0].title + this.daily_list[0].id++;
                // this.daily_list.push({
                //     id: id++,
                //     title:title
                // })
                this.$router.back()
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
        width: 50%;
        margin: 0 auto;
    }
    .flex{
        display: flex;
        align-items: center;
    }
    .daily-title{
        margin-top: 100px;
    }
    .daily-content{
        margin-top: 50px;
    }
    .daily-label{
        font-size: 20px;
        color: #111111;
        padding-right: 10px;
    }
    .detail-input{
        outline-style: none ;
        border: 1px solid #ccc;
        border-radius: 3px;
        padding: 8px 14px;
        width: 100%;
        font-size: 14px;
        font-weight: 700;
        font-family: "Microsoft soft";
    }
    .detail-input:focus{
        border-color: #66afe9;
        outline: 0;
        -webkit-box-shadow: inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgba(102,175,233,.6);
        box-shadow: inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgba(102,175,233,.6)
    }
    .btn-grow{
        width: 30%;
        margin: 50px auto 0 auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .detail-btn{
        padding:10px 20px;
        border-radius: 5px;
        cursor: pointer;
    }
    .detail-btn:nth-child(1){
        background-color: rgba(102,175,233,.6);
        color: #fff;
    }
    .detail-btn:nth-child(2){
        border:1px solid rgba(102,175,233,.6);
        color: #fff;
    }
</style>
