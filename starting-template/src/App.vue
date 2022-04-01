<template>
    <div id="app">
        <app-header :changeSearch = "changeSearch"/>
        <app-modal :character = "searchCharacters[characterIndex]" ref="modal"/>
            <section class="main">
                <spinner v-if="loading"/>
                <h1 class="main__caption">
                    Персонажи Марвел
                </h1>
                <div class="main__container">
                    <div v-for="(el,idx) in searchCharacters"
                    :key="el.id"
                    class="card">
                        <div class="card__img">
                            <img class="img" 
                            :src="el.thumbnail" 
                            :alt="el.name">
                        </div>
                        <div class="card__info">
                            <h5 class="card__caption">
                                {{el.name}}
                            </h5>
                            <button 
                            class="card__button" 
                            type="button"
                            @click = "showModal"
                            v-on:click="characterIndex = idx">
                                Подробнее
                            </button>
                        </div>
                    </div>
                </div>
            </section>
    </div>
</template>

<script>
    import Spinner from "./components/Spinner";
    import AppModal from "./components/AppModal";
    import AppHeader from "./components/AppHeader";


    export default {
        name: 'App',
        components: {
            AppHeader,
            AppModal,
            Spinner
        },
        data() {
            return {
                loading: false,
                characters: [],
                characterIndex: 0,
                search: '',
            }
        },
        methods: {
            showModal: function () {
                this.$refs.modal.visible = true
            },
            fetchCharacters: function(){
                return fetch('https://netology-api-marvel.herokuapp.com/characters')
                        .then(res => res.json())
                        .then(json => this.characters = json)
            },
            changeSearch: function(value){
                this.search = value
            }
        },
        computed: {
            searchCharacters: function(){
                const {characters, search} = this;
                return characters.filter(character => {
                    return character.name.toLowerCase().indexOf(search.toLowerCase()) !== -1
                })
            }
        },
        async mounted(){
            this.loading = true
            await this.fetchCharacters()
            this.loading = false
        },
};

</script>

<style>
* {
    margin: 0;
}

*, *::before, *::after {
box-sizing: border-box;
}

::-webkit-scrollbar {
  width: 0;
}

h1, h5 {
    margin-top: 0;
    margin-bottom: 0.5rem;
    font-weight: 600;
    line-height: 1.2;
}

h1 {
    font-size: 2.5rem;
    padding-top: 1rem;
    padding-bottom: 1rem;
}

h5 {
    font-size: 1.25rem;
}

p {
    margin-top: 0;
    margin-bottom: 1rem;
}

body {
    font-family: 'Roboto', sans-serif;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #212529;
}

a {
    text-decoration: none;
    font-size: 1rem;
}

.main {
    width: 100%;
    padding-right: var(--bs-gutter-x,.75rem);
    padding-left: var(--bs-gutter-x,.75rem);
    margin-right: auto;
    margin-left: auto;
    max-width: 1320px;
}

.main__container {
    --bs-gutter-x: 1.5rem;
    --bs-gutter-y: 0;
    display: flex;
    flex-wrap: wrap;
    margin-top: calc(var(--bs-gutter-y) * -1);
    margin-right: calc(var(--bs-gutter-x)/ -2);
    margin-left: calc(var(--bs-gutter-x)/ -2);
}

.card {
    position: relative;
    display: flex;
    min-width: 0;
    border: 1px solid rgba(0,0,0,.125);
    border-radius: 0.25rem;
    margin-bottom: 1rem!important;
    width: 33.3333333333%;
}

.card__img {
    width: 33.3333333333%;
    vertical-align: middle;
}

.card__info {
    width: 66.6666666667%;
    padding: 1rem;
}

.img {
    max-width: 100%;
    vertical-align: middle;
    height: 100%;
}

.card__button {
    color: #fff;
    background-color: #6c757d;
    border-color: #6c757d;
    border: 1px solid transparent;
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    border-radius: 0.25rem;
    transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
    cursor: pointer;
}
</style>
