<template>
  <div class="container centered">

    <h1>Liste de vos favoris</h1>
    <hr>
    <div v-for="song in songs" v-bind:key="song.id" class="song-card">
      <img :src="song.album.cover" :alt="song.album.title">
      <div class="info">
        <p>Titre : {{ song.title }}</p>
        <p>Album : {{ song.album.title }}</p>
        <p>Artiste : {{ song.artist.name }}</p>
      </div>
      <audio :src="song.preview" controls/>
      <a href="#" class="favorit-btn" @click.prevent="addFav(song)">
        <i class="fa-heart" :class="updateFav" id="btn"></i>
      </a>
    </div>

  </div>
</template>

<script>
export default {
  name: 'Favo',
  components: {
  },
  data() {
    return {
      songs: this.getFavs(),
    }
  },
  methods: {
    getFavs() {
      return JSON.parse(localStorage.getItem("favSongs"));
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.song-card {
  display: flex;
  flex-direction: row;
  border-bottom: solid #42b983 1px;
  padding: 10px;
}
.song-card .info {
  text-align: left;
  margin-left: 20px;
}
</style>
