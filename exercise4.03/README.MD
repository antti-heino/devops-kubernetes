prometheus started using helm
Query "count(kube_pod_info{namespace="prometheus", created_by_kind="StatefulSet"})"
returns 2 pods