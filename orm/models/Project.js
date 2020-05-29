// Article Model
import { Model } from '@vuex-orm/core'
import User from './User'

export default class Project extends Model {
    // This is the name used as module name of the Vuex Store.
    static entity = 'projects'

    // Name primary key
    static primaryKey = 'id_project'

    // Fields of class
    static fields() {
        return {
            id_project: this.uid(),
            id_user: this.attr(null),
            title: this.string(''),
            date: this.attr(Date.now()),
            description: this.string(''),
            user: this.belongsTo(User, 'id_user')
        }
    }
}
