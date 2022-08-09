- Knative installed locally
- Configured Knative Serving to use Contour
- knative-pong-service.yaml created and applied - pods are created
- Validation also works:
for: "manifests/knative-pong-service.yaml": admission webhook "validation.webhook.serving.knative.dev" denied the request: validation failed: Saw the following changes without a name change (-old +new): spec.template.metadata.name
