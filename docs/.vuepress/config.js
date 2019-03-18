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
      },
      {
        title: 'PHP',   // required
        collapsable: false, // optional, defaults to true
        children: [
          '/php/composer-install',
          '/php/composer-autoload'
        ]
      },
      {
        title: 'CakePHP',   // required
        collapsable: false, // optional, defaults to true
        children: [
          '/cakephp/using-environments.md'
        ]
      },
      {
        title: 'Web',   // required
        collapsable: false, // optional, defaults to true
        children: [
          '/web/htaccess-https.md',
          '/web/htaccess-primary-forward.md',
          '/web/cpanel-change-root.md'
        ]
      },
      {
        title: 'OpenSSH',   // required
        collapsable: false, // optional, defaults to true
        children: [
          '/openssh/multiple-ssh-hosts.md',
          '/openssh/convert-putty-to-openssh.md',
          '/openssh/create-sftp-user.md'
        ]
      },
      {
        title: 'SQL',   // required
        collapsable: false, // optional, defaults to true
        children: [
          '/sql/varchar-limit.md'
        ]
      }
    ]
  }
}
