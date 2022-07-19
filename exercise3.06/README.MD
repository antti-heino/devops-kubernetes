PROS AND CONS of DBaaS and self hosted DB

DBAAS PROS

- Usually easy to set up, templates and workflows are readily available -> lower cost
- High availability/replication is few clicks away
- Security is "built in", no need to update manually
- Logging/tracing is standard feature
- Backups are simple to take

DBAAS CONS
- Usually not feature rich or at least lack features when compared to self hosted version
- If low level debugging is needed one needs to rely on service provider
- Surprise costs from additional data/necessary resources

Self hosted DB PROS
- Ops costs are predictable and can be decreased by paying upfront
- Administrator can access and control everything
- No vendor lock

Self hosted DB CONS
- Depending on DB setup, can be difficult to set up. Rights, access etc.
- Taking and especially transferring backups can be nightmare
- Manually setting up HA is difficult and costs are unpredictable
- Managing access rights in production use is time consuming and often cause security issues
