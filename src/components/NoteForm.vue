<script setup>
import { ref, defineProps } from "vue";

const { getNote } = defineProps(["getNote"])
const newNoteTitle = ref("");
const newNoteBody = ref("");

const createNote = () => {
    fetch("http://localhost:3000/notes", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ title: newNoteTitle.value.trim(), body: newNoteBody.value.trim() }),
  })
    .then((response) => response.json())
    .then((data) => console.log(data));
};
</script>

<template>
  <form @submit.prevent="createNote">
    <fieldset>
      <legend>Add A New Note!</legend>
      <label>
        Title
        <input v-model="newNoteTitle" type="text" name="title" />
      </label>
      <label>
        Details
        <input v-model="newNoteBody" type="text" name="body" />
      </label>
      <input type="submit" value="Add Note" />
    </fieldset>
  </form>
</template>

<!-- Emit Notes 
  Purpose: Fire Get READ fetch when createNote() is called 
  emit()
-->
