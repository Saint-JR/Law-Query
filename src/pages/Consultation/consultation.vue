<template>
    <view class="page">
        <view class="container">
            <image src="@/static/image/consultation_page.png" mode="widthFix" />
            <view class="mask"></view>
            <view class="textContainer">
                <view class="text">咨询</view>
            </view>
        </view>

        <view class="main">
            <view class="content">
                <view class="title">姓名</view>
                <view class="input"></view>
                <view class="title">邮箱</view>
                <view class="input"></view>
                <view class="title">咨询内容</view>
                <view class="input height"></view>
            </view>
        </view>
    </view>
    
</template>

<script setup lang="ts">
    import { onMounted } from 'vue';
    import { ref,reactive } from 'vue';
    
</script>

<style lang="scss" scoped>
.page{
    height: 100%;
    width: 100%;
    background-color: $background-color;
}
.container {
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
}
image {
    width: 100%;
}
.mask {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba($color: #000000, $alpha: 0.4);
}
.textContainer {
    margin-left: 60upx;
    display: flex;
    flex-direction: row;
    position: absolute;
}
.text {
    font-size: 80upx;
    // font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    font-weight: 900;
    color: white;
    letter-spacing: 7upx;
}
.text::first-letter{
    color: $main-color;
}

.main{
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.content{
    width:80%;
}

.title{
    color: $main-color;
    font-size: 40upx;
    font-weight: 900;
    margin: 30upx 0;
}

.input{
    background-color: white;
    height: 80upx;
    width: 100%;
    border-radius: 40upx;
}

.height{
    height: 400upx;
}
</style>

