# Convert PuTTy keys to OpenSSH
When working with different clients you sometimes end up on a client creating keys with the tool PuTTY (especially when they use windows). It is very easy to convert such a key file `.ppk` to the open-ssh format

1. `sudo apt install putty-tools`
2. `cd to/the/directory/with/the/putty/keys`
3. Now execute these commands
    ```
    puttygen puttyfile.ppk -O private-openssh -o id_dsa
    puttygen puttyfile.ppk -O public-openssh -o id_dsa.pub
    ```

The first command creates the private key, the second the public key. You can now copy them into your `~/.ssh` folder and use them for authentication.