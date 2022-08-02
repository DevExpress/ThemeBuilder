/* eslint-disable @typescript-eslint/no-magic-numbers */

export const hexToRgba = (hex: string): string => {
    if(!hex || !hex.startsWith('#')) return hex;

    hex = hex.replace('#', '');

    const red = parseInt(hex.slice(0, 2), 16);
    const green = parseInt(hex.slice(2, 4), 16);
    const blue = parseInt(hex.slice(4, 6), 16);
    const alpha = (parseInt(hex.slice(6, 8) || 'ff', 16) / 255).toFixed(2);

    return `rgba(${red}, ${green}, ${blue}, ${alpha})`;
};
