# Redirect into subfolder for wildcard subdomain
Recently i explored this cool thing while I wanted to have subdomains automatically generated.

For example my main domain is: **http://segidev.com/**

Now what i want to achieve is to have a folder on my server which contains subfolders. Each of these subfolders contains a website or whatever i want. Now let's see the structure:
```
webroot/
    wildcards/
        some-subdomain/
        other-subdomain/
```

The result of having those folders inside the **wildcards** folder should be to have automatically generated subdomains that can be visited at:

1. http://**some-subdomain**.segidev.com/
2. http://**other-subdomain**.segidev.com/

## How to setup .htaccess for wildcard subdomains
One very important step is to create a **.htaccess** file inside your **wildcards** folder. Then apply this:

```nginx
<IfModule mod_rewrite.c>
    RewriteEngine On
    RewriteBase /

    RewriteCond %{HTTP_HOST} ^((?!www\.)[^.]+)\.yourdomain\.com$
    RewriteCond %1::%{REQUEST_URI} !^(.*?)::/\1/?
    RewriteRule ^(.*)$ /%1/$1 [L,QSA]
</IfModule>
```

::: tip
Don't forget to replace `yourdomain\.com` with your domain :)
:::

The final structure will look like:
```
webroot/
    wildcards/
        .htaccess
        some-subdomain/
        other-subdomain/
```

How to setup wildcard subdomains depends on your host. For Plesk it is very and an instruction can be found [here](https://docs.plesk.com/en-US/12.5/customer-guide/websites-and-domains/domains-and-dns/adding-wildcard-subdomains-linux.70111/)
