import Main from '@/test-app/pages/Main.vue';
import About from '@/test-app/pages/About.vue';
import Posts from '@/test-app/Posts.vue';
import SinglePost from '@/test-app/SinglePost.vue';
import { createRouter, createWebHistory } from 'vue-router'; 

const routes = [ 
    {
        path: '/',
        component: Main,
    },
    {
        path: '/posts',
        component: Posts,
    },
    {
        path: '/about',
        component: About,
    },
     {
        path: '/posts/:id',
        component: SinglePost,
    },
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

export default router;
