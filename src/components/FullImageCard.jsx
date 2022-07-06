import {
    styled,
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    CardMedia
} from "@mui/material";

export const FiCard = styled(Card)({
    position: "relative"
});
export const FiCardActionArea = styled(CardActionArea)({
    position: "relative"
});
export const FiCardActions = styled(CardActions)({
    position: "relative"
});
export const FiCardContent = styled(CardContent)({
    position: "relative",
    backgroundColor: "transparent",
    top: 0,
    right: 0,
    left: 0
});
export const FiCardMedia = styled(CardMedia)({
    position: "absolute",
    top: 0,
    right: 0,
    height: "100%",
    width: "100%"
});
