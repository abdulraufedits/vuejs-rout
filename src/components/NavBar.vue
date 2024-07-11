<script>
export default {
    data(){
        return {

        }
    }
}
import { RouterLink } from 'vue-router';
</script>

<template>
    <nav>
        <ul>
            <li><RouterLink to="/">Home</RouterLink></li>
            <li><RouterLink to="/about">About</RouterLink></li>
            <li><RouterLink to="/contact">Contact </RouterLink></li>
        </ul>
    </nav>
</template>

<style scoped>
    nav {
        background-color: white;
        color: black;
        width: 100vw;
        padding: 2rem 10rem;
    }
    ul{
        display: flex;
        gap: 1rem;
        transition: all 0.3s;
    }
    li{
        position: relative;
        transition: all 0.3s;
        list-style: none;
    }
    ul li:hover::before{
        content: '';
        background-color: black;
        position: absolute;
        bottom: 0;
        height: 3px;
        width: 100%;
    }
</style>