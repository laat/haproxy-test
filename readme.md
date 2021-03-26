# HAProxy test

## Term1:

```
$ docker build . -t ha && docker run -p 8080:80 -it --rm ha
```

## Term2:

```
$ yarn ts-node ./src/server.ts
```

## Term3:

```
$ yarn ts-node src/test.ts
```