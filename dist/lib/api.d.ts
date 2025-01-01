export class RealtimeAPI extends RealtimeEventHandler {
    /**
     * Create a new RealtimeAPI instance
     * @param {{url?: string, apiKey?: string, model?: string, debug?: boolean}} [settings]
     * @returns {RealtimeAPI}
     */
    constructor({ url, apiKey, model, debug }?: {
        url?: string;
        apiKey?: string;
        model?: string;
        debug?: boolean;
    });
    defaultUrl: string;
    url: string;
    apiKey: string;
    model: string;
    debug: boolean;
    ws: any;
    /**
     * Tells us whether or not the WebSocket is connected
     * @returns {boolean}
     */
    isConnected(): boolean;
    /**
     * Writes WebSocket logs to console
     * @param  {...any} args
     * @returns {true}
     */
    log(...args: any[]): true;
    /**
     * Connects to Realtime API Websocket Server
     * @param {{model?: string}} [settings]
     * @returns {Promise<true>}
     */
    connect(): Promise<true>;
    /**
     * Disconnects from Realtime API server
     * @param {WebSocket} [ws]
     * @returns {true}
     */
    disconnect(ws?: WebSocket): true;
    /**
     * Receives an event from WebSocket and dispatches as "server.{eventName}" and "server.*" events
     * @param {string} eventName
     * @param {{[key: string]: any}} event
     * @returns {true}
     */
    receive(eventName: string, event: {
        [key: string]: any;
    }): true;
    /**
     * Sends an event to WebSocket and dispatches as "client.{eventName}" and "client.*" events
     * @param {string} eventName
     * @param {{[key: string]: any}} event
     * @returns {true}
     */
    send(eventName: string, data: any): true;
}
import { RealtimeEventHandler } from './event_handler.js';
//# sourceMappingURL=api.d.ts.map