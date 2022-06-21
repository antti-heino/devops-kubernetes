VAAL1460:exercise 1.10 heinoa$ kubectl apply -f manifests/
deployment.apps/logoutput-dep created
ingress.networking.k8s.io/anttitmh-logoutput-ingress created
service/logoutput-svc created
VAAL1460:exercise 1.10 heinoa$ kubectl describe pod logoutput-dep-f9d455d74-w6k7q 
Name:         logoutput-dep-f9d455d74-w6k7q
Namespace:    default
Priority:     0
Node:         k3d-k3s-default-agent-0/192.168.48.4
Start Time:   Tue, 21 Jun 2022 17:20:14 +0300
Labels:       app=logoutput
              pod-template-hash=f9d455d74
Annotations:  <none>
Status:       Running
IP:           10.42.1.4
IPs:
  IP:           10.42.1.4
Controlled By:  ReplicaSet/logoutput-dep-f9d455d74
Containers:
  logoutput:
    Container ID:   containerd://f733c564e678d98fde5a5a0cb787ecba305b55333583d26d4bad5dacee9c15b3
    Image:          anttitmh/logoutput
    Image ID:       docker.io/anttitmh/logoutput@sha256:b277e3555f192191df6fd7d79c9295a456e799dc48a71dd8bdeb4da9f4e6e471
    Port:           <none>
    Host Port:      <none>
    State:          Running
      Started:      Tue, 21 Jun 2022 17:20:37 +0300
    Ready:          True
    Restart Count:  0
    Environment:    <none>
    Mounts:
      /usr/src/app/files from shared-storage (rw)
      /var/run/secrets/kubernetes.io/serviceaccount from kube-api-access-z7gq7 (ro)
  logoutput-reader:
    Container ID:   containerd://165f4afed3227bb90fa8245245875ecc0ac575627406a49d8746235001218f68
    Image:          anttitmh/logoutput-reader
    Image ID:       docker.io/anttitmh/logoutput-reader@sha256:0878dd5ce052175b521fc7c03b2996a8882f30bdf5a977c88eb510b42d56244f
    Port:           <none>
    Host Port:      <none>
    State:          Running
      Started:      Tue, 21 Jun 2022 17:20:44 +0300
    Ready:          True
    Restart Count:  0
    Environment:    <none>
    Mounts:
      /usr/src/app/files from shared-storage (rw)
      /var/run/secrets/kubernetes.io/serviceaccount from kube-api-access-z7gq7 (ro)

      http://localhost:8081/ replied with 1655821263584 da052e0c342b2474f2889f4859c3c35b