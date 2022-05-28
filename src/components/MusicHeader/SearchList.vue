<template>
    <div class="searchList">
        <p>歌曲 <i class="el-icon-close" @click="handleClose"></i></p>
        <ul>
            <li v-for="(i, index) in musicInfo" :key="index">
                {{ i.name }} - {{ i.artists[0].name }}
                <svg @click="playMusic(i,index)">
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
</template>

<script>
export default {
    name: "SearchList",
    props: ["keywords", "show"],
    data() {
        return {
            searchUrl: "/search?keywords=",
            getSongId: "/song/url?id=",
            musicInfo: "",
        };
    },

    watch: {
        show() {
            this.music(this.searchUrl, this.keywords).then((response) => {
                this.musicInfo = response.result.songs;
                // console.log(response);
            });
        },
    },

    methods: {
        handleClose(){
            this.$emit('close',false)
        },

        playMusic(i,index) {
            this.music(this.getSongId, i.id)
                .then((res) => {
                    this.musicSrc = res.data[0].url;
                    return this.musicSrc;
                })
                .then((musicSrc) => {
                    if (!musicSrc) {
                        alert("没找到歌曲");
                    } else {
                        // console.log(i,'name');
                        this.$store.dispatch("getMusicSrc", musicSrc);
                        this.$store.dispatch(
                            "getMusicName",
                            this.musicInfo[index].name
                        );
                        this.$store.dispatch(
                            "getMusicCover",
                            this.musicInfo[index].artists[0].img1v1Url
                        );
                    }
                });
        },
    },
};
</script>

<style scoped>
.searchList {
    position: absolute;
    width: 25%;
    right: 0;
    top: 6vh;
    border-radius: 5px;
    background: white;
    box-sizing: border-box;
    border: 1px solid;
    z-index: 99;
}
i{
    cursor: pointer;
}
p {
    border-bottom: 1px solid;
    text-indent: 2px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
ul{
    height: 50vh;
    overflow-y: scroll;
}
li {
    list-style: none;
    text-indent: 2px;
    display: grid;
    grid-template-columns: 7fr 1fr;
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
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