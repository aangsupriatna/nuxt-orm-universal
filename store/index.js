import Vue from 'vue'
import Vuex from 'vuex'
import VuexORM from '@vuex-orm/core'
import VuexORMAxios from '@vuex-orm/plugin-axios'
import database from '@/orm'
import users from '@/orm/modules/User'
import projects from '@/orm/modules/Project'

import AxiosConfig from '@/orm/AxiosConfig'

Vue.use(Vuex)

VuexORM.use(VuexORMAxios, {
    database
})

export const plugins = [VuexORM.install(database)]