#!/bin/bash

set -e

mongo <<EOF
print("Seeding turnly databases...");

const orgs = [{
    id: 'org_zyUlCzVfPD6pKQfI_OdkN',
    name: 'Alicia Weissnat',
    status: 'active',
    subdomain: 'org-test'
  },
  {
    id: 'org_VTTHK6J7ZLgtWiL-FLLWb',
    name: 'Antoinette Murazik',
    status: 'active',
    subdomain: 'org-dev'
  }]

use business_owners_db

for (const organization of orgs){
  db.organizations.insert(organization)
}

const ints = [{
    id: 'int_UzUldqvxRo3LOQGn-Rzyq',
    name: 'Casey Bashirian',
    status: 'active',
    origins: [ 'Clyde Feeney', 'Eula Konopelski' ],
    organizationId: 'org_zyUlCzVfPD6pKQfI_OdkN'
  },
  {
    id: 'int_Qs3LibQxTFCxHSbTSEuiO',
    name: 'Jonathon Brown',
    status: 'active',
    origins: [ 'Seth Bartell', 'Jeremiah Fahey' ],
    organizationId: 'org_zyUlCzVfPD6pKQfI_OdkN'
    },
  {
    id: 'int_DZJTTV-rXn2GGWaXmF2TI',
    name: 'Mae Casper',
    status: 'active',
    origins: [ 'Cedric Harber PhD', 'Clifton Baumbach' ],
    organizationId: 'org_VTTHK6J7ZLgtWiL-FLLWb'
  },
  {
    id: 'int_y3iqogwpsHbSo4zRWZVGu',
    name: 'Domingo Beahan',
    status: 'active',
    origins: [ 'Dianna Hessel', 'Lynne Treutel' ],
    organizationId: 'org_VTTHK6J7ZLgtWiL-FLLWb'
  }]

use addons_db

for(const integration of ints){
  db.integrations.insert(integration)
}

const locs = [{
        id: 'loc_xdeJQM9lFV5GdofxAAMYI',
        name: 'Mrs. Manuel Bergnaum',
        address: 'Direct',
        country: 'Jeremy Rowe',
        coordinates: { lat: 51.1742, lng: 135.5222 },
        stopServingBeforeInMinutes: 59,
        organizationId: 'org_zyUlCzVfPD6pKQfI_OdkN'
      },
       {
        id: 'loc_BGbNQAAlThd0JgiuxxHcW',
        name: 'Jeanette Jerde',
        address: 'Keyboard',
        country: 'Ruth Nicolas',
        coordinates: { lat: -75.2637, lng: 2.5855 },
        stopServingBeforeInMinutes: 37,
        organizationId: 'org_zyUlCzVfPD6pKQfI_OdkN'
      },
       {
        id: 'loc_c59SCrDbdfWb1acH0WMS_',
        name: 'Sergio Pagac',
        address: 'synthesizing',
        country: 'Tommy Kuvalis',
        coordinates: { lat: -74.9936, lng: -12.0164 },
        stopServingBeforeInMinutes: 81,
        organizationId: 'org_VTTHK6J7ZLgtWiL-FLLWb'
      },
       {
        id: 'loc_7nVmGcFicLfetXcBVZj3v',
        name: 'Esther Bashirian',
        address: 'Florida',
        country: 'Ricky Graham',
        coordinates: { lat: -54.9725, lng: -146.5004 },
        stopServingBeforeInMinutes: 14,
        organizationId: 'org_VTTHK6J7ZLgtWiL-FLLWb'
      },
       {
        id: 'loc_1IKE-yUnN7B5aGqo3FOUE',
        name: 'Elias Haag MD',
        address: 'Dollar',
        country: 'Rochelle Lockman',
        coordinates: { lat: 77.6385, lng: -33.8762 },
        stopServingBeforeInMinutes: 87,
        organizationId: 'org_VTTHK6J7ZLgtWiL-FLLWb'
      }
]

use assistance_centers_db

for(const location of locs){
  db.locations.insert(location)
}

