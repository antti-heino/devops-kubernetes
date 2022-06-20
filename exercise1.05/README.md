VAAL1460:Server heinoa$ kubectl apply -f manifests/deployment.yaml
deployment.apps/server-dep created
VAAL1460:Server heinoa$ kubectl get pods
NAME                          READY   STATUS    RESTARTS   AGE
server-dep-677cbcfdcf-5xm5v   1/1     Running   0          2m30s
VAAL1460:Server heinoa$ kubectl port-forward server-dep-677cbcfdcf-5xm5v 3003:3000
Forwarding from 127.0.0.1:3003 -> 3000
Forwarding from [::1]:3003 -> 3000
Handling connection for 3003


http://localhost:3003/ returned "This is a reply!" when accessed by browser