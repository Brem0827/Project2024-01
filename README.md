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

🔋 2024.05.27

<details><summary>💬 리액트의 기본 키워드 </summary>

- 리액트에서의 개발은 일반적으로 자바스크립트/타입스크립트를 확장한 JSX를 사용합니다.

- JSX는 자바스크립트/타입스크립트 안에 HTML 태그를 직접 삽입할 수 있는 기능입니다.

- 타입스크립트에서 JSX를 사용하는 경우에는 `.tsx`확장자를 사용하여 TSX라고 부릅니다.

</details>

<details><summary>💬 리액트에서의 컴포넌트 </summary>

- 컴포넌트란 리액트 요소 또는 다른 컴포넌트를 조합한 것입니다.

- 페이지에 표시되는 UI의 일부를 추출한 것이라고 우선 생각해도 좋습니다.

- JSX 코드는 브라우저에서는 직접 해석할 수 없으므로, 웹팩에 의해 자바스크립트 코드로 변화됩니다.

- JSX로 구현된 컴포넌트는 자바스크립트의 객체로 표현됩니다.

- 변환된 자바스크립트 코드를 브라우저가 읽어서 실행하고 화면을 그리기 시작합니다.

- 자바스크립트 코드에서 브라우저의 표시 내용을 바꿔 쓸 때는 DOM에 접근해야 하며, 리액트의 화면 그리기 엔진에서는 먼저 가상 DOM을 구현합니다.

</details>

<details><summary>💬 리액트 요소</summary>

- JSX상의 리액트 요소는 HTML과 거의 비슷하게 기술 및 사용할 수 있습니다.

- 단, JSX 안의 리액트 요소와 HTML 태그에는 몇 가지 차이점이 있습니다.

- JSX에서는 중괄호를 사용해서 자바스크립트의 값을 삽입할 수 있습니다.

- 삽입한 값은 화면을 그릴 때 텍스트로 표시됩니다.

- HTML의 일부 속성 등은 그대로 사용할 수 없습니다.

- HTML 요소의 속성에 사용되는 `class`나 `for`은 자바스크립트에서 예약어에 해당하기 때문에, 그대로 사용할 수 없습니다.

- JSX에서는 대신 `className`, `htmlFor`를 사용합니다.

</details>

<details><summary>💬 컴포넌트 </summary>

- 리액트에서 컴포넌트는 형태와 작동을 설정한 UI의 부품 단위입니다.

 - 리액트 요소나 다른 컴포넌트를 조합한 것을 반환합니다.

 - 컴포넌트는 함수나 클래스를 사용해서 구현합니다.

 - 현재는 주로 함수를 사용한 함수 컴포넌트를 사용합니다.

 - `함수 컴포넌트`

 - `클래스 컴포넌트`

</details>

<details><summary>💬 함수 컴포넌트와 클래스 컴포넌트 </summary>

- 함수 컴포넌트는 부모로부터 props를 받아 JSX를 반환하기만 하는 컴포넌트였으며, 뒤에서 설명할 내부 상태나 라이프사이클을 다룰 수 없습니다.

- 리액트 16.8부터 React Hooks가 도입되면서, 함수 컴포넌트에서도 내부 상태나 라이프사이클을 다룰 수 있게 되었습니다.

- 그에 따라, 클래스 컴포넌트로만 표현할 수 있었던 함수 컴포넌트로도 기술할 수 있게 되었습니다.

- 함수 컴포넌트 + 훅과 비교해, 클래스 컴포넌트에는 다음과 같은 문제점이 있습니다.

- `콜백 함수에서 props나 state에 참조하려면 사전에 this 콘텍스트를 바인드 해야한다.`

- `라이프사이클을 다루는 메서드가 많아서 복잡하다.`

- `상태가 함께 있어서 작동을 다른 컴포넌트와 공통화하기 어렵다.`

</details>

🔋 2024.05.26

<details><summary>💬 keyof 연산자 </summary>

- 타입에 대해 keyof 연산자를 사용하면 해당 타입이 가진 각 속성의 타입의 Union 타입을 반환합니다.

```tsx

interface User {
  name: string;
  age: number;
  email: string;
}

type UserKey = keyof User

const key1: UserKey = 'name'
const key2: UserKey = 'phone'

function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key]
}

const user: User = {
  name: 'Lee',
  age: 25,
  email: 'test@example.com'
}

const userName = getProperty(user, 'name')

const userGender = getProperty(user, 'gender')

```

</details>

<details><summary>💬 인덱스 타입 </summary>

- 인덱스 타입을 사용하면 객체의속성이 변할 때, 모아서 타입을 정의할 수 있습니다.

- 각 속성에 대응하는 타입을 정의할 수 없을 때 간단하게 기술할 수 있습니다.

```tsx

type SupportVersions = {
  [env: number]: boolean;
}

let Versions: SupportVersions = {
  102: false,
  103: false,
  104: true,
  'v105': true
}

```

