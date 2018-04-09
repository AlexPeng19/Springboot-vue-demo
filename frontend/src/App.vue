<template>
    <div class="wrapper">
     <db-sidebar></db-sidebar>
     <db-header></db-header>
     <db-content></db-content>
    </div>
</template>

<script>
import DbContent  from './components/DbContent.vue'
import DbSidebar  from './components/DbSidebar.vue'
import DbHeader   from './components/DbHeader.vue'
    export default {
        name: 'EsgynaaS',
        components: {
        	DbHeader,
        	DbSidebar,
        	DbContent
        },
    }

</script>

<style>
</style>