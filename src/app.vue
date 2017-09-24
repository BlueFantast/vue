<template>
    <div class='app'>

        <!-- 顶部导航 -->
        <header id="header" class="mui-bar mui-bar-nav">
            <h1 class="mui-title">电影时光</h1>
            <button class="mui-action-back mui-btn mui-btn-blue mui-btn-link mui-btn-nav mui-pull-left">
                <span class="mui-icon mui-icon-left-nav"></span>深圳</button>
            <a class="mui-icon mui-icon-bars mui-pull-right"></a>
        </header>

        <!-- 搜索框 -->
        <div class="mint-searchbar">
            <div class="mint-searchbar-inner">
                <i class="mintui mintui-search"></i> <input type="search" placeholder="请输入关键字搜索" class="mint-searchbar-core"></div>
        </div>

        <!-- 轮播图 -->
        <div class="mint-swipe">
            <div class="mint-swipe-items-wrap">
                <div class="mint-swipe-item slide1" style="transform: translate3d(-328px, 0px, 0px);">1</div>
                <div class="mint-swipe-item slide2" style="">2</div>
                <div class="mint-swipe-item slide3 is-active" style="">3</div>
            </div>
            <div class="mint-swipe-indicators">
                <div class="mint-swipe-indicator"></div>
                <div class="mint-swipe-indicator"></div>
                <div class="mint-swipe-indicator is-active"></div>
            </div>
        </div>

        <!-- 下拉刷新区域 -->
        <mt-loadmore :bottom-method="loadBottom" ref="loadmore">
            <ul>
                <li v-for="item in 30" :key="item">{{ item }}</li>
            </ul>
            <div slot="top" class="mint-loadmore-top">
                <span v-show="topStatus !== 'loading'" :class="{ 'rotate': topStatus === 'drop' }">↓</span>
                <span v-show="topStatus === 'loading'">Loading...</span>
            </div>
        </mt-loadmore>

        <!-- 底部tab栏 -->
        <div class="tabbar">
            <nav class="mui-bar mui-bar-tab">
                <a class="mui-tab-item mui-active" href="#tabbar">
                    <span class="mui-icon mui-icon-videocam"></span>
                    <span class="mui-tab-label">热映</span>
                </a>
                <a class="mui-tab-item" href="#tabbar-with-chat">
                    <span class="mui-icon mui-icon-extra mui-icon-extra-outline"></span>
                    <span class="mui-tab-label">待映</span>
                </a>
                <a class="mui-tab-item" href="#tabbar-with-contact">
                    <span class="mui-icon mui-icon-extra mui-icon-extra-rank"></span>
                    <span class="mui-tab-label">口碑榜</span>
                </a>
                <a class="mui-tab-item" href="#tabbar-with-map">
                    <span class="mui-icon mui-icon-contact"></span>
                    <span class="mui-tab-label">我的</span>
                </a>
            </nav>
        </div>
    </div>
</template>
<script>
export default {
    data: function() {
        return {
            topStatus: ''
        }
    },
    methods: {
        handleTopChange(status) {
            this.topStatus = status;
        },
        loadBottom() {
            this.allLoaded = true;// 若数据已全部获取完毕
            this.$refs.loadmore.onBottomLoaded();
        }
    }
}
</script>

<style lang="css" scoped>
.app {
    width: 100%;
    height: 100%;
    padding-bottom: 4rem;
}
</style>
