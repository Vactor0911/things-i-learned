# Head Tag
문서정보(메타데이터) 를 담고 있음  
브라우저 화면에 직접적으로 보이지는 않지만 숨은 데이터를 정의하는 태그들이 포함됨  

<br/>

**배치할 수 있는 요소**
- `<title>`
    - 브라우저의 제목 표시줄이나 페이지 탭에 보이는 문서 제목을 정의
    - 텍스트만 포함할 수 있으며 태그를 포함하더라도 무시
    ```html
    <title>SampleTitle</title>
    ```
- `<base>`
    - 문서 안의 모든 상대 URL이 사용할 기준 URL을 지정
    - 문서에는 하나의 `<base>` 요소만 존재할 수 있음
    ```html
    <base href="/assets/images/" />
    ```
- `<link>`
    - 현재 문서와 외부 리소스의 관계를 명시
    - 스타일 시트를 연결할 때 제일 많이 사용됨
    - 사이트 아이콘("파비콘"과 홈 화면 아이콘) 연결 등을 목적으로 사용될 수 있음
    ```html
    <!-- 파비콘 설정 -->
    <link rel="shortcut icon" href="./favicon.ico" />

    <!-- Style 시트 연결 -->
    <link href="/style.css" rel="stylesheet">
    ```
- `<style>`
    - 스타일 규칙을 담음
    ```html
    <style>
    .title {
        color: blue;
    }
    </style>
    ```
- `<meta>`
    - 다른 메타관련 요소로 나타낼 수 없는 메타데이터를 나타냄
    ```html
    <meta property="og:image" content="https://example.com/image.jpg">
    ```
- `<script>`
    - 데이터나 자바스크립트 코드를 웹 문서에 포함할 때 사용
    ```html
    <script src="javascript.js"></script>
    ```

<br>

# OpenGraph 오픈그래프
콘텐츠의 요약내용이 SNS에 게시되는데 최적화된 데이터를 가지고 갈 수 있도록 설정하는 것

<br/>

**기본적으로 웹에 설정해줘야하는 og 메타태그**
```html
<meta property="og:type" content="website">
<meta property="og:url" content="https://example.com/page.html">
<meta property="og:title" content="Content Title">
<meta property="og:image" content="https://example.com/image.jpg">
<meta property="og:description" content="Description Here">
<meta property="og:site_name" content="Site Name">
<meta property="og:locale" content="en_US">
<!-- 다음의 태그는 필수는 아니지만, 포함하는 것을 추천함 -->
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
```

**Naver 블로그, 카카오톡 미리보기 설정**
```html
<meta property="og:title" content="콘텐츠 제목" /> 
<meta property="og:url" content="웹페이지 URL" />
<meta property="og:type" content="웹페이지 타입(blog, website 등)" />
<meta property="og:image" content="표시되는 이미지" /> 
<meta property="og:title" content="웹사이트 이름" /> 
<meta property="og:description" content="웹페이지 설명" />
```

**트위터 미리보기 설정**
```html
<meta name="twitter:card" content="트위터 카드 타입(요약정보, 사진, 비디오)" /> 
<meta name="twitter:title" content="콘텐츠 제목" /> 
<meta name="twitter:description" content="웹페이지 설명" /> 
<meta name="twitter:image" content="표시되는 이미지 " />
```

**모바일 앱 미리보기 설정**
```html
<!--iOS-->
<meta property="al:ios:url" content=" ios 앱 URL" />
<meta property="al:ios:app_store_id" content="ios 앱스토어 ID" /> 
<meta property="al:ios:app_name" content="ios 앱 이름" /> 
<!--Android-->
<meta property="al:android:url" content="안드로이드 앱 URL" />
<meta property="al:android:app_name" content="안드로이드 앱 이름" />
<meta property="al:android:package" content="안드로이드 패키지 이름" /> 
<meta property="al:web:url" content="안드로이드 앱 URL" />
```