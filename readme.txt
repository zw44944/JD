此文件夹learngit为创建的本地库，与远程端learngit存储库相互关联。
把项目文件推送到远程端的方法：
1.先把项目移动到此文件夹，打开此文件夹的git.bash
2.git add name   把项目文件提交到缓存区
3.git commit -m "xxx"  把项目提交到版本区
4.git push -u origin master 把项目推送到与此库相关联的远程库


创建版本库
mkdir learngit
第二步，通过git init命令把这个目录变成Git可以管理的仓库
$ git init
本地库与远程库关联
$ git remote add origin git@github.com:michaelliao/learngit.git
用命令git add告诉Git，把文件添加到仓库：
$ git add readme.txt
用命令git commit告诉Git，把文件提交到仓库：
git commit -m "wrote a readme file"
用命令git push告诉Git，把文件提交到远程仓库：
git push -u origin master 把项目提交到与此库相关联的远程库