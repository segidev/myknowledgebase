# Docker DNS Resolve
If you want to skip editing your `hosts` file you can now easily add this configuration to your `docker-compose.yml` to resolve hosts for your local development without using ports.

1. Make sure your container that serves the website is using **port 80** internally
2. Add this to your `docker-compose.yml`
    ```yaml
    dnsdock:
          image: defreitas/dns-proxy-server
          ports:
              - 5380:5380
          volumes:
              - /opt/dns-proxy-server/conf:/app/conf
              - /var/run/docker.sock:/var/run/docker.sock
              - /etc/resolv.conf:/etc/resolv.conf
    ```
3. Set `hostname: any.domain.docker` in the services you want to resolve a hostname
4. Startup your containers with `docker-compose up -d`

The linked volumes should be available on your system (LINUX) already.

> All credits for this awesome container goes to [defreitas](https://hub.docker.com/r/defreitas/dns-proxy-server/)

## Example
```yaml
version: "3"
services:
    www:
        image: node:8
        volumes:
            - ./:/app
        working_dir: /app
        command: ['npm', 'run', 'dev']
        hostname: dev.anydomain.docker
    dnsdock:
        image: defreitas/dns-proxy-server
        ports:
            - 5380:5380
        volumes:
            - /opt/dns-proxy-server/conf:/app/conf
            - /var/run/docker.sock:/var/run/docker.sock
            - /etc/resolv.conf:/etc/resolv.conf
```
## Tips
::: tip
As said you only need to make sure to use **port 80** inside the container.\
**Example**: If you use webpack make sure the server runs on eg. http://0.0.0.0:**80**/
:::
::: tip
When visiting your domain DO NOT FORGET the / (slash) at the end: dev.anydomain.docker/
:::