const servs = [{
        id: 'srv_YKLAAgZaysHLsKBmphIwO',
        name: 'Jose Hilpert',
        description: 'Mrs. Jessie Ryan',
        organizationId: 'org_zyUlCzVfPD6pKQfI_OdkN',
        locationId: 'loc_xdeJQM9lFV5GdofxAAMYI'
      },
      {
        id: 'srv_1-ZZpLH4UaGjB1viTehGE',
        name: 'Joyce Considine',
        description: 'Forrest Padberg',
        organizationId: 'org_zyUlCzVfPD6pKQfI_OdkN',
        locationId: 'loc_xdeJQM9lFV5GdofxAAMYI',
      },
      {
        id: 'srv_ZlZZ9NhFGwL9Q-jSGrCaj',
        name: 'Perry Kub',
        description: 'Ramiro Kertzmann',
        organizationId: 'org_VTTHK6J7ZLgtWiL-FLLWb',
        locationId: 'loc_c59SCrDbdfWb1acH0WMS_'
      },
      {
        id: 'srv_x6NM0wohyDLW5L53Wm7pr',
        name: 'Dora Walker',
        description: 'Edmund Fritsch',
        organizationId: 'org_VTTHK6J7ZLgtWiL-FLLWb',
        locationId: 'loc_7nVmGcFicLfetXcBVZj3v'
      },
      {
        id: 'srv_OYcbQ4pVxG_yt-kZI-vR7',
        name: 'Gustavo Barton',
        description: 'Edmund Breitenberg',
        organizationId: 'org_VTTHK6J7ZLgtWiL-FLLWb',
        locationId: 'loc_1IKE-yUnN7B5aGqo3FOUE'
      }
]

for(const service of servs){
  db.services.insert(service)
}

const flds = [{
        id: 'field_v5lCM7bqxJ9plfArYSfsj',
        label: 'Miss Alfredo Casper',
        description: 'Perferendis consectetur nihil sit id. Perspiciatis quaerat ipsam. Qui aut dignissimos.',
        type: 'email',
        entityType: 'azure',
        isRequired: false,
        organizationId: 'org_VTTHK6J7ZLgtWiL-FLLWb',
        processors: [],
        extra: []
      },
      {
        id: 'field_DgWqWI-lmUea82zbNHQYr',
        label: 'Glenda Smith',
        description: 'Asperiores beatae quos. Accusantium magni eum ullam esse aut nisi rem eum est.',
        type: 'email',
        entityType: 'Baby',
        isRequired: false,
        organizationId: 'org_VTTHK6J7ZLgtWiL-FLLWb',
        processors: [],
        extra: []
      },
      {
        id: 'field_deDwyEMhyXThnwXfs227z',
        label: 'Ricardo Klein',
        description: 'Facilis omnis sed.',
        type: 'email',
        entityType: 'Handcrafted',
        isRequired: true,
        organizationId: 'org_zyUlCzVfPD6pKQfI_OdkN',
        processors: [],
        extra: []
      },
      {
        id: 'field_fvDGkehk-6yCUWjV5zQXS',
        label: 'Ms. Leonard Rodriguez',
        description: 'Ut debitis dolorum architecto possimus aut delectus maiores delectus minus.',
        type: 'email',
        entityType: 'generating',
        isRequired: false,
        organizationId: 'org_zyUlCzVfPD6pKQfI_OdkN',
        processors: [],
        extra: []
      }
]

use custom_fields_db

for(const field of flds){
  db.fields.insert(field)
}

