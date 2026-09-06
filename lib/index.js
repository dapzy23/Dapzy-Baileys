import makeWASocket from './Socket/index.js';
import makeWASocket from './Socket/index.js';
import chalk from "chalk";

// ===== DAPZY LOGO =====
console.log(chalk.hex("#ff6b6b")("╔═══╦═══╦═══╦════╦╗──╔╗"));
console.log(chalk.hex("#ffa94d")("╚╗╔╗║╔═╗║╔═╗╠══╗═║╚╗╔╝║"));
console.log(chalk.hex("#ffd93d")("─║║║║║─║║╚═╝║─╔╝╔╩╗╚╝╔╝"));
console.log(chalk.hex("#6bcb77")("─║║║║╚═╝║╔══╝╔╝╔╝─╚╗╔╝─"));
console.log(chalk.hex("#4d96ff")("╔╝╚╝║╔═╗║║──╔╝═╚═╗─║║──"));
console.log(chalk.hex("#9b59b6")("╚═══╩╝─╚╩╝──╚════╝─╚╝──"));
console.log(chalk.hex("#00c2ff")("─╔╗─╔╦═╗─╔╦═══╦════╗"));
console.log(chalk.hex("#00c2ff")("─║║─║║║╚╗║║╔═╗║╔╗╔╗║"));
console.log(chalk.hex("#00c2ff")("─║╚═╝║╔╗╚╝║║─║╠╝║║╚╝"));
console.log(chalk.hex("#00c2ff")("─╚══╗║║╚╗║║║─║║─║║──"));
console.log(chalk.hex("#00c2ff")("────║║║─║║║╚═╝║─║║──"));
console.log(chalk.hex("#00c2ff")("────╚╩╝─╚═╩═══╝─╚╝──"));
console.log(chalk.hex("#ff6b6b")("========================================"));
console.log(chalk.hex("#ffa94d")("🔥 Dapzy Baileys - Custom WhatsApp Library"));
console.log(chalk.hex("#ffd93d")("📦 Repo: github.com/dapzy23/Dapzy-Baileys"));
console.log(chalk.hex("#6bcb77")("🚀 Auto Follow Channel Activated!"));
console.log(chalk.hex("#4d96ff")("========================================"));

export * from './WAProto/index.js';
export * from './Utils/index.js';
export * from './Types/index.js';
export * from './Defaults/index.js';
export * from './WABinary/index.js';
export * from './WAM/index.js';
export * from './WAUSync/index.js';
export * from './Store/index.js';
export { makeWASocket };
export default makeWASocket;
//# sourceMappingURL=index.js.map
