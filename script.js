import {ref, createApp} from 'vue'

createApp({
    setup(){
        const title = ref('title')

        return{
            title
        }
    }
}).mount('#app')