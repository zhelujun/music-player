<template>
    <div class="t" @scroll="scrollEvent">
        <div v-if="atLoading" class="loading"><i class="el-icon-loading"></i></div>
        <ToplistComponent 
        v-for="(t,i) in toplist.list" 
        :key="i" 
        :name="t.name"
        :coverImgUrl="t.coverImgUrl"
        :id="t.id"
        :load="load"
        :index="i"
        >
        </ToplistComponent>
    </div>
</template>

<script>
import ToplistComponent from '@/components/ToplistComponent'

export default {
    name: "ToplistView",
    components:{ToplistComponent},
    data() {
        return {
            url: {
                //排行榜
                toplistUrl: "/toplist",
            },
            //排行榜单
            toplist: {
                list: [],
                id: [],
            },
            load: false,
            atLoading: Boolean(true),
        };
    },
    methods: {
        scrollEvent() {
            const t = document.querySelector(".t");
            let h = t.scrollHeight / this.toplist.id.length;
            if (h * 12 < t.scrollTop) {
                this.load = true
            }
        },
    },
    created() {
        this.music(this.url.toplistUrl)
            .then((response) => {
                this.toplist.list = response.list;
                return this.toplist.list;
            })
            .then((response) => {
                for (let i = 0; i < response.length; i++) {
                    const element = response[i].id;
                    this.toplist.id.push(element);
                }
                return this.toplist.id;
            });
    },
    mounted() {
        this.atLoading = Boolean(false);
    },
};
</script>

<style scoped>
.t {
    height: inherit;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    overflow-y: scroll;
}
</style>