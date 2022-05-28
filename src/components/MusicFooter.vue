<template>
    <div class="footer">
        <img :src="this.$store.state.musicCover" :alt="this.$store.state.musicCover" />
        <div>{{ $store.state.musicName }}</div>
        <audio :src="this.$store.state.musicSrc" controls autoplay></audio>
    </div>
</template>

<script>
export default {
    name: "MusicFooter",
};
</script>

<style scoped>
.footer {
    display: grid;
    width: 100%;
    height: 10vh;
    grid-template-rows: 1fr 2fr;
    grid-template-columns: auto 1fr;
    align-items: center;
}
.footer>div{
    font-size: 15px;
    text-indent: 2em;
}
img{
    height: 10vh;
    width: 10vh;
    grid-row-start: 1;
    grid-row-end: 3;
}
audio {
    width: 100%;
    height: -webkit-fill-available;
}
</style>