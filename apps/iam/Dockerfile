##
## Docker image for Identity & Access Management
##

ARG KC_VERSION=20.0.2

FROM alpine as customizer

WORKDIR /themes

# Install required system packages
RUN apk add --virtual .stage-customizer --no-cache --update git npm curl \
    # Get the theme from github
    && git clone https://github.com/lukin/keywind.git turnly \
    && chmod -R 777 /themes \
    && curl -f https://get.pnpm.io/v6.16.js | node - add --global pnpm \
    && cd turnly && pnpm install && pnpm build \
    # Delete system packages after installation (not needed)
    && apk del .stage-customizer && rm -rf /var/cache/apk/* /tmp/* /var/tmp/*

FROM quay.io/keycloak/keycloak:${KC_VERSION} as builder

ENV PROXY_ADDRESS_FORWARDING=true \
    KC_METRICS_ENABLED=true \
    KC_HEALTH_ENABLED=true \
    KC_PROXY=edge \
    KC_FEATURES=authorization,account2,account-api,client-policies,impersonation,token-exchange,upload-scripts

WORKDIR /opt/keycloak

COPY --from=customizer --chown=keycloak:root /themes/turnly/theme /opt/keycloak/themes/
RUN /opt/keycloak/bin/kc.sh build

FROM quay.io/keycloak/keycloak:${KC_VERSION} as runner
COPY --from=builder /opt/keycloak/ /opt/keycloak/

EXPOSE 8080

ENTRYPOINT ["/opt/keycloak/bin/kc.sh"]
