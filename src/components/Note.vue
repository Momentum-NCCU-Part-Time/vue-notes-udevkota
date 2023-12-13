<script setup>
  import { ref } from "vue"


  const deleteNote = (id) => {
  return fetch(`${fetchURL}/${id}`, {
    method: 'DELETE'
  }).then((response) => response.json())
  .then( (data) => {

  })
}
</script>

<template>

</template>

const props = 
defineProps
({note:Object})
console.log(props.note)