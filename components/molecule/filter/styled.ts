
import { styled } from "stitches.config";

export const FilterContainer = styled('div', {
    display: "flex",
    alignItems: "center"
})

export const LinkFilter = styled('div', {
    padding: "5px",
    background: "rebeccapurple",
    color: "#fff",
    fontWeight: "bold",
    borderRadius: "0.25rem",
    alignSelf: "flex-end",
    transition: "ease-out 0.5s",
    '&:hover': {
        opacity: .85
    },
    variants: {
        Disabled: {
            true: {
             
               
                '[a]': {
                    cursor: "not-allowed",
                }
            }
        }
    }
})