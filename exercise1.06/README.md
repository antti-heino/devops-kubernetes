VAAL1460:Server heinoa$ kubectl apply -f manifests/deployment.yaml
deployment.apps/server-dep created
VAAL1460:Server heinoa$ kubectl apply -f manifests/service.yaml
service/server-svc created
VAAL1460:Server heinoa$ 


http://localhost:8082/ returned "This is a reply!" when accessed by browser