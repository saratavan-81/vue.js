import { createRouter, createWebHistory } from 'vue-router';
import HomeWorld from '../components/HomeWorld.vue'
import IndexUser from '../useres/IndexUsere.vue';
import ShowUser from '../useres/ShowUsere.vue';
import TempUser from '../useres/TempUser.vue';

import TempPost from '../useres/TempPost.vue';
import IndexPost from '../useres/IndexPost.vue';
import ShowPost from '../useres/ShowPost.vue';
import CreatePost from '../useres/CreatePost.vue';
import EditPost from '../useres/EditPost.vue';



const routes = [
    { path: "/", name: "home", component: HomeWorld  },
    { path: "/users", name: "users", component: TempUser ,
        
children:[
    { path: "", name: "users", component: IndexUser },

    {path: ":id", name: "usersId", component: ShowUser }
]
     } ,

     {
        path: '/posts', name: 'TempPost', component: TempPost, children: [
            { path: '', name: 'posts', component: IndexPost },
            { path: ':id', name: 'postId', component: ShowPost },
            { path: 'Create', name: 'CreatePost', component: CreatePost },
            { path: 'Edit/:id', name: 'EditPost', component: EditPost }

        ]
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;