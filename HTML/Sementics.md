# Sementic

- `<header>` : 페이지에 대한 정보를 담으며 페이지 상단에 위치한다.
- `<nav>` : 다른 페이지나 같은 페이지 안의 다른 부분으로 이어주는 네비게이션 링크로 구성된 섹션을 표현한다.
- `<aside>` : 페이지 전체 내용과는 어느정도 관련성이 있으나, 주요 내용과는 직접적인 연광성이 없는 분리된 내용을 담는다. (단어 뜻과 비슷)
- `<main>` : 문서의 body 요소의 주 콘텐츠(main content)를 정의한다.
- `<section>` : 문서나 응용프로그램의 일반적인 세션을 표현한다.
- `<article>` : 여러가지 아이템을 묶어 재사용이 가능하도록 그룹화한다.
- `<footer>` : 주로 저작권 정보나 서비스 제공자 정보 등을 나타내며 페이지 하단에 위치한다.
- `<details>` : 추가적인 정보를 나타내거나 사용자가 요청하는 정보를 나타낸다.
- `<summary>` : 부모 요소인 details 요소의 내용에 대한 요약이나 캡션 등을 나타낸다.
- `<figure>` : 일러스트, 다이어그램, 사진, 코드 등에 주석을 표기한다.
- `<figcaption>` : 부모 요소인 figure 요소의 내용들에 대한 캡션이나 제목을 나타낸다.
- `<mark>` : 하나의 문서 내에서 다른 문맥과의 관련성을 나타내기 위해 참조 목적으로 마킹하거나 하이라이트된 텍스트를 표현한다.
- `<time>` : 24시간에서의 시간 혹은 **그레고리력**의 정밀한 날짜를 나타낸다.
  <br/>
  <br/>

### 예시

<style>
    table {
    border-collapse: collapse;
    text-align: center;
    color: white;
    }
    th,
    td {
    border: 1px solid black;
    padding: 16px;
    }
    .header {
    background-color: red;
    }
    .nav {
    background-color: limegreen;
    }
    .aside {
    background-color: deeppink;
    }
    .main {
    background-color: dimgrey;
    }
    .section {
    background-color: royalblue;
    }
    .article {
    background-color: deepskyblue;
    }
    .gap {
    padding: 5px;
    border: none;
    }
    .footer {
    background-color: orange;
    }
</style>
<table>
    <thead>
    <tr>
        <td class="header" colspan="3">header</td>
    </tr>
    </thead>
    <tbody>
    <tr>
        <td class="nav" colspan="3">nav</td>
    </tr>
    <tr>
        <td class="aside">aside</td>
        <td class="main">
        main
        <!--Section-->
        <table>
            <tr>
            <td class="section">
                section
                <!--Article-->
                <table>
                <tr>
                    <td class="article">article</td>
                    <td class="gap"></td>
                    <td class="article">article</td>
                    <td class="gap"></td>
                    <td class="article">article</td>
                </tr>
                </table>
                <!--/Article-->
            </td>
            </tr>
        </table>
        <!--/Section-->
        </td>
    </tr>
    </tbody>
    <tfoot>
    <tr>
        <td class="footer" colspan="3">footer</td>
    </tr>
    </tfoot>
</table>

---

**그레고리력** : 태양력; 현재 전 세계적으로 통용하는 날짜 개념. [위키백과](https://ko.wikipedia.org/wiki/%EA%B7%B8%EB%A0%88%EA%B3%A0%EB%A6%AC%EB%A0%A5)
