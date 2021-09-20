module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['dummyimage.com'],
  }
}

const withMDX = require('@next/mdx')({
  extension: /\.mdx$/
})
module.exports = withMDX({
  pageExtensions: ['js', 'jsx', 'mdx']
})

