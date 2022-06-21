VAAL1460:exercise1.09 heinoa$ kubectl apply -f manifests/
ingress.networking.k8s.io/anttitmh-pong-ingress created
deployment.apps/logoutput-dep created
service/logoutput-svc created
deployment.apps/pong-dep created
service/pong-svc created
VAAL1460:exercise1.09 heinoa$ kubectl get pods
NAME                             READY   STATUS    RESTARTS   AGE
logoutput-dep-7cb748b5b7-6p4nr   1/1     Running   0          12m
pong-dep-59c7dc6846-hl96h        1/1     Running   0          2m24s
VAAL1460:exercise1.09 heinoa$ kubectl get svc,ing
NAME                    TYPE        CLUSTER-IP      EXTERNAL-IP   PORT(S)    AGE
service/kubernetes      ClusterIP   10.43.0.1       <none>        443/TCP    15m
service/logoutput-svc   ClusterIP   10.43.133.105   <none>        2345/TCP   13m
service/pong-svc        ClusterIP   10.43.145.179   <none>        1234/TCP   13m

NAME                                              CLASS    HOSTS   ADDRESS                            PORTS   AGE
ingress.networking.k8s.io/anttitmh-pong-ingress   <none>   *       172.31.0.3,172.31.0.4,172.31.0.5   80      13m
VAAL1460:exercise1.09 heinoa$ 

http://localhost:8081/pingpong returns pong0,pong1....
