# Programmers_Algorithm

## JavaScript


- 작업 방법
fork -> fork 파일 clone -> 각자의 IDE에서 코드 작업

git branch `branch명`
git checkout `branch명`
git add pr_test.md(작업내용)
git commit -m `"PR_TEST"`
git push


- ### 이때 fatal: The current branch pr_test has no upstream branch.
- ### To push the current branch and set the remote as upstream, use
- ### 이런 에러가 뜨는건 로컬엔 새로운 branch가 있지만 github엔 반영이 안되었기 때문

`git push --set-upstream origin pr_test`

- ### 를 입력해주면 github에도 만든 브랜치가 생긴걸 알 수 있다

# push 후 main 브랜치로 돌아올 것!
git checkout main