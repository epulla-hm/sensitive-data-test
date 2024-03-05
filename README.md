# Steps to remove sensitive data from Git History:

> [!IMPORTANT]
> This steps are based on this [official Github tutorial](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/removing-sensitive-data-from-a-repository#using-the-bfg)

1. Download BFG:

```bash
brew install bfg
```

2. Replace text listed in `your_leaked_secrets` file using:

```bash
bfg --replace-text {secrets_file}
```

Above command seems to replace the credentials with `REMOVED`.

3. Push to the branch: 

```bash
git push --force
```

