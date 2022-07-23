module.exports = {
    swcMinify: true,
    async redirects() {
        return [
          {
            source: '/blog',
            destination: '/',
            permanent: true,
          },
        ]
      },
};
