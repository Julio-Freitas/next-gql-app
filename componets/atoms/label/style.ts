import { styled } from "../../../stitches.config";
export const Label =  styled('label', {
    color: "$loContrast",
    
    variants: {
        fontWeight: {
            bold: {
                fontWeight: 'bold',
                color: "red"
            }
        }
    }
})