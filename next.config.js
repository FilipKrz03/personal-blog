/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental:{
        serverActions:true , 
    }
}
module.exports = {
    images: {
      remotePatterns: [
        {
          protocol: 'http',
          hostname: 'images.ctfassets.net',
          port : '' , 
          pathname: '/7wohefq1rwua/**'
        },
      ],
    },
  };