const ans = [{
        id: 'answer_wWKBkLi7ATfEhZecCVXSs',
        value: 'Domingo Marvin',
        fieldId: 'field_v5lCM7bqxJ9plfArYSfsj',
        entityId: 'fuchsia',
        entityType: 'Gourde',
        organizationId: 'org_VTTHK6J7ZLgtWiL-FLLWb',
        extra: []
      },
      {
        id: 'answer_yQYm_cfgFQG3YxGWJMtfm',
        value: 'Miss Alfredo Casper',
        fieldId: 'field_DgWqWI-lmUea82zbNHQYr',
        entityId: 'Chicken',
        entityType: 'Shoes',
        organizationId: 'org_VTTHK6J7ZLgtWiL-FLLWb',
        extra: []
      },
      {
        id: 'answer_2iuun2WrLSgxfnVh1lgVX',
        value: 'Priscilla Gerhold III',
        fieldId: 'field_deDwyEMhyXThnwXfs227z',
        entityId: 'azure',
        entityType: 'Cotton',
        organizationId: 'org_zyUlCzVfPD6pKQfI_OdkN',
        extra: []
      },
      {
        id: 'answer_wgCIoS-VCAXoy9pqt3l0v',
        value: 'Jody Ritchie',
        fieldId: 'field_fvDGkehk-6yCUWjV5zQXS',
        entityId: 'Missouri',
        entityType: 'Berkshire',
        organizationId: 'org_zyUlCzVfPD6pKQfI_OdkN',
        extra: []
      }
]

for(const answer of ans){
  db.answers.insert(answer)
}

const custs = [{
        id: 'cust_TClBaYqWnrlPtNs3cOpxF',
        name: 'Jessica Trantow',
        lastname: 'Dale Brekke',
        email: 'Bertrand60@gmail.com',
        country: '1-638-264-2658 x467',
        phone: 'Ms. Kristin Reichert',
        hasWhatsapp: true,
        showNameSignage: true,
        organizationId: 'org_zyUlCzVfPD6pKQfI_OdkN',
        extra: []
      },
      {
        id: 'cust_LfcNUKK6X_zhIxqDO3Sxz',
        name: 'Greg Kunze',
        lastname: 'Henrietta Wintheiser',
        email: 'Rosalia41@hotmail.com',
        country: '709.304.0257',
        phone: 'Virgil Carter',
        hasWhatsapp: true,
        showNameSignage: true,
        organizationId: 'org_zyUlCzVfPD6pKQfI_OdkN',
        extra: []
      },
      {
        id: 'cust_NDp4yydxeXwRoWcDpgGiV',
        name: 'Ivan Heaney',
        lastname: 'Tanya Green',
        email: 'Shany.Luettgen58@gmail.com',
        country: '1-544-610-1484',
        phone: 'Nathaniel Zieme',
        hasWhatsapp: true,
        showNameSignage: true,
        organizationId: 'org_zyUlCzVfPD6pKQfI_OdkN',
        extra: []
      },
      {
        id: 'cust_48nYKMXoGD_Z8waFZXEMv',
        name: 'Marcia Bosco',
        lastname: 'Rhonda Frami',
        email: 'Kurt21@yahoo.com',
        country: '1-783-260-4975 x5002',
        phone: 'Randolph Considine',
        hasWhatsapp: true,
        showNameSignage: true,
        organizationId: 'org_zyUlCzVfPD6pKQfI_OdkN',
        extra: []
      },
      {
        id: 'cust_W6eULbvcWFTsrEYDdRoMP',
        name: 'Elizabeth Huel',
        lastname: 'Dave Haley',
        email: 'Sarina_Lang13@gmail.com',
        country: '276.394.1818 x46975',
        phone: 'Rachael Blick',
        hasWhatsapp: true,
        showNameSignage: true,
        organizationId: 'org_zyUlCzVfPD6pKQfI_OdkN',
        extra: []
      },
      {
        id: 'cust_F5QbHv-41YunvlWkF5w70',
        name: 'Kari Kautzer III',
        lastname: 'Rita Turcotte',
        email: 'Casimer98@hotmail.com',
        country: '463-659-0724',
        phone: 'Ricky Heidenreich',
        hasWhatsapp: true,
        showNameSignage: true,
        organizationId: 'org_VTTHK6J7ZLgtWiL-FLLWb',
        extra: []
      },
      {
        id: 'cust_R2c-gQfOXP4LhPZ3kqy0x',
        name: 'Orlando Ruecker',
        lastname: 'Glen Dach',
        email: 'Mikel.Ferry34@yahoo.com',
        country: '618.977.0703 x445',
        phone: 'George Barrows',
        hasWhatsapp: true,
        showNameSignage: true,
        organizationId: 'org_VTTHK6J7ZLgtWiL-FLLWb',
        extra: []
      },
      {
        id: 'cust_Hj4yBjoJhrAmGsOb69krO',
        name: 'Shane Gibson II',
        lastname: 'Gayle Bernier',
        email: 'Zane_Swift@yahoo.com',
        country: '704-649-3557 x032',
        phone: 'Caleb Brown',
        hasWhatsapp: true,
        showNameSignage: true,
        organizationId: 'org_VTTHK6J7ZLgtWiL-FLLWb',
        extra: []
      },
      {
        id: 'cust_TTzKR2qAR_XNEC-29oBc-',
        name: 'Lucille Haag',
        lastname: 'George Ruecker',
        email: 'Berenice_Kertzmann88@yahoo.com',
        country: '(946) 265-8620',
        phone: 'Kurt Abshire',
        hasWhatsapp: true,
        showNameSignage: true,
        organizationId: 'org_VTTHK6J7ZLgtWiL-FLLWb',
        extra: []
      },
      {
        id: 'cust_AqWPfoERAt6j4G-P5nbaa',
        name: 'Vanessa Douglas',
        lastname: 'Jean Zboncak',
        email: 'Fern_Thiel41@hotmail.com',
        country: '464.620.7274 x049',
        phone: 'Rose West',
        hasWhatsapp: true,
        showNameSignage: true,
        organizationId: 'org_VTTHK6J7ZLgtWiL-FLLWb',
        extra: []
      }
]

