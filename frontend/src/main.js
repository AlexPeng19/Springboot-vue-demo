/**
 * Created by alex on 18/4/8.
 */

import Vue from 'vue'
import $ from 'jquery'
//bootstrap
import 'admin-lte/node_modules/bootstrap/dist/css/bootstrap.min.css'
import 'admin-lte/node_modules/bootstrap/dist/js/bootstrap.min.js'
//admin-lte
import 'admin-lte/dist/js/adminlte.min.js'
import 'admin-lte/dist/css/skins/_all-skins.min.css'
import 'admin-lte/dist/css/AdminLTE.min.css'
import 'font-awesome/css/font-awesome.min.css'
import App from './App.vue'

new Vue({
    el: '#app',
    render: h => h(App)
});

