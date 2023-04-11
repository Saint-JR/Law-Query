<script setup lang="ts">
import { onLaunch, onShow, onHide } from '@dcloudio/uni-app';
import {useStore} from 'vuex'

const store = useStore()

onLaunch(() => {
    console.log('App Launch');
    store.commit('setStatusBarHeight',uni.getSystemInfoSync().statusBarHeight)
});
onShow(() => {
    console.log('App Show');
});
onHide(() => {
    console.log('App Hide');
});
</script>
<style>
    uni-page-body,page,html,body{  
        height: 100%;  
    }  
</style>
