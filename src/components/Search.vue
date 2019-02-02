<template>
  <div class="container centered">
    <link
      rel="stylesheet"
      href="https://use.fontawesome.com/releases/v5.2.0/css/all.css"
      integrity="sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ"
      crossorigin="anonymous"
    >
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
      <a href="#" class="favorit-btn" @click.prevent="addFav">
        <i class="fa-heart" :class="updateFav" id="btn"></i>
      </a>
    </div>
  </div>
</template>

<script>
import DeezerService from "../services/DeezerService";

export default {
  name: "Search",
  data() {
    return {
      title: "",
      searchBy: "artist",
      songs: null,
      liked: "far"
    };
  },
  methods: {
    submit() {
      DeezerService.fetchBy(this.title, this.filter).then(songs => {
        this.songs = songs.data;
        console.log(this.songs);
      });
    },
    getFavs() {
      return JSON.parse(localStorage.getItem("favoritsSongs"));
    },
    addFav() {
      if (!localStorage.getItem("favSongs")) {
        localStorage.setItem("favSongs", JSON.stringify([]));
      }
      if (this.getFavs().filter(song => song.id === this.songs.id).length > 0) {
        const index = this.getFavs()
          .map(e => e.id)
          .indexOf(this.songs.id);
        const data = this.getFavs();
        data.splice(index, 1);
        this.$emit("dislike", this.songs.id);
        localStorage.removeItem("favSongs");
        localStorage.setItem("favSongs", JSON.stringify(data));
        this.liked = "far";
      } else {
        const existing = this.getFavs();
        existing.push(this.songs);
        localStorage.removeItem("favSongs");
        localStorage.setItem("favSongs", JSON.stringify(existing));
        this.liked = "fas";
      }
    },
    isFav() {
      if (
        this.getFavs() &&
        this.getFavs().filter(song => song.id === this.songs.id).length > 0
      ) {
        this.liked = "fas";
      } else {
        this.liked = "far";
      }
    }
  },
  computed: {
    updateFav() {
      this.isFav();
      return this.liked;
    }
  }
};
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
