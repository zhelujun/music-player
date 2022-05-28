<template>
    <div class="toplist">
        <div class="toplist_right">
            <img :src="coverImgUrl" :alt="name" />
            <p style="width: 100%; text-align: center; max-width: 150px;">{{ name }}</p>
        </div>
        <ul>
            <li>
                <span>序号</span>
                <p>歌名</p>
                <span>歌手</span>
                <p>播放</p>
            </li>
            <li
                class="h"
                v-for="(s, i) in this.songlist.list"
                :key="i"
                v-show="s.a"
            >
                <span>{{ i + 1 >= 10 ? i + 1 : "0" + (i + 1) }}</span>
                <p>{{ s.name }}</p>
                <span>{{ s.ar[0].name }}</span>
                <i>
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
                </i>
            </li>
        </ul>
        <a href="javascript:void(0)" @click="handleShow"
            >{{ info }}<i :class="arrow"></i
        ></a>
    </div>
</template>

<script>
export default {
    name: "ToplistComponent",
    props: ["name", "coverImgUrl", "id", "load", "index"],
    data() {
        return {
            url: {
                //歌单详情
                songlistUrl: "/playlist/track/all?id=",
                //获取歌曲播放地址
                songUrl: "/song/url?id=",
            },
            songlist: {
                list: [],
            },
            arrow: "el-icon-arrow-down",
            info: "查看更多",
        };
    },
    created() {
        if (this.index < 12) {
            this.getSonglist();
        }
    },
    methods: {
        getSonglist() {
            this.music(this.url.songlistUrl, this.id).then((response) => {
                this.songlist.list = response.songs;
                for (let i = 0; i < this.songlist.list.length; i++) {
                    this.songlist.list[i].a = true;
                }
                for (let i = 0; i < this.songlist.list.length; i++) {
                    if (i > 9) {
                        this.songlist.list[i].a = false;
                    }
                }
            });
        },
        playMusic(i) {
            this.music(this.url.songUrl, this.songlist.list[i].id)
                .then((response) => {
                    return response.data[0].url;
                })
                .then((response) => {
                    if (!response) {
                        alert("没找到歌曲");
                    } else {
                        this.$store.dispatch("getMusicSrc", response);
                        this.$store.dispatch(
                            "getMusicName",
                            this.songlist.list[i].name
                        );
                        this.$store.dispatch(
                            "getMusicCover",
                            this.songlist.list[i].al.picUrl
                        );
                    }
                });
        },
        handleShow() {
            if (this.arrow === "el-icon-arrow-down") {
                this.arrow = "el-icon-arrow-up";
                this.info = "收起";
                for (let i = 0; i < this.songlist.list.length; i++) {
                    this.songlist.list[i].a = true;
                }
            } else {
                this.arrow = "el-icon-arrow-down";
                this.info = "查看更多";
                for (let i = 0; i < this.songlist.list.length; i++) {
                    if (i > 9) {
                        this.songlist.list[i].a = false;
                    }
                }
            }
        },
    },
    watch: {
        load() {
            if (this.index >= 12) {
                this.getSonglist();
            }
        },
    },
    mounted() {},
};
</script>

<style scoped>
img {
    width: 150px;
    height: 150px;
    border-radius: 5px;
}
.toplist {
    display: flex;
    flex-direction: row;
    width: calc(100% - 40px);
    margin: 20px;
    box-sizing: border-box;
    border: 1px solid black;
    padding: 10px;
    border-radius: 5px;
    position: relative;
}
ul {
    width: 100%;
    margin-left: 10px;
    border: 1px solid black;
    border-radius: 5px;
    background-image: linear-gradient(
        90deg,
        rgba(210, 210, 210, 0.5) 20%,
        rgb(238, 245, 254) 20%,
        rgb(238, 245, 254) 60%,
        rgba(210, 210, 210, 0.5) 60%,
        rgba(210, 210, 210, 0.5) 80%,
        rgb(238, 245, 254) 80%
    );
}
ul > li > p {
    text-align: center;
}
li {
    list-style: none;
    display: grid;
    grid-template-columns: 1fr 2fr 1fr 1fr;
    width: 100%;
    justify-items: center;
}
.h:hover {
    background-color: rgb(88, 88, 88);
    border-radius: 5px;
    box-sizing: border-box;
}

li > p,
li > span {
    width: 100%;
    text-align: center;
}
li > p,
li > span {
    text-align: left;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
i {
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
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

a {
    display: flex;
    position: absolute;
    justify-content: center;
    align-items: baseline;
    white-space: nowrap;
    right: 0;
    bottom: -20px;
}
.toplist_right{
    display: flex;
    flex-direction: column;
    align-items: center;
}
</style>