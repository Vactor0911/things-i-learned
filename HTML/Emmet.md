# Emmet

HTML과 CSS의 자동완성 기능을 제공하여, 코드 작성 시간을 단축시켜주는 기능

<br>

## HTML Emmet

- ### HTML 표준 구조 `!`

  HTML 기본 구조를 생성한다.

  ```html
  <!--! 탭-->
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Document</title>
    </head>
    <body>
        
    </body>
  </html>
  ```

    <br>

- ### 자식 노드 `>`

  자식 노드를 생성한다. `>` 기호 좌측에 위치한 것이 부모 노드이다.

  ```html
  <!--div>ul>li 탭-->
  <div>
    <ul>
      <li></li>
    </ul>
  </div>
  ```

    <br>

- ### 형제 노드 `+`

  형제 노드를 생성한다. `+` 기호를 통해 같은 단계에 여러 요소를 생성한다.

  ```html
  <!--div>ul+ol+div 탭-->
  <div>
    <ul></ul>
    <ol></ol>
    <div></div>
  </div>
  ```

    <br>

- ### 반복 `*`

  요소를 반복하여 생성한다. `*` 기호 우측에는 반복 횟수를 정수로 작성한다.

  ```html
  <!--div>ul>li*3 탭-->
  <div>
    <ul>
      <li></li>
      <li></li>
      <li></li>
    </ul>
  </div>
  ```

    <br>

- ### 클래스 `.`

  CSS 요소를 가진 요소를 생성한다. `.` 기호 우측에는 CSS 클래스 명을 작성한다.

  ```html
  <!--div.title 탭-->
  <div class="title"></div>
  <!--span.title 탭-->
  <span class="title"></span>
  ```

    <br>

- ### 아이디 `#`

  ID를 갖는 요소를 생성한다. `#` 기호 우측에는 ID명을 작성한다.

  ```html
  <!--div#myId 탭-->
  <div id="myId"></div>
  <!--span#myId 탭-->
  <span id="myId"></span>
  ```

    <br>

- ### 텍스트 입력 `{ }`

  `{ }` 안에 작성된 텍스트를 가진 요소를 생성한다.

  ```html
  <!--p.myId{HelloWorld!} 탭-->
  <p class="myId">HelloWorld!</p>
  ```

    <br>

- ### 자동 넘버링 `$`
  요소가 가진 텍스트에 자동적으로 넘버링을 부여한다.
  ```html
  <!--p.numbering{Paragraph$}*5 탭-->
  <p class="numbering">Paragraph1</p>
  <p class="numbering">Paragraph2</p>
  <p class="numbering">Paragraph3</p>
  <p class="numbering">Paragraph4</p>
  <p class="numbering">Paragraph5</p>
  ```
    <br>
