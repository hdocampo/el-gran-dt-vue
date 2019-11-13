<template>
    <header>
        <b-nav>
            <b-nav-item v-for="item in links"
                :key="item.index"
                :to=item.path>
                {{ item.name }}
            </b-nav-item>
        </b-nav>
    </header>
</template>

<script src="./header.js"></script>
<style lang="scss" scoped>
  @import './header.scss'
</style>

