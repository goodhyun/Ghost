require('/home/editoy/src/Ghost/core/server/lib/security/password')

  .hash(process.argv[2])

  .then(console.log);
