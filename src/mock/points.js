const mockPoints = [
  {
    "id": "469a97fd-445b-4fcf-9744-8343c157f4c9",
    "basePrice": 6508,
    "dateForm": "2024-09-22T06:22:09.631Z",
    "dateTo": "2024-09-23T14:29:09.631Z",
    "destination": "3dfc2940-f5f1-4426-b3d3-7af1ae3b2b27",
    "isFavorite": true,
    "offers": [],
    "type": "sightseeing"
  },
  {
    "id": "d7c6dcb4-fdeb-4033-bf0e-25861b1422f7",
    "basePrice": 8967,
    "dateForm": "2024-09-25T12:03:09.631Z",
    "dateTo": "2024-09-26T16:37:09.631Z",
    "destination": "e11480ff-4230-4901-8820-d9072a6810df",
    "isFavorite": true,
    "offers": [],
    "type": "ship"
  },
  {
    "id": "b4a1f115-0851-4874-9810-7ce0d4907a80",
    "basePrice": 5216,
    "dateForm": "2024-09-27T00:46:09.631Z",
    "dateTo": "2024-09-28T11:21:09.631Z",
    "destination": "e11480ff-4230-4901-8820-d9072a6810df",
    "isFavorite": true,
    "offers": [
      "b135be61-a677-4480-ace2-81c4f3cf5b22",
      "7fd7027f-9f08-4537-ada0-f0c8919e371f",
      "998ec5ae-ae01-4544-a15e-e8f017246b2b"
    ],
    "type": "flight"
  },
  {
    "id": "fffa5f93-32aa-4d59-a269-2b458fd23592",
    "basePrice": 8733,
    "dateForm": "2024-09-29T23:45:09.631Z",
    "dateTo": "2024-10-01T16:48:09.631Z",
    "destination": "9f756503-6825-4379-8b20-ee0be0308a98",
    "isFavorite": true,
    "offers": [
      "478a85db-8e85-4cbd-b6d7-69795ba3d69f"
    ],
    "type": "restaurant"
  },
  {
    "id": "abf47f0f-cc1d-43e0-9ad8-e76cf4b5253e",
    "basePrice": 2425,
    "dateForm": "2024-10-03T09:06:09.631Z",
    "dateTo": "2024-10-05T08:55:09.631Z",
    "destination": "e5df35f7-75f6-4032-ade3-f185285c8b98",
    "isFavorite": false,
    "offers": [
      "bb172e82-e2f3-4893-9115-e92f74dedb86",
      "02c4dd00-d96d-4b0a-915b-ef7cf4ee3daa",
      "746e1387-7d3b-428a-9407-963229835f00",
      "e8f78e00-3086-4a4b-b9a0-c299da97da88"
    ],
    "type": "ship"
  },
  {
    "id": "e7c74d0c-6f69-471e-bdd3-71fc9c8a5b32",
    "basePrice": 1854,
    "dateForm": "2024-10-07T09:12:09.631Z",
    "dateTo": "2024-10-07T17:51:09.631Z",
    "destination": "8c9efd3b-827f-4a3f-9798-7224627f3849",
    "isFavorite": false,
    "offers": [],
    "type": "train"
  },
  {
    "id": "0ab1573a-0bb2-4e0f-ad22-1f083f3d0336",
    "basePrice": 4356,
    "dateForm": "2024-10-08T12:55:09.631Z",
    "dateTo": "2024-10-09T00:02:09.631Z",
    "destination": "8c9efd3b-827f-4a3f-9798-7224627f3849",
    "isFavorite": true,
    "offers": [
      "e601554f-1423-46c3-9af2-1baf6a49712c",
      "023ea4cc-f73d-4adc-ae85-8d366d96ea26"
    ],
    "type": "train"
  },
  {
    "id": "e7a541a3-e587-4426-89be-2a0667ed3b77",
    "basePrice": 1230,
    "dateForm": "2024-10-09T06:17:09.631Z",
    "dateTo": "2024-10-10T16:44:09.631Z",
    "destination": "e11480ff-4230-4901-8820-d9072a6810df",
    "isFavorite": false,
    "offers": [],
    "type": "sightseeing"
  },
  {
    "id": "07005392-6a44-4c5c-b2bf-918869c344a2",
    "basePrice": 8693,
    "dateForm": "2024-10-12T11:15:09.631Z",
    "dateTo": "2024-10-12T21:31:09.631Z",
    "destination": "1fb0a340-cfb9-47df-b78c-36ba0222af20",
    "isFavorite": true,
    "offers": [
      "746e1387-7d3b-428a-9407-963229835f00",
      "e8f78e00-3086-4a4b-b9a0-c299da97da88"
    ],
    "type": "ship"
  },
  {
    "id": "582c1702-21d9-4a13-9d14-027e1c3cf42d",
    "basePrice": 1421,
    "dateForm": "2024-10-14T05:25:09.631Z",
    "dateTo": "2024-10-14T18:46:09.631Z",
    "destination": "e5df35f7-75f6-4032-ade3-f185285c8b98",
    "isFavorite": false,
    "offers": [
      "d1d08766-8af4-407d-9143-5300b0f6f0b8",
      "a83565d2-736b-4acd-b9ec-2fe20a5aee94",
      "c37a939e-eb8a-4093-90e0-2878c1710e69",
      "30a35c2e-02d1-4cdf-b1af-9f407c07e6ea",
      "d4a92539-97b1-449d-8017-98bb2715e2fc"
    ],
    "type": "check-in"
  },
  {
    "id": "0972d6ee-fbad-4a73-b926-5c88da2c1bd2",
    "basePrice": 8877,
    "dateForm": "2024-10-16T13:16:09.631Z",
    "dateTo": "2024-10-18T02:59:09.631Z",
    "destination": "11aea24a-4ad9-4d44-b07f-3e90dcd8bcb5",
    "isFavorite": true,
    "offers": [],
    "type": "flight"
  },
  {
    "id": "e0b49b9b-c8af-4bf0-9432-4bcaee8579d2",
    "basePrice": 2729,
    "dateForm": "2024-10-19T17:48:09.631Z",
    "dateTo": "2024-10-21T03:58:09.631Z",
    "destination": "1c70deaf-087d-43ff-896b-3cc33d875d3f",
    "isFavorite": true,
    "offers": [
      "7fd7027f-9f08-4537-ada0-f0c8919e371f",
      "998ec5ae-ae01-4544-a15e-e8f017246b2b"
    ],
    "type": "flight"
  },
  {
    "id": "7be46d63-457f-4976-b652-374a2d5c52ef",
    "basePrice": 1212,
    "dateForm": "2024-10-22T04:17:09.631Z",
    "dateTo": "2024-10-22T12:25:09.631Z",
    "destination": "1c70deaf-087d-43ff-896b-3cc33d875d3f",
    "isFavorite": false,
    "offers": [
      "e601554f-1423-46c3-9af2-1baf6a49712c",
      "023ea4cc-f73d-4adc-ae85-8d366d96ea26"
    ],
    "type": "train"
  },
  {
    "id": "76464d49-23a7-43e2-a521-9e26e2ba93bb",
    "basePrice": 7192,
    "dateForm": "2024-10-23T13:37:09.631Z",
    "dateTo": "2024-10-25T12:03:09.631Z",
    "destination": "3dfc2940-f5f1-4426-b3d3-7af1ae3b2b27",
    "isFavorite": false,
    "offers": [
      "793122d1-9fa6-4f1f-8f13-770aed410698"
    ],
    "type": "bus"
  },
  {
    "id": "ee752b11-74f9-4577-b6c6-d1ee21e42be3",
    "basePrice": 5419,
    "dateForm": "2024-10-27T09:36:09.631Z",
    "dateTo": "2024-10-27T16:26:09.631Z",
    "destination": "dc91284f-c5a0-48f3-ac54-7ff27dbea146",
    "isFavorite": false,
    "offers": [
      "478a85db-8e85-4cbd-b6d7-69795ba3d69f"
    ],
    "type": "restaurant"
  },
  {
    "id": "2714e16d-7c3d-4a3e-b980-4cdba96d1d89",
    "basePrice": 6397,
    "dateForm": "2024-10-28T17:19:09.631Z",
    "dateTo": "2024-10-29T18:04:09.631Z",
    "destination": "3dfc2940-f5f1-4426-b3d3-7af1ae3b2b27",
    "isFavorite": false,
    "offers": [],
    "type": "bus"
  },
  {
    "id": "1fd5e994-b52c-4d65-b0c3-3fe2d2b3c60b",
    "basePrice": 3137,
    "dateForm": "2024-10-31T01:30:09.631Z",
    "dateTo": "2024-11-01T15:03:09.631Z",
    "destination": "e5df35f7-75f6-4032-ade3-f185285c8b98",
    "isFavorite": false,
    "offers": [
      "bf63e5fc-e7d3-4ea3-8bef-83ab233a1952",
      "e601554f-1423-46c3-9af2-1baf6a49712c",
      "023ea4cc-f73d-4adc-ae85-8d366d96ea26"
    ],
    "type": "train"
  },
  {
    "id": "d3226b16-e77f-4230-8ddb-b37740829eeb",
    "basePrice": 2685,
    "dateForm": "2024-11-02T09:44:09.631Z",
    "dateTo": "2024-11-03T11:13:09.631Z",
    "destination": "1fb0a340-cfb9-47df-b78c-36ba0222af20",
    "isFavorite": false,
    "offers": [
      "3ac32a9b-530c-49f3-b096-34aaa3f8e027",
      "29638338-efe9-4a6f-bb97-8081135f23fa",
      "cbbe28bc-c078-4a36-985f-e1df60fcc737",
      "b135be61-a677-4480-ace2-81c4f3cf5b22",
      "7fd7027f-9f08-4537-ada0-f0c8919e371f",
      "998ec5ae-ae01-4544-a15e-e8f017246b2b"
    ],
    "type": "flight"
  },
  {
    "id": "f70748a6-badf-48f0-a4a3-0fb39ee5eee0",
    "basePrice": 6349,
    "dateForm": "2024-11-03T21:28:09.631Z",
    "dateTo": "2024-11-04T03:30:09.631Z",
    "destination": "8c9efd3b-827f-4a3f-9798-7224627f3849",
    "isFavorite": true,
    "offers": [
      "3ac32a9b-530c-49f3-b096-34aaa3f8e027",
      "29638338-efe9-4a6f-bb97-8081135f23fa",
      "cbbe28bc-c078-4a36-985f-e1df60fcc737",
      "b135be61-a677-4480-ace2-81c4f3cf5b22",
      "7fd7027f-9f08-4537-ada0-f0c8919e371f",
      "998ec5ae-ae01-4544-a15e-e8f017246b2b"
    ],
    "type": "flight"
  },
  {
    "id": "f6d92b23-f4e3-407c-b71a-ec531ab7f3e0",
    "basePrice": 7107,
    "dateForm": "2024-11-05T12:31:09.631Z",
    "dateTo": "2024-11-06T14:12:09.631Z",
    "destination": "8c9efd3b-827f-4a3f-9798-7224627f3849",
    "isFavorite": true,
    "offers": [
      "023ea4cc-f73d-4adc-ae85-8d366d96ea26"
    ],
    "type": "train"
  },
  {
    "id": "edf56977-23b7-4b87-851e-283c47e02f68",
    "basePrice": 7162,
    "dateForm": "2024-11-06T21:22:09.631Z",
    "dateTo": "2024-11-07T17:17:09.631Z",
    "destination": "8c9efd3b-827f-4a3f-9798-7224627f3849",
    "isFavorite": true,
    "offers": [
      "ec89f446-59b4-426b-a434-0bc34cfb6b19"
    ],
    "type": "taxi"
  },
  {
    "id": "f1ec0ce5-bfeb-4087-ac28-2c947fe176c6",
    "basePrice": 5961,
    "dateForm": "2024-11-08T13:33:09.631Z",
    "dateTo": "2024-11-10T00:04:09.631Z",
    "destination": "9f756503-6825-4379-8b20-ee0be0308a98",
    "isFavorite": true,
    "offers": [
      "93145f0e-d482-4833-83ec-0f3aa8caca74",
      "a4a6fe9e-aed2-434f-a1e3-e09a7ddc19ac"
    ],
    "type": "drive"
  },
  {
    "id": "12fe96e0-5500-4e2d-9191-64e0c254b577",
    "basePrice": 7259,
    "dateForm": "2024-11-11T22:33:09.631Z",
    "dateTo": "2024-11-13T17:43:09.631Z",
    "destination": "dc91284f-c5a0-48f3-ac54-7ff27dbea146",
    "isFavorite": false,
    "offers": [],
    "type": "sightseeing"
  },
  {
    "id": "dc782c7e-65f0-4af1-a8fa-62671b7140dc",
    "basePrice": 5468,
    "dateForm": "2024-11-15T09:37:09.631Z",
    "dateTo": "2024-11-16T18:43:09.631Z",
    "destination": "0eee8dda-feea-4cfa-950e-0d9846d9c579",
    "isFavorite": false,
    "offers": [
      "0f75be61-e36b-41ec-b618-da2918b24be0",
      "222ea626-3959-42dc-9024-4917b343df0e",
      "cd52cfb3-8156-4ad0-a2cb-8631e94c9930",
      "ef92edd0-843e-4980-8c98-e3488673220f",
      "ec89f446-59b4-426b-a434-0bc34cfb6b19"
    ],
    "type": "taxi"
  },
  {
    "id": "7c01ff68-891f-475e-9958-ff96f6ca1963",
    "basePrice": 8214,
    "dateForm": "2024-11-17T10:42:09.631Z",
    "dateTo": "2024-11-18T05:44:09.631Z",
    "destination": "9f756503-6825-4379-8b20-ee0be0308a98",
    "isFavorite": false,
    "offers": [
      "e601554f-1423-46c3-9af2-1baf6a49712c",
      "023ea4cc-f73d-4adc-ae85-8d366d96ea26"
    ],
    "type": "train"
  }
];

export { mockPoints };
