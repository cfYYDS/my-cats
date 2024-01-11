/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        domains:[
            'cdn1.theimageapi.com',
            'cdn2.thecatapi.com',
            '27.media.tumblr.com'
        ]
    },
    env: {
        PRIVACY_KET: 'live_M6sCpwC1KbGslKHdWOti21qvcXCqNzUDfHtAVYLyKgJlyRQsTxO4CYsR5XAclvmJ',
      },
}

module.exports = nextConfig
