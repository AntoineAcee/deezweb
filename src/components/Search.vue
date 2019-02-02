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
      });
    },
    getFavs() {
      return JSON.parse(localStorage.getItem("favSongs"));
    },
    addFav(song) {
      if (!localStorage.getItem("favSongs")) {
        localStorage.setItem("favSongs", JSON.stringify([]));
      }

      const favoriteIds = this.getFavs().map(item => item.id);

      if (favoriteIds.includes(song.id)) {
        const index = this.getFavs().indexOf(this.songs.id);
        const data = this.getFavs();
        data.splice(index, 1);
        this.$emit("dislike", song.id);

        localStorage.removeItem("favSongs");
        localStorage.setItem("favSongs", JSON.stringify(data));
        console.log(song);
        this.liked = "far";
      } else {
        const data = this.getFavs();
        data.push(song);

        localStorage.removeItem("favSongs");
        localStorage.setItem("favSongs", JSON.stringify(data));
        console.log(song);
        this.liked = "fas";
      }
    },
    isFav(song) {
      if (this.getFavs().map(item => item.id).includes(song.id)) {
        this.liked = "fas";
      } else {
        this.liked = "far";
      }
    }
  },
  computed: {
    updateFav(song) {
      this.isFav(song);
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
