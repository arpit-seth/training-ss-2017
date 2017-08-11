#Questions & Answers
####1. What is the difference between pull and fetch?
**Answer : ** ***Pull*** is the process in which the commits or changes done on the *Remote Repository*, are retrieved & merged on the *Local Repository*. While ***Fetch*** is the process in which the commits done on the *Remote Repository*, are only retrieved on the *Local Repository*. These commits are not merged on the *Local repository* during  Fetch. These commits are downloaded into FETCH_HEAD sothat it can be merged on *LR* when it required.

**Pull = Fetch + Merge with FETCH_HEAD.**
***
####2. How do you switch between branches in local repository?
**Answer : ** We can switch between branches by using the ***checkout***  command.
**Syntax :** $git  checkout  *branch-name*
***
####3.How to clone a specific branch of a remote repository directly?
**Answer :** By using the following command :-
**Syntax :** $git clone -b  *branch-name*  *remote-repository-url*

***
####4. How do you undo a commit?
**Answer :** By using the ***revert*** command :-
**Syntax :** 
for undoing the latest commit :-   **$git revert HEAD**

for undoing the past commits :-   **$git revert HEAD~n**  (where n refers the order of grandparent for that commit which has to be undone with respect to latest commit)

***
####5. How to remove a tracked file from git but keep it in the local directory?
**Answer :** By executing the following command :-

$git rm - -cached *file-name*

and then execute

$ git commit -m "message"

$git push

***
####6. How do you edit a commit message -- after commit and before push?
**Answer :**By using the following command, a prompt would be opened containing the latest commit message which can be edit.
**Syntax :** $git commit - -amend

***
####7. What techniques can you use so that you don't have to input your username/password each time you push?
**Answer :** By using the git credentials API, which can be installed and executed by the following command :-
**Syntax :**
for installing the API :-
$curl -s -O http://github-media-downloads.s3.amazonaws.com/osx/git-credential-osxkeychain

$chmod u+x git-credential-osxkeychain

$mv git-credential-osxkeychain /usr/local/bin

for setting the username and password :-

$ git config credential.helper store

$ git push *remote-repo-url*

Username: *type-username*

Password: *type-password*

***
####8. What is a pull request?
**Answer :** When a perticular person commits on a specific branch and push into remote repo then before merging it into the master branch,it is recommended to tell other members about these changes sothat these commits can be reviewed or discussed by the team members before merging with main branch. For this process, ***Pull Request*** is used.It ensures that the master branch contains the correct and approved work. 