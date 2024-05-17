<!-- header 영역 -->
<p align="center">
 <img width="100px" src="https://res.cloudinary.com/anuraghazra/image/upload/v1594908242/logo_ccswme.svg" align="center" alt="GitHub Readme Stats" />
 <h2 align="center">이현종</h2>
 <p align="center">📖 리액트 및 Next.js 연습</p>
</p>

<h3 align="center">📚 Tech Stack 📚</h3>
<p align="center">
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=HTML5&logoColor=white"/></a>&nbsp 
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=CSS3&logoColor=white"/></a>&nbsp
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=JavaScript&logoColor=white"/></a>&nbsp
  <img src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=React&logoColor=white"/></a>&nbsp
  <img src="https://img.shields.io/badge/Windows-0078D6?style=flat-square&logo=Windows&logoColor=white"/></a></br>
  <img src="https://img.shields.io/badge/node.js-339933?style=for-the-badge&logo=Node.js&logoColor=white"></a>&nbsp
  <img src="https://img.shields.io/badge/bootstrap-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white"></a>&nbsp
  <img src="https://img.shields.io/badge/Visual Studio Code-007ACC?style=for-the-badge&logo=Visual Studio Code&logoColor=white"></a><br/>
  <a href="https://github.com/soaple/first-met-react-practice-v18">
  <img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=GitHub&logoColor=white">
  </a>
</p>

[![Solved.ac 프로필](http://mazassumnida.wtf/api/v2/generate_badge?boj=guswhd284)](https://www.acmicpc.net/user/guswhd284)

🔋 2024.05.18

<details><summary>💬 타입스크립트와 자바스크립트의 차이 </summary>

- 타입스크립트는 자바스크립트를 확장한 상위 호환 언어입니다.

- 자바스크립트의 코드는 그대로 타입스크립트 코드로 읽을수 있습니다.

- 자바스크립트에 주로 다음 기능을 추가한 것 입니다.

- `타입 정의`

- `인터페이스와 클래스`

- `null/undefined-safe`

- `범용적인 클래스나 메서드 타입을 실현하는 제네릭`

- `편집기의 입력 자동완성`

- `그 외, ECMA에서 정의되어 있는 자바스크립트의 최신사양`

</details>

<details><summary>💬 변수 </summary>

- 변수 선언에는 var, let, const를 사용합니다.

- 변수명 뒤에 `: 타입`을 추가해 타입 애너테이션을 합니다.(생략 가능)

`var 변수 : 타입 = 값`

`let 변수 : 타입 = 값`

`const 변수 : 타입 = 값`

``` tsx

function calc(isSum: boolean) {
  let a = 100
  if(isSum) {
    let b = a + 1
    return b;
  }
  return b
}

```

- const 변수는 let 변수와 같은 스코프 규칙을 갖습니다.

``` tsx

const num: number = 100

num = 200

```

</details>

<details><summary>💬 배열 </summary>

- 배열에 타입을 지정할 때는 그 배열을 구성하는 타입과 [] 표기를 사용합니다.

```tsx

const array: string[] = []
array.push('abc')
array.push(1) // 배열 타입과 맞지 않으므로 에러가 발생

```

</details>

<details><summary>💬 객체 타입 </summary>

- 객체는 키와 값을 이용한 데이터 형식의 인스턴스입니다.

```tsx

const user: { name: string; age: number; } = {
  name: 'Hana',
  age: 36
}

console.log(user.name)
console.log(user.age)

```

```tsx

function printName(obj: { firstName: string; lastName?: string }) {
  // ...
}

printName({ firstName: 'Hyunjong' })

```

</details>

🔋 2024.05.16

<details><summary>💬 Next.js란? </summary>

- 오픈소스 웹 애플리케이션 프레임워크입니다.

- 웹 프런트엔드 라이브러리인 리액트를 기반으로 구현 및 개발 되었습니다.

- Next.js는 리액트로 웹 애플리케이션을 만들 때 가장 인기 있는 프레임워크입니다.

- 리액트 공식 문서에서도 Node.js로 서버 사이드 렌더링 웹 사이트를 구축할 때 Next.js를 활용할 것을 권장합니다.

- Next.js는 Vercel사가 개발 하였으며, 리액트 기반 모던 애플리케이션을 위한 풀 스택 프레임워크입니다.

- Next.js는 프런트엔드 엔지니어들을 고민하게 했었던 복잡한 프런트엔드 개발 환경을 단순화 할 수 있는 다양한 기능을 포함합니다.

</details>

<details><summary>💬 타입스크립트란? </summary>

- 자바스크립트에 정적 타입 기능 등을 탑재한 프로그래밍 언어로, 마이크로소프트가 중심이 되어 개발을 추진하고 있습니다.

- 원래 자바스크립트를 확장한 AltJS의 하나로 등장했으며, 현재 모던 프론트엔드 개발 프로그래밍 언어의 표준으로 자리잡았습니다.

</details>

🔋 2024.05.04

<details><summary>💬 설치 </summary>

- `npm install typescript --save-de`

</details>