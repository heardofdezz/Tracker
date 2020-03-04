import Api from '@/services/Api'

export default {
    SongsIndex () {
        return Api().get('songs')
    },
    show (){
        
    }
}

