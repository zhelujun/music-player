<template>
    <div class="playList">
        <div v-if="atLoading" class="loading"><i class="el-icon-loading"></i></div>
        <div class="list" v-for="(li, i) in list" :key="i">
            <router-link
                :to="{
                    name: 'musiclist',
                    params: {
                        id: li.id,
                        name:li.name,
                        tag:li.tag,
                        description:li.description,
                        coverImgUrl:li.coverImgUrl
                    },
                }"
            >
                <img :src="li.coverImgUrl" :alt="li.name" />
                <p>{{ li.name }}</p>
            </router-link>
        </div>
    </div>
</template>

<script>
export default {
    name: "PlaylistHotView",
    data() {
        return {
            list: "",
            playList: {
                url: "/top/playlist/highquality",
            },
            atLoading: Boolean(true),
        };
    },
    mounted() {
        this.music(this.playList.url).then((res) => {
            this.list = res.playlists;
            console.log(this.list);
            this.atLoading = Boolean(false);
        });
    },
};
</script>

<style scoped>
.playList {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    justify-items: center;
    align-items: start;
    grid-gap: 20px;
    height: inherit;
    overflow-y: scroll;
    padding: 0 20px;
}
.playList > div:nth-child(4),
.playList > div:nth-child(2),
.playList > div:nth-child(3) {
    margin-top: 20px;
}
.list {
    font-size: 12px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.list > a {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-decoration: none;
}
.list > a:hover {
    text-decoration: underline;
}
img {
    width: 70%;
}
p {
    text-align: center;
}
</style>