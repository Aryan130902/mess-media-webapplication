export const SERVICE_URLS = {
    signup: { url: '/api/auth/signup', method: 'POST' },
    signin: { url: '/api/auth/signin', method: 'POST' },
    uploadUserImage:{url: '/userImage/upload', method:'POST'},
    createMess: {url: '/api/mess/createMess', method: 'POST'},
    getAllMesses: {url:'/api/mess', method: 'GET', params: true},
    getMessById:{url:'mess:id',method:'GET', query:true}
} 

