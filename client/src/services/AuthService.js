import Api from '@/services/Api'

export default {
    register (informations) {
        return Api().post('register', informations)
    }
}

