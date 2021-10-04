import { styled } from '../stitches.config';

export const CardFlipContainer = styled('article', {
    maxWidth: "calc((280px + 10px) * 3)",
    display: "flex",
    flexWrap: "wrap",
    gap: "10px",
    justifyContent: "space-between",
    '@tablet': {        
        justifyContent: "center",
    },
    variants: {
        Single: {
            true: {
                maxWidth: "100%",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column"
            }
        }
    }
})
