# Execute ssh with sshpass
I struggled a lot executing a delete command with sshpass via ssh. The fix finally was to call the whole command with `script -c ...` prepended. Use it in your `gitlab-ci.yml` like this:

```yaml
...

cleanup_job:
  ...
  script:
    - export SSHPASS=$REVIEW_PASS
    - script -c "sshpass -e ssh user@server 'rm -rf /var/www/html/folder'"
```
