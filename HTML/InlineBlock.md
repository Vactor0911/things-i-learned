# Block 요소

부모 요소의 전체 공간을 차지하여 `블록`을 생성한다.

### 특징

1. 화면 구성이나 레이아웃을 만들 때 주로 사용된다.
2. 한 칸을 모두 차지하므로 세로로 나열된다.
3. width, height, margin 속성을 적용할 수 있다.

### 블록 요소 목록

- `<address>` : 연락처 정보
- `<article>` : 단란 콘텐츠
- `<aside>` : 부가 콘텐츠
- `<blockquote>` : 긴 '블록' 인용구
- `<details>` : 상세 정보 위젯
- `<dialog>` : 대화상자
- `<dd>` : 설명 목록의 설명
- `<div>` : 문서의 분할
- `<dl>` : 설명 목록
- `<dt>` : 설명 목록의 정의
- `<fieldset>` : 필드 집합의 라벨
- `<figcapton>` : 그림의 설명
- `<figure>` : 미디어 콘텐츠 그룹과 설명
- `<footer>` : 페이지 혹은 구역의 최하단 구역
- `<form>` : 입력 폼
- `<h1>` ~ `<h6>` : 1~6 단계의 제목
- `<header>` : 페이지 혹은 구역의 최상단 구역
- `<hgroup>` : 헤더 정보 그룹
- `<hr>` : 수평선 (가로 구분선)
- `<li>` : 목록의 항목
- `<main>` : 중심 콘텐츠
- `<nav>` : 탐색 링크가 포함된 구역
- `<ol>` : 정렬된 목록
- `<p>` : 문단
- `<pre>` : 미리 서식을 적용한 글
- `<section>` : 웹 페이지의 구역
- `<table>` : 표 (chart)
- `<ul>` : 정렬되지 않은 목록

<br>
<br>

# Inline 요소

태그에 할당된 공간만 차지하여 줄바꿈 하지 않는 공간을 생성한다.

### 특징

1. 콘텐츠 영역만 차지하므로 가로로 나열된다.
2. margin-top, margin-bottom이 적용되지 않아 line-height를 이용한다.
3. width, height 속성이 적용되지 않는다.
4. text-align과 같은 속성이 적용되지 않는다.

### 인라인 요소 목록

- `<a>`
- `<abbr>`
- `<acronym>` **#Deprecated**
- `<audio>` (컨트롤이 보이면)
- `<b>`
- `<bdi>`
- `<bdo>`
- `<big>` **#Deprecated**
- `<br>`
- `<button>`
- `<canvas>`
- `<cite>`
- `<code>`
- `<data>`
- `<datalist>`
- `<del>`
- `<dfn>`
- `<em>`
- `<embed>`
- `<i>`
- `<iframe>`
- `<img>`
- `<input>`
- `<ins>`
- `<kbd>`
- `<label>`
- `<map>`
- `<mark>`
- `<meter>`
- `<noscript>`
- `<object>`
- `<output>`
- `<picture>`
- `<progress>`
- `<q>`
- `<ruby>`
- `<s>`
- `<samp>`
- `<script>`
- `<select>`
- `<slot>`
- `<small>`
- `<span>`
- `<strong>`
- `<sub>`
- `<sup>`
- `<svg>`
- `<template>`
- `<textarea>`
- `<time>`
- `<u>`
- `<tt>` **#Deprecated**
- `<var>`
- `<video>`
- `<wbr>`

<br>
<br>

# CSS Display 속성
요소가 화면에 어떻게 표시되는지 설정한다.  
`CSS default display value`의 값에 따라 속성이 달라진다.

### 예시
```css
    /*block 요소인 div의 display 속성을 inline으로 변경*/
    div {
        display: inline;
    }
```

### 속성 값 목록
- `none` : 보이지 않음
- `block` : block 요소
- `inline` : inline 요소
- `inline-block` : block과 inline의 중간 형태; 요소는 inline의 형태이나, 내부는 block처럼 표시함
- `flex` : Layout을 만들 때 주로 사용하는 속성

이외의 속성은 [MDN CSS display properties](https://developer.mozilla.org/en-US/docs/Web/CSS/display) 참조