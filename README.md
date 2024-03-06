# Steps to remove sensitive data from Git History:

> [!IMPORTANT]
> This steps are based on this [official Git page](https://git-scm.com/book/en/v2/Git-Tools-Rewriting-History)

How to manually modify the git history of a branch

1. Search your commit that you want to modify.

2. Copy the elder sibling SHA (we will call it as `ABC`) of your commit you want to modify.

3. Execute the following command:

```bash
git rebase -i ABC~
```

4. A temp file will open in your terminal. Search for your commit and change the word `pick` to `e` and save the file:

Original:

```
pick f7f3f6d Change my name a bit
pick 310154e Update README formatting and add blame
pick a5f4a0d Add cat-file
```

Modified:

```
pick f7f3f6d Change my name a bit
pick 310154e Update README formatting and add blame
pick a5f4a0d Add cat-file
```

5. Now you are in your commit. Go to the file you want to modify, do your changes and save it.

6. Execute the following commands:

```bash
git commit --amend
git add {your_modified_file}
git rebase --continue
```

If you have several changes from `pick` to `e`, you will continue to modify commit by commit until you're done.

7. Finally, git push to the branch:

```bash
git push --force
```

