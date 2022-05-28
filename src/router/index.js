import Vue from 'vue'
import VueRouter from 'vue-router'
// import HomeView from '../views/HomeView.vue'
import PersonalizedView from '../views/PersonalizedView.vue'
import PlaylistHotView from '../views/PlaylistHotView.vue'
import ToplistView from '../views/ToplistView.vue'
import ArtistListView from '../views/ArtistListView.vue'
import MusicListView from '../views/MusicListView.vue'
import ArtistView from '../views/ArtistView.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/playlist/hot',
    name: 'playlistHot',
    component: PlaylistHotView
  },
  {
    path: '/',
    name: 'personalized',
    component: PersonalizedView
  },
  {
    path: '/toplist',
    name: 'toplist',
    component: ToplistView
  },
  {
    path: '/artist/list',
    name: 'artistList',
    component: ArtistListView
  },
  {
    path: '/music/list/:id/:name/:tag/:description/:coverImgUrl',
    name: 'musiclist',
    component: MusicListView,
    props:true
  },
  {
    path: '/ArtistView/:id/:name/:picUrl',
    name: 'artist',
    component: ArtistView,
    props:true
  },
  // {
  //   path: '/home',
  //   name: 'home',
  //   component: HomeView
  // },
  // {
  //   path: '/',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // }
]

const router = new VueRouter({
  routes
})

export default router
