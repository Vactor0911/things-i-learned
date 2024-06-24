# CSS
**Cascading Style Sheets**  
HTML문서를 꾸밀 때 사용하는 스타일을 잘 정리한 시트  
HTML로 웹 페이지의 뼈대를 만들고, CSS로 웹 페이지를 예쁘게 꾸밈

<br/>

## 구조
- `선택자` `Selector` : 꾸미고 싶은 HTML 요소를 선택
- `속성명` `Attribute` : 꾸미고 싶은 속성명
- `속성값` `Value` : 어떻게 꾸밀지에 대한 값

```css
h1 /*선택자*/ {
    color /*속성명*/: "blue" /*속성값*/;
}
```

<br/>

## 적용 방법
- **인라인 스타일 (Inline Style)**  
    스타일을 정의하고 싶은 HTML 요소에 직접 정의하는 방식
    ```html
    <h1 style="color: azure; background-color: gray; padding: 10px;">Hello CSS!</h1>
    ```
- **내부 스타일 (Internal Style)**  
    `<head>` 태그 안에 `<style>` 태그를 사용하여 정의하는 방식
    ```html
    <style>
        .cyan {
            color: darkcyan;
            border: 1px solid cyan;
            padding: 5px;
        }
    </style>
    ...
    <p class="cyan"><b>This is the first step of my journey of css.</b></p>
    ```
- **외부 스타일 (External Style)**  
    CSS 파일을 외부에 정의하고, 외부에 정의한 CSS를 HTML파일에 연결하여 사용하는 방식
    ```css
    .text-decoration-none {
        text-decoration: none;
        font-weight: bold;
        color: red;
    }
    ```
    ```html
    <link rel="stylesheet" href="HelloCSS.css">
    ...
    <p>Every codes i wrote will be uploaded in <a class="text-decoration-none" href="https://github.com/Vactor0911/things-i-learned">Here.</a></p>
    ```

<br/>

## 주석
```css
/* 한 줄 주석 */

/*
    여러
    줄
    주석
*/
```

## 분류
- `제작자 스타일` : 웹 사이트를 제작하는 개발자가 작성한 스타일 시트
- `사용자 스타일` : 사이트를 방문하는 일반 사용자들이 구성한 스타일 시트 (고대비 설정 기능 등)
- `브라우저 스타일` : 브라우저마다 기본적으로 지정하고 있는 스타일

**적용 순서**

`사용자 !important` > `제작자!important` > `제작자` > `사용자` > `브라우저`