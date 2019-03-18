# Forward primary domain to a subfolder (cPanel)
I often see **cPanels** structure on customer websites where they host their primary website in the root folder and have subfolders for further websites they use. I don't like this structure, so what you can do is move the primary website files also into a subfolder. You can achieve this by adding a `.htaccess` file into the root folder and add the following:

```nginx
<IfModule mod_rewrite.c>
    RewriteEngine on
    RewriteCond %{SERVER_PORT} 80
    RewriteRule ^(.*)$ https://%{HTTP_HOST}/$1 [R,L]
    RewriteCond %{HTTP_HOST} ^yourprimarydomain.com$ [NC,OR]
    RewriteCond %{HTTP_HOST} ^www.yourprimarydomain.com$
    RewriteCond %{REQUEST_URI} !yourprimarydomain-subfolder/
    RewriteRule (.*) /yourprimarydomain-subfolder/$1 [L]
</IfModule>
```

The files for yourprimarydomain.com will be loaded from the subfolder `yourprimarydomain-subfolder/` now instead of the root folder.
