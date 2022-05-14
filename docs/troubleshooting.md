# Maverick — Troubleshooting 🔥 

1. If you are a **Windows** user and are getting **Permission denied** errors
to access your hosts file, you need to do the following:

* If you started an earlier installation, run:

```sh
yarn docker down
```

* Close the terminal and reopen another one but as **Administrator**.
* Run again:

```sh
yarn start
```

* Done! ✅ 
