# Guaranteed https redirection with .htaccess
I tried many ways to make sure the user gets redirected to `https://` instead of `http://`. This solution finally worked and stills works for me everywhere

```nginx
<IfModule mod_rewrite.c>
    RewriteEngine on
    RewriteCond %{HTTP_HOST} !^localhost(?::\d+)?$ [NC]
    RewriteCond %{SERVER_PORT} 80
    RewriteRule ^(.*)$ https://%{HTTP_HOST}/$1 [R,L]
    # Other rules here...
</IfModule>
```

::: tip
The line `RewriteCond %{HTTP_HOST} !^localhost(?::\d+)?$ [NC]` excludes your http://localhost/ from redirecting to https. You can add as many conditions for domains as you want to exclude them from redirecting.

For example: `RewriteCond %{HTTP_HOST} !dev.mywebsite.docker [NC]`
:::
