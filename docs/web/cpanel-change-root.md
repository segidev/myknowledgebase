# Change cPanel root directory
Instead of forwarding the primary domain via a .htaccess file i figured out it is a much better approach to change the root document in cPanel.

::: warning
You can only do this with sufficient privilegs on the server
:::

Follow these steps (*it is possible that the paths may vary*)
1. `cd /var/cpanel/userdata/USERNAME`
2. Change `DOMAIN.com` ->
	1. `documentroot: /home/yourwebsite/public_html` to
	2. `documentroot: /home/yourwebsite/public_html/SUBFOLDERNAME`
3. Do the same for `DOMAIN.com_SSL`
3. Call `/scripts/rebuildhttpdconf`
4. Call `service httpd restart`

::: warning
This may be to specific to work somewhere else. I added this for me and maybe someone else will also get a use from it :)
:::

::: tip
If you are concerned about your other domains. DO NOT WORRY. cPanel handles them in their subfolders already. These settings apply only to the **primary domain**
:::