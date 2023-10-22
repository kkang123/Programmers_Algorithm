# Programmers_Algorithm

## JavaScript


### 🔥작업 방법  
fork -> fork 파일 clone -> 각자의 IDE에서 코드 작업

<br>

git branch `branch명`  
git checkout `branch명`  
git add `pr_test.md(작업내용)`  
git commit -m `"PR_TEST"`  
git push  

<br>

>  이때 fatal: The current branch pr_test has no upstream branch.  
>  To push the current branch and set the remote as upstream, use  
>  이런 에러가 뜨는건 로컬엔 새로운 branch가 있지만 github엔 반영이 안되었기 때문이다.  
>`git push --set-upstream origin pr_test`
> 를 입력해주면 github에도 만든 브랜치가 생긴걸 알 수 있다

<br>

- push 후 main 브랜치로 돌아올 것!  
`git checkout main`

<br>

## 🔹 원격 브랜치랑 로컬 브랜치 합치기

`로컬 브랜치에서 명령어 작성`
git fetch --prune origin 
git reset --hard origin/main


<br><br>


## 🔹 Js File Naming 컨벤션

ex) `JHJ - DAY1 - 01_문자열 출력하기`


## 🔹 Commit 컨벤션

>type(옵션): [#issueNumber - ]Subject  // -> 제목  
(한 줄을 띄워 분리합니다.)  
>
> body(옵션) //  -> 본문   

<br>

ex) "Add(type): 제목(01_문자열 출력하기.js, 김지헌.js 등)"
> type : subject  
body

✔ Type

|태그 이름| 설명|
|---|---|
|Add| 소스 코드 파일(js) 추가|
|Feat	|새로운 기능을 추가할 경우|
|Fix|	버그를 고친 경우|
|Design	|CSS 등 사용자 UI 디자인 변경|
|!BREAKING CHANGE	|커다란 API 변경의 경우|
!HOTFIX	|급하게 치명적인 버그를 고쳐야하는 경우|
|Style	|코드 포맷 변경, 세미 콜론 누락, 코드 수정이 없는 경우|
|Refactor	|프로덕션 코드 리팩토링|
|Comment	|필요한 주석 추가 및 변경
|Docs	|문서를 수정한 경우|
|Test	|테스트 추가, 테스트 리팩토링(프로덕션 코드 변경 X)|
|Chore	|빌드 태스트 업데이트, 패키지 매니저를 설정하는 경우(프로덕션 코드 변경 X)|
|Rename	|파일 혹은 폴더명을 수정하거나 옮기는 작업만인 경우|
|Remove	|파일을 삭제하는 작업만 수행한 경우|




### 🔹 소스 코드 업로드 및 리뷰 요청 방법
1. 본인이 해결한 문제의 소스 코드를 **본인의 branch**에 push한다 (이때, merge까지는 진행하지 않는다.).
2. **Pull Request**를 통해 코드 리뷰를 요청한다.
3. 스터디원에게 리뷰를 받은 후, 수정이 완료되면 Label을 수정한다.

<br>

### 📚 Code Review 규칙
- 자유롭게 의견을 제시한다.
    - 잘했다고 생각하는 부분 칭찬하기
        - 피드백 할 게 없으면 칭찬해 주세요👍
    - 개선이 필요한 부분 설명하기
        - 단, 개선이 필요한 이유를 충분히 설명해 주세요.
        - 정답 코드를 알려주기 보다는, 스스로 고민하고 개선 방법을 선택할 수 있게 해 주세요.
    - 궁굼한 부분 물어보기
- 오픈 커뮤니케이션 지향
    > ex) ~ 하는 게 어떨까요? / ~ 하는 것을 제안합니다. / ~ 부분은 ~ 문제가 있는 것 같은데 괜찮을까요?
- 코드 작성자에게 피드백하는 것이 아닌, 코드 자체를 피드백한다는 생각으로 리뷰한다.


<!-- ### 🔹 Pull Request 규칙
- PR 템플릿에 맞게 작성한다.
    - 문제를 푸는 과정에서 본인이 생각한 내용을 작성한다.
    - 코드 설명을 작성한다. (단, 주석에 작성한 경우 생략한다.)
    - 특히 리뷰를 받고 싶은 부분을 작성한다.
        - Markdown Codeblock을 이용하여 코드 일부를 발췌해서 작성한다.
        - 특히 리뷰를 받고 싶은 부분은, 리뷰어의 시간을 아낄 수 있게 본인 코드를 충분히 설명해 주세요.
- Reviewer는 본인을 제외한 3명을 추가한다.
- Label은 `Review Request`로 추가한다.
- 모든 스터디원에게 리뷰를 받은 후, 코드 수정이 완료되었으면 Label을 `Merge Request`로 변경한다.
- Main branch에 병합되면, 병합된 branch는 삭제시킨다. -->

