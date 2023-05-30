import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import components from '@/test-app/ui/index'
import './assets/main.css'
import router from '@/test-app/router/router'
import directives from '@/test-app/directives'

const app = createApp(App)

app.use(createPinia())

components.forEach(component => {
  let componentName: string | undefined = component.__name

  if (componentName) { 
    app.component(componentName, component)
  }
  
})

directives.forEach(directive => {
  let directiveName: string | undefined = directive.name

  if (directiveName) { 
    app.directive(directiveName, directive)
  }
  
})

app.use(router)
app.mount('#app')
