module.exports = {
  reactStrictMode: true,
  flags: {
    DEV_SSR: false,
  },
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'http://192.168.43.53:3000/:path*',
      },
    ]
  },
}
