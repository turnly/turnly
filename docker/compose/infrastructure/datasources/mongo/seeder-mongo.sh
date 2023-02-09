#!/bin/bash

set -e

mongo <<EOF
print("Seeding turnly databases...");

const locations = [
  {
    _id: "loc_xdeJQM9lFV5GdofxAAMYI",
    name: "Financial Center & Walk-Up ATM",
    address: "1293 Broadway, New York, NY 10001 US",
    country: "USA",
    status: "complete",
    coordinates: {
      type: "Point",
      coordinates: [-73.9894816, 40.7479709],
    },
    stopServingBeforeInMinutes: 59,
    organizationId: "org_zyUlCzVfPD6pKQfI_OdkN",
  },
  {
    _id: "loc_BGbNQAAlThd0JgiuxxHcW",
    name: "800 Sixth Avenue",
    address: "800 Avenue of the Americas, New York, NY 10001",
    country: "USA",
    status: "complete",
    coordinates: {
      type: "Point",
      coordinates: [-73.9894816, 40.7479709],
    },
    stopServingBeforeInMinutes: 37,
    organizationId: "org_zyUlCzVfPD6pKQfI_OdkN",
  },
  {
    _id: "loc_c59SCrDbdfWb1acH0WMS_",
    name: "One Penn Plaza",
    address: "1 Penn Plz FRNT 7, New York, NY 10119",
    country: "USA",
    status: "complete",
    coordinates: {
      type: "Point",
      coordinates: [-73.9894816, 40.7479709],
    },
    stopServingBeforeInMinutes: 81,
    organizationId: "org_zyUlCzVfPD6pKQfI_OdkN",
  },
];

use branch_management_db

for (const location of locations) {
  db.locations.insert(location);
}

const services = [
  {
    _id: "srv_YKLAAgZaysHLsKBmphIwO",
    name: "Customer Service",
    description: "",
    organizationId: "org_zyUlCzVfPD6pKQfI_OdkN",
    locationId: "loc_xdeJQM9lFV5GdofxAAMYI",
  },
  {
    _id: "srv_1-ZZpLH4UaGjB1viTehGE",
    name: "Cash transactions",
    description: "",
    organizationId: "org_zyUlCzVfPD6pKQfI_OdkN",
    locationId: "loc_xdeJQM9lFV5GdofxAAMYI",
  },
  {
    _id: "srv_ZlZZ9NhFGwL9Q-jSGrCaj",
    name: "Financial Center & ATM",
    description: "Ramiro Kertzmann",
    organizationId: "org_zyUlCzVfPD6pKQfI_OdkN",
    locationId: "loc_c59SCrDbdfWb1acH0WMS_",
  },
  {
    _id: "srv_x6NM0wohyDLW5L53Wm7pr",
    name: "Claim",
    description: "",
    organizationId: "org_zyUlCzVfPD6pKQfI_OdkN",
    locationId: "loc_7nVmGcFicLfetXcBVZj3v",
  },
];

for (const service of services) {
  db.services.insert(service);
}

const fields = [
  {
    _id: "field_v5lCM7bqxJ9plfArYSfsj",
    label: "Social Security",
    description: "",
    placeholder: "000 - 00 - 0000",
    type: "text",
    entityType: "customer",
    isRequired: true,
    organizationId: "org_zyUlCzVfPD6pKQfI_OdkN",
    extra: [
      {
        key: "format",
        value: "### - ## - ####",
      },
      {
        key: "serviceId",
        value: "srv_1-ZZpLH4UaGjB1viTehGE",
      },
    ],
  },
  {
    _id: "field_DgWqWI-lmUea82zbNHQYr",
    label: "Identity Card",
    description: "",
    placeholder: "402-8589528-5",
    type: "national_identity_card",
    entityType: "customer",
    isRequired: true,
    organizationId: "org_zyUlCzVfPD6pKQfI_OdkN",
    extra: [
      {
        key: "format",
        value: "###-#######-#",
      },
      {
        key: "serviceId",
        value: "srv_1-ZZpLH4UaGjB1viTehGE",
      },
    ],
  },
  {
    _id: "field_deDwyEMhyXThnwXfs227z",
    label: "Claim Kind",
    description: "",
    placeholder: "Select a claim",
    type: "drop_down",
    entityType: "customer",
    isRequired: false,
    organizationId: "org_zyUlCzVfPD6pKQfI_OdkN",
    extra: [
      {
        key: "serviceId",
        value: "srv_YKLAAgZaysHLsKBmphIwO",
      },
      {
        key: "options",
        value:
          '["Claim:claim","P. Request:p_request","Custom Value:custom_value"]',
      },
    ],
  },
  {
    _id: "field_fvDGkehk-6yCUWjV5zQXS",
    label: "The last 4 digits of card",
    description: "",
    placeholder: "0000",
    type: "text",
    entityType: "customer",
    isRequired: true,
    organizationId: "org_zyUlCzVfPD6pKQfI_OdkN",
    extra: [
      {
        key: "serviceId",
        value: "srv_ZlZZ9NhFGwL9Q-jSGrCaj",
      },
    ],
  },
];

use business_data_fields_db

for (const field of fields) {
  db.fields.insert(field);
}

print("Seeding turnly databases... DONE!");
EOF
