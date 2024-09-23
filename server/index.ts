// //TODO: connect to avion postgresql database after initializing server
// const fs = require('fs');
// const pg = require('pg');
// const url = require('url');

// const config = {
//     user: "avnadmin",
//     password: "AVNS__vF7WrIA05O4kYY1nCd",
//     host: "pg-15bb6cdf-taino-language-app.c.aivencloud.com",
//     port: 14364,
//     database: "defaultdb",
//     ssl: {
//         rejectUnauthorized: true,
//         ca: `-----BEGIN CERTIFICATE-----
// MIIEQTCCAqmgAwIBAgIUaRm82io7VAroH3Tkish5RH+N/y4wDQYJKoZIhvcNAQEM
// BQAwOjE4MDYGA1UEAwwvNTY5M2NjMzAtM2RlOC00MjY2LTkyNjEtNzZlMmRlOTY1
// NGNjIFByb2plY3QgQ0EwHhcNMjQwOTIzMDA1NTQ3WhcNMzQwOTIxMDA1NTQ3WjA6
// MTgwNgYDVQQDDC81NjkzY2MzMC0zZGU4LTQyNjYtOTI2MS03NmUyZGU5NjU0Y2Mg
// UHJvamVjdCBDQTCCAaIwDQYJKoZIhvcNAQEBBQADggGPADCCAYoCggGBALmE9dcn
// 35m8HSaCTOHaB1E6DAXRew4YvLq3JOyMO+Cefe0x56emqaqbAK0gNZtWxU2OcKQl
// nUYhau1SZA4Ov7kknm2pjl+rLaFm3W7O60Tbz0pqkRS6dklyHDvbQtfmSxsMFtWj
// LMZpA95WNH2HtKKU1/hDdU3hDAcvav0pKW9tYGvbSQx+H2jUChL+xKAK0/RJzLVX
// 7/hWvsS+TknQ0oHMaezuq0yqyeG3Mdj1VY6ILOeX6Ka17syXzEboZIvDIgAH6JgC
// cSZfRFqbDJV8ZgLWQcyhFKxFnhR0Ckt6etMZrdPZ0h5pG0xlrovdahC9hlbosmvZ
// l6WE4yVHmVtY61EoXMWs/jwxdPrl6lYwYFf90fc+l+znJODChzLAADag5dM3GDbE
// Oh1iAHVO8dPqVeO95Qg1EWe8BzrhuQs3rGEvU/jj3SFruZqhxxIPIs9l6d/oPAU3
// nX7B7yIEcTt6WOddG9WZzkZjdwPh51/rwJ8fITNIxjfh+nFjjFMpbQ7VTwIDAQAB
// oz8wPTAdBgNVHQ4EFgQUdCBwPsgSZwsjsTAJHbRXmRBNS8MwDwYDVR0TBAgwBgEB
// /wIBADALBgNVHQ8EBAMCAQYwDQYJKoZIhvcNAQEMBQADggGBAJ4w2tPYgTlvJM4n
// tGzwXfF4SY9oNGx/VTdcOYcCc5TQ86tGuhTaBPYnHYTrpFCFs7dOyAExC2atxqLF
// eJ+i2glt9TdWRbDAZaeCfMaElUgsjYtZBmiCc6FG5fgsRIIxpfMFHzU212Jzv4QH
// YF7ZJ65obCkMGzifQnE7O2E68Ybjzb0Y3Xdotjveqx1d7m3tPBR4YIT3O2sQLBGy
// wzRMX/JCVxLVtthSBM+x+w75RBFMNA4AO84CO7LRedY8ujtuogTQ0fvsRfcWNGpG
// r51PH0jjmB5lhTFWLaXZG4SQYVNFdteBPOscd/llXg6PNoINMTMHdC70bmrGCmlz
// ZZtgio7VH2tuvSEKo+TDwPoJZ8iNjQvC/8Rt3V/EZeXDJbsboSntNEz9hlyPfqw8
// Jp2aFIr96z4FJN/sm2T4lOH5uYKJ3j8/FiR5iGQ+PGdhU1ZBjEc48PN/93NcieZN
// axIaJKsUnFnXoRapMllLiQSBvDKvzV8dyAl+qHGpMr7KCLIJEw==
// -----END CERTIFICATE-----`,
//     },
// };

// const client = new pg.Client(config);
// client.connect(function (err) {
//     if (err)
//         throw err;
//     client.query("SELECT VERSION()", [], function (err, result) {
//         if (err)
//             throw err;

//         console.log(result.rows[0].version);
//         client.end(function (err) {
//             if (err)
//                 throw err;
//         });
//     });
// });

// TODO: npm install pg --save
// TODO: npm install @types/pg --save-dev
// TODO: node index.ts