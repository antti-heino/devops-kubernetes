VAAL1460:Server heinoa$ kubectl apply -f manifests/deployment.yaml
deployment.apps/server-dep created
VAAL1460:Server heinoa$ kubectl get pods
NAME                          READY   STATUS    RESTARTS   AGE
server-dep-677cbcfdcf-cm6pl   1/1     Running   0          10s
VAAL1460:Server heinoa$ kubectl logs server-dep-677cbcfdcf-cm6pl

> server@1.0.0 start /usr/src/app
> node index.js

Server listening on port:3000
VAAL1460:Server heinoa$ 