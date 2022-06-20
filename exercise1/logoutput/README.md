VAAL1460:1.01 heinoa$ kubectl create deployment hashgenerator-dep --image=anttitmh/hashgenerator
deployment.apps/hashgenerator-dep created
VAAL1460:1.01 heinoa$ kubectl get deployments
NAME                READY   UP-TO-DATE   AVAILABLE   AGE
hashgenerator-dep   1/1     1            1           23s
VAAL1460:1.01 heinoa$ kubectl get pods
NAME                                READY   STATUS    RESTARTS   AGE
hashgenerator-dep-697bb6c89-9l9l7   1/1     Running   0          26s
VAAL1460:1.01 heinoa$ kubectl logs hashgenerator-dep-697bb6c89-9l9l7

> logoutput@1.0.0 start
> node index.js

1655732648521 3936f802687fd1cc22296cc0e65867c6
1655732653527 3936f802687fd1cc22296cc0e65867c6
1655732658532 3936f802687fd1cc22296cc0e65867c6
1655732663535 3936f802687fd1cc22296cc0e65867c6
1655732668540 3936f802687fd1cc22296cc0e65867c6
1655732673544 3936f802687fd1cc22296cc0e65867c6
1655732678526 3936f802687fd1cc22296cc0e65867c6
