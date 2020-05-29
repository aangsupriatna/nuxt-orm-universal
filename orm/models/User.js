// User Model
import { Model } from '@vuex-orm/core'
import Project from './Project'

export default class User extends Model {
    static entity = 'users'
    static primaryKey = 'id_user'

    // Fields of class
    static fields() {
        return {
            id_user: this.uid(),
            name: this.string('')
        }
    }
}
