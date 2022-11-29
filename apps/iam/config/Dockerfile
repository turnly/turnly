FROM alpine:3.17.0

# Install required system packages
RUN apk --no-cache add curl jq

# Copy the configuration files
COPY realm.json ./

# Set permissions for the entrypoint
RUN chmod +x /setup.sh

# Run the setup script
ENTRYPOINT [ "/setup.sh" ]
