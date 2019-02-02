<template>
  <div class="container centered">

    <h1>Bienvenu sur Deezweb</h1>
    <hr>
    <div class="song-card">
      <img :src="randomSong.album.cover" :alt="randomSong.album.title">
      <div class="info">
        <p>Titre : {{ randomSong.title }}</p>
        <p>Album : {{ randomSong.album.title }}</p>
        <p>Artiste : {{ randomSong.artist.name }}</p>
      </div>
      <audio :src="randomSong.preview" controls/>
    </div>
    <a href="#" class="random-btn" v-on:click="getRandomSong()">
      Un autre favoris ?
    </a>

  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      randomSong: this.getRandomSong(),
      favoritsSongs: null,
    }
  },
  methods: {
    getRandomSong() {
      this.favoritsSongs = JSON.parse(localStorage.getItem("favSongs"));
      this.randomSong = this.favoritsSongs[Math.floor(Math.random() * this.favoritsSongs.length)]
      return this.favoritsSongs[Math.floor(Math.random() * this.favoritsSongs.length)];
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
