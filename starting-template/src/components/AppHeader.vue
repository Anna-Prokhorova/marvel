<template>
    <nav class="navbar">
        <a href="#" class="navbar__logo">Marvel</a>
        <form class="search">
            <input class="search__input" type="search" placeholder="Поиск..."/>
            <button class="search__button">все</button>
        </form>
    </nav>
</template>

<script>
    export default {
        name: "AppHeader",
        data() {
            return {
            }
        },
    }
</script>

<style scoped>
.navbar {
    background-color: #212529!important;
    position: relative;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    padding-right: var(--bs-gutter-x,.75rem);
    padding-left: var(--bs-gutter-x,.75rem);
}

.navbar__logo {
    color: #fff;
    padding-top: 0.3125rem;
    padding-bottom: 0.3125rem;
    margin-right: 1rem;
    font-size: 1.25rem;
    white-space: nowrap;
}

.search {
    display: flex;
}

.search__input {
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    display: block;
    width: 100%;
    padding: 0.375rem 0.75rem;
    margin-right: 0.5rem!important;
    color: #212529;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    border-radius: 0.25rem;
    transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
}

.search__button {
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    display: inline-block;
    color: #fff;
    text-align: center;
    text-decoration: none;
    vertical-align: middle;
    cursor: pointer;
    background-color: transparent;
    border: 1px solid transparent;
    padding: 0.375rem 0.75rem;
    border-radius: 0.25rem;
    color: #fff;
    border-color: #fff;
    transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
}
</style>
