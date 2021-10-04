module.exports = {
  reactStrictMode: true,
   async headers() {
    return [
      {
        source: '/',
        headers: [
          {
            key: 'connect-src',
            value: 'self',
          },
        ],
      },
    ]
  },
}
