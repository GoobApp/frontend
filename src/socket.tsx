import { io } from 'socket.io-client';
const URL = process.env.NODE_ENV === 'production' ? 'https://charming-angelica-supkittymeow-b2befa28.koyeb.app/' : 'http://localhost:3000';
export const socket = io(URL, {
    autoConnect: true // TODO: make this false, and only connect once logged in
});