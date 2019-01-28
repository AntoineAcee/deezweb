<template>
  <div class="container centered">

    <h1>Recherchez votre son</h1>
    <hr>
    <form @submit.prevent="submit">
        <input v-model="title" placeholder="Titre de la chanson" type="text" name="title" id="title">
        <select name="filterBy" id="filters" v-model="searchBy">
            <option disabled value="select">Filtrez par...</option>
            <option value="artist">Artiste</option>
            <option value="album">Album</option>
        </select>
        <input type="button" value="Submit">
    </form>

    <div v-for="song in songs" class="song-card">
        <img :src="song.album.cover" :alt="song.album.title">
        <div class="info">
            <p>Titre : {{ song.title }}</p>
            <p>Album : {{ song.album.title }}</p>
            <p>Artiste : {{ song.artist.name }}</p> 
        </div>
        <audio :src="song.preview" controls/>
    </div>

  </div>
</template>

<script>
import DeezerService from '../services/DeezerService'

export default {
  name: 'Search',
  data() {
      return {
          title: "",
          searchBy: "artist",
          songs: null
      }
  },
  methods: {
    submit() {        
        DeezerService.fetchBy(this.title, this.filter)
            .then(songs => {
                this.songs = songs.data;
                console.log(this.songs);        
            });
    }
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
