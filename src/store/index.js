import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    musicName: '大魚海棠（钢琴版）',
    musicSrc: 'http://m801.music.126.net/20220523223853/86816ebf3aebe46fb233145fef512c0f/jdymusic/obj/wo3DlMOGwrbDjj7DisKw/8480091481/fdcc/1762/e043/abdb9c0674a972fe21436fe0ae8b8e7a.mp3',
    musicCover: 'http://p1.music.126.net/iWYMHgGk7f2CBAXiijOjBg==/109951165895438750.jpg?param=130y130'
  },
  getters: {
  },
  mutations: {
    handlerMusicSrc(state, value) {
      state.musicSrc = value
    },
    handlerMusicName(state, value) {
      state.musicName = value
    },
    handlerMusicCover(state, value) {
      state.musicCover = value
    }
  },
  actions: {
    getMusicSrc(context, musicSrc) {
      context.commit('handlerMusicSrc', musicSrc)
    },
    getMusicName(context, musicName) {
      context.commit('handlerMusicName', musicName)
    },
    getMusicCover(context, musicCover) {
      context.commit('handlerMusicCover', musicCover)
    }
  },
  modules: {
  }
})
