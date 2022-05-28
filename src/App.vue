<template>
    <div id="app">
        <header>
            <MusicHeader></MusicHeader>
        </header>
        <main>
            <MusicMain></MusicMain>
        </main>
        <footer>
            <MusicFooter></MusicFooter>
        </footer>
    </div>
</template>

<script>
import MusicHeader from "./components/MusicHeader.vue";
import MusicMain from "./components/MusicMain.vue";
import MusicFooter from "./components/MusicFooter.vue";

export default {
    name: "app",
    components: {
        MusicHeader,
        MusicMain,
        MusicFooter,
    },
};
</script>

<style>
body{
    background-image: linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%);
}
* {
    margin: 0;
    padding: 0;
}
#app {
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    transform: scale(0.9);
}
header {
    width: 100%;
    height: 10vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #4e849e;
}
main {
    width: 100%;
    height: 80vh;
    display: flex;
}
footer {
    width: 100%;
    height: 10vh;
    display: flex;
    align-items: center;
    background-color: #f1f3f4;
}
p{
    font-size: 18px;
}
</style>
