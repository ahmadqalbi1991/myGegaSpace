<template>
    <vue-element-loading :active="loader" is-full-screen text="Loading Items...">
        <img src="/img/sloader.gif" width="150px" height="150px">
    </vue-element-loading>
</template>
<script>
import Vue from "vue"

export default {
    props: ['loader'],
}
</script>