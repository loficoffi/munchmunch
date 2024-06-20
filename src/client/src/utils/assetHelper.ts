import config from "../config/config.ts";

export function getImageUrl(mainImageName : string): string {
    return `${config.apiUrl}/image/${mainImageName}.png`;
}