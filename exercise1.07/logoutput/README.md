VAAL1460:logoutput heinoa$ kubectl apply -f manifests/
deployment.apps/logoutput-dep created
ingress.networking.k8s.io/anttitmh-logoutput-ingress created
service/logoutput-svc created
VAAL1460:logoutput heinoa$ kubectl get pods
NAME                             READY   STATUS    RESTARTS   AGE
logoutput-dep-7cb748b5b7-458gt   1/1     Running   0          56s
VAAL1460:logoutput heinoa$ kubectl logs logoutput-dep-7cb748b5b7-458gt

> logoutput@1.0.0 start
> node index.js

Server listening on port:3000
1655791888071 1329da582196766e945af1d9131d77ec
1655791893073 428b88fb5cbbd0af479457b95c1cf319
1655791898078 3166985ed2abb66bf1971a3df8075784
1655791903083 1a11a2d20d1ccff2d7fdef1f19b1dded
1655791908086 ea7e0fc440a1606e2d27fd9a017f34a0
VAAL1460:logoutput heinoa$ 