use queuing_system_db

for(const customer of custs){
  db.customers.insert(customer)
}

const agts =[{
        id: 'agent_VEy2GqCdrElQThL5qdDt_',
        name: 'Timothy Jacobson',
        lastname: 'Emanuel Funk',
        organizationId: 'org_zyUlCzVfPD6pKQfI_OdkN',
        locationId: 'loc_xdeJQM9lFV5GdofxAAMYI',
        nick: 'Mrs. Ted Lind',
        position: 'National Directives Assistant',
        deskId: 'test_desk_rcvEHNknVmXwVDge78-nZ',
        servingFromIds: [ 'test_loc_Mvt40An8CB0_VHjZU58XJ' ],
        extra: []
      },
      {
        id: 'agent_vz7uE6Q3nwDB0C5gv1FEZ',
        name: 'Randolph Kreiger',
        lastname: 'Colleen Carter',
        organizationId: 'org_zyUlCzVfPD6pKQfI_OdkN',
        locationId: 'loc_xdeJQM9lFV5GdofxAAMYI',
        nick: 'Kristy Collier',
        position: 'Dynamic Creative Assistant',
        deskId: 'test_desk_mtsM356w6TW-qnynITR0Y',
        servingFromIds: [ 'test_loc_xRmUfohNCk9nKY-SuHXys' ],
        extra: []
      },
      {
        id: 'agent_73Pn41bFFzRWLsPOK2Yx7',
        name: 'Tracey Mueller',
        lastname: 'Toby Tremblay',
        organizationId: 'org_VTTHK6J7ZLgtWiL-FLLWb',
        locationId: 'test_loc_1didE2KK9aZuOVgQoMvZP',
        nick: 'Debbie Medhurst',
        position: 'Chief Identity Supervisor',
        deskId: 'test_desk_xP8CfeydjgAEImjtu5L0E',
        servingFromIds: [ 'test_loc_IIjnAkq9MzBhbfZ_qPZK9' ],
        extra: []
      },
      {
        id: 'agent_scVlVyxNgxxDFB5UUNL9t',
        name: 'Mr. Jessie Buckridge',
        lastname: 'Mr. Lee Kreiger',
        organizationId: 'org_VTTHK6J7ZLgtWiL-FLLWb',
        locationId: 'test_loc_XlmvtJsMibXHdbaio8Au9',
        nick: 'Miss Angelo Stracke',
        position: 'Lead Mobility Planner',
        deskId: 'test_desk_-8SHvofQqIH0zXrP-PhrW',
        servingFromIds: [ 'test_loc_UB53q_1YVvXnQzsf2bS41' ],
        extra: []
      }
]

use teams_db

for(const agent of agts){
  db.agents.insert(agent)
}

print("Seeding turnly databases... DONE!");
EOF
