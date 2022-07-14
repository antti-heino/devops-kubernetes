Ingress added and service yamls are using nodeport instead of loadbalancer

Deployment is done in following order

kubectl create namespace app
kubectl apply -f manifests/secret.yaml
kubectl apply -f manifests/pg-statefulset.yaml -n app
kubectl apply -f manifests/pg-service.yaml -n app

kubectl apply -f manifests/pong-deployment.yaml -n app
kubectl apply -f manifests/pong-service.yaml -n app

kubectl apply -f manifests/ingress.yaml -n app

kubectl apply -f manifests/logoutput-service.yaml -n app
kubectl apply -f manifests/logoutput-deployment.yaml -n app
