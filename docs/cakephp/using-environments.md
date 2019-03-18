# Using environment variables in CakePHP 3
It can be very helpful to use environment variables for developing your application. In my case i prefer using `.env` files to define for example if i am in debug mode, the cookie timeout etc.

1. Use `env('ENVIRONMENT_VARIABLE', default...)` in your code to access the environment values.
2. Activate .env support in `bootstrap.php` (*CakePHP 3.6.12*) by uncommenting this section
    ```php
    /**
    * Uncomment block of code below if you want to use `.env` file during development.
    * You should copy `config/.env.default to `config/.env` and set/modify the
    * variables as required.
    */
    if (!env('APP_NAME') && file_exists(CONFIG . '.env')) {
        $dotenv = new \josegonzalez\Dotenv\Loader([CONFIG . '.env']);
        $dotenv->parse()
            ->putenv()
            ->toEnv()
            ->toServer();
    }
    ```
3. Put a `.env` file into your config folder
    ```
    APP_NAME="__APP_NAME__"
    DEBUG="true"
    APP_ENCODING="UTF-8"
    APP_DEFAULT_LOCALE="de_DE"
    APP_DEFAULT_TIMEZONE="Europe/Berlin"
    SECURITY_SALT="SECRETKEY"
    DATABASE_COLLATION="utf8_unicode_ci"

    SESSION_COOKIE_NAME="my_super_cookie"
    SESSION_COOKIE_TIMEOUT=1440 # 1440 min = 24 hrs

    ...
    ```
