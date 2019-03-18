module.exports = {
  title: 'Segis Knowledge Base',
  description: 'Just playing around',
  host: 'dev.mkb.segidev.docker',
  port: 80,
  themeConfig: {
    sidebar: [
      '/',
      {
        title: 'Docker',   // required
        collapsable: false, // optional, defaults to true
        children: [
          '/docker/docker-dns'
        ]
      }
    ]
  }
}
