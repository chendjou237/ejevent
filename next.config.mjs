/** @type {import('next').NextConfig} */
const nextConfig = {
   images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'firebasestorage.googleapis.com',
          port: '',
          pathname: '/**',
        },
      ],
    },
};

export default nextConfig;
'https://firebasestorage.googleapis.com/v0/b/ejevent-ff5c6.appspot.com/o/decorations%2Fchaffing_dishes.jpg?alt=media&token=7a4d6980-e34e-4f27-9f0f-f8b1458a4c6a'