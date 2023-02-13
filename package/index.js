const si = require("systeminformation");
// const os = require("os");
// console.info(os.hostname());

// si.printer().then((data) => console.info(data));

// console.info(si.version());

si.graphics().then((data) => console.info(data));
// controllers[0].model

// const valueObject = {
//   cpu: "*",
//   osInfo: "platform release",
//   system: "model, manufacturer",
// };
si.graphics().then(console.info)

// si.get(valueObject).then((res) => console.info(res));

// si.getStaticData().then((res) => console.info(res));
