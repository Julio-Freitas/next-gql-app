import { styled } from "../../../stitches.config";

export const ContainerInput = styled('div', {
    display: "flex",
    flexDirection: "column",
    maxWidth: "100%",
    width: "100%",
    justifyContent: "center",

});

export const Input = styled('input', {
    transition: "border-color .15s ease-in-out, box-shadow .15s ease-in-out",
    borderRadius: ".25rem",
    border: "1px solid #ced4da",
    padding: "5px",
    outline: 'none',
    textIndent: 5,
    '&:focus': {
        borderColor: "#7952b3",
        boxShadow: "0 0 0 3px rgb(121 82 179 / 25%)"
    },
    '&::placeholder': {
        color: "#7952b3",
    }
});

export const Label = styled('label', {
    fontSize: '18px',
    paddingBottom: '5px',
    fontWeight: 'bold',
    color: "#7952b3",
});