</details>

<details><summary>💬 readonly </summary>

- 타입스크립트에서는 타입 앨리어스, 인터페이스, 클래스에 대해 readonly 속성을 지정할 수 있습니다.

- `readonly`가 지정된 속성은 변경할 수 없습니다.

```tsx

type User = {
  readonly name: string;
  readonly gender: string;
}

let user: User = { name: 'Lee', gender: 'Male' }

user.gender = 'Female' // 에러 발생

```

- 자바스크립트의 재대입 불가 기능으로 const 기능이 있으나, 둘의 용도는 다릅니다.

- const는 변수의 대입에 대해 수행하는 선언, readonly는 객체나 클래스의 속성에 대해 수행하는 선언으로 컴파일시 에러를 감지할 수 있습니다.

```tsx

type User = {
  name: string;
  gender: string;
}

type UserReadonly = Readonly<User>

let user: User = { name: 'Lee', gender: 'Male' }
let userReadonly: UserReadonly = { name: 'Lee', gender: 'Male' }

user.name = 'Hyun' // OK
userReadonly.name = 'Hyun' // 컴파일 시 에러 발생

```

</details>

<details><summary>💬 unknown </summary>

- `unknown`은 any와 마찬가지로 모든 값을 대입할 수 있는 타입입니다.

- 하지만 any와 달리 대입된 값 상태 그대로는 임의의 함수나 속성으로 접근할 수 없습니다.

- typeof나 instanceof 등을 사용해 타입 안전한 상태를 만든 뒤, 변숫값에 접근하는 함수 등의 처리를 실행할 수 있습니다.


```tsx

const x: unknown = 123
const y: unknown = 'Hello'

console.log(x.toFixed(1))
console.log(x.toLowerCase())

if(typeof === 'string') {
  console.log(x.toFixed(1)) // 123.0
}

if(typeof y === 'string') {
  console.log(y.toLowerCase()) // Hello
}

```

</details>

<details><summary>💬 비동기 Async/Await </summary>

- 비동기 처리 API인 Promise의 간략한 구문에 해당하는 것이 `Async/Await`의 기능입니다.

- 이 기능은 타입스크립트라기보다는 ECMAScript 사양 범위에 해당합니다.

```tsx

function fetchFromServer(id: string): Promise<{success: boolean}> {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({success: true})
    }, 100)
  })
}

// async를 사용하기 위해서는 async function 안에서만 호출해야 한다.
async function asyncFunc(): Promise<string> {
  const result = await fetchFramServer('111')
  return `The result: ${result.success}`
}
(async () => {
  const result = await asyncFunc()
  console.log(result)
})()

asyncFunc().then(result => console.log(result))

```

</details>

<details><summary>💬 타입 정의 파일 </summary>

- 타입스트립트에는 자바스크립트 모듈에 대해, 타입 정보를 부여할 수 있는 타입 정의 파일이라는 구조를 제공합니다.

- `@types`로 대표되는 공개된 타입 정의 파일을 도입

- 타입 정의 파일을 직접 작성한다.

</details>

<details><summary>💬 타입 정의 파일 도입 </summary>

- 첫 번째는 `@types/[라이브러리명]`으로 공개된 타입 정의 파일을 설치하는 방법입니다.

- 현재 타입스크립트 보급과 함께, 여러 유명한 자바스크립트 라이브러리들이 npm 저장소에 타입 정의 정보를 공개하고 있습니다.

- `$ npm install --save-dev @types/jquery`

</details>

🔋 2024.05.24

<details><summary>💬 never 타입 </summary>

- never 타입은 절대로 발생하지 않는 값의 종류를 나타냅니다.

```tsx

// 에러가 항상 반환되는 함수로 절대로 값이 정상으로 반환되지 않을 때 never 타입을 지정합니다.
function errir(message: string): never {
  throw new Error(message)
}

function foo(x: string | number | number[]): boolean {
  if(typeof x === 'string') {
    return true
  } else if (typeof x === 'number') {
    return false
  }

  // never을 사용해서 명시적으로 값이 반환되지 않은 것을 컴파일러에 전달할 수 있다.
  // never을 사용하지 않으면 타입스크립트는 컴파일 에러를 일으킨다.
  return error('Never happens')
}

```

- never와 같이 유효한 사용방법으로 if 문이나 switch문에서 타입스크립트의 타입의 조건 분기에 누락이 없는 것을 보증하는 경우가 있습니다.

```tsx
// 미래에 상수가 추가될 가능성이 있는 enum 타입을 정의
enum PageType {
  ViewProfile,
  EditProfile,
  ChangePassword,
}

const getTitleText = (type: PageType) => {
  switch(type) {
    case PageType.ViewProfile:
      return 'Setting'
      case PageType.EditProfile:
      return 'EditProfile'
      case PageType.ChangePassword:
      return 'ChangePassword'
    default:
      const wrongType: never = type
      throw new Error(`${wrongType} is not in PageType`)
  }
}

```

