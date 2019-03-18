# Autoloading files with composer for namespaces
When you want to define namespaces you can easily do this with composers autoload feature. I used a similar setup to create a WordPress plugin with namespaces, which was way more beautiful than requiring files all the time.

```json
{
  "name": "name/othername",
  "description": "Any description you want",
  "autoload": {
    "psr-4": {
      "My\\NameSpace\\": ["folder_a/", "folder_b/", "folder_b/subfolder_b"],
      "Other\\NameSpace\\": ["otherfolder/"]
    }
  }
}
```

After you have done this run `composer install` again to apply the changes.

::: warning
I had a strange problem once when i was trying to autoload a file via composer. It led to an unexpected behavior which cost me a lot of time and nerves to find :)
:::
