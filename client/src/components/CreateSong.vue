<template>
<v-layout>
<v-flex xs6>
  <panel title = "Song Metadata">
         <v-text-field
          v-model="title"
          label="Title">
        </v-text-field>
         <v-text-field
          v-model="artist"
          label="Artist">
        </v-text-field>
         <v-text-field
          v-model="album"
          label="Album">
        </v-text-field>
         <v-text-field
          v-model="genre"
          label="Genre">
        </v-text-field>
         <v-text-field
          v-model="albumImage"
          label="Album Cover Url">
        </v-text-field>
         <v-text-field
          v-model="youtubeId"
          label="Youtube ID">
        </v-text-field>
        
         <v-text-field
          v-model="lyrics"
          label="Lyrics">
        </v-text-field>
         <v-text-field
          v-model="tab"
          label="Tab">
        </v-text-field>
    </panel>
</v-flex> 
</v-layout>

</template>

<script>
import Panel from '@/components/Panel'
export default {
     
   data() {
       return {
           title: null,
           artist: null,
           genre: null,
           album: null,
           albumImage: null,
           youtubeId: null,
           lyrics: null,
           tab: null
       }
   },
   components: {
       Panel
   }
  }

</script> 

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>