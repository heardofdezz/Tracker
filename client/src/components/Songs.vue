<template>
<v-layout column>
    <v-flex xs6>
        <panel  title="Songs">
            <div v-for="song in songs" :key="song.id">
                {{song.title}} -
                {{song.artist}} -
                {{song.album}} -
                 <!-- {{song.albumImage}} -->
            </div> 
        </panel>
    </v-flex>
</v-layout>

</template>

<script>
import Panel from '@/components/Panel.vue'
import SongService from '@/services/SongService'

export default {
   name: 'Songs',
  components:{
    Panel
  },
  data () {
      return {
          songs: null
      }
  },
  async mounted (){
      ///requesting songs list from backend
      this.songs = (await SongService.SongsIndex()).data
    //   console.log((await SongService.SongsIndex()).data)
  },
//   methods: {
//       async getindex(){
//         this.songs = await SongService.SongsIndex().response.data
//       }
//   }

}
</script> 

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>