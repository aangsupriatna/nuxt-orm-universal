import { Database } from '@vuex-orm/core'
import User from './models/User'
import Project from './models/Project'

import users from '@/orm/modules/User'
import projects from '@/orm/modules/Project'

const database = new Database()

database.register(User, users)
database.register(Project, projects)

export default database