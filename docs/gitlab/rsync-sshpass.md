# Using rsync with sshpass to deploy
I really like **scp** but when it comes to create folders on the host it is much better to use **rsync**. I tried a way to connect first via ssh and do a `mkdir` command. It worked, but.. you know :)

So what i will give you here is a config for the `gitlab-ci.yml` for a node environment.

```yaml
image: node:latest

stages:
  - deployReview

deploy_review:
  stage: deployReview
  before_script:
    - apt-get update -qq && apt-get install -y -qq sshpass rsync
    - npm install
    - npm run build
    - export SSHPASS=$REVIEW_PASS
  script:
    - sshpass -e rsync -e "ssh -o StrictHostKeyChecking=no" -avzP ./build/ user@server.com:/var/www/html
```

What happens here is:
1. We download **sshpass** and **rsync**.
2. Then we build the project (this is just for showcasing, it is not really relevant).
3. The important part comes at the line `export SSHPASS=$REVIEW_PASS` which will use the gitlab **secret variable** `$REVIEW_PASS` and assign it to the environment variable `SSHPASS`. This variable is used by **sshpass** internally.

The `sshpass` command then calls **rsync** in its environment and rsync itself does a normal call.

As an example I have     added `-e "ssh -o StrictHostKeyChecking=no"` to show that it is also possible to call an environment in an environment to set specific settings for rsync.

::: tip
Don't forget to replace
1. The source path from where you want to copy the files. (Here: `./build/`)
2. `user@server` with your credentials.
3. The host path where you want to put the files (Here: `/var/www/html`)
:::
