import { createRouter, createWebHistory } from 'vue-router';

// Import views
import HomeView                           from '../views/HomeView.vue';

// Import components
import ProjectsView                       from '../components/Projects.vue';
import EducationView                      from '../components/Education.vue';
import SkillsView                         from '../components/Skills.vue';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView
        },
        {
            path: '/projects',
            name: 'projects',
            component: ProjectsView
        },
        {
            path: '/education',
            name: 'education',
            component: EducationView
        },
        {
            path: '/skills',
            name: 'skills',
            component: SkillsView
        }
    ]
});

export default router;