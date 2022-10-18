export default class {
    public src: string;
    public resolution: string;
    /**
     * 
     * @param src 路径
     * @param resolution 媒体分辨率
     */
    constructor(src: string, resolution: string) {
        this.src = src;
        this.resolution = resolution
    }
}