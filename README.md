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

🔋 2024.05.22

<details><summary>💬 클래스 </summary>

- 타입스크립트는 ES2015에서 자바스크립트에 도입된 클래스 표기법에 타입을 붙일 수 있습니다.

```tsx

class Point {
  x: number;
  y: number;

  // 인수가 존재하지 않을 경우 초깃값을 지정
  constructor(x: number = 0; y: number = 0) {
    this.x = x
    this.y = y
  }

  // 반환값이 없을 경우 void를 지정
  moveX(n: number): void {
    this.x += n
  }

  moveY(n: number): void {
    this.y += n
  }
}

const point = new Point()
point.moveX(10)
console.log(`${point.x}, ${point.y}`) // 10, 0

```

```tsx

class Point3D extends Point {
  z: number;

  constructor(x: number = 0, y: number = 0, z: number = 0) {
    super(x,y)
    this.z =z
  }

  moveZ(n: number): void {
    this.z += n
  }
}

const point3D = new Point3D()
// 상속원의 메서드를 호출 할 수 있다.
point3D.movex(10)
point3D.movez(20)
console.log(`${point3D.x}, ${point3D.y}, ${point3D.z}`) // 10, 0, 20

```

```tsx

interface IUser {
  name: string;
  age: number;
  sayHello: () => string;
}

class User implements IUser {
  name: string;
  age: number;

  constructor() {
    this.name = ''
    this.age = 0
  }

  sayHello(): string{
    return `안녕하세요. 저는 ${this.name}이며, ${this.age}살 입니다.`
  }
}

const user = new User()
user.name = 'Lee'
user.age = 25
console.log(user.sayHello())

```

</details>

<details><summary>💬 접근 수정자 </summary>

- 타입스크립트의 클래스에서는 접근 수정자로 `public`,`private`,`protected`를 제공합니다.

- 이들을 부여함으로써 멤버나 메서드 접근 범위를 제어할 수 있습니다.

- 접근 수정자를 지정하지 않을 경우 public으로 취급 합니다.

```tsx

class BasePoint3D {
  public x: number;
  public y: number;
  public z: number;
}

const basePoint = new BasePoint3D()
basePoint.x
basePoint.y
basePoint.z

class ChildPoint extends BasePoint3D {
  constructor() {
    super()
    this.x
    this.y
    this.z
  }
}

```

</details>

<details><summary>💬 실제 개발시 중요한 타입 </summary>

- `Enum 타입`

- `제네릭 타입`

- `Union 타입과 Intersection 타입`

- `리터럴 타입`

- `never 타입`

</details>

🔋 2024.05.20

<details><summary>💬 타입 앨리어스 </summary>

- 타입 앨리어스는 타입 지정의 별명을 덧붙이는 기능입니다.

- 타입 앨리어스를 활용하면 타입 정의에 이름을 붙일 수 있습니다.

- 그 이름을 참조하여 같은 타입을 여러 차례 사용할 수 있습니다.

- type 키워드를 사용하여 지정합니다.

- `type 타입명 = 값`

- `type Name = string`

```tsx

type Point = {
  x: number;
  y: number;
}

function printPoint(point: Point) {
  console.log(`x좌표는 ${point.x}입니다.`)
  console.log(`y좌표는 ${point.y}입니다.`)
}

printPoint({ x: 100, y: 100})

```

- 함수 자체의 타입도 타입 앨리어스로 정의 할 수 있습니다.

```tsx

type Formatter = (a: string) => string

function printName(firstName: string, formatter: Formatter) {
  console.log(formatter(firstName))
}

```

- 객체의 키 이름을 명시하지 않고 타입 앨리어스를 정의할 수도 있습니다.


```tsx

const labels: Label = {
  topTable: '톱 페이지의 제목입니다.',
  topSubTitle: '톱 페이지의 하위 제목입니다.',
  topFeature1: '톱 페이지의 기능 1입니다.',
  topFeature2: '톱 페이지의 기능 2입니다.',
}

const foo: Label = {
  message: 100
}

```

</details>

<details><summary>💬 인터페이스 </summary>

- 타입스크립트의 인터페이스는 타입 앨리어스와 비슷한 기능이지만, 보다 확장성이 높은 열린 기능을 갖고 있습니다.

- 클래스와 함께 많이 사용합니다.

```tsx

interface 타입명 {
  속성_1: 타입_1;
  속성_2: 타입_2;
}

```

```tsx

interface Point {
  x: number;
  y: number;
  z?: number;
}

interface Colorful {
  color: string;
}

interface Circle {
  radius: number;
}

interface ColorfulCircle extends Colorful, Circle {}

const cc: ColorfulCircle = {
  color: '빨강',
  radius: 10
}

```

</details>

🔋 2024.05.19

<details><summary>💬 any </summary>

- 이름 그대로 모든 타입을 허용하는 타입입니다.

- 특정한 값에 대해 타입 체크 구조를 적용하고 싶지 않을 때 사용합니다.

```tsx

let user: any = { firstName: 'Lee' }

// 다음 행의 코드는 모두 컴파일러 에러가 발생하지 않습니다.
user.hello()
user()
user.age = 100
user = 'Hello'

// 다른 타입으로 대입해도 에러가 발생하지 않습니다.
const n: number = user

```

</details>

<details><summary>💬 함수 </summary>

- 타입스크립트의 함수에서는 인수와 반환값의 타입을 지정 할 수 있습니다.

```tsx

function(인수_1_: 타입1, 인수_2_: 타입2 ...): 반환값{
  // ...
}

```

```tsx

function sayHello(name: string): string {
  return `Hello ${name}`
}

sayHello('Lee')

```


```tsx

(인수명: 인수_타입): 반환값_타입 => 자바스크립트_식

let sayHello = (name: string => `Hello ${name}`)

```

```tsx

(인수명: 인수_타입) ==> 반환값_타입

```

</details>

<details><summary>💬 타입추론 </summary>

- 타입스크립트에서 명시적인 변수의 초기화를 수행하면 타입 추론을 통해 자동적으로 타입이 결정되는 기능이 있습니다.

```tsx

const age = 10
console.log(age.length) // 에러발생(length 속성이 없기 때문)

const user = {
  name: 'Lee',
  age: 25
}

console.log(user.age.length) // 에러발생

```


```tsx

// window.confirm 함수의 반환 타입은 boolean인 것을 타입스크립트가 알고 있으므로 대입하는 함수 타입이 일치하지 않으면 에러 발생
window.confirm = () => {
  console.log('confirm 함수')
}

```

</details>

<details><summary>💬 타입 어서션 </summary>

- 타입스크립트가 구체적인 타입을 알 수 없는 경우도 있습니다.

- 타입스크립트에서 document.getElementById()로 얻을 수 있는 대상의 타입에 관여 할 수 없으므로 div, canvas 등을 자동으로 판정해서 처리하지 않습니다.

```tsx

const myCanvas = document.getElementById('main_canvas')
console.log(myCanvas.width) // 에러발생

```

```tsx

const foo: any = 'test'
const bar: number = foo as number
// 컴파일 시에는 number 타입으로서 다뤄져 에러가 발생하지 않지만, 실행 시 string 타입으로 전달되므로 에러 발생
console.log()

```

</details>

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