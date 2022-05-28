<template>
    <div class="musicList">
        <div class="musicHeader">
            <img :src="coverImgUrl" :alt="name" />
            <div class="info">
                <h2>{{ name }}</h2>
                <p><span>标签:</span> {{ tag || '无' }}</p>
                <!-- <p><span>简介:</span> {{ description }}</p> -->
            </div>
        </div>
        <el-button @click="goBack">返回上一页</el-button>
        <div class="musicMain">
            <p>歌单详情</p>
            <ul>
                <li>
                    <span>序号</span>
                    <p>歌名</p>
                    <span>歌手</span>
                    <p style="text-indent: 0">播放</p>
                </li>
                <li v-for="(song, i) in songList" :key="i">
                    <span>{{ i + 1 >= 10 ? i + 1 : "0" + (i + 1) }}</span>
                    <p>{{ song.name }}</p>
                    <span class="musician">{{ song.ar[0].name }}</span>
                    <svg @click="playMusic(i)">
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
    name: "MusicListView",
    props: ["id", "name", "tag", "description", "coverImgUrl"],
    data() {
        return {
            // 歌单的id
            listId: "",
            // 获取歌单所有的歌曲的url
            url: "/playlist/track/all?id=",
            // 歌单的歌曲
            songList: "",
            // 获取歌曲id的url
            getSongId: "/song/url?id=",
            // 歌曲的id
            songId: [],
            // 获取到的歌曲的播放地址
            musicSrc: "",
            // 获取到的歌曲的名字
            musicName:[], 
            // 获取到的歌曲的封面
            musicCover:[],
        };
    },
    methods: {
        goBack() {
            history.back();
        },
        playMusic(i) {
            this.music(this.getSongId, this.songId[i])
                .then((res) => {
                    this.musicSrc = res.data[0].url;
                    return this.musicSrc;
                })
                .then((musicSrc) => {
                    if (!musicSrc) {
                        alert("没找到歌曲");
                    } else {
                        this.$store.dispatch("getMusicSrc", musicSrc);
                        this.$store.dispatch("getMusicName",this.musicName[i])
                        this.$store.dispatch("getMusicCover",this.musicCover[i])
                    }
                });
            // console.log(this.songId[i]);
        },
    },
    created() {
        this.listId = this.$route.params.id;
    },
    mounted() {
        this.music(this.url, this.listId)
            .then((res) => {
                this.songList = res.songs;
                // console.log("songList", this.songList);
                return this.songList;
            })
            .then((songList) => {
                // 以数组形式，获取歌曲的id，名字，图片
                for (let i = 0; i < songList.length; i++) {
                    const element = songList[i];
                    this.songId.push(element.id);
                    this.musicName.push(element.name)
                    this.musicCover.push(element.al.picUrl)
                }
            });
    },
};
</script>

<style scoped>
.musicList {
    height: inherit;
    overflow-y: scroll;
}
.el-button {
    position: absolute;
    right: 20px;
    top: 20px;
    zoom: 0.7;
}
.musicHeader {
    display: flex;
}
img {
    width: 150px;
    height: 150px;
    border-radius: 5px;
    margin: 20px;
}
.info {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    max-width: calc(80% - 150px);
}
.info p {
    font-size: 12px;
}
.info span {
    font-weight: bold;
}
/* .info > p:last-child {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
.info > p:last-child:hover {
    white-space: normal;
    overflow: unset;
} */
.musicMain > p {
    text-indent: 10px;
    margin-bottom: 10px;
    font-size: larger;
}
li {
    display: grid;
    grid-template-columns: 0.5fr 2fr 1fr 1fr;
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
li p,
.musician {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: -webkit-fill-available;
}
svg {
    height: 20px;
    width: 20px;
    cursor: pointer;
    transition: 0.2s linear;
}

svg:hover{
    transform: scale(1.1);
}
</style>