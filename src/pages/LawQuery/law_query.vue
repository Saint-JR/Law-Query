<template>
	<view class="container">
		<image class="mainPage" src="@/static/image/main_page.png" mode="widthFix" />
		<view class="mask"></view>
		<view class="textContainer">
			<view class="text lawText">法律</view>
			<view class="text">查询</view>
		</view>
	</view>
</template>

<script setup lang="ts">
import { ref } from 'vue';
</script>

<style lang="scss" scoped>
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
	margin-left: 50upx;
	display: flex;
	flex-direction: row;
	position: absolute;
}
.text {
	font-size: 50upx;
	// font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
	font-style: 900;
	color: white;
	letter-spacing: 2upx;
}
.lawText {
	color: $main-color;
}
</style>
