
<script>
import { store } from '../store.js';

export default {

    data() {
        return {
            store
        }
    },
}
</script>

<template lang="">
  <header>
           <h1>BOOLFOLIO</h1>
           <div>
            <ul class="list-unstyled d-flex">
                <li class="m-3" v-for="item, index in store.menu" :key="index">
                    <router-link :to="{name: item.name}">{{item.label}}</router-link>
                </li>
            </ul>
           </div>
        </header>
</template>

<style lang="scss"></style>