# Using multiple ssh keys for the same host
Sometimes it is good to have multiple keys for the same host

## Generate the key pair
1. Generate a keypair especially for the host you want to connect to
    * `cd ~/.ssh`
    * `ssh-keygen`
    * Give your new keypair file a name to identify it easily
    ```
    Generating public/private rsa key pair.
    Enter file in which to save the key (/home/user/.ssh/id_rsa): my-custom-name-for-the-host
    Enter passphrase (empty for no passphrase):
    Enter same passphrase again:
    Your identification has been saved in my-custom-name-for-the-host.
    Your public key has been saved in my-custom-name-for-the-host.pub.
    ```
    * You have now generated the keypair and you should find two files in you .ssh folder
        * `my-custom-name-for-the-host`
        * `my-custom-name-for-the-host.pub`

2. Put your **public key** from the `my-custom-name-for-the-host.pub` file on the host you want to connect to. **I will use gitlab.com as an example for that**:
    * Put your public key into gitlab [more here](https://docs.gitlab.com/ee/gitlab-basics/create-your-ssh-keys.html)

## Add the key pair as a new host
1. Create a file called `config` in your `.ssh` folder (on Linux you will find it at `~/.ssh/`)
2. Now paste this into the `config` file (as an example for Gitlab)
    ```
    host my-custom-name-for-the-host
      HostName gitlab.com
      IdentityFile ~/.ssh/my-custom-name-for-the-host
      User git
    ```

    Typing `ssh my-custom-name-for-the-host` would resolve to:
    1. `User@HostName -i IdentityFile` in our case
    2. `git@gitlab.com -i ~/.ssh/my-custom-name-for-the-host`

    ::: tip
    Mind that we are refering to the **private key** in this file NOT the public key.
    :::
3. Now you can add a remote git host like this:
    ```
    git remote add origin my-custom-name-for-the-host:domain-to/the-repository.git
    ```

## Why should i do this?
In case if you don't want to have one public key for ALL hosts you want to visit it is a good idea to create multiple keypairs for different hosts. You can see it as instead of using one password you simply use different password on different websites :)