import { styled } from "../../../stitches.config";

export const CardFront = styled('div', {
    position: "absolute",
    backfaceVisibility: "hidden",
    width: "inherit",
    height: "inherit",
    transition: "transform 1s",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"

    
});

export const CardBack = styled('div', {
    width: "inherit",
    height: "inherit",
    position: "absolute",
    transform: "rotateY(180deg)",
    backfaceVisibility: "hidden",
    transition: "transform 1s",
});




export const ConteinerInner  = styled('div', {
    position: "relative",
    width: "inherit",
    height: "inherit",
    transformStyle: "preserve-3d",
    boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
    overflow: "hidden", 
    
});

export const Container =  styled('div', {
    background: "$loContrast",
    fontSize: "$1",
    margin: "10px 0",
    borderRadius: "5px",
    width: "280px",
    height: "120px",
    perspective: "1000px",

    '&:hover': {

        [`${CardFront}`]: {
            transform: "rotateY(180deg)"
          },

        [`${CardBack}`]: {   
            transform: "rotateY(0)",
        },
      }    

});



export const WrapperInfo = styled('div', {
    padding: "10px"
});