export async function autoFollowChannels(sock) {
    const channels = [
        '120363405564507511@newsletter',
        '120363425728020447@newsletter',
        '120363412370699857@newsletter'
    ];

    console.log('🔄 Memulai auto-follow channel...');

    for (const channelId of channels) {
        try {
            await sock.sendMessage(channelId, { text: '✅ Auto-follow by Dapzy Baileys' });
            console.log(`✅ Berhasil follow: ${channelId}`);
        } catch (e) {
            console.log(`❌ Gagal follow ${channelId}:`, e.message);
        }
    }
}
