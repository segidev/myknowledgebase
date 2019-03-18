# Avoid VARCHAR limit problems for primary keys
::: danger
Many systems disallow VARCHAR types of a size of 250 as **primary key**!
:::

I experienced this behavior multiple times now and it is really annoying to figure this out so i want to share this with you (and me :))

To avoid an error put something like VARCHAR(30) as primary key which should be sufficient. Raise this value if needed with care.
