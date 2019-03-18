module.exports = {
  title: 'Segis Knowledge Base',
  description: 'Welcome to my little collection of things that save my life whenever i am thinking why the hell did i not write down how i solved a certain problem?!',
  host: 'dev.mkb.segidev.docker',
  port: 80,
  head: [
    ['link', { rel: "icon", href: "favicon.png" }]
  ],
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
