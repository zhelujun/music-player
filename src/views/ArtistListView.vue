<template>
    <div style="height: inherit">
        <div v-if="atLoading" class="loading"><i class="el-icon-loading"></i></div>
        <div class="artistList">
            <div v-for="(a, i) in artists" :key="i">
                <router-link
                    :to="{
                        name: 'artist',
                        params: {
                            id: a.id,
                            name: a.name,
                            picUrl: a.picUrl,
                        },
                    }"
                >
                    <img :src="a.picUrl" :alt="a.name" />
                    <p>{{ a.name }}</p>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "ArtistListView",
    data() {
        return {
            artists: [],
            artistList: {
                url: "/artist/list?type=-1&area=-1",
            },
            atLoading: Boolean(true),
        };
    },
    created() {
        this.music(this.artistList.url).then((response) => {
            (this.artists = response.artists),
                (this.atLoading = Boolean(false));
        });
    },
};
</script>

<style scoped>
.artistList {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    justify-items: center;
    align-items: start;
    grid-gap: 20px;
    height: inherit;
    overflow-y: scroll;
    padding: 0 20px;
}
.artistList > div:nth-child(2),
.artistList > div:nth-child(3),
.artistList > div:nth-child(4),
.artistList > div:nth-child(1){
  margin-top: 20px;
}
p {
    text-align: center;
}
img{
    width: 150px;
}
.loading{
    left: 58%;
}
</style>