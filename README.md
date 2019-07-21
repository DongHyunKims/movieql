# movieql
Graphql을 사용한 영화 API

### Chapter 1

1. over-fetching: 요청한 영역의 정보보다, 많은 정보를 서버에서 받아온다.
2. under-fetching: REST 에서 하나를 완성하기 위해 여러번 request를 보내야하는 경우

**Graph QL은 URL 개념이 없다고 생각하면 된다. 하나의 end point만 존재 한다고 생각하면 된다.**

~~~ javascript
/*
예를 들어 인스타그램에서 하나의 feed를 가져와야 하는데 RESTful 이라면 3번의 요청을 보내야 한다.

/feed
/notification
/user/1

하지만 graph ql은 query로 가져오게 된다.

query {
    feed {

    },
    notification, {

    },
    user: {

    }
}

-> 사용자가 요청한 정보만 정확히 보낼수 있다.
*/
~~~

### Chapter2

schema는 사용자에게 보내거나 사용자로부터 받을 data에 대한 설명이다.

### Chapter3
Query는 개발자가 받을 데이터의 형식, 구조를 의미한다.
GraphQL은 이런 자세한 정보, 타입을 서버에 정의해 놓고 있다.

`resolvers`는 query를 해결하는 것이다. 개발자가 원하는대로 resolvers를 프로그래밍 가능하다. 메모리, 데이터베이스, 다른 api등으로 연결이 가능하다.

`http://localhost:4000/`: GraphQL-yoga 내부에 있는 GraphQL-playground로 접속 가능.

### Chapter4

동작방식: Query를 입력하면 그에 맞는 resolvers를 찾아 return 한다.

보다시피 GraphQL에서 타입을 제공하는 것은 어떤 데이터를 넘기던 굉장히 안전하다.

GraphQL-playground: 데이터베이스를 테스트 할수 있도록 도와준다.

이미 정의해 놓은 스키마대로 데이터베이스 소스에서 원하는 데이터만 가져올수 있는 장점이 있다. over-fetching을 하지 않아도 된다.

### Chapter5,6

정의 된 세가지 형식: Query, mutation, subscription

query를 통해 질문하고 resolvers 함수를 통해 해결후 정의한 데이터를 내려주는 것이 Graph QL의 중요한 점이다.

Resolvers는 view와 같은 개념이고, Schema는 URL 과 같은 개념이다.
