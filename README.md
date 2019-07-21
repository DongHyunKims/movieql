# movieql
Graphql을 사용한 영화 API

### Chapter 1

1. over-fetching: 요청한 영역의 정보보다, 많은 정보를 서버에서 받아온다.
2. under-fetching: REST 에서 하나를 완성하기 위해 여러번 request를 보내야하는 경우

** Graph QL은 URL 개념이 없다고 생각하면 된다. 하나의 end point만 존재 한다고 생각하면 된다.

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
