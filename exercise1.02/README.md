VAAL1460:1.01 heinoa$ kubectl create deployment server-dep --image=anttitmh/server
deployment.apps/server-dep created
VAAL1460:1.01 heinoa$ kubectl get pods
NAME                         READY   STATUS    RESTARTS   AGE
server-dep-7b5c8f5cf-4kh8f   1/1     Running   0          11s
VAAL1460:1.01 heinoa$ kubectl logs server-dep-7b5c8f5cf-4kh8f

> server@1.0.0 start /usr/src/app
> node index.js

Server listening on port:3000
VAAL1460:1.01 heinoa$ 