</details>

<details><summary>💬 옵셔널 체이닝 </summary>

- 옵셔널체이닝을 사용하면 중첩된 객체의 속성이 존재하는가에 관한 조건 분기를 간단하게 기술할 수 있습니다.

```tsx

interface User {
  name: string
  social?: {
    facebook: boolean
    twitter: boolean
  }
}

let user: User

user = { name: 'Lee', social: { facebook: true, twitter: true } }
console.log(user.social?.facebook)

user = { name: 'Lee' }
console.log(user.social?.facebook)

```

</details>

<details><summary>💬 논-널 어서션 연산자 </summary>

- 컴파일 옵션 `--strictNullCheck`를 지정해 컴파일하면, 타입스크립트는 일반적으로 null일 가능성이 있는 객체에 대한 접근을 에러로 취급합니다.

- `null`이 아님을 나타내고 싶을 때 논-널 어서션이라는 기능을 사용해 명시적으로 컴파일러에게 문제가 없음을 전달할 수 있습니다.

```tsx

function processUser(user?: User) {
  let s = user!.name
}

```

- ?를 사용하는 옵셔널 체이닝과 다소 비슷하지만 논0널 어서션은 어디까지나 에러를 발생시키지 않아도 된다고 타입스크립트 컴파일러에게 알려줄 뿐이고, 실행 시에 에러가 발생할 가능성은 있습니다.

</details>

🔋 2024.05.23

<details><summary>💬 Enum 타입 </summary>

- Enum을 사용하면 이름이 붙은 상수 셋을 정의할 수 있습니다.

- Enum은 자바스크립트에는 없는 기능으로, 타입스크립트에서 확장한 기능 중 하나입니다.

```tsx

const Direction = {
  'Up' : 0,
  'Down' : 1,
  'Left' : 2,
  'Right' : 3
}

```

```tsx

enum Direction {
  Up,
  Down,
  Left,
  Right
}

// enum Direction을 참조
let direction: Direction = Direction.Left
// 2 출력
console.log(direction)

direction = 'Left' // string을 넣을 경우 에러 발생

```

```tsx

enum Direction {
  Up = 'Up',
  Down = 'Down',
  Left = 'Left',
  Right = 'Right'
}


const value = 'Down'
// 문자열에서 Enum 타입으로 변환
const enumValue = value as Direction

if(enumValue === Direction.Down) {
  console.log('Down is selected')
}

```

</details>

<details><summary>💬 제네릭 타입 </summary>

- 제네릭은 클래스와 함수에 대해, 그 안에서 사용하는 타입을 추상화해 외부로부터 구체적인 타입을 지정할 수 있는 기능입니다.

```tsx

class Queue<T> {
  // T 값을 배열에 추가
  private array: T[] = []

  // T 타입의 배열의 첫 번째 값을 꺼낸다.
  push(item: T) {
    this.array.push(item)
  }

  pop(): T | undefined {
    return this.array.shift()
  }
}

const queue = new Queue<number>() // 숫자 타입을 다루는 큐 생성
queue.push(111)
queue.push(112)
queue.push('foo') // number타입이 아니므로 컴파일시 에러 발생

let str = 'bar'
str = queue.pop()

```

</details>

<details><summary>💬 Union 타입과 InterSection 타입 </summary>

- 타입스크립트의 타입은 조합해서 사용할 수 있습니다.

- 다소 복잡한 타입을 표현하고 싶을 때, 지정한 여러 타입의 합집합을 의미하는 Union 타입과 교집합을 의미하는 Intersection 타입이 있습니다.

- 각각 |와 &를 사용해 타입을 정의할 수 있습니다.

```tsx

function printId(id: number | string) {
  console.log(id)
}

// number이어도 정상 작동
printId(11)
// string이라도 정상 작동
printId('22')

```

```tsx

type Identity = {
  id: number | string;
  name: string;
}

type Contact = {
  name: string;
  email: string;
  phone: string;
}

type IdentityOrContact = Identity | Contact

const id: IdentityOrContact = {
  id: '111',
  name: 'Lee'
}

const contact: IdentityOrContact = {
  name: 'Hana',
  email: 'test@example.com',
  phone: '00011112222'
}

```

</details>

<details><summary>💬 리터럴 타입 </summary>

- |로 데이터를 구분하는 리터럴 타입을 사용하면 정해진 문자열이나 수치만 대입할 수 있는 타입으로 제어 할 수 있습니다.

- `변수: 허용하는_데이터_1 | 허용하는_데이터_2 | ...`

```tsx

let postStatus: 'draft' | 'published' | 'deleted'
postStatus = 'draft' // ok
postStatus = 'drafts' // 타입 선언에 없는 문자열이 할당 되어 있으므로 컴파일 시 에러

```

</details>

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