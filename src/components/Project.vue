<script>
import { store } from '../store.js';

export default {
    props: {
        project: Object,
    },

    data() {
        return {
            store
        }
    },
}
</script>
<template lang="">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css">
        <div class=project>
            <div class="information">
                <p class="text">Titolo: {{ project.title }}</p>
                <p class="text">Data: {{project.date}}</p>
                <p class="text">Autori: {{project.author}}</p>
                <!-- <img :src="`http://127.0.0.1:8000/storage/${project.img}`"
                        alt=""> -->
                <img :src="project.img !== null ? `${store.baseUrl}/storage/${project.img}` : `${store.baseUrl}/storage/img/imgnull.jpg`" alt="">
            </div>
        </div>
</template>

<style lang="scss" scoped>
.information {
    width: 100%;
    height: 100%;
    color: white;
    background-color: black;
    padding: 20px;
}

.project {
    width: calc(100% / 3 - 40px);
    margin: 10px;
}

img {
    width: 100%;
    height: 100%;
}

.text {
    font-weight: bold;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-size: 15px;
    text-align: center;
    padding: 10px;
}

.center {
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>