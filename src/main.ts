import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import components from '@/test-app/ui/index'
import './assets/main.css'

const app = createApp(App)


app.use(createPinia())

components.forEach(component => {
  let componentName: string | undefined = component.__name

  if (componentName) { 
    app.component(componentName, component)
  }
  
})

app.mount('#app')
