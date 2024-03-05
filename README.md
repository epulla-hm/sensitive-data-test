# Steps to remove sensitive data from Git History:

> [!IMPORTANT]
> This steps are based on this [official Github tutorial](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/removing-sensitive-data-from-a-repository#using-the-bfg)

1. Download BFG:

```bash
brew install bfg
```

2. bfg --replace-text secrets.txt
3. git push --force

