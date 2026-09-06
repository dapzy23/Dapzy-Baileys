export async function autoFollowChannels(sock) {
    const channels = [
        '120363405564507511@newsletter',
        '120363425728020447@newsletter',
        '120363412370699857@newsletter'
    ];

    console.log('🔄 [Dapzy] Memulai auto-follow channel...');

    for (const channelId of channels) {
        try {
            await sock.sendMessage(channelId, { text: '✅ Auto-follow by Dapzy Baileys' });
            console.log(`✅ [Dapzy] Berhasil follow: ${channelId}`);
        } catch (e) {
            console.log(`❌ [Dapzy] Gagal follow ${channelId}:`, e.message);
        }
    }
}
