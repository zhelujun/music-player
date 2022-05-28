<template>
    <div style="height: inherit;overflow-y: scroll;">
        <div class="artistHeader">
            <img :src="picUrl" :alt="name" />
            <h2>{{ name }}</h2>
        </div>
        <el-button @click="goBack">返回上一页</el-button>
        <div class="artistMain">
            <ul>
                <li>
                    <span>序号</span>
                    <p>歌名</p>
                    <span style="text-indent: 0">播放</span>
                </li>
                <li v-for="(a, i) in aList" :key="i">
                    <span>{{ i + 1 >= 10 ? i + 1 : "0" + (i + 1) }}</span>
                    <p>{{ a.name }}</p>
                    <svg  @click="playMusic(i)">
                        <circle
                            cx="10"
                            cy="10"
                            r="8"
                            stroke="black"
                            stroke-width="1"
                            fill="none"
                        />
                        <polygon points="7,5 15,10 7,15" style="fill: black" />
                    </svg>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: "ArtistView",
    props: ["id", "name", "picUrl"],
    data() {
        return {
            artistUrl: "/artist/top/song?id=",
            getSongId: "/song/url?id=",
            aList: "",
        };
    },
    created() {
        this.music(this.artistUrl,this.$route.params.id)
        .then((response) =>{
            this.aList = response.songs
        })
    },
    methods: {
        goBack() {
            history.back();
        },
        playMusic(i) {
            this.music(this.getSongId, this.aList[i].id)
                .then((res) => {
                    this.musicSrc = res.data[0].url;
                    return this.musicSrc;
                })
                .then((musicSrc) => {
                    if (!musicSrc) {
                        alert("没找到歌曲");
                    } else {
                        this.$store.dispatch("getMusicSrc", musicSrc);
                        this.$store.dispatch("getMusicName",this.aList[i].name)
                        this.$store.dispatch("getMusicCover",this.aList[i].al.picUrl)
                    }
                });
        },
    },
};
</script>

<style scoped>
.artistHeader {
    display: flex;
    align-items: flex-end;
}
img {
    width: 220px;
    margin: 20px 20px 0 20px;
}
.el-button {
    position: absolute;
    right: 20px;
    top: 20px;
    zoom: 0.7;
}
.artistMain {
    width: 100%;
    margin-top: 20px;
}
li {
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;
    justify-items: start;
    box-sizing: border-box;
    border-bottom: 1px inset;
    text-indent: 1em;
}
li:first-child:hover {
    background-color: unset;
}
li:hover {
    background-color: rgba(66, 66, 66, 0.5);
}

svg {
    height: 20px;
    width: 20px;
    cursor: pointer;
    transition: 0.2s linear;
}

svg:hover {
    transform: scale(1.1);
}
</style>