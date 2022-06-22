VAAL1460:Server heinoa$ kubectl apply -f manifests/
deployment.apps/server-dep created
ingress.networking.k8s.io/anttitmh-server-ingress created
service/server-svc created
VAAL1460:Server heinoa$ kubectl get pods
NAME                          READY   STATUS              RESTARTS   AGE
server-dep-677cbcfdcf-zkpk4   0/1     ContainerCreating   0          10s
VAAL1460:Server heinoa$ kubectl get pods
NAME                          READY   STATUS    RESTARTS   AGE
server-dep-677cbcfdcf-zkpk4   1/1     Running   0          36s
VAAL1460:Server heinoa$ kubectl logs server-dep-677cbcfdcf-zkpk4 

> server@1.0.0 start /usr/src/app
> node index.js

Server listening on port:3000
VAAL1460:Server heinoa$ 


http://localhost:8081/ returned "This is a reply!" when accessed by browser