##
## Docker image for Identity & Access Management
##

ARG IAM_VERSION=20.0.1

FROM quay.io/keycloak/keycloak:${IAM_VERSION} as builder

ARG IAM_METRICS_ENABLED=true
ARG IAM_FEATURES=authorization,account2,account-api,client-policies,impersonation,token-exchange,upload-scripts
ARG IAM_DB=postgres
ARG IAM_PROXY_FORWARDING=true

ENV KC_METRICS_ENABLED=${IAM_METRICS_ENABLED} \
    KC_FEATURES=${IAM_FEATURES} \
    KC_DB=${IAM_DB} \
    PROXY_ADDRESS_FORWARDING=${IAM_PROXY_FORWARDING}

RUN /opt/keycloak/bin/kc.sh build

FROM quay.io/keycloak/keycloak:${IAM_VERSION} as runner

COPY --from=builder /opt/keycloak/lib/quarkus/ /opt/keycloak/lib/quarkus/
WORKDIR /opt/keycloak

ENTRYPOINT ["/opt/keycloak/bin/kc.sh", "start"]
