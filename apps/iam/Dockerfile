##
## Docker image for Identity & Access Management
##

ARG KC_VERSION=20.0.1

FROM quay.io/keycloak/keycloak:${KC_VERSION} as builder

ENV PROXY_ADDRESS_FORWARDING=true \
    # Enable health and metrics support
    KC_METRICS_ENABLED=true \
    KC_HEALTH_ENABLED=true \
    # Configure a database vendor
    KC_DB=postgres \
    KC_FEATURES=authorization,account2,account-api,client-policies,impersonation,token-exchange,upload-scripts

WORKDIR /opt/keycloak
RUN /opt/keycloak/bin/kc.sh build

FROM quay.io/keycloak/keycloak:${KC_VERSION} as runner
COPY --from=builder /opt/keycloak/ /opt/keycloak/

EXPOSE 8080

ENTRYPOINT ["/opt/keycloak/bin/kc.sh"]
