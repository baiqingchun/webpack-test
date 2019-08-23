<template>
    <div id="aa">{{msg}}</div>
</template>

<script>
    export default {
        name: "APP",
        data(){
            return {
                msg:'this is test'
            }
        }
    }
</script>

<style scoped>

    #aa{
        color: red;
    }
</style>