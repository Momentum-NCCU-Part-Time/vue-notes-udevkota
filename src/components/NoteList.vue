<script setup>
import { ref } from "vue";
import NoteForm from "./NoteForm.vue";
import { createId } from "json-server/lib/server/mixins";

const notes = ref([]);

const addNewNote = (note) => {
  // Add the newly created note to the list
  notes.value.push(note);
}

const getNote = (){
  fetch("http://localhost:3000/notes")
  .then((response) => response.json())
  .then((data) => (notes.value = data));
}

created() {
  getNote()
}
</script>

<template>
  <ul>
    <li v-for="note in notes" :key="note.id">
      {{ note.title }} - {{ note.body }}
      <button @click="editNote(note)">Edit</button>
      <button @click="deleteNote(note.id)">Delete</button>
    </li>
    <NoteForm :noteCreated="addNewNote" />
  </ul>
</template>
