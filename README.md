# 202430231 정하민

React2 수업에서 진행한 Next.js 실습과 학습 내용을 기록하는 저장소입니다.

## 학습 목차

- [2026.09.09 - Next.js 프로젝트 시작하기](#20260909---nextjs-프로젝트-시작하기)
- [2026.09.16 - 라우팅과 프로젝트 구성](#20260916---라우팅과-프로젝트-구성)

## 실행 방법

```bash
npm install
npm run dev
```

개발 서버가 시작되면 브라우저에서 [http://localhost:3000](http://localhost:3000)에 접속합니다.

| 명령어 | 용도 |
| --- | --- |
| `npm run dev` | 개발 서버 실행 |
| `npm run build` | 배포용 결과물 생성 |
| `npm run start` | 빌드된 애플리케이션 실행 |
| `npm run lint` | 코드 규칙 검사 |

## 2026.09.16 - 라우팅과 프로젝트 구성

### 동적 세그먼트

폴더 이름에 대괄호를 사용하면 URL 값을 매개변수로 받을 수 있다.

| 폴더 형태 | 의미 | URL 예시 |
| --- | --- | --- |
| `[slug]` | 한 개의 동적 값 | `/blog/hello` |
| `[...slug]` | 한 개 이상의 경로를 모두 받음 | `/docs/a/b` |
| `[[...slug]]` | 값이 없어도 되는 포괄 경로 | `/shop`, `/shop/a` |

예를 들어 `src/app/blog/[slug]/page.tsx`는 `/blog/first-post` 같은 주소를 처리하며, 페이지에서는 `params`를 통해 `slug` 값을 확인할 수 있다.

### 라우팅에 사용되는 폴더 규칙

- `(group)`: URL에는 나타나지 않지만 관련 라우트를 묶을 때 사용한다.
- `_folder`: 라우팅 대상이 아닌 내부 파일을 분리하는 비공개 폴더다.
- `@slot`: 한 레이아웃 안에서 여러 화면 영역을 동시에 구성하는 병렬 라우트에 사용한다.
- `(.)`, `(..)`, `(...)`: 다른 경로의 화면을 현재 레이아웃에서 보여 주는 인터셉팅 라우트 표기다.

컴포넌트와 유틸리티는 사용하는 기능 가까이에 둘 수 있다. 폴더가 `app` 아래에 있더라도 `page.tsx`나 `route.ts`가 없다면 그 폴더 자체가 외부에 공개되는 페이지가 되는 것은 아니다.

### 특수 파일

| 파일 | 역할 |
| --- | --- |
| `layout.tsx` | 이동해도 유지되는 공통 UI |
| `template.tsx` | 이동할 때 새로 생성되는 공통 UI |
| `loading.tsx` | 콘텐츠를 기다리는 동안 표시할 화면 |
| `error.tsx` | 하위 영역에서 발생한 오류를 처리할 화면 |
| `not-found.tsx` | 찾을 수 없는 경로 또는 데이터의 화면 |
| `page.tsx` | 해당 경로의 실제 페이지 |

`layout.tsx`는 페이지 이동 중에도 상태와 DOM을 유지하는 데 적합하고, `template.tsx`는 이동할 때마다 상태를 초기화해야 하는 경우에 적합하다.

## 2026.09.09 - Next.js 프로젝트 시작하기

### 프로젝트 구성

`create-next-app`을 사용하면 TypeScript, ESLint, Tailwind CSS, App Router 등의 설정을 한 번에 구성할 수 있다. 이 저장소는 다음 옵션을 기준으로 생성했다.

- TypeScript 사용
- ESLint 사용
- App Router 사용
- 소스 코드를 `src` 폴더에 배치
- `@/*` import 별칭 사용

정적 이미지나 글꼴처럼 그대로 제공할 파일은 `public`에 둔다. 예를 들어 `public/profile.png`는 화면에서 `/profile.png` 경로로 접근할 수 있다.

### 주요 파일과 폴더

| 경로 | 역할 |
| --- | --- |
| `src/app/layout.tsx` | 여러 페이지가 공유하는 최상위 레이아웃 |
| `src/app/page.tsx` | `/` 주소에 표시되는 페이지 |
| `src/app/globals.css` | 애플리케이션 전체에 적용되는 스타일 |
| `public/` | 이미지 등의 정적 파일 |
| `package.json` | 의존성과 실행 스크립트 관리 |
| `tsconfig.json` | TypeScript 및 경로 별칭 설정 |

App Router에서는 폴더가 URL 구간을 나타내고, 그 폴더 안에 `page.tsx`가 있어야 실제로 접근할 수 있는 페이지가 된다. `layout.tsx`는 하위 페이지 사이에서 공통 UI를 유지할 때 사용한다.

### 경로 별칭

이 프로젝트의 `tsconfig.json`에는 `@/*`가 `./src/*`를 가리키도록 설정되어 있다. 따라서 깊은 상대 경로 대신 아래처럼 작성할 수 있다.

```tsx
import Button from "@/components/Button";
```

## 참고 자료

- [Next.js App Router 시작하기](https://nextjs.org/docs/app/getting-started)
- [Next.js 프로젝트 구조](https://nextjs.org/docs/app/getting-started/project-structure)
- [Next.js 동적 세그먼트](https://nextjs.org/docs/app/api-reference/file-conventions/dynamic-routes)
