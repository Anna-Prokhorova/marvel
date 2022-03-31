<template>
    <div class="modal-container" 
    v-if = "visible"
    @click.self="closeModal">
        <div class="modal">
            <div class="modal__header header">
                <h5 class="modal__caption">
                    {{character.name}}
                </h5>
                <button class="modal__button" type="button" @click="closeModal">
                    &times;
                </button>
            </div>
            <div class="modal__body">
                <img class="img" 
                    :src="character.thumbnail" 
                    :alt="character.name">
                <h5>
                    Описание:
                </h5>
                <p>
                    {{character.description}}
                </p>
                <h5>
                    Комиксы:
                </h5>
                <ul>
                    <li 
                    v-for="(el,idx) in character.comics"
                    :key="idx">
                        {{el.name}}
                    </li>
                </ul>
            </div>
            <div class="modal__footer">
                <button class="card__button" type="button"
                @click="closeModal">
                    закрыть
                </button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "AppModal",
        props: ['character'],
        data: function () {
            return {
                visible: false
            }
        },
        methods: {
            closeModal: function () {
                this.visible = false
            }
        }
    }
    
</script>

<style scoped>
    .modal {
    max-width: 500px;
    margin: 1.75rem auto;
    display: flex;
    flex-direction: column;
    pointer-events: auto;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid rgba(0,0,0,.2);
    border-radius: 0.3rem;
    outline: 0;
}

.modal-container {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1060;
    display: block;
    width: 100%;
    height: 100%;
    overflow-x: hidden;
    overflow-y: auto;
    outline: 0;
}

.modal__header {
    display: flex;
    flex-shrink: 0;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 1rem;
    border-bottom: 1px solid #dee2e6;
    border-top-left-radius: calc(0.3rem - 1px);
    border-top-right-radius: calc(0.3rem - 1px);
}

.modal__button {
    color: #000;
    border: 0;
    background: transparent;
    font-size: 2.5rem;
    cursor: pointer;
}

.modal__body {
    padding: 1rem;
}

.modal .img {
    margin-bottom: 1rem;
}


.modal__footer {
    display: flex;
    flex-wrap: wrap;
    flex-shrink: 0;
    align-items: center;
    justify-content: flex-end;
    padding: 0.75rem;
    border-top: 1px solid #dee2e6;
    border-bottom-right-radius: calc(0.3rem - 1px);
    border-bottom-left-radius: calc(0.3rem - 1px);
}
</style>
