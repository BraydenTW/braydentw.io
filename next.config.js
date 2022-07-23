const { withContentlayer } = require("next-contentlayer");

module.exports = withContentlayer()({
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
});
