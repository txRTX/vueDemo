<template>
    <div>
        <ol>
            <li v-for="(todo,index) in todos">
                {{ todo.text }}.{{index}}
            </li>
        </ol>
        <button @click="eClick()">事件</button>
    </div>
</template>

<script>
export default {
  name: 'indexP',
  data() {
    return {
       todos: [
          { text: 'Learn JavaScript' },
          { text: 'Learn Vue' },
          { text: 'Build something awesome' }
        ]
    }
  },
  methods:{
    eClick(){

    }
  }
}
</script>