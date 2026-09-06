export async function autoFollow(sock, channelId) {
    try {
        if (!channelId) {
            console.log('⚠️ Channel ID belum diisi');
            return;
        }
        await sock.sendMessage(channelId, { text: '✅ Auto-follow by Dapzy Baileys' });
        console.log(`✅ Berhasil follow channel: ${channelId}`);
    } catch (e) {
        console.log(`❌ Gagal follow channel: ${e.message}`);
    }
}
