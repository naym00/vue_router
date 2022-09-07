<template>
    <div class="newcoursesview">
        <CardDesign :msg = "{'name': 'Hello'}"></CardDesign>
    </div>
</template>
  
<script>
    import CardDesign from '@/components/CardDesign.vue'
    export default {
        name: 'NewCoursesView',
        components: {
            CardDesign,
        },
    }
</script>

  <style>
  </style>
  