
import { createApp } from 'vue'
import App from './App.vue'
import components from "@/components/UI";

const app = createApp(App)
/*components.forEach(component=>{
    app.component(component.name, component)
})*/
import MyInput from '@/components/UI/MyInput.vue'
import MyButton from '@/components/UI/MyButton.vue'
import MyDialog from '@/components/UI/MyDialog.vue'
import MySelect from '@/components/UI/MySelect.vue'

app.component('MyInput', MyInput)
app.component('MyButton', MyButton)
app.component('MyDialog', MyDialog)
app.component('MySelect', MySelect)

app.mount('#app')