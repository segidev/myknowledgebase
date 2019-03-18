# Create sFTP user with private/public key authentication
How to create a new user that only has sftp access and needs authentication via private/public key

::: warning
You need sufficient rights on the system to be able to perform this.
:::

1. Switch to root user with `su`
2. Create new user with: `useradd -m NAME`
3. Create the sftp directory eg: `mkdir -p /var/www/sftp/NAME`
      > Make sure that these directories are owned by root
4. Edit the sshd config with: `nano /etc/ssh/sshd_config`
5. Add the following config
    ```
    SubSystem sftp internal-sftp

    Match User NAME
      AuthenticationMethods "publickey" # "publickey,password" if it should be both
      AuthorizedKeysFile %h/.ssh/authorized_keys # Path to the home directory of NAME and it's authorized_keys
      ChrootDirectory /var/www/sftp/%u # Path that was just created
      ForceCommand internal-sftp
      AllowTcpForwarding no
    ```
6. Restart the sshd service with: `/etc/init.d/ssh restart`

Now when trying to login via ssh NAME@host it should fail and say only sftp is allowed

To connect via sftp the command will look like: `sftp -i /path/to/identityfile NAME@host`