VAAL1460:logoutput heinoa$ kubectl apply -f manifests/deployment.yaml
deployment.apps/logoutput-dep created
VAAL1460:logoutput heinoa$ kubectl get pods
NAME                             READY   STATUS    RESTARTS   AGE
logoutput-dep-5668fcbf97-wd266   1/1     Running   0          10s
VAAL1460:logoutput heinoa$ kubectl logs logoutput-dep-5668fcbf97-wd266

> logoutput@1.0.0 start
> node index.js

1655735551567 9f64cfa78536a8223647e103318be4df
1655735556547 9f64cfa78536a8223647e103318be4df
1655735561548 9f64cfa78536a8223647e103318be4df
1655735566550 9f64cfa78536a8223647e103318be4df
1655735571551 9f64cfa78536a8223647e103318be4df
1655735576553 9f64cfa78536a8223647e103318be4df
VAAL1460:logoutput heinoa$ 
