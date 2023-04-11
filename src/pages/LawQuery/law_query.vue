<template>
    <scroll-view class="scrollView" scroll-y=true>
        <view class="container">
            <image class="mainPage" src="@/static/image/main_page.png" mode="widthFix" />
            <view class="mask"></view>
            <view class="textContainer">
                <view class="text">法志汇</view>
            </view>
        </view>
        <view class="searchContainer">
            <view class="searchView">
                <view class="searchBall">
                    <image src="@/static/image/search.png" mode="aspectFit" class="searchIcon" />
                </view>
            </view>
        </view>
        <view class="selectionContainer" :style="{top:top}">
            <view class="selection">
                <view class="underlineView">
                    <view :class="`selectionText ${selection==1?'selected':''}`" @click="clickSelection(1)">法条</view>
                    <view class="underline" :style="{opacity:selection==1?1:0}"></view>
                </view>
                <view class="underlineView">
                    <view :class="`selectionText ${selection==2?'selected':''}`" @click="clickSelection(2)">案例</view>
                    <view class="underline" :style="{opacity:selection==2?1:0}"></view>
                </view>
            </view>
        </view>
        <view class="main">
            <view class="lawContainer" v-if="selection==1" @click="(e)=>lawEventProxy(e,true)">
                <view class="level">国家级</view>
                <view class="law" v-for="(nation,index) in nationalList" :key="nation" :id="`nation${index}`">{{ nation }}</view>
            </view>
            <view class="lawContainer" v-if="selection==1" @click="(e)=>lawEventProxy(e,false)">
                <view class="level">地方级</view>
                <view class="law" v-for="(local,index) in localList" :key="local" :id="`local${index}`">{{ local }}</view>
            </view>
            <view class="lawContainer" v-if="selection==2" @click="(e)=>caseEventProxy(e)">
                <view class="law" v-for="(caseObject,index) in caseList" :key="caseObject" :id="`case${index}`">{{ caseObject }}</view>
            </view>
        </view>
    </scroll-view>
    
</template>

<script setup lang="ts">
    import { onMounted } from 'vue';
    import { ref,reactive } from 'vue';
    import {useStore} from 'vuex'

    import {getLawList,getLaw,getCaseList,getCase} from '../../api/law_query'
    import type {LawListVO} from '../../api/law_query'

    const store = useStore();

    let selection=ref<number>(1);
    const clickSelection=(index:number):void=>{
        selection.value=index;
    }

    let top=ref<string>('0px');
    let nationalList=reactive<Array<string>>([]);
    let localList=reactive<Array<string>>([]);
    let caseList=reactive<Array<string>>([]);

    const lawEventProxy=(event:any,national:boolean):void=>{
        var targetId:string=event.target.id;
        if(targetId!==''){
            const reg=/\d+/;
            var index:number=Number(targetId.match(reg));
            getLaw(national,national?nationalList[index]:localList[index]).then((res)=>{
                console.log(res);
            }).catch((err)=>{
                console.log(err);
            });
        }
    }

    const caseEventProxy=(event:any):void=>{
        var targetId:string=event.target.id;
        if(targetId!==''){
            const reg=/\d+/;
            var index:number=Number(targetId.match(reg));
            getCase(caseList[index]).then((res)=>{
                console.log(res);
            }).catch((err)=>{
                console.log(err);
            });
        }
    }

    onMounted(():void=>{
        top.value=`${store.state.statusBarHeight}px`;

        getLawList().then((res:LawListVO)=>{
            res.national.forEach((nationLaw)=>{
                nationalList.push(nationLaw);
            });
            res.local.forEach((localLaw)=>{
                localList.push(localLaw);
            })
        }).catch(err=>{
            console.log(err);
        });

        getCaseList().then((res:Array<string>)=>{
            res.forEach((caseObject)=>{
                caseList.push(caseObject);
            })
        }).catch(err=>{
            console.log(err);
        })
    })

    
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
    font-size: 80upx;
    // font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    font-weight: 900;
    color: white;
    letter-spacing: 7upx;
}
.text::first-letter{
    color: $main-color;
}
.searchContainer{
    margin: 30upx 0;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    // background-color: red;
}

.searchBall{
    $height:70upx;
    width: $height;
    height: $height;
    border-radius: calc($height / 2);
    background-color: $main-color;
    margin-top: 10upx;
    margin-left: 10upx;
    display: flex;
    justify-content: center;
    align-items: center;
}
.searchView{
    $height:90upx;
    width: 100%;
    border-radius: calc($height / 2);
    height: $height;
    background-color: white;
    margin-left: 30upx;
    margin-right: 30upx;

}

.searchIcon{
    // height: 100%;
    // width: auto;
    height: 50upx;
}

.selectionContainer{
    position: sticky;
    width: 100%;
    // background-color: red;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #F0F0F0;
    margin-bottom: 30upx;
}

.selection{
    width: 40%;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.underlineView{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.underline{
    margin-top: 5upx;
    height: 10upx;
    background-color: $main-color;
    width: 100%;
    border-radius: 10upx;
}

.selectionText{
    color: $transparent-black;
    font-weight: bolder;
    font-size: 35upx;
}

.selected{
    color:$main-color;
}

.main{
    // height: 2000upx;
    margin: 30upx;
    background-color: white;
    border-radius: 30upx;
    display: flex;
    flex-direction: column;
    // background-color: blue;
}


.lawContainer{
    margin: 30upx;
    // border: 2px solid red;
    display: flex;
    flex-direction: column;
}

.level{
    color: $main-color;
    font-size: 45upx;
    font-weight: 900;
    margin-bottom: 20upx;

}

.law{
    font-size: 35upx;
    margin-bottom: 20upx;
    text-overflow: ellipsis;
    overflow: hidden;
    word-break: break-all;
    white-space: nowrap;
    font-family:cursive;
}

</style>
