<template>
    <div class="left">
        <el-row>
            <el-col :span="24">
                <el-menu :router="on">
                    <el-menu-item v-for="(l, i) in list" :key="i" :index="l.path">{{
                        l.title
                    }}</el-menu-item>
                </el-menu>
            </el-col>
        </el-row>
    </div>
</template>

<script>
export default {
    name: "LeftAside",
    data() {
        return {
            list: [
                {
                    title: "热门歌单",
                    path: "/playlist/hot",
                },
                {
                    title: "推荐歌单",
                    // path: "/personalized",
                    path:'/',
                },
                {
                    title: "排行榜",
                    path: "/toplist",
                },
                {
                    title: "歌手",
                    path: "/artist/list",
                },
            ],
            on: Boolean(true),
        };
    },
};
</script>

<style scoped>
.left {
    flex: 1;
}
.el-row {
    height: 100%;
}
.el-col {
    height: 100%;
}
.el-menu {
    height: 100%;
}
</style>