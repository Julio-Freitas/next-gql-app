import { styled } from "../../../stitches.config";

export const Pagiantion = styled("div", {
    display: "flex",
    gap: "5px",
    maxWidth: "860px",
    alignItems: "center",
    marginTop: "8px",
    padding: "10px",
    background: "#ddd"

});

export const PagiantionNumbers = styled("div", {
        display: "flex",
        alignItems: "center",
        overflowX: "hidden",
        position: "relative",
        gap: "40px"
});

export const SingleNumber = styled("div", {
    padding: "0 5px",
    cursor: "pointer",
    variants: {
        Active: {
            true: {
                color: "red",
                fontWeight: "600",
                transition:" 0.5s",
            }
        }
    }
});

export const IconPage = styled("div", {
    cursor: "pointer",
    '&::before': {
        content: "attr(data-content)"
    },
    variants: {
        Disabled: {
            true: {
                color: "#ccc",
                opacity: .9,            
                cursor: "not-allowed",
            }
        }
    }
});



