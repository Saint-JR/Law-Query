<template>
    <scroll-view scroll-y=true>
        <view class="container">
            <image class="mainPage" src="@/static/image/main_page.png" mode="widthFix" />
            <view class="mask"></view>
            <view class="textContainer">
                <view class="text">法志汇</view>
            </view>
        </view>
        <view class="searchContainer">
            <view class="searchView"></view>
        </view>
    </scroll-view>
    
</template>

<script setup lang="ts">
import { ref } from 'vue';
</script>

<style lang="scss" scoped>
scroll-view{
    width: 100%;
    height: 100%;
    background-color: rgb(240, 240, 240);
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
    font-size: 60upx;
    // font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    font-style: 900;
    color: white;
    letter-spacing: 2upx;
}
.text::first-letter{
    color: $main-color;
}
.searchContainer{
    margin: 30upx;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
}
.searchView{
    $height:80upx;
    width: 100%;
    border-radius: ($height/2);
    height: $height;
    background-color: white;

}
</style>
