import router from './router';
// we can name the module as we want!
import headerApp from './components/header/header.vue';
import footerApp from './components/footer/footer.vue';

export default {
    data() {
        return {
            routes: router.options.routes
        };
    },
    components: {
        headerApp,
        footerApp
    },
    mounted() {
        console.log('App component is ready');
    }
};